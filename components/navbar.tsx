"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import type { MouseEvent } from "react";

const navigationItems = [
	{ title: "Home", href: "#home" },
	{ title: "About", href: "#about" },
	{ title: "Projects", href: "#projects" },
	{ title: "Experiences", href: "#experiences" },
	{ title: "Skills", href: "#skills" },
	{ title: "Blog", href: "#blog" },
];

export default function Navbar() {
	const handleNavigation = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
		e.preventDefault();
		const targetId = href.substring(1);
		const element = document.getElementById(targetId);

		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			window.history.pushState(null, "", href);
		}
	};

	return (
		<header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-background/60">
			<div className="flex h-16 items-center justify-between px-8">
				<Link
					href="/"
					className="text-2xl font-bold tracking-tighter transition-colors hover:text-primary"
				>
					Gabriel Silva
				</Link>

				{/* Desktop Navigation */}
				<NavigationMenu className="hidden lg:flex">
					<NavigationMenuList className="gap-1">
						{navigationItems.map((item) => (
							<NavigationMenuItem key={item.title}>
								<Link
									href={item.href}
									onClick={(e) => handleNavigation(e, item.href)}
								>
									<NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
										{item.title}
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						))}
						<ThemeToggle />
					</NavigationMenuList>
				</NavigationMenu>

				{/* Mobile Navigation */}
				<Sheet>
					<SheetTrigger asChild className="lg:hidden">
						<Button
							variant="ghost"
							size="icon"
							className="relative hover:bg-accent/50 transition-colors"
						>
							<Menu className="h-5 w-5" />
							<span className="sr-only">Toggle navigation menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent
						side="right"
						className="w-80 backdrop-blur-xl backdrop-saturate-150 bg-background/95 border-l border-border/40"
					>
						<nav className="flex flex-col space-y-6 mt-8">
							{navigationItems.map((item) => (
								<Link
									key={item.title}
									href={item.href}
									onClick={(e) => handleNavigation(e, item.href)}
									className="text-lg font-medium transition-colors hover:text-primary px-2 py-1 rounded-md"
								>
									{item.title}
								</Link>
							))}
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}
