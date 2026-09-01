import type { Translation } from "@/lib/i18n";

export function EducationSection({
	t,
}: { t: Translation["site"]["education"] }) {
	return (
		<section
			id="education"
			className="mx-auto max-w-[1240px] px-[22px] pt-[clamp(72px,9vw,140px)] nav:px-12"
		>
			<div className="mb-3.5 text-xs uppercase tracking-[0.06em] text-muted">
				{t.kicker}
			</div>
			<h2 className="mb-[clamp(24px,3vw,40px)] text-[clamp(26px,2.8vw,38px)] font-semibold leading-[1.15] tracking-[-0.025em]">
				{t.title}
			</h2>

			{t.items.map((item) => (
				<div
					key={item.course}
					className="grid grid-cols-1 gap-4 border-t border-line py-[26px] nav:grid-cols-[1.5fr_1fr]"
				>
					<div>
						<div className="text-[19px] font-semibold">{item.course}</div>
						<div className="mt-1.5 text-[15px] text-muted">{item.place}</div>
					</div>
					<div className="flex flex-col gap-1.5 text-sm text-muted">
						<span>{item.level}</span>
						<span>{item.period}</span>
						<span>{item.status}</span>
					</div>
				</div>
			))}

			<div className="border-t border-line" />
		</section>
	);
}
