import { DottedBackdrop } from "@/components/ui/dotted-backdrop";
import { Tag } from "@/components/ui/tag";
import { profile } from "@/constants/profile";
import type { Translation } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const CARD_MASK =
	"radial-gradient(120% 90% at 100% 0%, #000 0%, transparent 65%)";

export function UntimelessSection({
	t,
}: { t: Translation["site"]["untimeless"] }) {
	return (
		<section
			id="untimeless"
			className="mx-auto max-w-[1240px] px-[22px] pt-[clamp(40px,5vw,80px)] nav:px-12"
		>
			<div className="relative overflow-hidden rounded-soft border border-line bg-surface p-[clamp(32px,4.5vw,72px)]">
				<DottedBackdrop mask={CARD_MASK} />

				<div className="relative grid grid-cols-1 items-start gap-[clamp(28px,4vw,72px)] nav:grid-cols-2">
					<div>
						<span className="inline-flex items-center gap-2 rounded-full border border-line-strong px-3.5 py-1.5 text-xs uppercase tracking-[0.04em] text-muted">
							<span className="size-1.5 rounded-full bg-ink" />
							{t.kicker}
						</span>

						<h2 className="mt-[22px] text-[clamp(34px,4.6vw,64px)] font-semibold leading-[1.02] tracking-[-0.035em]">
							Untimeless AI
						</h2>

						<p className="mt-[22px] max-w-[44ch] text-[clamp(16px,1.3vw,18px)] leading-[1.7] text-muted">
							{t.lead}
						</p>

						<div className="mt-6 flex flex-wrap gap-2">
							{t.tags.map((tag) => (
								<Tag key={tag} filled>
									{tag}
								</Tag>
							))}
						</div>

						<a
							href={profile.social.product}
							target="_blank"
							rel="noopener noreferrer"
							className="mt-8 inline-flex items-center gap-2.5 rounded-soft bg-ink px-[22px] py-3.5 text-sm font-semibold text-bg transition-opacity duration-200 hover:opacity-80"
						>
							{t.cta}
							<ArrowUpRight className="size-[15px]" />
						</a>
					</div>

					<div className="rounded-soft border border-line bg-bg p-[clamp(20px,2.4vw,32px)]">
						{t.bullets.map((bullet, index) => (
							<div
								key={bullet.title}
								className={cn(
									"flex items-start gap-4 py-[18px]",
									index > 0 && "border-t border-line",
								)}
							>
								<span className="inline-flex size-[30px] flex-none items-center justify-center rounded-full border border-line text-xs font-semibold text-muted">
									{String(index + 1).padStart(2, "0")}
								</span>
								<div>
									<div className="text-base font-semibold">{bullet.title}</div>
									<p className="mt-[5px] max-w-[40ch] text-sm leading-[1.65] text-muted">
										{bullet.body}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
