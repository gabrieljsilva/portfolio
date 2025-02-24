import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Circle, Hexagon, Square, Triangle } from "lucide-react";
import type { HTMLAttributes } from "react";

interface ThumbnailProps extends HTMLAttributes<HTMLDivElement> {
	src?: string;
	alt?: string;
	title: string;
	width?: number;
	height?: number;
}

export function Thumbnail({
	src,
	alt,
	title,
	width = 300,
	height = 200,
	className,
	...props
}: ThumbnailProps) {
	return (
		<Card
			className={cn(
				"group overflow-hidden bg-card transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg",
				className,
			)}
			style={{
				width: width,
				height: height,
			}}
			{...props}
		>
			{src ? (
				<div className="relative h-full w-full">
					<img
						src={src || "/placeholder.svg"}
						alt={alt || title}
						className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
					<div className="absolute bottom-0 left-0 right-0 p-4">
						<h3 className="text-lg font-semibold text-card-foreground">
							{title}
						</h3>
					</div>
				</div>
			) : (
				<div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-muted p-6">
					{/* Background gradient */}
					<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

					{/* Animated shapes */}
					<div className="absolute inset-0">
						{/* Top left group */}
						<Circle className="absolute -left-4 -top-4 h-20 w-20 rotate-12 text-primary/10 transition-transform duration-700 ease-in-out animate-pulse" />
						<Square className="absolute left-8 top-8 h-12 w-12 -rotate-12 text-primary/20 transition-transform duration-1000 ease-in-out animate-pulse delay-300" />

						{/* Top right group */}
						<Hexagon className="absolute -right-6 -top-6 h-24 w-24 rotate-45 text-primary/15 transition-transform duration-1000 ease-in-out animate-pulse delay-150" />
						<Triangle className="absolute right-8 top-12 h-12 w-12 text-primary/20 transition-transform duration-700 ease-in-out animate-pulse delay-500" />

						{/* Bottom left group */}
						<Square className="absolute -left-8 -bottom-8 h-24 w-24 rotate-45 text-primary/10 transition-transform duration-1000 ease-in-out animate-pulse delay-200" />
						<Circle className="absolute left-6 bottom-4 h-16 w-16 text-primary/20 transition-transform duration-700 ease-in-out animate-pulse delay-400" />

						{/* Bottom right group */}
						<Triangle className="absolute -right-4 -bottom-4 h-20 w-20 -rotate-12 text-primary/15 transition-transform duration-1000 ease-in-out animate-pulse delay-300" />
						<Hexagon className="absolute right-8 bottom-8 h-12 w-12 text-primary/20 transition-transform duration-700 ease-in-out animate-pulse delay-600" />
					</div>

					{/* Center content with backdrop blur */}
					<div className="relative z-10 rounded-xl bg-background/30 p-4 backdrop-blur-sm transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-background/40">
						<div className="relative">
							{/* Decorative elements around title */}
							<div className="absolute -left-2 -top-2 h-2 w-2 rounded-full bg-primary/50" />
							<div className="absolute -right-2 -top-2 h-2 w-2 rounded-full bg-primary/50" />
							<div className="absolute -left-2 -bottom-2 h-2 w-2 rounded-full bg-primary/50" />
							<div className="absolute -right-2 -bottom-2 h-2 w-2 rounded-full bg-primary/50" />

							{/* Title */}
							<span className="relative z-10 block text-center text-base font-medium text-foreground">
								{title}
							</span>
						</div>
					</div>
				</div>
			)}
		</Card>
	);
}
