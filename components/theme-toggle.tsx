"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle({ label }: { label: string }) {
	const { resolvedTheme, setTheme } = useTheme();

	return (
		<button
			type="button"
			aria-label={label}
			onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
			className="inline-flex size-[34px] items-center justify-center rounded-soft border border-line text-ink transition-colors duration-200 hover:bg-hover"
		>
			{/* Trocado por CSS, não por estado: evita descasamento na hidratação. */}
			<Sun className="size-[15px] dark:hidden" />
			<Moon className="hidden size-[15px] dark:block" />
		</button>
	);
}
