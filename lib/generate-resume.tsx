// generate-resume.tsx
import {
	Document,
	Page,
	Text,
	View,
	StyleSheet,
	PDFViewer,
	Link,
} from "@react-pdf/renderer";
import { profile } from "@/constants/profile";

const styles = StyleSheet.create({
	page: {
		padding: 30,
		fontFamily: "Helvetica",
		fontSize: 10,
		lineHeight: 1.4,
	},
	header: {
		marginBottom: 20,
		borderBottomWidth: 1,
		borderBottomColor: "#334155",
		paddingBottom: 12,
	},
	name: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#1e293b",
		marginBottom: 4,
	},
	role: {
		fontSize: 14,
		color: "#64748b",
		marginBottom: 8,
	},
	contactRow: {
		flexDirection: "row",
		gap: 16,
		marginBottom: 6,
	},
	contactItem: {
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
	},
	section: {
		marginBottom: 14,
	},
	sectionTitle: {
		fontSize: 12,
		fontWeight: "bold",
		color: "#1e293b",
		marginBottom: 8,
		textTransform: "uppercase",
		letterSpacing: 0.5,
		borderBottomWidth: 1,
		borderBottomColor: "#e2e8f0",
		paddingBottom: 4,
	},
	experience: {
		marginBottom: 12,
	},
	companyRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 4,
	},
	company: {
		fontSize: 11,
		fontWeight: "bold",
		color: "#1e293b",
	},
	date: {
		fontSize: 10,
		color: "#64748b",
	},
	roleTitle: {
		fontSize: 10,
		color: "#475569",
		marginBottom: 6,
	},
	achievementList: {
		marginLeft: 12,
	},
	achievementItem: {
		fontSize: 10,
		color: "#475569",
		marginBottom: 4,
	},
	skillCategory: {
		fontSize: 10,
		fontWeight: "bold",
		color: "#1e293b",
		marginBottom: 6,
	},
	skillItems: {
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 6,
		marginBottom: 12,
	},
	skillItem: {
		backgroundColor: "#f1f5f9",
		borderRadius: 4,
		paddingVertical: 2,
		paddingHorizontal: 6,
		fontSize: 9,
		color: "#334155",
	},
});

export const ResumePDF = () => (
	<Document>
		<Page size="A4" style={styles.page}>
			{/* Header Section */}
			<View style={styles.header}>
				<Text style={styles.name}>{profile.fullName}</Text>
				<Text style={styles.role}>{profile.role}</Text>

				<View style={styles.contactRow}>
					<View style={styles.contactItem}>
						<Text>
							{profile.location.city}, {profile.location.country}
						</Text>
					</View>
				</View>

				<View style={styles.contactRow}>
					<View style={styles.contactItem}>
						<Link src={`mailto:${profile.contact.email}`}>
							{profile.contact.email}
						</Link>
					</View>
					<View style={styles.contactItem}>
						<Link src={profile.social.linkedin}>LinkedIn</Link>
					</View>
					<View style={styles.contactItem}>
						<Link src={profile.social.github}>GitHub</Link>
					</View>
				</View>
			</View>

			{/* Summary */}
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Summary</Text>
				<Text>{profile.resumeSummary}</Text>
			</View>

			{/* Experience */}
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Professional Experience</Text>
				{profile.experiences.map((exp) => (
					<View key={exp.id} style={styles.experience}>
						<View style={styles.companyRow}>
							<Text style={styles.company}>{exp.company}</Text>
							<Text style={styles.date}>
								{exp.startDate} - {exp.endDate || "Present"}
							</Text>
						</View>
						<Text style={styles.roleTitle}>{exp.role}</Text>
						<View style={styles.achievementList}>
							{exp.achievements.slice(0, 3).map((achievement) => (
								<Text key={achievement} style={styles.achievementItem}>
									• {achievement}
								</Text>
							))}
						</View>
					</View>
				))}
			</View>

			{/* Skills */}
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Technical Skills</Text>
				{profile.skillsSet.map((skillSet) => (
					<View key={skillSet.category}>
						<Text style={styles.skillCategory}>{skillSet.category}</Text>
						<View style={styles.skillItems}>
							{skillSet.skills.map((skill) => (
								<Text key={skill.name} style={styles.skillItem}>
									{skill.name}
								</Text>
							))}
						</View>
					</View>
				))}
			</View>
		</Page>
	</Document>
);

export const generateResumePDF = () => {
	return <ResumePDF />;
};
