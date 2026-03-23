import { FaExternalLinkAlt, FaChartLine } from 'react-icons/fa';
import { SiPython, SiPandas, SiNumpy } from 'react-icons/si';
import ecgThumbnail from '../assets/ecg_thumbnail.png';
import nflThumbnail from '../assets/nfl_thumbnail.png';

const projectsData = [
  {
    title: 'Vital Signal Monitoring Visualization',
    description: 'Built a standalone desktop executable vital visualization system to simulate a 40-channel analog data input using PyQt5 and PyQtGraph. Includes interactive heatmaps, waveform viewers, and fast preprocessing with Pandas and NumPy for smooth rendering.',
    image: ecgThumbnail,
    techIcons: [
      { icon: <SiPython />, label: 'Python (PyQt5, PyQtGraph)' },
      { icon: <SiPandas />, label: 'Pandas' },
      { icon: <SiNumpy />, label: 'NumPy' },
    ],
    // linkText: 'Github',
    linkHref: '#',
  },
  {
    title: 'Visual Analytics of NFL Teams',
    description: 'Analyzed NFL data across 10 years to identify trends and performance patterns among top teams. Visualized insights through interactive charts and heatmaps, highlighting Key Performance Indicators for accurate predictions and reporting.',
    image: nflThumbnail,
    techIcons: [
      { icon: <SiPython />, label: 'Python' },
      { icon: <SiPandas />, label: 'Pandas' },
      { icon: <SiNumpy />, label: 'NumPy' },
      { icon: <FaChartLine />, label: 'Matplotlib/Seaborn' },
    ],
  //  linkText: 'Github',
    linkHref: '#',
  },
];

const Projects = () => {
  return (
    <section className="section" id="projects">
      <h2 className="section-title projects-title">
        A small selection of{' '}
        <span className="accent-text">recent projects</span>
      </h2>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-preview">
              {project.image ? (
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <div className="project-preview-placeholder">
                  <span>Project Preview</span>
                </div>
              )}
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p style={{ fontSize: '0.8rem', lineHeight: '1.6', marginBottom: '1.2rem'}}>{project.description}</p>

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

                {project.linkText && (
                  <a href={project.linkHref} className="project-link">
                    {project.linkText}
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
