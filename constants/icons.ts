import { Globe, Mail, Phone } from "lucide-react";
import type { ComponentType } from "react";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

/** Interseção entre lucide-react e react-icons: as duas aceitam className. */
export type LinkIcon = ComponentType<{ className?: string }>;

/**
 * Ícones dos cards de link. As traduções guardam só a chave (`"github"`),
 * porque componentes não atravessam a fronteira servidor → cliente.
 */
export const linkIcons = {
	github: SiGithub,
	linkedin: SiLinkedin,
	instagram: SiInstagram,
	globe: Globe,
	mail: Mail,
	phone: Phone,
} satisfies Record<string, LinkIcon>;

export type LinkIconName = keyof typeof linkIcons;
