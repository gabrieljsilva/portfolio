import { profile } from "@/constants/profile";
import type { Translation } from "@/lib/i18n";
import { Document, Link, Page, Text, View } from "@react-pdf/renderer";

/** 1 cm ≈ 28,3465 pt. A referência pede 2,5 cm nos quatro lados. */
const MARGIN = 70.87;

const LINK_COLOR = "#1155cc";

/** Recuo do texto do marcador, medido no documento de referência. */
const BULLET_INDENT = 22;

const styles = {
	page: {
		paddingTop: MARGIN,
		paddingBottom: MARGIN,
		paddingLeft: MARGIN,
		paddingRight: MARGIN,
		fontFamily: "Helvetica",
		fontSize: 11,
		lineHeight: 1.35,
		color: "#000000",
		backgroundColor: "#FFFFFF",
	},
	sectionTitle: {
		fontFamily: "Helvetica-Bold",
		fontSize: 11,
		marginBottom: 6,
	},
	paragraph: {
		marginBottom: 8,
		textAlign: "justify" as const,
	},
	bulletRow: {
		flexDirection: "row" as const,
		marginBottom: 2,
	},
	bulletMark: {
		width: BULLET_INDENT,
	},
	link: {
		color: LINK_COLOR,
		textDecoration: "underline" as const,
	},
} as const;

function Bullet({ children }: { children: string }) {
	return (
		<View style={styles.bulletRow}>
			{/* U+2022: a Helvetica embutida não tem o ● (U+25CF) do documento original. */}
			<Text style={styles.bulletMark}>•</Text>
			<Text style={{ flex: 1 }}>{children}</Text>
		</View>
	);
}

function SectionTitle({ children }: { children: string }) {
	return (
		<Text style={styles.sectionTitle} minPresenceAhead={120}>
			{children.toUpperCase()}
		</Text>
	);
}

export function ResumeDocument({ t }: { t: Translation }) {
	const resume = t.resume;

	return (
		<Document
			title={`${profile.name} - ${resume.role}`}
			author={profile.name}
			subject={resume.role}
		>
			<Page size="A4" style={styles.page}>
				<View style={{ marginBottom: 14 }}>
					<Text style={{ fontFamily: "Helvetica-Bold", fontSize: 14 }}>
						{profile.name}
					</Text>
					<Text style={{ marginBottom: 8 }}>{resume.role}</Text>

					<Text>{profile.birthDate}</Text>
					<Text>{profile.city}</Text>
					<Text>{profile.phone}</Text>
					<Text>
						<Link style={styles.link} src={`mailto:${profile.email}`}>
							{profile.email}
						</Link>
					</Text>
					<Text>
						<Link style={styles.link} src={profile.social.linkedin}>
							{profile.social.linkedin}
						</Link>
					</Text>
					<Text>
						<Link style={styles.link} src={profile.social.website}>
							{profile.social.website}
						</Link>
					</Text>
					<Text>
						<Link style={styles.link} src={profile.social.github}>
							{profile.social.github}
						</Link>
					</Text>
				</View>

				<SectionTitle>{resume.summaryTitle}</SectionTitle>
				{resume.summary.map((paragraph) => (
					<Text key={paragraph} style={styles.paragraph}>
						{paragraph}
					</Text>
				))}
				<Text style={{ marginBottom: 4 }}>{resume.resultsLead}</Text>
				<View style={{ marginBottom: 14 }}>
					{resume.results.map((result) => (
						<Bullet key={result}>{result}</Bullet>
					))}
				</View>

				<SectionTitle>{resume.educationTitle}</SectionTitle>
				<View style={{ marginBottom: 14 }}>
					{resume.education.map((entry) => (
						<Text key={entry} style={{ marginBottom: 8 }}>
							{entry}
						</Text>
					))}
				</View>

				<SectionTitle>{resume.experienceTitle}</SectionTitle>
				{resume.experience.map((job) => (
					<View key={job.company} style={{ marginBottom: 12 }} wrap={false}>
						<Text style={{ fontFamily: "Helvetica-Bold" }}>{job.company}</Text>
						{job.note ? (
							<Text style={{ fontFamily: "Helvetica-Oblique" }}>
								{job.note}
							</Text>
						) : null}
						<Text style={{ marginBottom: 3 }}>{job.role}</Text>
						{job.bullets.map((bullet) => (
							<Bullet key={bullet}>{bullet}</Bullet>
						))}
					</View>
				))}

				<SectionTitle>{resume.projectsTitle}</SectionTitle>
				{resume.projects.map((project) => (
					<View key={project.name} style={{ marginBottom: 12 }} wrap={false}>
						<Text style={{ fontFamily: "Helvetica-Bold" }}>{project.name}</Text>
						<Text style={{ fontFamily: "Helvetica-Oblique" }}>
							{project.kind}
						</Text>
						<Text style={{ marginBottom: 3 }}>{project.role}</Text>
						{project.bullets.map((bullet) => (
							<Bullet key={bullet}>{bullet}</Bullet>
						))}
					</View>
				))}

				<SectionTitle>{resume.skillsTitle}</SectionTitle>
				<View>
					{resume.skills.map((skill) => (
						<Bullet key={skill}>{skill}</Bullet>
					))}
				</View>
			</Page>
		</Document>
	);
}
