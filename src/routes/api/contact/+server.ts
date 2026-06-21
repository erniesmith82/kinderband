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

		await resend.emails.send({
			from: CONTACT_FROM,
			to: CONTACT_TO,
			replyTo: email,
			subject: `KinderBAND Contact Form - ${name}`,
			html: `
				<h2>New KinderBAND Contact Form Submission</h2>
				<p><strong>Name:</strong> ${escapeHtml(name)}</p>
				<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
				<p><strong>Email:</strong> ${escapeHtml(email)}</p>
				<p><strong>Message:</strong></p>
				<p>${escapeHtml(message || 'No message provided.').replaceAll('\n', '<br>')}</p>
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