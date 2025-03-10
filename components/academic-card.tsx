import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	CalendarIcon,
	ClockIcon,
	GraduationCapIcon,
	BuildingIcon,
} from "lucide-react";

interface AcademicProps {
	location: string;
	level: string;
	course: string;
	startDate: string;
	endDate?: string;
	status: string;
	workload: string;
}

export function AcademicCard({ academic }: { academic: AcademicProps }) {
	const { location, level, course, startDate, endDate, status, workload } =
		academic;

	return (
		<Card className="overflow-hidden transition-all hover:shadow-md">
			<CardHeader className="bg-primary/5 pb-3">
				<div className="flex flex-col gap-1">
					<div className="flex items-start justify-between">
						<h3 className="text-xl font-semibold">{course}</h3>
						<Badge
							variant={status === "Completed" ? "default" : "secondary"}
							className="ml-2"
						>
							{status}
						</Badge>
					</div>
					<p className="text-muted-foreground flex items-center gap-1.5">
						<GraduationCapIcon className="h-4 w-4" />
						{level}
					</p>
				</div>
			</CardHeader>

			<CardContent className="pt-4">
				<div className="grid gap-3">
					<div className="flex items-start gap-1.5">
						<BuildingIcon className="h-4 w-4 mt-1 text-muted-foreground" />
						<span>{location}</span>
					</div>

					<div className="flex items-center gap-1.5">
						<CalendarIcon className="h-4 w-4 text-muted-foreground" />
						<span>
							{startDate} {endDate ? `- ${endDate}` : ""}
						</span>
					</div>

					<div className="flex items-center gap-1.5">
						<ClockIcon className="h-4 w-4 text-muted-foreground" />
						<span>{workload}</span>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
