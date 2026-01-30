// Data
const socialLinks = [
  { name: 'WordPress', url: 'https://wanderingbisht.wordpress.com/', icon: 'WP' },
  { name: 'X', url: 'https://x.com/tushar_bisht_', icon: '𝕏' },
  { 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/tushar-bisht-16a9b373',
    icon: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>`
 },
 {
     name: 'Email',
     url: 'mailto:tushar.bisht10@gmail.com?subject=Hello%20Tushar&body=Hi%20Tushar%2C%0A%0AI%20wanted%20to%20reach%20out%20about%20...',
     icon: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
       <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
       <polyline points="22,6 12,13 2,6"></polyline>
     </svg>`
   }
//  { name: 'Medium', url: 'https://medium.com/@yourusername', icon: 'M' }

];

const projects = [
  {
    title: 'Artha-Setu',
    description: 'Insights on equities and mutual funds using big data engineering and AI. Private repo, contact me for more details',
    tech: ['Python', 'Spark', 'Oracle', 'Java', 'React'],
    status: 'Under - Development',
  },
//  {
//    title: 'AI-Powered Analytics Dashboard',
//    description: 'Developed an analytics platform with machine learning insights for business intelligence and data visualization.',
//    tech: ['Python', 'TensorFlow', 'React', 'D3.js'],
//    status: 'Active',
//  },
//  {
//    title: 'Mobile Task Management App',
//    description: 'Created a cross-platform mobile app for team collaboration with offline-first architecture and real-time sync.',
//    tech: ['React Native', 'Firebase', 'Redux'],
//    status: 'Beta',
//  },
];

const blogs = [
  {
    title: 'Understanding coupling in software architecture',
    date: '2026.01.20',
    url: 'blogs/chapter_2.html',
    readTime: '8 min',
  },
//  {
//    title: 'Understanding React Server Components',
//    date: '2025.12.15',
//    url: 'https://medium.com/@yourusername/article-2',
//    readTime: '6 min',
//  },
//  {
//    title: 'From Monolith to Microservices: A Migration Story',
//    date: '2025.11.05',
//    url: 'https://medium.com/@yourusername/article-3',
//    readTime: '10 min',
//  },
//  {
//    title: 'TypeScript Tips for Better Code Quality',
//    date: '2025.10.12',
//    url: 'https://medium.com/@yourusername/article-4',
//    readTime: '5 min',
//  },
];

// Render Social Links
function renderSocialLinks() {
  const container = document.getElementById('socialLinks');
  
  socialLinks.forEach(link => {
    const anchor = document.createElement('a');
    anchor.href = link.url;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.className = 'social-link';
    
    const bg = document.createElement('div');
    bg.className = 'social-link-bg';
    
    const content = document.createElement('div');
    content.className = 'social-link-content';
    
    const icon = document.createElement('span');
    icon.className = 'social-icon';
    icon.innerHTML = link.icon;
    
    const name = document.createElement('span');
    name.className = 'social-name';
    name.textContent = link.name;
    
    content.appendChild(icon);
    content.appendChild(name);
    anchor.appendChild(bg);
    anchor.appendChild(content);
    container.appendChild(anchor);
  });
}

// Render Projects
function renderProjects() {
  const container = document.getElementById('projectsGrid');
  
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    // Status
    const status = document.createElement('div');
    status.className = 'project-status';
    
    const dot = document.createElement('div');
    dot.className = 'status-dot';
    
    const statusText = document.createElement('span');
    statusText.className = 'status-text';
    statusText.textContent = project.status;
    
    status.appendChild(dot);
    status.appendChild(statusText);
    
    // Title
    const title = document.createElement('h3');
    title.className = 'project-title';
    title.textContent = project.title;
    
    // Description
    const description = document.createElement('p');
    description.className = 'project-description';
    description.textContent = project.description;
    
    // Tech Stack
    const techContainer = document.createElement('div');
    techContainer.className = 'project-tech';
    
    project.tech.forEach(tech => {
      const tag = document.createElement('span');
      tag.className = 'tech-tag';
      tag.textContent = tech;
      techContainer.appendChild(tag);
    });
    
    // Hover Effect
    const hoverEffect = document.createElement('div');
    hoverEffect.className = 'project-hover-effect';
    
    card.appendChild(status);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(techContainer);
    card.appendChild(hoverEffect);
    container.appendChild(card);
  });
}

// Render Blogs
function renderBlogs() {
  const container = document.getElementById('blogList');
  
  blogs.forEach(blog => {
    const anchor = document.createElement('a');
    anchor.href = blog.url;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.className = 'blog-item';
    
    const content = document.createElement('div');
    content.className = 'blog-content';
    
    const info = document.createElement('div');
    info.className = 'blog-info';
    
    const title = document.createElement('h3');
    title.className = 'blog-title';
    title.textContent = blog.title;
    
    const meta = document.createElement('div');
    meta.className = 'blog-meta';
    
    const date = document.createElement('span');
    date.textContent = blog.date;
    
    const separator = document.createElement('span');
    separator.className = 'blog-separator';
    separator.textContent = '•';
    
    const readTime = document.createElement('span');
    readTime.textContent = blog.readTime;
    
    meta.appendChild(date);
    meta.appendChild(separator);
    meta.appendChild(readTime);
    
    info.appendChild(title);
    info.appendChild(meta);
    
    const icon = document.createElement('svg');
    icon.className = 'blog-icon';
    icon.setAttribute('viewBox', '0 0 24 24');
    icon.setAttribute('fill', 'none');
    icon.setAttribute('stroke', 'currentColor');
    icon.setAttribute('stroke-width', '2');
    icon.setAttribute('stroke-linecap', 'round');
    icon.setAttribute('stroke-linejoin', 'round');
    icon.innerHTML = `
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    `;
    
    content.appendChild(info);
    content.appendChild(icon);
    anchor.appendChild(content);
    container.appendChild(anchor);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderSocialLinks();
  renderProjects();
  renderBlogs();
});
