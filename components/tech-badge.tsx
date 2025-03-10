import { iconsMaps } from "@/constants/icons";

interface TechBadgeProps {
	tech: keyof typeof iconsMaps.tech;
}

export const TechBadge = ({ tech }: TechBadgeProps) => {
	const Icon = iconsMaps.tech[tech] || iconsMaps.misc.settings;

	return (
		<span className="flex items-center gap-1.5 text-sm bg-muted px-2.5 py-1 rounded-full">
			<Icon className="h-4 w-4" />
			<span className="text-xs font-medium">{tech}</span>
		</span>
	);
};
