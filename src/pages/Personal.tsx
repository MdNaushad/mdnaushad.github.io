import React from 'react';

const Personal: React.FC = () => {
  return (
    <main className="container personal">
      <div className="two-col">
        <aside className="profile-col">
          <div className="profile-card">
            <img className="avatar" src="/Naushad1.jpeg" alt="avatar" />
            <h3 className="profile-name">Md Naushad</h3>
            <div className="profile-meta">Senior Software Engineer, Catchpoint Systems Pvt Ltd</div>
            <div className="profile-meta">Bangalore, India</div>
            <ul className="profile-links">
              <li><a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a></li>
              <li><a href="https://www.linkedin.com/in/mdnaushad15/" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/MdNaushad" target="_blank" rel="noreferrer">Github</a></li>
            </ul>
          </div>
        </aside>

        <section>
          <h1>Personal</h1>
            <p>Hello! I'm Md Naushad, a Senior Software Engineer at Catchpoint Systems Pvt Ltd in Bangalore, India. I specialize in building scalable web applications and have a passion for learning new technologies.</p>

        </section>
      </div>
    </main>
  );
};

export default Personal;
