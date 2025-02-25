"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/language-context";
import { useState } from "react";

interface Language {
	code: string;
	name: string;
	flag: string;
}

const languages: Language[] = [
	{
		code: "pt-br",
		name: "Português",
		flag: "https://flagsapi.com/BR/shiny/16.png",
	},
	{
		code: "en",
		name: "English",
		flag: "https://flagsapi.com/US/shiny/16.png",
	},
];

export function LanguageSwitcher() {
	const { currentLang, setCurrentLang } = useLanguage();
	const [isOpen, setIsOpen] = useState(false);

	const handleLanguageChange = (langCode: string) => {
		setCurrentLang(langCode);
		setIsOpen(false);
	};

	return (
		<div className="fixed bottom-6 left-6 z-50">
			<DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
				<DropdownMenuTrigger asChild>
					<Button
						variant="outline"
						size="icon"
						className="h-12 w-12 rounded-full border-2 bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-300"
					>
						<Globe className="h-5 w-5 text-foreground/80" />
						<span className="sr-only">Toggle language menu</span>
					</Button>
				</DropdownMenuTrigger>
				<AnimatePresence>
					{isOpen && (
						<DropdownMenuContent
							align="start"
							className="min-w-[140px] overflow-hidden"
							asChild
						>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 20 }}
								transition={{ duration: 0.2 }}
							>
								{languages.map((lang) => (
									<DropdownMenuItem
										key={lang.code}
										className={`flex items-center gap-2 text-sm mb-1 ${
											currentLang === lang.code
												? "bg-accent"
												: "hover:bg-accent/50"
										} cursor-pointer transition-colors`}
										onClick={() => handleLanguageChange(lang.code)}
									>
										<span className="text-lg">
											<img src={lang.flag} alt={`lang ${lang.name} flag`} />
										</span>
										<span>{lang.name}</span>
										{currentLang === lang.code && (
											<motion.div
												layoutId="activeIndicator"
												className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"
											/>
										)}
									</DropdownMenuItem>
								))}
							</motion.div>
						</DropdownMenuContent>
					)}
				</AnimatePresence>
			</DropdownMenu>
		</div>
	);
}
