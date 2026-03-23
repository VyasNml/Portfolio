import { SiLeetcode, SiCodeforces } from 'react-icons/si';
import { FaTrophy } from 'react-icons/fa';

const cpData = [
  {
    platform: 'LeetCode',
    handle: 'vyasn',
    rating: 'Top 10%',
    resolved: '400+ Problems',
    icon: <SiLeetcode />,
    link: '#'
  },
  {
    platform: 'Codeforces',
    handle: 'vyasn',
    rating: 'Specialist',
    resolved: 'Max rating: 1450',
    icon: <SiCodeforces />,
    link: '#'
  }
];

const hackathonData = [
  {
    name: 'Global AI Hackathon',
    position: '1st Runner Up',
    project: 'Multi-Agent Simulator',
    date: '2023',
    icon: <FaTrophy />
  }
];

const CompetitiveProgramming = () => {
  return (
    <section className="section" id="competitive-programming">
      <h2 className="section-title">
        Competitive Programming <span className="accent-text">& Hackathons</span>
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <div className="projects-grid">
          {cpData.map((profile, index) => (
            <div className="project-card" key={index} style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--text-secondary)' }}>
                  {profile.icon}
                </div>
                <a href={profile.link} className="cv-btn" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>View Profile</a>
              </div>
              <h3>{profile.platform}</h3>
              <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', margin: '0.5rem 0' }}>{profile.handle}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <span>{profile.rating}</span>
                <span>{profile.resolved}</span>
              </div>
            </div>
          ))}
        </div>

        <div>
           <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', textAlign: 'center', marginBottom: '2rem' }}>Hackathon Achievements</h3>
           <div className="education-grid">
             {hackathonData.map((hackathon, index) => (
               <div className="edu-card" key={index}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                   <h3>{hackathon.name}</h3>
                   <div style={{ color: '#fbbf24', fontSize: '1.2rem' }}>
                     {hackathon.icon}
                   </div>
                 </div>
                 <div className="date">{hackathon.date}</div>
                 <div className="gpa">
                   <span>{hackathon.position}</span>
                 </div>
                 <p className="institution">Project: {hackathon.project}</p>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;
