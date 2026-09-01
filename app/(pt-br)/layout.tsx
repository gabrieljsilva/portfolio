import { SiteShell } from "@/components/site-shell";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../globals.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://gabrieljs.dev"),
	icons: [{ rel: "icon", url: "/icon.png" }],
};

export default function PtBrLayout({ children }: { children: ReactNode }) {
	return <SiteShell lang="pt-br">{children}</SiteShell>;
}
