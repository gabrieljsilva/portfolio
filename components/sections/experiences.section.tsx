"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { iconsMaps } from "@/constants/icons";
import { useTranslations } from "@/constants/profile";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const { Building: Building2 } = iconsMaps.misc;

export function ExperienceSection() {
	const { profile, ui } = useTranslations();

	const experiences = profile.experiences.map((exp) => ({
		...exp,
		technologies: exp.technologies.map((tech) => ({
			name: tech.name,
			icon:
				iconsMaps.tech[tech.name as keyof typeof iconsMaps.tech] || Building2,
		})),
	}));

	const [expandedCards, setExpandedCards] = useState<number[]>([]);

	const toggleCard = (index: number) => {
		setExpandedCards((prev) =>
			prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
		);
	};

	return (
		<section
			id={"experiences"}
			className="flex justify-center dark:bg-grid-small-white/[0.2] mt-24"
		>
			<div className="container px-4 mt-8 md:px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="flex flex-col items-start gap-4"
				>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						{ui.experiences}
					</h2>
					<p className="text-xl text-muted-foreground">
						{ui.myProfessionalJourney}
					</p>
				</motion.div>
				<div className="mt-12 grid gap-8">
					{experiences.map((experience, index) => {
						const isExpanded = expandedCards.includes(index);
						const hasAchievements =
							experience.achievements && experience.achievements.length > 0;

						return (
							<motion.div
								key={experience.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<Card className="relative overflow-hidden">
									<CardHeader className="pb-4">
										<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
											<div className="space-y-1">
												<div className="flex items-center gap-2">
													<Building2 className="h-5 w-5 text-muted-foreground" />
													<CardTitle>{experience.company}</CardTitle>
												</div>
												<CardDescription className="text-lg font-medium text-primary">
													{experience.role}
												</CardDescription>
											</div>
											<div className="text-sm text-muted-foreground">
												{experience.startDate} -{" "}
												{experience.endDate || "Present"}
											</div>
										</div>
									</CardHeader>
									<CardContent className="grid gap-6">
										<motion.div
											initial={false}
											animate={{ height: "auto" }}
											className="text-muted-foreground"
										>
											{isExpanded ? (
												<>
													<p>{experience.description}</p>
													<p className="mt-4">
														{experience.detailedDescription}
													</p>
												</>
											) : (
												<p>{experience.description}</p>
											)}
										</motion.div>
										<AnimatePresence>
											{isExpanded && hasAchievements && (
												<motion.div
													initial={{ opacity: 0, height: 0 }}
													animate={{ opacity: 1, height: "auto" }}
													exit={{ opacity: 0, height: 0 }}
													transition={{ duration: 0.3, ease: "easeInOut" }}
													className="space-y-4 overflow-hidden"
												>
													<h4 className="font-semibold">
														{ui.keyAchievements}:
													</h4>
													<ul className="ml-6 list-disc space-y-2 text-muted-foreground">
														{experience.achievements.map(
															(achievement, index) => (
																<motion.li
																	key={achievement}
																	initial={{ opacity: 0, x: -20 }}
																	animate={{ opacity: 1, x: 0 }}
																	transition={{
																		duration: 0.3,
																		delay: index * 0.1,
																	}}
																>
																	{achievement}
																</motion.li>
															),
														)}
													</ul>
												</motion.div>
											)}
										</AnimatePresence>
										<div className="flex flex-wrap gap-3">
											{experience.technologies.map(
												({ name, icon: Icon }, i) => (
													<motion.div
														key={name}
														initial={{ opacity: 0, scale: 0.8 }}
														animate={{ opacity: 1, scale: 1 }}
														transition={{ duration: 0.2, delay: i * 0.05 }}
													>
														<Badge
															variant="secondary"
															className="flex items-center gap-1 px-3 py-1"
														>
															<Icon className="h-4 w-4" />
															{name}
														</Badge>
													</motion.div>
												),
											)}
										</div>
										<Button
											variant="ghost"
											className="w-full transition-colors"
											onClick={() => toggleCard(index)}
										>
											<motion.div
												initial={false}
												animate={{ rotate: isExpanded ? 180 : 0 }}
												transition={{ duration: 0.3 }}
												className="flex items-center gap-2"
											>
												<ChevronDown className="h-4 w-4" />
											</motion.div>
										</Button>
									</CardContent>
								</Card>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
