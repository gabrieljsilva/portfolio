"use client";
import { ThemeToggle } from "@/components/theme-toggle";
import { Card } from "@/components/ui/card";
import { useTranslations } from "@/constants/profile";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export default function LinkTree() {
	const { profile } = useTranslations();

	return (
		<div className="h-dvh w-full bg-gradient-to-b from-muted to-background p-4">
			<div className="fixed right-4 top-4">
				<ThemeToggle />
			</div>

			<div className="flex min-h-dvh items-center justify-center">
				<div className="mx-auto max-w-md space-y-8">
					<div className="flex flex-col items-center space-y-4">
						<div className="relative size-24 overflow-hidden rounded-full">
							<Image
								src="/placeholder.svg?height=96&width=96"
								width={96}
								height={96}
								alt="Profile"
								className="object-cover"
							/>
						</div>
						<div className="text-center">
							<h1 className="text-2xl font-bold">{profile.fullName}</h1>
							<p className="text-muted-foreground">
								{profile.role} at{" "}
								<span className={"font-bold"}>
									{profile.currentCompanyShortName}
								</span>
							</p>
						</div>
					</div>
					<div className="grid gap-4">
						<Link
							href="https://www.linkedin.com/in/gabrieldjs21/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Card className="flex items-center gap-3 p-4 transition-colors hover:bg-muted">
								<SiLinkedin className="size-5" />
								<span className="font-medium">LinkedIn</span>
							</Card>
						</Link>
						<Link
							href="https://github.com/gabrieljsilva"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Card className="flex items-center gap-3 p-4 transition-colors hover:bg-muted">
								<SiGithub className="size-5" />
								<span className="font-medium">GitHub</span>
							</Card>
						</Link>
						<Link
							href="https://gabrieljs.dev"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Card className="flex items-center gap-3 p-4 transition-colors hover:bg-muted">
								<Globe className="size-5" />
								<span className="font-medium">Website</span>
							</Card>
						</Link>
						<Link
							href="https://www.instagram.com/gabrieljsillva"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Card className="flex items-center gap-3 p-4 transition-colors hover:bg-muted">
								<SiInstagram className="size-5" />
								<span className="font-medium">Instagram</span>
							</Card>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
