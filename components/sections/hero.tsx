import { Typewriter } from "@/components/typewriter";
import { DottedBackdrop } from "@/components/ui/dotted-backdrop";
import type { Translation } from "@/lib/i18n";

const HERO_MASK =
	"radial-gradient(70% 75% at 100% 30%, #000 0%, transparent 68%)";

export function HeroSection({ t }: { t: Translation["site"]["hero"] }) {
	return (
		<section
			id="home"
			className="relative mx-auto max-w-[1240px] overflow-hidden px-[22px] pb-[clamp(56px,8vw,120px)] pt-[clamp(72px,11vw,168px)] nav:px-12"
		>
			<DottedBackdrop mask={HERO_MASK} />

			<div className="relative mb-[clamp(28px,4vw,44px)] text-[13px] tracking-[0.02em] text-muted">
				{t.kicker}
			</div>

			<h1 className="relative min-h-[2.2em] max-w-[22ch] text-balance text-[clamp(27px,4vw,56px)] font-semibold leading-[1.1] tracking-[-0.03em]">
				<Typewriter phrases={t.rotating} />
			</h1>

			<p className="relative mt-[clamp(28px,4vw,44px)] max-w-[62ch] text-[clamp(16px,1.4vw,19px)] leading-[1.7] text-muted">
				{t.support}
			</p>

			<div className="relative mt-[clamp(32px,4vw,48px)] flex flex-wrap gap-3">
				<a
					href="#work"
					className="inline-flex items-center rounded-soft bg-ink px-[22px] py-3.5 text-sm font-semibold text-bg transition-opacity duration-200 hover:opacity-80"
				>
					{t.ctaWork}
				</a>
				<a
					href="#contact"
					className="inline-flex items-center rounded-soft border border-line-strong px-[22px] py-3.5 text-sm font-semibold transition-colors duration-200 hover:bg-hover"
				>
					{t.ctaContact}
				</a>
			</div>
		</section>
	);
}
