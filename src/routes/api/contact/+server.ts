import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY, CONTACT_FROM, CONTACT_TO } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

function escapeHtml(value: string) {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#039;');
}

export async function POST({ request }) {
	try {
		const body = await request.json();

		const name = String(body.name ?? '').trim();
		const phone = String(body.phone ?? '').trim();
		const email = String(body.email ?? '').trim();
		const message = String(body.message ?? '').trim();

		if (!name || !phone || !email) {
			return json(
				{ success: false, message: 'Name, phone, and email are required.' },
				{ status: 400 }
			);
		}

		const safeName = escapeHtml(name);
		const safePhone = escapeHtml(phone);
		const safeEmail = escapeHtml(email);
		const safeMessage = escapeHtml(message || 'No message provided.').replaceAll('\n', '<br>');

		await resend.emails.send({
			from: CONTACT_FROM,
			to: CONTACT_TO,
			replyTo: email,
			subject: `KinderBAND Contact Form - ${name}`,
			html: `
				<h2>New KinderBAND Contact Form Submission</h2>
				<p><strong>Name:</strong> ${safeName}</p>
				<p><strong>Phone:</strong> ${safePhone}</p>
				<p><strong>Email:</strong> ${safeEmail}</p>
				<p><strong>Message:</strong></p>
				<p>${safeMessage}</p>
			`
		});

		await resend.emails.send({
			from: CONTACT_FROM,
			to: email,
			subject: 'We received your KinderBAND message',
			html: `
				<h2>Thank you for contacting KinderBAND™</h2>

				<p>Hello ${safeName},</p>

				<p>
					We received your message and someone from our team will contact you as soon as possible.
				</p>

				<p><strong>Your submitted information:</strong></p>

				<p><strong>Name:</strong> ${safeName}</p>
				<p><strong>Phone:</strong> ${safePhone}</p>
				<p><strong>Email:</strong> ${safeEmail}</p>

				<p><strong>Message:</strong></p>
				<p>${safeMessage}</p>

				<p>
					Thank you,<br>
					The KinderBAND™ Team
				</p>
			`
		});

		return json({ success: true, message: 'Message sent successfully.' });
	} catch (error) {
		console.error('Contact form error:', error);

		return json(
			{ success: false, message: 'Unable to send message. Please try again.' },
			{ status: 500 }
		);
	}
}