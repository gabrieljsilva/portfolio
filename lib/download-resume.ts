import type { Translation } from "@/constants/profile";
import { pdf } from "@react-pdf/renderer";
import { ResumePDF } from "./generate-resume";

export const downloadResume = async (translation: Translation) => {
	try {
		const blob = await pdf(ResumePDF(translation)).toBlob();
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = "Gabriel_Silva_Resume.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	} catch (error) {
		console.error("Error generating PDF:", error);
	}
};
