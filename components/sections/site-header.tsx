"use client";

import { LanguageToggle } from "@/components/language-toggle";
import { ResumeButton } from "@/components/resume-button";
import { ThemeToggle } from "@/components/theme-toggle";
import { type Lang, localizedPath } from "@/lib/i18n";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface SiteHeaderProps {
	lang: Lang;
	brand: string;
	nav: ReadonlyArray<{ label: string; href: string }>;
	resumeLabel: string;
	ui: {
		themeToggle: string;
		openMenu: string;
		closeMenu: string;
		language: string;
	};
}

export function SiteHeader({
	lang,
	brand,
	nav,
	resumeLabel,
	ui,
}: SiteHeaderProps) {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-[60] border-b border-line bg-[color:color-mix(in_srgb,var(--color-bg)_90%,transparent)] backdrop-blur-[16px]">
			<div className="mx-auto flex h-[76px] max-w-[1240px] items-center gap-8 px-[22px] nav:px-12">
				<Link
					href={localizedPath(lang, "/")}
					className="mr-auto text-[15px] font-extrabold tracking-[0.02em]"
				>
					{brand}
				</Link>

				<nav className="hidden items-center gap-[30px] nav:flex">
					{nav.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="text-sm text-muted transition-colors duration-200 hover:text-ink"
						>
							{item.label}
						</a>
					))}
				</nav>

				<div className="flex items-center gap-2">
					<LanguageToggle lang={lang} path="/" label={ui.language} />
					<ThemeToggle label={ui.themeToggle} />
					<ResumeButton
						lang={lang}
						label={resumeLabel}
						className="hidden bg-ink px-4 py-2.5 text-[13px] text-bg nav:inline-flex"
					/>
					<button
						type="button"
						aria-label={menuOpen ? ui.closeMenu : ui.openMenu}
						aria-expanded={menuOpen}
						onClick={() => setMenuOpen((open) => !open)}
						className="inline-flex size-[34px] items-center justify-center rounded-soft border border-line text-ink transition-colors duration-200 hover:bg-hover nav:hidden"
					>
						{menuOpen ? (
							<X className="size-[15px]" />
						) : (
							<Menu className="size-[15px]" />
						)}
					</button>
				</div>
			</div>

			{menuOpen ? (
				<nav className="flex animate-panel-in flex-col gap-0.5 border-t border-line px-[22px] pb-[22px] pt-1.5 nav:hidden">
					{nav.map((item) => (
						<a
							key={item.href}
							href={item.href}
							onClick={() => setMenuOpen(false)}
							className="border-b border-line py-[11px] text-[19px] font-semibold"
						>
							{item.label}
						</a>
					))}
					<ResumeButton
						lang={lang}
						label={resumeLabel}
						className="mt-4 bg-ink px-4 py-3 text-sm text-bg"
					/>
				</nav>
			) : null}
		</header>
	);
}
