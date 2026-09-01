import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import type { Translation } from "@/lib/i18n";

export function ProjectsSection({ t }: { t: Translation["site"]["work"] }) {
	return (
		<section
			id="work"
			className="mx-auto max-w-[1240px] px-[22px] pt-[clamp(72px,9vw,140px)] nav:px-12"
		>
			<SectionHeading kicker={t.kicker} title={t.title} sub={t.sub} />

			<div className="mt-[clamp(36px,4vw,56px)] grid grid-cols-1 gap-[clamp(20px,2.5vw,32px)] nav:grid-cols-2">
				{t.items.map((project) => (
					<article
						key={project.name}
						className="flex flex-col gap-3.5 rounded-soft border border-line p-[clamp(24px,2.6vw,36px)] transition-[background-color,border-color] duration-300 ease-soft hover:border-line-strong hover:bg-hover"
					>
						<div className="flex items-baseline justify-between gap-3 text-[13px] text-muted">
							<span>{project.kind}</span>
							<span>{project.year}</span>
						</div>

						<h3 className="text-[22px] font-semibold leading-[1.2] tracking-[-0.02em]">
							{project.name}
						</h3>

						<p className="flex-1 text-[15px] leading-[1.7] text-muted">
							{project.description}
						</p>

						<div className="flex flex-wrap gap-[7px] pt-1">
							{project.tags.map((tag) => (
								<Tag key={tag}>{tag}</Tag>
							))}
						</div>

						{project.link ? (
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="pt-1 text-sm font-semibold transition-colors duration-200 hover:text-muted"
							>
								{t.visit} →
							</a>
						) : null}
					</article>
				))}
			</div>
		</section>
	);
}
