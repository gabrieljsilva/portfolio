"use client";

import { LoadingButton } from "@/components/loading-button";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/constants/profile";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
	message: z.string().min(10, {
		message: "Message must be at least 10 characters.",
	}),
});

export default function ContactModal() {
	const [open, setOpen] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setIsLoading(true);
		const formData = new FormData();
		formData.append("name", values.name);
		formData.append("email", values.email);
		formData.append("message", values.message);
		formData.append("access_key", profile.contact.formAccessKey);

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData,
			});
			await response.json();
			toast.success("message sent successfully", {
				position: "top-center",
			});
		} catch {
			toast.error("error on sending message", {
				position: "top-center",
			});
		} finally {
			setIsLoading(false);
			setOpen(false);
		}
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<LoadingButton
					loading={isLoading}
					size="lg"
					variant="outline"
					className="min-w-[160px]"
				>
					Get in Touch
				</LoadingButton>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Get in Touch</DialogTitle>
					<DialogDescription>
						Send me a message and I&apos;ll get back to you as soon as possible.
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-4 pt-4"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>What&apos;s your name?</FormLabel>
									<FormControl>
										<Input placeholder="Your name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Your email address</FormLabel>
									<FormControl>
										<Input
											placeholder="your.email@example.com"
											type="email"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Your message</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Type your message here..."
											className="min-h-[120px] resize-none"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex justify-end space-x-4 pt-4">
							<Button
								variant="outline"
								onClick={() => setOpen(false)}
								type="button"
							>
								Cancel
							</Button>
							<Button type="submit" disabled={isLoading}>
								{isLoading ? "Sending..." : "Send message"}
							</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
