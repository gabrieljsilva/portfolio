import type { LoadingButtonProps } from "@/components/loading-button";
import { Button } from "@/components/ui/button";
import * as React from "react";

interface IconButtonProps extends LoadingButtonProps {
	icon: React.ReactNode;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
	({ icon, children, loading, ...props }, ref) => {
		return (
			<Button ref={ref} {...props}>
				<div className={"flex gap-2 items-center justify-center"}>
					{icon}
					{children}
				</div>
			</Button>
		);
	},
);

IconButton.displayName = "IconButton";
