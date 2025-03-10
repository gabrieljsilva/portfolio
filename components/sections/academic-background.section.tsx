"use client";
import { AcademicCard } from "@/components/academic-card";
import { useTranslations } from "@/constants/profile";

export function AcademicSection() {
	const { ui, profile } = useTranslations();

	return (
		<section
			id={"experiences"}
			className="flex justify-center dark:bg-grid-small-white/[0.2] mt-24"
		>
			<div className="container px-4 mt-8 md:px-6">
				<div className="flex justify-between items-center mb-6">
					<h1 className="text-3xl font-bold">{ui.academicBackground}</h1>
				</div>

				<div className="grid gap-6">
					{profile.academicBackground.map((item) => (
						<AcademicCard key={item.course} academic={item} />
					))}
				</div>
			</div>
		</section>
	);
}
