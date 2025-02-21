import type { LoadingButtonProps } from "@/components/loading-button";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";

interface IconButtonProps extends LoadingButtonProps {
	icon: ReactNode;
}

export function IconButton({
	icon,
	children,
	loading,
	...props
}: IconButtonProps) {
	return (
		<Button {...props}>
			<div className={"flex gap-2 items-center justify-center"}>
				{icon}
				{children}
			</div>
		</Button>
	);
}
