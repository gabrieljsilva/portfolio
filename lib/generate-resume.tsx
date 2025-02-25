import type { Translation } from "@/constants/profile";
import {
	Document,
	Link,
	Page,
	StyleSheet,
	Text,
	View,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
	page: {
		padding: 40,
		fontFamily: "Helvetica",
		fontSize: 10,
		lineHeight: 1.5,
		color: "#000", // primary text: black
		backgroundColor: "#FFF", // white background
	},
	header: {
		marginBottom: 16,
	},
	name: {
		fontSize: 26,
		fontWeight: "bold",
		marginBottom: 18,
		color: "#000",
	},
	role: {
		fontSize: 16,
		color: "#5b5b5b",
		marginBottom: 16,
	},
	contactSection: {
		flexDirection: "column",
		marginBottom: 1,
	},
	contactRow: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 1,
	},
	contactLabel: {
		fontWeight: "bold",
		color: "#555",
		marginRight: 6,
		fontSize: 10,
	},
	contactValue: {
		color: "#333",
		fontSize: 10,
	},
	locationSection: {
		marginTop: 10,
	},
	section: {
		marginBottom: 16,
	},
	sectionTitle: {
		fontSize: 14,
		fontWeight: "900",
		marginBottom: 6,
		letterSpacing: 0.8,
		color: "#000",
	},
	summaryText: {
		fontSize: 10,
		color: "#333",
	},
	experience: {
		marginBottom: 16,
	},
	company: {
		fontSize: 12,
		fontWeight: "bold",
		color: "#000",
		marginBottom: 2,
	},
	roleTitle: {
		fontSize: 11,
		fontWeight: "bold",
		color: "#333",
		marginBottom: 2,
	},
	date: {
		fontSize: 9,
		color: "#777",
		marginBottom: 6,
	},
	achievementItem: {
		fontSize: 9,
		color: "#555",
		marginBottom: 4,
		paddingLeft: 12,
	},
	skillCategory: {
		fontSize: 11,
		fontWeight: "bold",
		color: "#000",
		marginBottom: 4,
	},
	skillItems: {
		fontSize: 9,
		color: "#555",
		marginBottom: 6,
	},
});

export const ResumePDF = (translation: Translation) => {
	const { profile, ui } = translation;
	return (
		<Document>
			<Page size="A4" style={styles.page}>
				{/* Header Section */}
				<View style={styles.header}>
					<Text style={styles.name}>{profile.fullName}</Text>
					<Text style={styles.role}>{profile.role}</Text>

					<View style={styles.contactSection}>
						<View style={styles.contactRow}>
							<Text style={styles.contactLabel}>Email:</Text>
							<Link
								style={styles.contactValue}
								src={`mailto:${profile.contact.email}`}
							>
								{profile.contact.email}
							</Link>
						</View>
						<View style={styles.contactRow}>
							<Text style={styles.contactLabel}>LinkedIn:</Text>
							<Link style={styles.contactValue} src={profile.social.linkedin}>
								linkedin.com/in/gabrieldjs21
							</Link>
						</View>
						<View style={styles.contactRow}>
							<Text style={styles.contactLabel}>GitHub:</Text>
							<Link style={styles.contactValue} src={profile.social.github}>
								github.com/gabrieljsilva
							</Link>
						</View>
						<View style={styles.contactRow}>
							<Text style={styles.contactLabel}>Website:</Text>
							<Link style={styles.contactValue} src={profile.social.website}>
								gabrieljs.dev
							</Link>
						</View>
						<View style={styles.locationSection}>
							<Text style={styles.contactLabel}>
								{ui.location}: {profile.location.city},{" "}
								{profile.location.country}
							</Text>
						</View>
					</View>
				</View>

				{/* Professional Summary */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>
						{ui.professionalSummary.toUpperCase()}
					</Text>
					<Text style={styles.summaryText}>{profile.resumeSummary}</Text>
				</View>

				{/* Experience */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>
						{ui.professionalExperience.toUpperCase()}
					</Text>
					{profile.experiences.map((exp) => (
						<View key={exp.id} style={styles.experience}>
							<Text style={styles.company}>{exp.company}</Text>
							<Text style={styles.roleTitle}>{exp.role}</Text>
							<Text style={styles.date}>
								{exp.startDate} - {exp.endDate || ui.present}
							</Text>
							{exp.achievements.slice(0, 3).map((achievement) => (
								<Text key={achievement} style={styles.achievementItem}>
									• {achievement}
								</Text>
							))}
						</View>
					))}
				</View>

				{/* Technical Skills */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>
						{ui.technicalSkills.toUpperCase()}
					</Text>
					{profile.skillsSet.map((skillSet) => (
						<View key={skillSet.category} style={{ marginBottom: 4 }}>
							<Text style={styles.skillCategory}>{skillSet.category}</Text>
							<Text style={styles.skillItems}>
								{skillSet.skills.map((skill) => skill.name).join(", ")}
							</Text>
						</View>
					))}
				</View>
			</Page>
		</Document>
	);
};
