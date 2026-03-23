import { HiCode, HiServer, HiUserGroup, HiCloud } from 'react-icons/hi';

const experienceData = [
  {
    icon: <HiCode />,
    title: 'Frontend Engineer',
    description:
      'Deployed three projects as a team leader, and built a real-time auction interface. Continuously improving UX, now exploring Framer Motion for animations.',
    glowColor: 'rgba(168, 85, 247, 0.15)',
  },
  {
    icon: <HiServer />,
    title: 'Backend Engineer',
    description:
      'Designed and built ISO-secure monolith and microservices systems where over 100 million USD worth of trades have been executed.',
    glowColor: 'rgba(0, 232, 123, 0.15)',
  },
  {
    icon: <HiUserGroup />,
    title: 'Teammate',
    description:
      'Worked with stakeholders to develop Mining Commodity Exchange System. Led development team, and deployed projects successfully.',
    glowColor: 'rgba(251, 191, 36, 0.15)',
  },
  {
    icon: <HiCloud />,
    title: 'Aspiring DevOps',
    description:
      'Maintained multiple systems in production and currently preparing for Red Hat and AWS Solutions Architect certifications.',
    glowColor: 'rgba(239, 68, 68, 0.15)',
  },
];

const Experience = () => {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">
        My <span className="accent-text">Experience</span>
      </h2>

      <div className="experience-grid">
        {experienceData.map((exp, index) => (
          <div
            className="experience-card"
            key={index}
            style={{ '--glow-color': exp.glowColor }}
          >
            <div className="experience-icon">{exp.icon}</div>
            <div className="experience-content">
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
