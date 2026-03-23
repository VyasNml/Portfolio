import { FaCertificate, FaGraduationCap } from 'react-icons/fa';

const certsData = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Expected 2024',
    icon: <FaCertificate />,
    description: 'Preparing for the associate level certification focusing on distributed systems and cloud architecture.',
  },
  {
    title: 'Red Hat Certified System Administrator',
    issuer: 'Red Hat',
    date: 'Expected 2024',
    icon: <FaCertificate />,
    description: 'Working towards practical certification in Linux system administration.',
  },
  {
    title: 'Advanced React Patterns',
    issuer: 'Frontend Masters',
    date: '2023',
    icon: <FaGraduationCap />,
    description: 'Comprehensive course on modern React architecture, performance, and state management.',
  }
];

const Certifications = () => {
  return (
    <section className="section" id="certifications">
      <h2 className="section-title">
        Certifications <span className="accent-text">& Courses</span>
      </h2>

      <div className="education-grid">
        {certsData.map((cert, index) => (
          <div className="edu-card" key={index}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <h3>{cert.title}</h3>
              <div style={{ color: 'var(--accent)', fontSize: '1.2rem' }}>
                {cert.icon}
              </div>
            </div>
            
            <div className="date">{cert.date}</div>
            <div className="gpa">
              <span>{cert.issuer}</span>
            </div>
            <p className="institution">{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
