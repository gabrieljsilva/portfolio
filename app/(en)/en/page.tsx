import { PortfolioPage } from "@/components/portfolio-page";
import { getTranslations } from "@/lib/i18n";
import type { Metadata } from "next";

const { meta } = getTranslations("en");

export const metadata: Metadata = {
	title: meta.portfolio.title,
	description: meta.portfolio.description,
	alternates: {
		canonical: "/en",
		languages: { "pt-BR": "/", en: "/en" },
	},
};

export default function Page() {
	return <PortfolioPage lang="en" />;
}
