import { Mail } from "lucide-react";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

export const SocialLinks = () => (
	<div className="flex items-center justify-center gap-4">
		<Link
			href="https://github.com/gabrieljsilva"
			target="_blank"
			rel="noopener noreferrer"
			className="text-foreground hover:text-primary transition-colors"
		>
			<SiGithub className="w-6 h-6" />
		</Link>
		<Link
			href="https://www.linkedin.com/in/gabrieldjs21/"
			target="_blank"
			rel="noopener noreferrer"
			className="text-foreground hover:text-primary transition-colors"
		>
			<SiLinkedin className="w-6 h-6" />
		</Link>
		<Link
			href="mailto:contato@gabrieljs.dev"
			className="text-foreground hover:text-primary transition-colors"
		>
			<Mail className="w-6 h-6" />
		</Link>
	</div>
);
