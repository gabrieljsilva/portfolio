import { IconButton } from "@/components/icon-button";
import type { ButtonProps } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import * as React from "react";

export interface LoadingButtonProps extends ButtonProps {
	loading?: boolean;
	icon?: React.ReactNode;
}

export const LoadingButton = React.forwardRef<
	HTMLButtonElement,
	LoadingButtonProps
>(({ loading, children, icon, ...props }, ref) => {
	const loadingIcon = (
		<Loader2 className="relative mx-auto z-10 h-4 w-4 animate-spin" />
	);
	return (
		<IconButton
			ref={ref}
			icon={loading ? loadingIcon : icon}
			disabled={loading}
			{...props}
		>
			{children}
		</IconButton>
	);
});

LoadingButton.displayName = "LoadingButton";
