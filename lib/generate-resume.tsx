import type { Translation } from "@/constants/profile";
import { Document, Page, Text, View } from "@react-pdf/renderer";

export const ResumePDF = (translation: Translation) => {
	const { profile, ui } = translation;

	// Tailwind/Shadcn inspired color palette
	const colors = {
		black: "#09090B", // slate-950
		darkGray: "#18181B", // zinc-900
		mediumGray: "#3F3F46", // zinc-700
		lightGray: "#71717A", // zinc-500
		lighterGray: "#A1A1AA", // zinc-400
		subtleGray: "#E4E4E7", // zinc-200
		white: "#FFFFFF",
		accent: "#0F172A", // slate-900
	};

	return (
		<Document>
			<Page
				size="A4"
				style={{
					padding: 40,
					fontFamily: "Helvetica",
					fontSize: 10,
					lineHeight: 1.5,
					color: colors.mediumGray,
					backgroundColor: colors.white,
				}}
			>
				{/* ===== HEADER SECTION ===== */}
				<View style={{ marginBottom: 24 }}>
					<Text
						style={{
							fontSize: 24,
							fontWeight: "bold",
							marginBottom: 12,
							color: colors.black,
						}}
					>
						{profile.fullName}
					</Text>
					<Text
						style={{
							fontSize: 14,
							color: colors.lighterGray,
							fontWeight: "100",
						}}
					>
						{profile.role}
					</Text>
				</View>

				{/* ===== CONTACT INFORMATION ===== */}
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginBottom: 24,
						fontSize: 10,
						backgroundColor: colors.subtleGray,
						padding: 8,
						borderRadius: 4,
					}}
				>
					<View style={{ width: "48%" }}>
						<Text style={{ color: colors.mediumGray, marginBottom: 4 }}>
							LinkedIn: gabrieldjs21
						</Text>
						<Text style={{ color: colors.mediumGray, marginBottom: 4 }}>
							Github: gabrieljsilva
						</Text>
						<Text style={{ color: colors.mediumGray }}>
							Portifólio: https://gabrieljs.dev
						</Text>
					</View>
					<View style={{ width: "48%" }}>
						<Text style={{ color: colors.mediumGray, marginBottom: 4 }}>
							Telefone: (74) 99909-1508
						</Text>
						<Text style={{ color: colors.mediumGray, marginBottom: 4 }}>
							E-mail: gabrieldjs21@gmail.com
						</Text>
						<Text style={{ color: colors.mediumGray }}>
							Localização: Senhor do Bonfim, Bahia
						</Text>
					</View>
				</View>

				{/* ===== PROFESSIONAL SUMMARY ===== */}
				<View style={{ marginBottom: 28 }}>
					<View
						style={{
							borderBottom: 1,
							borderBottomColor: colors.subtleGray,
							paddingBottom: 4,
							marginBottom: 12,
						}}
					>
						<Text
							style={{
								fontSize: 14,
								fontWeight: "bold",
								color: colors.black,
								textTransform: "uppercase",
								letterSpacing: 1,
							}}
						>
							{ui.professionalSummary}
						</Text>
					</View>
					<Text
						style={{
							fontSize: 10,
							color: colors.mediumGray,
							lineHeight: 1.6,
						}}
					>
						{profile.resumeSummary}
					</Text>
				</View>

				{/* ===== PROFESSIONAL EXPERIENCE ===== */}
				<View style={{ marginBottom: 28 }}>
					<View
						style={{
							borderBottom: 1,
							borderBottomColor: colors.subtleGray,
							paddingBottom: 4,
							marginBottom: 12,
						}}
					>
						<Text
							style={{
								fontSize: 14,
								fontWeight: "bold",
								color: colors.black,
								textTransform: "uppercase",
								letterSpacing: 1,
							}}
						>
							{ui.professionalExperience}
						</Text>
					</View>

					{profile.experiences
						.filter((exp) => exp.shouldShowInResume)
						.map((exp, index, array) => (
							<View
								key={exp.id}
								style={{
									marginBottom: index === array.length - 1 ? 0 : 16,
									paddingBottom: index === array.length - 1 ? 0 : 16,
									borderBottom: index === array.length - 1 ? 0 : 1,
									borderBottomColor: colors.subtleGray,
								}}
							>
								<Text
									style={{
										fontSize: 12,
										fontWeight: "bold",
										color: colors.black,
										marginBottom: 2,
									}}
								>
									{exp.company}
								</Text>
								<Text
									style={{
										fontSize: 11,
										fontWeight: "semibold",
										color: colors.darkGray,
										marginBottom: 2,
									}}
								>
									{exp.role}
								</Text>
								<Text
									style={{
										fontSize: 9,
										color: colors.lightGray,
										marginBottom: 6,
									}}
								>
									{exp.startDate} - {exp.endDate || ui.present}
								</Text>
								<Text
									style={{
										fontSize: 10,
										color: colors.mediumGray,
										marginBottom: 8,
										lineHeight: 1.6,
									}}
								>
									{exp.description}
								</Text>

								{exp.achievements.slice(0, 3).map((achievement) => (
									<Text
										key={achievement}
										style={{
											fontSize: 9,
											color: colors.mediumGray,
											marginBottom: 4,
											paddingLeft: 12,
											lineHeight: 1.5,
										}}
									>
										• {achievement}
									</Text>
								))}
							</View>
						))}
				</View>

				{/* ===== ACADEMIC BACKGROUND ===== */}
				<View style={{ marginBottom: 28 }}>
					<View
						style={{
							borderBottom: 1,
							borderBottomColor: colors.subtleGray,
							paddingBottom: 4,
							marginBottom: 12,
						}}
					>
						<Text
							style={{
								fontSize: 14,
								fontWeight: "bold",
								color: colors.black,
								textTransform: "uppercase",
								letterSpacing: 1,
							}}
						>
							{ui.academicBackground}
						</Text>
					</View>

					{profile.academicBackground.map((education, index, array) => (
						<View
							key={education.course}
							style={{
								marginBottom: index === array.length - 1 ? 0 : 12,
							}}
						>
							<Text
								style={{
									fontSize: 11,
									fontWeight: "bold",
									color: colors.black,
									marginBottom: 2,
								}}
							>
								{education.location}
							</Text>
							<Text
								style={{
									fontSize: 10,
									fontWeight: "medium",
									color: colors.darkGray,
									marginBottom: 2,
								}}
							>
								{education.level} - {education.course} - {education.workload} -{" "}
								{education.status}
							</Text>
							<Text
								style={{
									fontSize: 9,
									color: colors.lightGray,
									marginBottom: 2,
								}}
							>
								{education.startDate}
								{education.endDate ? ` - ${education.endDate}` : ""}
							</Text>
						</View>
					))}
				</View>

				{/* ===== TECHNICAL SKILLS ===== */}
				<View style={{ marginBottom: 16 }}>
					<View
						style={{
							borderBottom: 1,
							borderBottomColor: colors.subtleGray,
							paddingBottom: 4,
							marginBottom: 12,
						}}
					>
						<Text
							style={{
								fontSize: 14,
								fontWeight: "bold",
								color: colors.black,
								textTransform: "uppercase",
								letterSpacing: 1,
							}}
						>
							{ui.technicalSkills}
						</Text>
					</View>

					{profile.skillsSet.map((skillSet, index, array) => (
						<View
							key={skillSet.category}
							style={{
								marginBottom: index === array.length - 1 ? 0 : 8,
							}}
						>
							<Text
								style={{
									fontSize: 11,
									fontWeight: "bold",
									color: colors.black,
									marginBottom: 4,
								}}
							>
								{skillSet.category}
							</Text>
							<Text
								style={{
									fontSize: 9,
									color: colors.mediumGray,
									marginBottom: 4,
									lineHeight: 1.5,
								}}
							>
								{skillSet.skills.map((skill) => skill.name).join(", ")}
							</Text>
						</View>
					))}
				</View>
			</Page>
		</Document>
	);
};
