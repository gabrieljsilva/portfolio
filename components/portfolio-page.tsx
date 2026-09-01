import { AboutSection } from "@/components/sections/about.section";
import { ContactSection } from "@/components/sections/contact.section";
import { EducationSection } from "@/components/sections/education.section";
import { ExperienceSection } from "@/components/sections/experiences.section";
import { Footer } from "@/components/sections/footer.section";
import { HeroSection } from "@/components/sections/hero";
import { LinksSection } from "@/components/sections/links.section";
import { ProjectsSection } from "@/components/sections/projects.section";
import { SiteHeader } from "@/components/sections/site-header";
import { SkillsSection } from "@/components/sections/skill.section";
import { UntimelessSection } from "@/components/sections/untimeless.section";
import { profile } from "@/constants/profile";
import { type Lang, getTranslations } from "@/lib/i18n";

export function PortfolioPage({ lang }: { lang: Lang }) {
	const t = getTranslations(lang);
	const site = t.site;

	return (
		<div className="animate-page-in">
			<SiteHeader
				lang={lang}
				brand={profile.shortName}
				nav={site.nav}
				resumeLabel={site.resumeBtn}
				ui={t.ui}
			/>

			<main>
				<HeroSection t={site.hero} />
				<UntimelessSection t={site.untimeless} />
				<AboutSection t={site.about} />
				<ProjectsSection t={site.work} />
				<ExperienceSection t={site.experience} />
				<EducationSection t={site.education} />
				<SkillsSection t={site.skills} />
				<LinksSection t={site.links} />
				<ContactSection t={site.contact} lang={lang} />
			</main>

			<Footer t={site.footer} />
		</div>
	);
}
