"use client";

import { Tag } from "@/components/ui/tag";
import type { Translation } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function ExperienceSection({
	t,
}: { t: Translation["site"]["experience"] }) {
	// Conjunto, não índice único: o protótipo permite várias abertas ao mesmo tempo.
	const [open, setOpen] = useState<ReadonlySet<number>>(new Set());

	function toggle(index: number) {
		setOpen((current) => {
			const next = new Set(current);
			if (!next.delete(index)) next.add(index);
			return next;
		});
	}

	return (
		<section
			id="experience"
			className="mx-auto max-w-[1240px] px-[22px] pt-[clamp(72px,9vw,140px)] nav:px-12"
		>
			<div className="mb-3.5 text-xs uppercase tracking-[0.06em] text-muted">
				{t.kicker}
			</div>
			<h2 className="mb-[clamp(28px,3.5vw,48px)] text-[clamp(26px,2.8vw,38px)] font-semibold leading-[1.15] tracking-[-0.025em]">
				{t.title}
			</h2>

			{t.items.map((item, index) => {
				const isOpen = open.has(index);
				const panelId = `experience-panel-${index}`;

				return (
					<div key={item.company} className="border-t border-line">
						<button
							type="button"
							onClick={() => toggle(index)}
							aria-expanded={isOpen}
							aria-controls={panelId}
							className="grid w-full grid-cols-[1fr_auto] items-center gap-5 py-[26px] text-left text-ink"
						>
							<div>
								<div className="text-[clamp(19px,1.8vw,23px)] font-semibold tracking-[-0.02em]">
									{item.company}
								</div>
								<div className="mt-1.5 text-[15px] text-muted">{item.role}</div>
							</div>

							<div className="flex items-center gap-[18px]">
								<span className="whitespace-nowrap text-[13px] text-muted">
									{item.period}
								</span>
								<span
									className={cn(
										"inline-flex size-8 flex-none items-center justify-center rounded-full border border-line text-muted transition-transform duration-300 ease-soft",
										isOpen && "rotate-180 bg-hover",
									)}
								>
									<ChevronDown className="size-3.5" />
								</span>
							</div>
						</button>

						{isOpen ? (
							<div id={panelId} className="animate-acc-open overflow-hidden">
								<div className="flex animate-acc-inner flex-col gap-[18px] pb-[30px]">
									<p className="max-w-[70ch] text-base leading-[1.75] text-muted">
										{item.summary}
									</p>

									<ul className="flex list-disc flex-col gap-2.5 pl-[18px] text-[15px] leading-[1.7] text-muted">
										{item.bullets.map((bullet) => (
											<li key={bullet} className="max-w-[74ch]">
												{bullet}
											</li>
										))}
									</ul>

									<div className="flex flex-wrap gap-[7px]">
										{item.stack.map((tech) => (
											<Tag key={tech}>{tech}</Tag>
										))}
									</div>
								</div>
							</div>
						) : null}
					</div>
				);
			})}

			<div className="border-t border-line" />
		</section>
	);
}
