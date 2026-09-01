import { LinksPage } from "@/components/links-page";
import { getTranslations } from "@/lib/i18n";
import type { Metadata } from "next";

const { meta } = getTranslations("pt-br");

export const metadata: Metadata = {
	title: meta.linktree.title,
	description: meta.linktree.description,
	alternates: {
		canonical: "/links",
		languages: { "pt-BR": "/links", en: "/en/links" },
	},
};

export default function Page() {
	return <LinksPage lang="pt-br" />;
}
