import { ResumeButton } from "@/components/resume-button";
import { DottedBackdrop } from "@/components/ui/dotted-backdrop";
import { mailtoHref, profile } from "@/constants/profile";
import type { Lang, Translation } from "@/lib/i18n";

const BLOCK_MASK =
	"radial-gradient(120% 90% at 100% 0%, #000 0%, transparent 65%)";

interface ContactSectionProps {
	t: Translation["site"]["contact"];
	lang: Lang;
}

export function ContactSection({ t, lang }: ContactSectionProps) {
	return (
		<section
			id="contact"
			className="mx-auto max-w-[1240px] px-[22px] pb-[clamp(64px,8vw,120px)] pt-[clamp(72px,9vw,140px)] nav:px-12"
		>
			<div className="relative overflow-hidden rounded-soft bg-ink p-[clamp(44px,6vw,104px)] text-bg">
				{/* Sobre fundo invertido os pontos precisam ser claros, não escuros. */}
				<DottedBackdrop
					mask={BLOCK_MASK}
					color="color-mix(in srgb, var(--color-bg) 30%, transparent)"
				/>

				<div className="relative text-[13px] opacity-70">{t.kicker}</div>

				<h2 className="mt-5 max-w-[16ch] text-[clamp(30px,4.4vw,62px)] font-semibold leading-[1.05] tracking-[-0.035em]">
					{t.title}
				</h2>

				<p className="mt-6 max-w-[52ch] text-[clamp(15px,1.3vw,18px)] leading-[1.7] opacity-75">
					{t.lead}
				</p>

				<div className="relative mt-10 flex flex-wrap gap-3">
					<a
						href={mailtoHref}
						className="inline-flex items-center rounded-soft bg-bg px-6 py-[15px] text-[15px] font-semibold text-ink transition-opacity duration-200 hover:opacity-85"
					>
						{profile.email}
					</a>
					<ResumeButton
						lang={lang}
						label={t.resume}
						className="border-[1px] border-[color:color-mix(in_srgb,var(--color-bg)_40%,transparent)] px-6 py-[15px] text-[15px] text-bg"
					/>
				</div>
			</div>
		</section>
	);
}
