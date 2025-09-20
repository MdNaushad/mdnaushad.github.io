import React from 'react';

const ResumeView: React.FC = () => {
  return (
    <main className="container">
      <h1>Resume</h1>
      <p>If the PDF doesn't load, <a href="/resume.pdf" target="_blank" rel="noreferrer">open it in a new tab</a>.</p>
      <div className="pdf-wrap">
        <iframe title="Resume" src="/resume.pdf" />
      </div>
    </main>
  );
};

export default ResumeView;
