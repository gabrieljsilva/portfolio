import { Tag } from "@/components/ui/tag";
import { profile } from "@/constants/profile";
import type { Translation } from "@/lib/i18n";
import Image from "next/image";

export function AboutSection({ t }: { t: Translation["site"]["about"] }) {
	return (
		<section
			id="about"
			className="mx-auto max-w-[1240px] px-[22px] pt-[clamp(72px,9vw,140px)] nav:px-12"
		>
			<div className="mb-3.5 text-xs uppercase tracking-[0.06em] text-muted">
				{t.kicker}
			</div>

			<div className="grid grid-cols-1 gap-[clamp(32px,5vw,72px)] nav:grid-cols-[1.5fr_1fr]">
				<div>
					<h2 className="mb-8 max-w-[20ch] text-[clamp(26px,2.8vw,38px)] font-semibold leading-[1.15] tracking-[-0.025em]">
						{t.title}
					</h2>

					<div className="flex flex-col gap-[22px] text-base leading-[1.75] text-muted">
						{t.paragraphs.map((paragraph) => (
							<p key={paragraph} className="max-w-[60ch]">
								{paragraph}
							</p>
						))}
					</div>

					<div className="mt-8 flex flex-wrap gap-2">
						{t.facts.map((fact) => (
							<Tag key={fact} size="md">
								{fact}
							</Tag>
						))}
					</div>
				</div>

				<div>
					<div className="relative aspect-[4/5] w-full overflow-hidden rounded-soft bg-surface">
						<Image
							src={profile.avatar}
							alt={profile.name}
							fill
							sizes="(max-width: 980px) 100vw, 400px"
							className="object-cover"
						/>
					</div>
					<div className="mt-3 text-[13px] text-muted">{t.caption}</div>
				</div>
			</div>
		</section>
	);
}
