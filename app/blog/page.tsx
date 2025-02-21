import Navbar from "@/components/navbar";
import Footer from "@/components/sections/footer.section";
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

const posts = [
	{
		id: 1,
		title: "Understanding the Basics of TypeScript",
		content: `TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript. In this comprehensive guide, we'll explore the fundamental concepts of TypeScript and how it can improve your development workflow. We'll cover everything from basic types to advanced features, helping you understand why TypeScript has become an essential tool in modern web development.`,
		date: new Date("2024-02-15"),
		tags: ["TypeScript", "Programming", "Web Development"],
		views: 1234,
	},
	{
		id: 2,
		title: "The Future of Web Development with Next.js",
		content: `Next.js has revolutionized the way we build web applications by providing a powerful framework that combines the best of React with server-side rendering capabilities. As we look towards the future, Next.js continues to evolve with exciting new features and improvements. The introduction of the App Router has changed how we think about routing and data fetching, while server components have opened up new possibilities for performance optimization. In this article, we'll explore the latest developments in Next.js and what they mean for the future of web development.`,
		date: new Date("2024-02-18"),
		tags: ["Next.js", "React", "Web Development"],
		views: 856,
	},
	{
		id: 3,
		title: "Mastering CSS Grid Layout",
		content: `CSS Grid Layout is a powerful tool that has transformed how we create website layouts. It provides a two-dimensional system, meaning it can handle both columns and rows, unlike flexbox which is largely a one-dimensional system. With CSS Grid, you can create complex layouts with less HTML markup and more flexibility. This comprehensive guide will walk you through everything you need to know about CSS Grid, from basic concepts to advanced techniques. We'll cover grid containers, grid items, template areas, and responsive design patterns.`,
		date: new Date("2024-02-20"),
		tags: ["CSS", "Web Design", "Frontend"],
		views: 2341,
	},
	{
		id: 4,
		title: "The Complete Guide to React Server Components",
		content: `React Server Components represent a paradigm shift in how we build React applications. They allow us to render components on the server while maintaining the interactivity and dynamism that React is known for. This innovative approach brings several benefits, including improved performance, reduced client-side JavaScript, and better SEO. In this comprehensive guide, we'll dive deep into Server Components, exploring their benefits, use cases, and best practices for implementation.`,
		date: new Date("2024-02-21"),
		tags: ["React", "Server Components", "Performance"],
		views: 1567,
	},
	{
		id: 5,
		title: "Optimizing Database Queries for Better Performance",
		content: `Database optimization is crucial for maintaining the performance and scalability of your applications. Whether you're working with SQL or NoSQL databases, understanding how to write efficient queries and structure your data properly can make a significant difference. This article explores various techniques for optimizing database queries, including indexing strategies, query planning, and caching mechanisms. We'll also look at common pitfalls and how to avoid them.`,
		date: new Date("2024-02-22"),
		tags: ["Database", "Performance", "Backend"],
		views: 987,
	},
	{
		id: 6,
		title: "Building Accessible Web Applications",
		content: `Web accessibility is not just a nice-to-have feature—it's a necessity. Creating accessible web applications ensures that everyone, regardless of their abilities, can use your website effectively. This guide covers the fundamental principles of web accessibility, including ARIA attributes, keyboard navigation, semantic HTML, and color contrast. Learn how to make your web applications more inclusive while maintaining a beautiful user interface.`,
		date: new Date("2024-02-23"),
		tags: ["Accessibility", "Web Development", "UI/UX"],
		views: 654,
	},
	{
		id: 7,
		title: "Introduction to Microservices Architecture",
		content: `Microservices architecture has become increasingly popular for building scalable and maintainable applications. This architectural style structures an application as a collection of loosely coupled services, each implementing a specific business capability. In this article, we'll explore the principles of microservices, their benefits and challenges, and best practices for implementing them in your organization.`,
		date: new Date("2024-02-24"),
		tags: ["Microservices", "Architecture", "Backend"],
		views: 432,
	},
];

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
						{posts.map((post) => (
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
