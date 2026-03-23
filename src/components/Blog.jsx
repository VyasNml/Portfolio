import { FaMedium, FaDev } from 'react-icons/fa';

const blogData = [
  {
    title: 'Building a Real-time Auction System with Next.js',
    platform: 'Medium',
    date: 'Oct 2023',
    readTime: '8 min read',
    icon: <FaMedium />,
    link: '#'
  },
  {
    title: 'Understanding React 19 Compiler',
    platform: 'Dev.to',
    date: 'Dec 2023',
    readTime: '5 min read',
    icon: <FaDev />,
    link: '#'
  }
];

const Blog = () => {
  return (
    <section className="section" id="blog">
      <h2 className="section-title">
        Blog & Technical <span className="accent-text">Writing</span>
      </h2>

      <div className="education-grid">
         {blogData.map((post, index) => (
           <a href={post.link} className="edu-card" key={index} style={{ display: 'block' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
               <div style={{ fontSize: '2rem', color: 'var(--text-secondary)' }}>
                 {post.icon}
               </div>
               <div className="date" style={{ margin: 0 }}>{post.date}</div>
             </div>
             
             <h3 style={{ fontSize: '1.1rem', marginBottom: '0.8rem' }}>{post.title}</h3>
             
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
               <span style={{ color: 'var(--accent)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>{post.platform}</span>
               <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{post.readTime}</span>
             </div>
           </a>
         ))}
      </div>
    </section>
  );
};

export default Blog;
