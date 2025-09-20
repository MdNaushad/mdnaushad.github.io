import React from 'react';

const Blog: React.FC = () => {
  const posts = [
    {title: 'My first blog', url: 'https://example.com/blog/first'},
    {title: 'Another post', url: 'https://example.com/blog/another'},
  ];
  return (
    <main className="container">
      <h1>Blog</h1>
      <ul>
        {posts.map(p => (
          <li key={p.url}><a href={p.url} target="_blank" rel="noreferrer">{p.title}</a></li>
        ))}
      </ul>
    </main>
  );
};

export default Blog;
