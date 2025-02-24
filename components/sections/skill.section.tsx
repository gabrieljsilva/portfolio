"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { iconsMaps } from "@/constants/icons";
import { profile } from "@/constants/profile";

interface Skill {
	name: string;
	icon: React.ReactNode;
	description: string;
}

interface SkillCategory {
	category: string;
	icon: React.ReactNode;
	description: string;
	skills: Skill[];
}

const skillsData: SkillCategory[] = profile.skillsSet.map((category) => {
	const CategoryIcon =
		iconsMaps.categories[
			category.category as keyof typeof iconsMaps.categories
		];
	return {
		category: category.category,
		icon: <CategoryIcon className="h-6 w-6" />,
		description: category.description,
		skills: category.skills.map((skill) => {
			const SkillIcon =
				iconsMaps.tech[skill.name as keyof typeof iconsMaps.tech];
			return {
				name: skill.name,
				icon: SkillIcon ? <SkillIcon className="h-4 w-4" /> : null,
				description: skill.description,
			};
		}),
	};
});

export default function SkillsSection() {
	return (
		<section
			id="skills"
			className="flex justify-center w-full dark:bg-grid-small-white/[0.2] mt-24"
		>
			<div className="w-full px-4 md:px-6 relative container">
				<div className="mb-8">
					<h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
						Skills & Expertise
					</h2>
					<p className="text-lg text-muted-foreground dark:text-gray-300 mt-2">
						Explore the technologies and tools I excel in to build scalable,
						efficient systems.
					</p>
				</div>

				<Card className="overflow-hidden ">
					<CardContent className="p-8">
						<div className="space-y-8">
							{skillsData.map((category) => (
								<div key={category.category} className="pb-6 last:pb-0">
									<div className="flex items-center gap-3 mb-3">
										{category.icon}
										<h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
											{category.category}
										</h3>
									</div>
									<p className="text-gray-600 dark:text-gray-300 mb-4">
										{category.description}
									</p>
									<div className="flex flex-wrap gap-3">
										{category.skills.map((skill) => (
											<TooltipProvider key={skill.name}>
												<Tooltip>
													<TooltipTrigger asChild>
														<Badge
															variant="secondary"
															className="flex items-center gap-1 text-sm"
														>
															{skill.icon && (
																<span className="text-black dark:text-white">
																	{skill.icon}
																</span>
															)}
															{skill.name}
														</Badge>
													</TooltipTrigger>
													<TooltipContent>
														<p className="text-sm">{skill.description}</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										))}
									</div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
