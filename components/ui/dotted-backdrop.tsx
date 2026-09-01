import { cn } from "@/lib/utils";

interface DottedBackdropProps {
	/** Máscara radial que decide de onde os pontos partem e onde eles somem. */
	mask: string;
	/** Cor dos pontos. Vai inline porque `.dot-field` já define `color`. */
	color?: string;
	className?: string;
}

export function DottedBackdrop({
	mask,
	color,
	className,
}: DottedBackdropProps) {
	return (
		<div
			aria-hidden="true"
			className={cn(
				"dot-field pointer-events-none absolute inset-0 opacity-50",
				className,
			)}
			style={{ maskImage: mask, WebkitMaskImage: mask, color }}
		/>
	);
}
