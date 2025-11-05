
function createCoffeeBeans() {
  const background = document.getElementById('coffeeBackground');
  const beanCount = 10; 
  

  const beanSVGs = [
`
<svg class="coffee-bean-svg" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#5D4037" />
      <stop offset="50%" stop-color="#4E342E" />
      <stop offset="100%" stop-color="#3E2723" />
    </linearGradient>
  </defs>

  <path d="M50,20 
          C50,25 48,30 40,32 
          C32,34 20,32 10,20 
          C20,8 32,6 40,8 
          C48,10 50,15 50,20 Z" 
        fill="url(#grad3)" stroke="#3E2723" stroke-width="0.5"/>
  
  <path d="M18,18 C28,17 32,23 42,22"  
        stroke="#8d6151ff" stroke-width="1.2" stroke-linecap="round"/>

  <ellipse cx="35" cy="16" rx="8" ry="3" 
          fill="rgba(241, 236, 236, 0.15)"/>
</svg>
`,
  ];
  
  for (let i = 0; i < beanCount; i++) {
    const bean = document.createElement('div');
    bean.className = 'coffee-bean-random';
    
    const randomSVG = beanSVGs[Math.floor(Math.random() * beanSVGs.length)];
    bean.innerHTML = randomSVG;
    
    const left = Math.random() * 100;
    const delay = Math.random() * 25;
    const duration = 10 + Math.random() * 8;
    
    const sizes = [1.0, 1.1, 1.2, 0.9, 1.05];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    
    bean.style.left = `${left}%`;
    bean.style.top = `-80px`;
    bean.style.animationDelay = `${delay}s`;
    bean.style.animationDuration = `${duration}s`;
    bean.style.transform = `scale(${randomSize})`;
    
    bean.style.setProperty('--rotate', `${Math.random() * 360}deg`);
    
    background.appendChild(bean);
  }
}

function startCoffeeBeanRain() {
  createCoffeeBeans();
  setInterval(() => {
    const background = document.getElementById('coffeeBackground');
    background.innerHTML = '';
    createCoffeeBeans();
  }, 30000);
}

document.addEventListener('DOMContentLoaded', startCoffeeBeanRain);



const subcategoriesData = {
  coffee: [
    { 
      name: 'Зерновой кофе', 
      image: '/picture/coffee-beans.jpg', 
      alt: 'зерна кофе'
    },
    { 
      name: 'Молотый кофе', 
      image: '/picture/ground-coffee.jpg', 
      alt: 'молотый кофе'
    },
    { 
      name: 'Растворимый кофе', 
      image: '/picture/instant-coffee.jpg', 
      alt: 'растворимый кофе'
    }
  ],
  tea: [
    { 
      name: 'Черный чай', 
      image: '/picture/black-tea.jpg', 
      alt: 'черный чай'
    },
    { 
      name: 'Зеленый чай', 
      image: '/picture/green-tea.jpg', 
      alt: 'зеленый чай'
    },
    { 
      name: 'Травяной чай', 
      image: '/picture/herbal-tea.jpg', 
      alt: 'травяной чай'
    }
  ],
  grocery: [
    { 
      name: 'Сладости', 
      image: '/picture/sweets.jpg', 
      alt: 'сладости'
    },
    { 
      name: 'Сиропы', 
      image: '/picture/syrups.jpg', 
      alt: 'сиропы'
    },
    { 
      name: 'Аксессуары', 
      image: '/picture/accessories.jpg', 
      alt: 'аксессуары для кофе'
    }
  ]
};


document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('coffeeCard').addEventListener('click', function() {
    showSubcategories('coffee');
  });
  
  document.getElementById('teaCard').addEventListener('click', function() {
    showSubcategories('tea');
  });
  
  document.getElementById('groceryCard').addEventListener('click', function() {
    showSubcategories('grocery');
  });
});

function showSubcategories(category) {
  const mainSection = document.querySelector('.main-section');
  const subcategoriesSection = document.getElementById('subcategoriesSection');
  const subcategories = subcategoriesData[category];
  
  mainSection.style.display = 'none';
  
  let subcategoriesHTML = `
    <div class="subcategories-header">
      <button class="back-button" onclick="showMainCategories()">Назад к категориям</button>
      <h2>${getCategoryTitle(category)}</h2>
    </div>
    <div class="subcategories-grid">
  `;
  
  subcategories.forEach(subcat => {
    subcategoriesHTML += `
      <div class="categories">
        <div class="category-card">
          <img src="${subcat.image}" class="picture" alt="${subcat.alt}">
          <h3>${subcat.name}</h3>
        </div>
      </div>
    `;
  });
  
  subcategoriesHTML += `</div>`;
  
  subcategoriesSection.innerHTML = subcategoriesHTML;
  subcategoriesSection.style.display = 'block';
}

function showMainCategories() {
  const mainSection = document.querySelector('.main-section');
  const subcategoriesSection = document.getElementById('subcategoriesSection');
  
  subcategoriesSection.style.display = 'none';
  mainSection.style.display = 'flex';
}


function getCategoryTitle(category) {
  const titles = {
    coffee: 'Кофе',
    tea: 'Чай', 
    grocery: 'Бакалея'
  };
  return titles[category];
}