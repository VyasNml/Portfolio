import { FaGithub, FaCodeBranch } from 'react-icons/fa';

const osData = [
  {
    repo: 'vercel/next.js',
    description: 'Fixed hydration issue in App Router when using multiple suspense boundaries.',
    status: 'Merged',
    prLink: '#',
    repoLink: 'https://github.com/vercel/next.js',
  },
  {
    repo: 'facebook/react',
    description: 'Improved documentation for concurrent features in React 19.',
    status: 'Merged',
    prLink: '#',
    repoLink: 'https://github.com/facebook/react',
  }
];

const OpenSource = () => {
  return (
    <section className="section" id="open-source">
      <h2 className="section-title">
        Open Source <span className="accent-text">Contributions</span>
      </h2>

      <div className="projects-grid">
        {osData.map((item, index) => (
          <div className="project-card" key={index} style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <FaGithub style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }} />
                <a href={item.repoLink} style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold', fontSize: '1.1rem' }}>
                  {item.repo}
                </a>
              </div>
              <span className="tech-badge" style={{ borderColor: 'var(--accent)', color: 'var(--accent)', background: 'var(--accent-dim)' }}>
                {item.status}
              </span>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', flex: 1, marginBottom: '1.5rem' }}>
              {item.description}
            </p>
            
            <a href={item.prLink} className="project-link" style={{ alignSelf: 'flex-start' }}>
              <FaCodeBranch style={{ marginRight: '0.5rem' }} /> View Pull Request
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpenSource;
