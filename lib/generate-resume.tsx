import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { profile } from '@/constants/profile';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 10,
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    marginBottom: 4,
  },
  role: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  contact: {
    fontSize: 10,
    color: '#666',
    marginBottom: 2,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  experienceTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  experienceCompany: {
    fontSize: 11,
    color: '#666',
  },
  experienceDate: {
    fontSize: 10,
    color: '#888',
    marginBottom: 4,
  },
  text: {
    fontSize: 10,
    lineHeight: 1.4,
    color: '#444',
  },
  skillCategory: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  skillItem: {
    fontSize: 10,
    color: '#555',
    marginBottom: 2,
  },
});

export const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.role}>{profile.role}</Text>
        <Text style={styles.contact}>{profile.contact.email}</Text>
        <Text style={styles.contact}>
          {profile.location.city}, {profile.location.state}, {profile.location.country}
        </Text>
        <Text style={styles.contact}>LinkedIn: {profile.social.linkedin}</Text>
        <Text style={styles.contact}>GitHub: {profile.social.github}</Text>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.text}>{profile.resume}</Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        {profile.experiences.map((exp) => (
          <View key={exp.id} style={{ marginBottom: 10 }}>
            <Text style={styles.experienceTitle}>{exp.role}</Text>
            <Text style={styles.experienceCompany}>{exp.company}</Text>
            <Text style={styles.experienceDate}>
              {exp.startDate} - {exp.endDate || 'Present'}
            </Text>
            <Text style={styles.text}>{exp.detailedDescription}</Text>
            {exp.achievements.map((achievement) => (
              <Text key={achievement} style={styles.text}>• {achievement}</Text>
            ))}
          </View>
        ))}
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        {profile.skillsSet.map((skillSet) => (
          <View key={skillSet.category} style={{ marginBottom: 8 }}>
            <Text style={styles.skillCategory}>{skillSet.category}</Text>
            {skillSet.skills.map((skill) => (
              <Text key={skill.name} style={styles.skillItem}>
                • {skill.name}: {skill.description}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export const generateResumePDF = () => {
  return <ResumePDF />;
};
