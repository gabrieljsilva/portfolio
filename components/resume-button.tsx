"use client";

import type { Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ResumeButtonProps {
	lang: Lang;
	label: string;
	className?: string;
}

export function ResumeButton({ lang, label, className }: ResumeButtonProps) {
	const [generating, setGenerating] = useState(false);

	async function handleClick() {
		setGenerating(true);
		try {
			const { downloadResume } = await import("@/lib/download-resume");
			await downloadResume(lang);
		} finally {
			setGenerating(false);
		}
	}

	return (
		<button
			type="button"
			onClick={handleClick}
			disabled={generating}
			aria-busy={generating}
			className={cn(
				"inline-flex items-center justify-center rounded-soft font-semibold transition-opacity duration-200 hover:opacity-80 disabled:opacity-50",
				className,
			)}
		>
			{label}
		</button>
	);
}
