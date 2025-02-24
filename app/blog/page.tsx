import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer.section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { Calendar, Clock, Eye } from "lucide-react";
import Link from "next/link";
import { profile } from "@/constants";

function calculateReadingTime(content: string): number {
	const wordsPerMinute = 200;
	const wordCount = content.split(/\s+/).length;
	return Math.ceil(wordCount / wordsPerMinute);
}

function truncateContent(content: string, wordLimit: number): string {
	const words = content.split(/\s+/);
	if (words.length <= wordLimit) return content;
	return `${words.slice(0, wordLimit).join(" ")}...`;
}

export default function BlogPage() {
	return (
		<>
			<Navbar />
			<div className="flex justify-center w-full dark:bg-grid-small-white/[0.2] mt-24">
				<div className="w-full px-4 md:px-6 relative container">
					<h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:mb-12">
						Latest Posts
					</h1>
					<div className="grid gap-6">
						{profile.posts.map((post) => (
							<Card
								key={post.id}
								className="flex flex-col transition-all hover:shadow-lg dark:hover:shadow-primary/10"
							>
								<CardHeader>
									<h2 className="text-2xl font-semibold leading-tight text-foreground">
										{post.title}
									</h2>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground">
										{truncateContent(post.content, 50)}
									</p>

									<Link href={`/post/${post.id}`}>
										<Button className={"mx-0 px-0"} variant="link">
											View more
										</Button>
									</Link>
								</CardContent>
								<CardFooter className="mt-auto flex flex-col items-start gap-4">
									<div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
										<div className="flex items-center gap-1.5">
											<Calendar className="h-4 w-4" />
											<time dateTime={post.date.toISOString()}>
												{formatDistanceToNow(post.date, { addSuffix: true })}
											</time>
										</div>
										<div className="flex items-center gap-1.5">
											<Clock className="h-4 w-4" />
											<span>{calculateReadingTime(post.content)} min read</span>
										</div>
										<div className="flex items-center gap-1.5">
											<Eye className="h-4 w-4" />
											<span>{post.views.toLocaleString()} views</span>
										</div>
									</div>
									<div className="flex flex-wrap gap-2 pt-4">
										{post.tags.map((tag) => (
											<Badge
												key={tag}
												variant="secondary"
												className="text-xs font-medium hover:bg-secondary/80"
											>
												#{tag.toLowerCase().replace(/\s+/g, "")}
											</Badge>
										))}
									</div>
								</CardFooter>
							</Card>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
