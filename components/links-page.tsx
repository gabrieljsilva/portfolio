import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { DottedBackdrop } from "@/components/ui/dotted-backdrop";
import { LinkCard } from "@/components/ui/link-card";
import { profile } from "@/constants/profile";
import { type Lang, getTranslations, localizedPath } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";

const FIELD_MASK =
	"radial-gradient(75% 55% at 50% 0%, #000 0%, transparent 70%)";

export function LinksPage({ lang }: { lang: Lang }) {
	const t = getTranslations(lang);
	const linktree = t.linktree;

	return (
		<div className="relative flex min-h-dvh items-center justify-center overflow-hidden px-5 py-14">
			<DottedBackdrop mask={FIELD_MASK} />

			<div className="absolute right-5 top-5 z-10 flex gap-2">
				<LanguageToggle lang={lang} path="/links" label={t.ui.language} />
				<ThemeToggle label={t.ui.themeToggle} />
			</div>

			<div className="relative flex w-full max-w-[460px] animate-page-in flex-col gap-9">
				<div className="flex flex-col items-center gap-[18px] text-center">
					<div className="relative size-[104px] overflow-hidden rounded-full border border-line bg-surface">
						<Image
							src={profile.avatar}
							alt={profile.name}
							fill
							sizes="104px"
							priority
							className="object-cover"
						/>
					</div>

					<div>
						<h1 className="text-[26px] font-semibold tracking-[-0.025em]">
							{profile.name}
						</h1>
						<p className="mt-2 text-[15px] text-muted">{linktree.role}</p>
					</div>

					<p className="max-w-[38ch] text-sm leading-[1.65] text-muted">
						{linktree.bio}
					</p>
				</div>

				<div className="flex flex-col gap-2.5">
					{linktree.links.map((item) => (
						<LinkCard
							key={item.label}
							icon={item.icon}
							label={item.label}
							value={item.value}
							href={item.href}
						/>
					))}
				</div>

				<Link
					href={localizedPath(lang, "/")}
					className="inline-flex items-center justify-center rounded-soft bg-ink px-5 py-[15px] text-sm font-semibold text-bg transition-opacity duration-200 hover:opacity-85"
				>
					{linktree.portfolio}
				</Link>

				<div className="text-center text-xs text-muted">{linktree.footer}</div>
			</div>
		</div>
	);
}
