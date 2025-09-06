import type { Translation } from "@/constants/profile";
import { Document, Page, Text, View, Link, Font } from "@react-pdf/renderer";

// Register Roboto fonts from public folder
Font.register({
	family: "Roboto",
	fonts: [
		{ src: "/fonts/roboto/static/Roboto-Regular.ttf", fontWeight: 400 },
		{ src: "/fonts/roboto/static/Roboto-Bold.ttf", fontWeight: 700 },
	],
});

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
					// Page margins (in points). 1 cm ≈ 28.3465 pt
					paddingTop: 70.87, // 2.5 cm
					paddingBottom: 63.78, // 2.25 cm
					paddingLeft: 85.04, // 3 cm
					paddingRight: 85.04, // 3 cm
					fontFamily: "Roboto",
					fontSize: 11,
					color: "#000000",
					backgroundColor: "#FFFFFF",
				}}
			>
				{/* Header */}
				<View style={{ marginBottom: 16 }}>
					<Text
						style={{
							fontSize: 16,
							fontWeight: "bold",
							marginBottom: 4,
							color: colors.black,
						}}
					>
						{profile.fullName}
					</Text>
					<Text style={{ fontSize: 12 }}>{profile.role}</Text>
				</View>

				{/* Contact Info */}
				<View style={{ marginBottom: 12 }}>
					<Text style={{ marginBottom: 2 }}>
						E-mail: <Link src={`mailto:${profile.contact.email}`}>{profile.contact.email}</Link>
					</Text>
					<Text style={{ marginBottom: 2 }}>
						{ui.phone}: <Link src={`tel:${profile.contact.phone}`}>{profile.contact.phone}</Link>
					</Text>
					<Text style={{ marginBottom: 2 }}>
						{ui.location}: {profile.location.city}, {profile.location.state}
					</Text>
					<Text style={{ marginBottom: 2 }}>
						LinkedIn: <Link src={profile.social.linkedin}>{profile.social.linkedin}</Link>
					</Text>
					<Text style={{ marginBottom: 2 }}>
						Github: <Link src={profile.social.github}>{profile.social.github}</Link>
					</Text>
					<Text>
						{ui.portfolio}: <Link src={profile.social.website}>{profile.social.website}</Link>
					</Text>
				</View>

				{/* Professional Summary */}
				<View style={{ marginBottom: 12 }}>
					<Text style={{ fontWeight: "bold", marginBottom: 4 }}>{ui.professionalSummary}</Text>
					<Text>{profile.resumeSummary}</Text>
				</View>

				{/* Professional Experience */}
				<View style={{ marginBottom: 12 }}>
					<Text style={{ fontWeight: "bold", marginBottom: 6 }}>{ui.professionalExperience}</Text>

					{profile.experiences
						.filter((exp) => exp.shouldShowInResume)
						.map((exp) => (
							<View key={exp.id} style={{ marginBottom: 10 }}>
								<Text style={{ fontWeight: "bold" }}>{exp.company}</Text>
								<Text style={{ marginBottom: 2 }}>{exp.role}</Text>
								<Text style={{ marginBottom: 4 }}>
									{exp.startDate} - {exp.endDate || ui.present}
								</Text>
								{exp.description ? (
									<Text style={{ marginBottom: 4 }}>{exp.description}</Text>
								) : null}
								{Array.isArray(exp.achievements) && exp.achievements.length > 0
									? exp.achievements.map((achievement) => (
											<Text key={achievement} style={{ marginBottom: 2 }}>
												• {achievement}
											</Text>
										))
									: null}
							</View>
						))}
				</View>

				{/* Academic Background */}
				<View style={{ marginBottom: 12 }}>
					<Text style={{ fontWeight: "bold", marginBottom: 6 }}>{ui.academicBackground}</Text>
					{profile.academicBackground.map((education) => (
						<View key={education.course} style={{ marginBottom: 6 }}>
							<Text style={{ fontWeight: "bold" }}>{education.location}</Text>
							<Text>
								{education.level} - {education.course}
							</Text>
							<Text>
								{education.workload} - {education.status}
							</Text>
							<Text>
								{education.startDate}
								{education.endDate ? ` - ${education.endDate}` : ""}
							</Text>
						</View>
					))}
				</View>

				{/* Technical Skills */}
				<View>
					<Text style={{ fontWeight: "bold", marginBottom: 6 }}>{ui.technicalSkills}</Text>
					{profile.skillsSet.map((skillSet) => (
						<Text key={skillSet.category} style={{ marginBottom: 2 }}>
							• {skillSet.category}: {skillSet.skills.map((skill) => skill.name).join(", ")}
						</Text>
					))}
				</View>
			</Page>
		</Document>
	);
};
