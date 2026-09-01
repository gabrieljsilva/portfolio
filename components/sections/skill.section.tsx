import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import type { Translation } from "@/lib/i18n";

export function SkillsSection({ t }: { t: Translation["site"]["skills"] }) {
	return (
		<section
			id="skills"
			className="mx-auto max-w-[1240px] px-[22px] pt-[clamp(72px,9vw,140px)] nav:px-12"
		>
			<SectionHeading kicker={t.kicker} title={t.title} sub={t.sub} />

			<div className="mt-[clamp(28px,3.5vw,48px)]">
				{t.groups.map((group) => (
					<div
						key={group.name}
						className="grid grid-cols-1 gap-6 border-t border-line py-[26px] nav:grid-cols-[240px_1fr]"
					>
						<div className="text-base font-semibold">{group.name}</div>
						<div className="flex flex-wrap content-start gap-2">
							{group.items.map((item) => (
								<Tag key={item} size="md">
									{item}
								</Tag>
							))}
						</div>
					</div>
				))}
				<div className="border-t border-line" />
			</div>
		</section>
	);
}
