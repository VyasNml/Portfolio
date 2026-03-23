import { FaFilePdf, FaBookOpen } from 'react-icons/fa';

const researchData = [
  {
    title: 'Efficient Routing in Multi-Agent Microservice Systems',
    type: 'Research Publication',
    conference: 'IEEE International Conference on Distributed Computing',
    date: '2023',
    abstract: 'This paper proposes a novel approach to optimizing communication overhead in highly dynamic multi-agent microservice architectures using predictive routing strategies.',
    link: '#'
  }
];

const Research = () => {
  return (
    <section className="section" id="research">
      <h2 className="section-title">
        Research <span className="accent-text">Publications</span>
      </h2>

      <div className="projects-grid" style={{ maxWidth: '800px' }}>
        {researchData.map((item, index) => (
          <div className="project-card" key={index} style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <FaBookOpen style={{ color: 'var(--accent)', fontSize: '1.5rem' }} />
              <span className="tech-card-label" style={{ color: 'var(--accent)' }}>{item.type}</span>
            </div>
            
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', lineHeight: 1.4 }}>{item.title}</h3>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              {item.conference} • {item.date}
            </p>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Abstract:</strong> {item.abstract}
            </p>
            
            <a href={item.link} className="cv-btn" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}>
              <FaFilePdf style={{ fontSize: '1rem' }} /> Read Paper
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Research;
