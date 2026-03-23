const techBadges = ['Adaptability', 'Communication'];

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
            Fluent in English and Malayalam, Able to communicate in Hindi
          </h3>
        </div>

        {/* Tech stack card */}
        <div className="bento-card tech-card">
          <div>
            <p className="tech-card-main">SOFT SKILLS</p>
            {/* <p className="tech-card-label">asdasd</p> */}
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