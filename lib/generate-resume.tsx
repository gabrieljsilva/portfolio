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
		fontSize: 18,
		fontWeight: "ultralight",
		marginBottom: 8,
		color: "#000",
	},
	role: {
		fontSize: 12,
		color: "#5b5b5b",
		fontWeight: "extralight",
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
		fontSize: 12,
		fontWeight: "extrabold",
		marginBottom: 6,
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
		marginBottom: 2,
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
	contactColumns: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 16,
		fontSize: 10,
	},
	contactColumn: {
		width: "48%",
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
				</View>

				{/* Contact Information Columns */}
				<View style={styles.contactColumns}>
					<View style={styles.contactColumn}>
						<Text>LinkedIn: gabrieldjs21</Text>
						<Text>Github: gabrieljsilva</Text>
						<Text>Portifólio: https://gabrieljs.dev</Text>
					</View>
					<View style={styles.contactColumn}>
						<Text>Telefone: (74) 99909-1508</Text>
						<Text>E-mail: gabrieldjs21@gmail.com</Text>
						<Text>Localização: Senhor do Bonfim, Bahia</Text>
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
					{profile.experiences
						.filter((exp) => exp.shouldShowInResume)
						.map((exp) => (
							<View key={exp.id} style={styles.experience}>
								<Text style={styles.company}>{exp.company}</Text>
								<Text style={styles.roleTitle}>{exp.role}</Text>
								<Text style={styles.date}>
									{exp.startDate} - {exp.endDate || ui.present}
								</Text>
								<Text style={styles.summaryText}>{exp.description}</Text>
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
