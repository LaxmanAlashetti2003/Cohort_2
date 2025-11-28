const users = [
  {
    fullName: "Sarah Anderson",
    image: "https://i.pinimg.com/1200x/09/26/de/0926dec2848679eb81f7302d080fde6b.jpg",
    profession: "UI/UX Designer",
    description: "Creative designer with 5+ years of experience in digital design and user experience.",
    tags: ["design", "ux", "ui", "figma", "creative"]
  },
  {
    fullName: "Michael Chen",
    image: "https://i.pinimg.com/736x/ed/3a/24/ed3a24d683e4352b69c07cd3510a703a.jpg",
    profession: "Full Stack Developer",
    description: "Passionate developer skilled in React, Node.js, and cloud technologies.",
    tags: ["javascript", "react", "node.js", "coding", "web development"]
  },
  {
    fullName: "Emily Rodriguez",
    image: "https://i.pinimg.com/736x/e3/bc/46/e3bc46fd5b260ed8444bdae75fe8012a.jpg",
    profession: "Content Strategist",
    description: "Digital marketing expert specializing in content creation and social media strategy.",
    tags: ["marketing", "content", "social media", "strategy", "branding"]
  },
  {
    fullName: "James Wilson",
    image: "https://i.pinimg.com/736x/26/bc/3c/26bc3c76e49faa74bbc628849ac53089.jpg",
    profession: "Data Scientist",
    description: "Analytics professional focused on machine learning and data-driven insights.",
    tags: ["data science", "python", "machine learning", "analytics", "ai"]
  },
  {
    fullName: "Jessica Martinez",
    image: "https://i.pinimg.com/736x/37/98/28/379828ecee3c7dd44f503e75f2e8b52d.jpg",
    profession: "Product Manager",
    description: "Strategic product leader with expertise in scaling startups and managing cross-functional teams.",
    tags: ["product management", "leadership", "strategy", "startup", "agile"]
  }
];

// Render cards dynamically
const mainContainer = document.getElementById('main');

users.forEach(user => {
  const card = document.createElement('div');
  card.className = 'card';
  
  const tagsHTML = user.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
  
  card.innerHTML = `
    <img src="${user.image}" alt="${user.fullName}">
    <h1>${user.fullName}</h1>
    <h4>${user.profession}</h4>
    <p>${user.description}</p>
    <div class="tags">${tagsHTML}</div>
  `;
  
  mainContainer.appendChild(card);
});
