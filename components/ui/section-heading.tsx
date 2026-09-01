interface SectionHeadingProps {
	kicker: string;
	title: string;
	sub?: string;
}

export function SectionHeading({ kicker, title, sub }: SectionHeadingProps) {
	return (
		<>
			<div className="mb-3.5 text-xs uppercase tracking-[0.06em] text-muted">
				{kicker}
			</div>
			<h2 className="text-[clamp(26px,2.8vw,38px)] font-semibold leading-[1.15] tracking-[-0.025em]">
				{title}
			</h2>
			{sub ? (
				<p className="mt-3 max-w-[56ch] text-base leading-[1.7] text-muted">
					{sub}
				</p>
			) : null}
		</>
	);
}
