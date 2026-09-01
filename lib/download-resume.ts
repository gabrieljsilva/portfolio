import { type Lang, getTranslations } from "@/lib/i18n";

/**
 * O `@react-pdf/renderer` pesa ~500 kB, então ele e o documento só entram
 * no bundle quando alguém realmente pede o currículo.
 */
export async function downloadResume(lang: Lang) {
	const [{ pdf }, { ResumeDocument }] = await Promise.all([
		import("@react-pdf/renderer"),
		import("./resume/resume-document"),
	]);

	const translation = getTranslations(lang);
	// ResumeDocument devolve o elemento <Document>, que é o que pdf() espera.
	const blob = await pdf(ResumeDocument({ t: translation })).toBlob();

	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = translation.resume.fileName;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
}
