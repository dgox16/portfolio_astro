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
		const value =
			getNestedValue(ui[lang], key) ?? getNestedValue(ui[defaultLang], key);
		return typeof value === "string" ? value : key;
	};
}

function getNestedValue(obj: any, key: string): any {
	return key.split(".").reduce((acc, part) => {
		if (acc && typeof acc === "object" && part in acc) {
			return acc[part];
		}
		return undefined;
	}, obj);
}
