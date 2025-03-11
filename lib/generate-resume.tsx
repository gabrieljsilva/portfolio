import type { Translation } from "@/constants/profile";
import { Document, Page, Text, View } from "@react-pdf/renderer";

export const ResumePDF = (translation: Translation) => {
	const { profile, ui } = translation;

	const colors = {
		black: "#09090B",
		darkGray: "#18181B",
		mediumGray: "#3F3F46",
		lightGray: "#71717A",
		lighterGray: "#A1A1AA",
		subtleGray: "#E4E4E7",
		white: "#FFFFFF",
		accent: "#0F172A",
	};

	return (
		<Document>
			<Page
				size="A4"
				style={{
					padding: 24,
					fontFamily: "Helvetica",
					fontSize: 11,
					color: colors.mediumGray,
					backgroundColor: colors.white,
				}}
			>
				{/* Header */}
				<View style={{ marginBottom: 16 }}>
					<Text
						style={{
							fontSize: 16,
							fontWeight: "900",
							marginBottom: 8,
							color: colors.black,
						}}
					>
						{profile.fullName}
					</Text>
					<Text style={{ fontSize: 12, color: colors.lighterGray }}>
						{profile.role}
					</Text>
				</View>

				{/* Contact Info */}
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginBottom: 16,
						backgroundColor: colors.subtleGray,
						padding: 6,
						borderRadius: 4,
						fontSize: 10,
					}}
				>
					<View style={{ width: "48%" }}>
						<Text style={{ marginBottom: 2 }}>LinkedIn: gabrieldjs21</Text>
						<Text style={{ marginBottom: 2 }}>Github: gabrieljsilva</Text>
						<Text>Portifólio: https://gabrieljs.dev</Text>
					</View>
					<View style={{ width: "48%" }}>
						<Text style={{ marginBottom: 2 }}>Telefone: (74) 99909-1508</Text>
						<Text style={{ marginBottom: 2 }}>
							E-mail: gabrieldjs21@gmail.com
						</Text>
						<Text>Localização: Senhor do Bonfim, Bahia</Text>
					</View>
				</View>

				{/* Professional Summary */}
				<View style={{ marginBottom: 16 }}>
					<View
						style={{
							borderBottom: 1,
							borderBottomColor: colors.subtleGray,
							paddingBottom: 2,
							marginBottom: 8,
						}}
					>
						<Text
							style={{
								fontSize: 14,
								fontWeight: "900",
								color: colors.black,
								textTransform: "uppercase",
								letterSpacing: 1,
							}}
						>
							{ui.professionalSummary}
						</Text>
					</View>
					<Text>{profile.resumeSummary}</Text>
				</View>

				{/* Professional Experience */}
				<View style={{ marginBottom: 16 }}>
					<View
						style={{
							borderBottom: 1,
							borderBottomColor: colors.subtleGray,
							paddingBottom: 2,
							marginBottom: 6,
						}}
					>
						<Text
							style={{
								fontSize: 14,
								fontWeight: "900",
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
									marginBottom: index === array.length - 1 ? 0 : 12,
									paddingBottom: index === array.length - 1 ? 0 : 12,
									borderBottom: index === array.length - 1 ? 0 : 1,
									borderBottomColor: colors.subtleGray,
								}}
							>
								<Text
									style={{
										fontSize: 11,
										fontWeight: "bold",
										color: colors.black,
										marginBottom: 1,
									}}
								>
									{exp.company}
								</Text>
								<Text
									style={{
										fontSize: 10,
										fontWeight: "semibold",
										color: colors.darkGray,
										marginBottom: 1,
									}}
								>
									{exp.role}
								</Text>
								<Text
									style={{
										fontSize: 8,
										color: colors.lightGray,
										marginBottom: 4,
									}}
								>
									{exp.startDate} - {exp.endDate || ui.present}
								</Text>
								<Text
									style={{
										marginBottom: 4,
									}}
								>
									{exp.description}
								</Text>

								{exp.achievements.slice(0, 3).map((achievement) => (
									<Text
										key={achievement}
										style={{
											fontSize: 8,
											marginBottom: 2,
											paddingLeft: 8,
										}}
									>
										• {achievement}
									</Text>
								))}
							</View>
						))}
				</View>

				{/* Academic Background */}
				<View style={{ marginBottom: 16 }}>
					<View
						style={{
							borderBottom: 1,
							borderBottomColor: colors.subtleGray,
							paddingBottom: 2,
							marginBottom: 8,
						}}
					>
						<Text
							style={{
								fontSize: 14,
								fontWeight: "900",
								color: colors.black,
								textTransform: "uppercase",
								letterSpacing: 1,
							}}
						>
							{ui.academicBackground}
						</Text>
					</View>

					<View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
						{profile.academicBackground.map((education) => (
							<View
								key={education.course}
								style={{
									width: "48%",
									backgroundColor: colors.subtleGray,
									padding: 8,
									borderRadius: 4,
								}}
							>
								<Text
									style={{
										fontSize: 10,
										fontWeight: "bold",
										color: colors.black,
										marginBottom: 2,
									}}
								>
									{education.location}
								</Text>
								<Text
									style={{
										fontSize: 9,
										fontWeight: "medium",
										color: colors.darkGray,
										marginBottom: 2,
									}}
								>
									{education.level} - {education.course}
								</Text>
								<Text style={{ fontSize: 8, marginBottom: 1 }}>
									{education.workload} - {education.status}
								</Text>
								<Text style={{ fontSize: 8 }}>
									{education.startDate}
									{education.endDate ? ` - ${education.endDate}` : ""}
								</Text>
							</View>
						))}
					</View>
				</View>

				{/* Technical Skills */}
				<View>
					<View
						style={{
							borderBottom: 1,
							borderBottomColor: colors.subtleGray,
							paddingBottom: 2,
							marginBottom: 8,
						}}
					>
						<Text
							style={{
								fontSize: 14,
								fontWeight: "900",
								color: colors.black,
								textTransform: "uppercase",
								letterSpacing: 1,
							}}
						>
							{ui.technicalSkills}
						</Text>
					</View>

					<View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
						{profile.skillsSet.map((skillSet) => (
							<View
								key={skillSet.category}
								style={{
									width: "31%",
									backgroundColor: colors.subtleGray,
									padding: 8,
									borderRadius: 4,
								}}
							>
								<Text
									style={{
										fontSize: 10,
										fontWeight: "bold",
										color: colors.black,
										marginBottom: 4,
									}}
								>
									{skillSet.category}
								</Text>
								<Text style={{ fontSize: 8 }}>
									{skillSet.skills.map((skill) => skill.name).join(", ")}
								</Text>
							</View>
						))}
					</View>
				</View>
			</Page>
		</Document>
	);
};
