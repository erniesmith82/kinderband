import { browser } from '$app/environment';
import { get, writable } from 'svelte/store';

export const supportedLocales = ['en', 'es', 'pt', 'ar', 'ht'] as const;
export type Locale = (typeof supportedLocales)[number];

export const localeNames: Record<Locale, string> = {
	en: 'English',
	es: 'Español',
	pt: 'Português',
	ar: 'العربية',
	ht: 'Kreyòl'
};

export const translations = {
	en: {
		nav: {
			about: 'About',
			conditions: 'Conditions',
			treatment: 'Treatment',
			technology: 'Technology',
			clinics: 'Clinics',
			questions: 'Questions'
		},
		conditions: {
			plagiocephaly: 'Plagiocephaly',
			brachycephaly: 'Brachycephaly',
			scaphocephaly: 'Scaphocephaly',
			torticollis: 'Torticollis'
		},
		common: {
			language: 'Language',
			menu: 'Menu',
			close: 'Close'
		},
		footer: {
			espanol: 'Español',
			clinicalStudies: 'Clinical Studies',
			resources: 'Resources',
			contact: 'Contact',
			forProfessionals: 'For Professionals'
		}
	},
	es: {
		nav: {
			about: 'Acerca de',
			conditions: 'Condiciones',
			treatment: 'Tratamiento',
			technology: 'Tecnología',
			clinics: 'Clínicas',
			questions: 'Preguntas'
		},
		conditions: {
			plagiocephaly: 'Plagiocefalia',
			brachycephaly: 'Braquicefalia',
			scaphocephaly: 'Escafocefalia',
			torticollis: 'Tortícolis'
		},
		common: {
			language: 'Idioma',
			menu: 'Menú',
			close: 'Cerrar'
		},
		footer: {
			espanol: 'Español',
			clinicalStudies: 'Estudios clínicos',
			resources: 'Recursos',
			contact: 'Contacto',
			forProfessionals: 'Para profesionales'
		}
	},
	pt: {
		nav: {
			about: 'Sobre',
			conditions: 'Condições',
			treatment: 'Tratamento',
			technology: 'Tecnologia',
			clinics: 'Clínicas',
			questions: 'Perguntas'
		},
		conditions: {
			plagiocephaly: 'Plagiocefalia',
			brachycephaly: 'Braquicefalia',
			scaphocephaly: 'Escafocefalia',
			torticollis: 'Torcicolo'
		},
		common: {
			language: 'Idioma',
			menu: 'Menu',
			close: 'Fechar'
		},
		footer: {
			espanol: 'Español',
			clinicalStudies: 'Estudos clínicos',
			resources: 'Recursos',
			contact: 'Contato',
			forProfessionals: 'Para profissionais'
		}
	},
	ar: {
		nav: {
			about: 'حول',
			conditions: 'الحالات',
			treatment: 'العلاج',
			technology: 'التقنية',
			clinics: 'العيادات',
			questions: 'الأسئلة'
		},
		conditions: {
			plagiocephaly: 'تفلطح الرأس',
			brachycephaly: 'قصر الرأس',
			scaphocephaly: 'زورقية الرأس',
			torticollis: 'الصعر'
		},
		common: {
			language: 'اللغة',
			menu: 'القائمة',
			close: 'إغلاق'
		},
		footer: {
			espanol: 'الإسبانية',
			clinicalStudies: 'الدراسات السريرية',
			resources: 'الموارد',
			contact: 'اتصل',
			forProfessionals: 'للمتخصصين'
		}
	},
	ht: {
		nav: {
			about: 'Konsènan',
			conditions: 'Kondisyon yo',
			treatment: 'Tretman',
			technology: 'Teknoloji',
			clinics: 'Klinik',
			questions: 'Kesyon'
		},
		conditions: {
			plagiocephaly: 'Plajiosefali',
			brachycephaly: 'Brakisefali',
			scaphocephaly: 'Skafosefali',
			torticollis: 'Tòtikoli'
		},
		common: {
			language: 'Lang',
			menu: 'Meni',
			close: 'Fèmen'
		},
		footer: {
			espanol: 'Panyòl',
			clinicalStudies: 'Etid klinik',
			resources: 'Resous',
			contact: 'Kontak',
			forProfessionals: 'Pou pwofesyonèl yo'
		}
	}
} as const;

export const currentLocale = writable<Locale>('en');

function normalizeBrowserLocale(raw: string): Locale {
	const value = raw.toLowerCase();

	if (value.startsWith('es')) return 'es';
	if (value.startsWith('pt')) return 'pt';
	if (value.startsWith('ar')) return 'ar';
	if (value.startsWith('ht')) return 'ht';

	return 'en';
}

function applyDocumentSettings(locale: Locale) {
	if (!browser) return;

	document.documentElement.lang = locale;
	document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
}

export function setLocale(locale: Locale) {
	currentLocale.set(locale);

	if (browser) {
		localStorage.setItem('site-locale', locale);
		applyDocumentSettings(locale);
	}
}

export function initLocale() {
	if (!browser) return;

	const saved = localStorage.getItem('site-locale') as Locale | null;

	if (saved && supportedLocales.includes(saved)) {
		currentLocale.set(saved);
		applyDocumentSettings(saved);
		return;
	}

	const detected = normalizeBrowserLocale(navigator.language);
	currentLocale.set(detected);
	localStorage.setItem('site-locale', detected);
	applyDocumentSettings(detected);
}

export function t(locale: Locale) {
	return translations[locale];
}

export function getCurrentTranslations() {
	return t(get(currentLocale));
}