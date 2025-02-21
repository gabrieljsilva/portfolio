import { IconButton } from "@/components/icon-button";
import type { ButtonProps } from "@/components/ui/button.tsx";
import { Loader2 } from "lucide-react";
import type { ReactNode } from "react";

export interface LoadingButtonProps extends ButtonProps {
	loading?: boolean;
	icon?: ReactNode;
}

export function LoadingButton({
	loading,
	children,
	icon,
	...props
}: LoadingButtonProps) {
	const loadingIcon = (
		<Loader2 className="relative mx-auto z-10 h-4 w-4 animate-spin" />
	);
	return (
		<IconButton
			icon={loading ? loadingIcon : icon}
			disabled={loading}
			{...props}
		>
			{children}
		</IconButton>
	);
}
