import { LinkCard } from "@/components/ui/link-card";
import type { Translation } from "@/lib/i18n";

export function LinksSection({ t }: { t: Translation["site"]["links"] }) {
	return (
		<section
			id="links"
			className="mx-auto max-w-[1240px] px-[22px] pt-[clamp(72px,9vw,140px)] nav:px-12"
		>
			<div className="mb-3.5 text-xs uppercase tracking-[0.06em] text-muted">
				{t.kicker}
			</div>
			<h2 className="mb-[clamp(24px,3vw,40px)] text-[clamp(26px,2.8vw,38px)] font-semibold leading-[1.15] tracking-[-0.025em]">
				{t.title}
			</h2>

			<div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[clamp(16px,2vw,24px)]">
				{t.items.map((item) => (
					<LinkCard
						key={item.label}
						icon={item.icon}
						label={item.label}
						value={item.value}
						href={item.href}
						variant="grid"
					/>
				))}
			</div>
		</section>
	);
}
