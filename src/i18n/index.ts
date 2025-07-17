import en from "./en";
import es from "./es";

export const languages = {
	en: "English",
	es: "Español",
} as const;

export const defaultLang = "en";

export const ui = {
	en,
	es,
} as const;

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split("/");
	if (lang in ui) return lang as keyof typeof ui;
	return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: string): string {
		const [section, subkey] = key.split(".");
		const sectionObj =
			ui[lang][section as keyof (typeof ui)[typeof defaultLang]];
		const defaultSectionObj =
			ui[defaultLang][section as keyof (typeof ui)[typeof defaultLang]];

		return (
			(sectionObj && (sectionObj as any)[subkey]) ||
			(defaultSectionObj && (defaultSectionObj as any)[subkey]) ||
			key
		);
	};
}
