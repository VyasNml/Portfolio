import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiTailwindcss,
  SiDocker,
  SiMongodb,
  SiPostgresql,
  SiCplusplus,
  SiC,
  SiHtml5,
  SiCss,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
} from 'react-icons/si';
import { FaAws, FaJava, FaChartLine, FaChartBar } from 'react-icons/fa';


const skillsData = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'C', icon: <SiC /> },
      { name: 'Java', icon: <FaJava /> }
    ]
  },
  {
    category: 'Web Technologies',
    skills: [
      { name: 'React.js', icon: <SiReact /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'HTML', icon: <SiHtml5 /> },
      { name: 'CSS', icon: <SiCss /> }
    ]
  },
  {
    category: 'Libraries',
    skills: [
      { name: 'Numpy', icon: <SiNumpy /> },
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn /> },
      // { name: 'PostgreSQL', icon: <SiPostgresql /> }
    ]
  },
  // {
    // category: 'DevOps & Tools',
    // skills: [
      // { name: 'Docker', icon: <SiDocker /> },
      // { name: 'AWS', icon: <FaAws /> }
    // ]
  // }
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">
        <span className="accent-text">Skills</span> & Technologies
      </h2>

      <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {skillsData.map((group, index) => (
          <div className="bento-card tech-card" key={index}>
            <span className="tech-card-label">{group.category}</span>
            <div className="tech-badges" style={{ marginTop: '0.5rem' }}>
              {group.skills.map((skill, i) => (
                <div className="tech-badge" key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', padding: '0.6rem 1rem' }}>
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
