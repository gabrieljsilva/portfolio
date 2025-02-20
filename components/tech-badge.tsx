import { type TechIconKey, techIcons } from "./types";

export const TechBadge = ({ tech }: { tech: TechIconKey }) => {
	const Icon = techIcons[tech];
	return (
		<div className="flex items-center gap-1.5 text-sm bg-muted px-2.5 py-1 rounded-full">
			<Icon className="h-4 w-4" />
			<span className="text-xs font-medium">{tech}</span>
		</div>
	);
};
