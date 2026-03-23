import { FaExternalLinkAlt } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiTypescript, SiTailwindcss, SiPrisma } from 'react-icons/si';

const projectsData = [
  {
    title: 'Mining Auction System',
    description: 'A real-time auction of products such as coal, iron on MSE',
    techIcons: [
      { icon: <SiNextdotjs />, label: 'Next.js' },
      { icon: <SiExpress />, label: 'Express' },
      { icon: <SiTypescript />, label: 'TypeScript' },
      { icon: <SiTailwindcss />, label: 'Tailwind' },
      { icon: <SiPrisma />, label: 'Prisma' },
    ],
    linkText: 'Check Live Site',
    linkHref: '#',
  },
  {
    title: 'Multi-Agent Microservice',
    description: 'AI agents collaborating through microservices',
    techIcons: [
      { icon: <SiNextdotjs />, label: 'Next.js' },
      { icon: <SiTypescript />, label: 'TypeScript' },
      { icon: <SiTailwindcss />, label: 'Tailwind' },
    ],
    linkText: 'Github',
    linkHref: '#',
  },
];

const Projects = () => {
  return (
    <section className="section" id="projects">
      <h2 className="section-title projects-title">
        A small selection of{' '}
        <span className="accent-text">of recent projects</span>
      </h2>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-preview">
              <div className="project-preview-placeholder">
                <span>Project Preview</span>
              </div>
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-footer">
                <div className="project-tech-icons">
                  {project.techIcons.map((tech, i) => (
                    <span
                      key={i}
                      className="project-tech-icon"
                      title={tech.label}
                    >
                      {tech.icon}
                    </span>
                  ))}
                </div>

                <a href={project.linkHref} className="project-link">
                  {project.linkText}
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
