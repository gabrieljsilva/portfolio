"use client";

import { useEffect, useState } from "react";

const TYPE_MS = 45;
const DELETE_MS = 22;
const HOLD_MS = 5200;
const NEXT_PHRASE_MS = 420;
const START_MS = 350;

export function Typewriter({ phrases }: { phrases: string[] }) {
	const [typed, setTyped] = useState(phrases[0]);
	const [current, setCurrent] = useState(phrases[0]);

	// Timer é sistema externo — o caso em que um efeito se justifica.
	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		let phraseIndex = 0;
		let charIndex = 0;
		let deleting = false;
		let timer: ReturnType<typeof setTimeout>;

		const step = () => {
			const full = phrases[phraseIndex];
			setCurrent(full);

			if (deleting) {
				charIndex -= 1;
				setTyped(full.slice(0, charIndex));
				if (charIndex > 0) {
					timer = setTimeout(step, DELETE_MS);
					return;
				}
				deleting = false;
				phraseIndex = (phraseIndex + 1) % phrases.length;
				timer = setTimeout(step, NEXT_PHRASE_MS);
				return;
			}

			charIndex += 1;
			setTyped(full.slice(0, charIndex));
			if (charIndex < full.length) {
				timer = setTimeout(step, TYPE_MS);
				return;
			}
			deleting = true;
			timer = setTimeout(step, HOLD_MS);
		};

		setTyped("");
		timer = setTimeout(step, START_MS);
		return () => clearTimeout(timer);
	}, [phrases]);

	// Reserva a largura do resto da palavra em curso, para o título não pular de linha.
	const ghost =
		typed.length >= current.length
			? ""
			: current.slice(
					typed.length,
					current.indexOf(" ", typed.length) === -1
						? current.length
						: current.indexOf(" ", typed.length),
				);

	return (
		<>
			{typed}
			<span
				aria-hidden="true"
				className="ml-[0.08em] inline-block h-[0.82em] w-[0.06em] animate-caret bg-ink align-baseline"
			/>
			<span aria-hidden="true" className="invisible">
				{ghost}
			</span>
		</>
	);
}
