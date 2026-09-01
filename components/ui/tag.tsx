import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface TagProps {
	children: ReactNode;
	/** `md` é usado em blocos com mais respiro (fatos do Sobre, habilidades). */
	size?: "sm" | "md";
	/** Preenche o fundo — necessário quando a tag fica sobre a superfície elevada. */
	filled?: boolean;
	className?: string;
}

export function Tag({
	children,
	size = "sm",
	filled = false,
	className,
}: TagProps) {
	return (
		<span
			className={cn(
				"inline-flex items-center rounded-full border border-line text-muted",
				size === "sm"
					? "px-[11px] py-1 text-xs"
					: "px-[13px] py-1.5 text-[13px]",
				filled && "bg-bg",
				className,
			)}
		>
			{children}
		</span>
	);
}
