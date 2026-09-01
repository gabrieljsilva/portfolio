import { type LinkIconName, linkIcons } from "@/constants/icons";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface LinkCardProps {
	icon: LinkIconName;
	label: string;
	value: string;
	href: string;
	variant?: "linktree" | "grid";
}

export function LinkCard({
	icon,
	label,
	value,
	href,
	variant = "linktree",
}: LinkCardProps) {
	const Icon = linkIcons[icon];
	const isLinktree = variant === "linktree";

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={cn(
				"grid items-center rounded-soft border border-line text-muted",
				"transition-[background-color,border-color,color] duration-300 ease-soft",
				"hover:border-line-strong hover:bg-hover hover:text-ink",
				isLinktree
					? "grid-cols-[40px_1fr_16px] gap-3.5 px-[18px] py-4"
					: "grid-cols-[44px_1fr_16px] gap-4 p-[22px]",
			)}
		>
			<span
				className={cn(
					"inline-flex items-center justify-center rounded-full border border-line",
					isLinktree ? "size-10" : "size-11",
				)}
			>
				<Icon className={isLinktree ? "size-[18px]" : "size-[19px]"} />
			</span>

			<span className="flex min-w-0 flex-col gap-1">
				<span
					className={cn(
						isLinktree
							? "text-[15px] font-semibold text-ink"
							: "text-xs uppercase tracking-[0.04em] text-muted",
					)}
				>
					{label}
				</span>
				<span
					className={cn(
						"truncate",
						isLinktree
							? "text-[13px] text-muted"
							: "text-base font-semibold text-ink",
					)}
				>
					{value}
				</span>
			</span>

			<ArrowUpRight className="size-4" />
		</a>
	);
}
