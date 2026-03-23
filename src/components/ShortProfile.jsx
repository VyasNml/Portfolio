const techBadges = ['.NET', 'Express', 'GO', 'Typescript', 'NEXT'];

const ShortProfile = () => {
  return (
    <section className="section" id="personal">
      <h2 className="section-title">Short Profile</h2>

      <div className="bento-grid">
        {/* Large card - Project showcase */}
        <div className="bento-card large">
          <p className="bento-text">
            Developer building clean, reliable cloud, auction, and trading systems
          </p>
        </div>

        {/* Language card */}
        <div className="bento-card lang-card">
          <h3>
            Fluent in English, Japanese and Mongolian (IELTS 7, N3)
          </h3>
        </div>

        {/* Tech stack card */}
        <div className="bento-card tech-card">
          <div>
            <p className="tech-card-label">My primary tech stack</p>
            <p className="tech-card-main">NEXT, Express</p>
          </div>
          <div className="tech-badges">
            {techBadges.map((badge) => (
              <span className="tech-badge" key={badge}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortProfile;
