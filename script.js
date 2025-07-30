// Preloader
window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }, 1000);
});

// Page Navigation
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

function showPage(pageId) {
  // Hide all pages
  pages.forEach(page => {
    page.classList.remove('active');
  });
  
  // Show target page
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  }
  
  // Update navigation active state
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  const activeLink = document.querySelector(`[data-page="${pageId}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

// Navigation click handlers
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const pageId = this.getAttribute('data-page');
    showPage(pageId);
    
    // Smooth scroll to top of main content
    const mainContent = document.querySelector('.main-content');
    mainContent.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// Portfolio Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const filter = this.getAttribute('data-filter');
    
    // Update active filter button
    filterBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    
    // Filter portfolio items
    portfolioItems.forEach(item => {
      const category = item.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        item.style.display = 'block';
        item.style.animation = 'fadeIn 0.5s ease';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Contact form handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
  });
}

// Skill bars animation
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      
      // Animate skill bars when resume section is visible
      if (entry.target.id === 'resume') {
        animateSkillBars();
      }
    }
  });
}, observerOptions);

// Observe all pages
pages.forEach(page => {
  observer.observe(page);
});

// Mobile menu toggle (for responsive design)
function createMobileMenu() {
  const sidebar = document.querySelector('.sidebar');
  const mainContent = document.querySelector('.main-content');
  
  // Create mobile menu button
  const mobileMenuBtn = document.createElement('button');
  mobileMenuBtn.className = 'mobile-menu-btn';
  mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  mobileMenuBtn.style.cssText = `
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1001;
    background: #f64e57;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    display: none;
  `;
  
  document.body.appendChild(mobileMenuBtn);
  
  // Toggle sidebar
  mobileMenuBtn.addEventListener('click', function() {
    sidebar.classList.toggle('active');
  });
  
  // Close sidebar when clicking outside
  mainContent.addEventListener('click', function() {
    if (window.innerWidth <= 768) {
      sidebar.classList.remove('active');
    }
  });
  
  // Show/hide mobile menu button based on screen size
  function handleResize() {
    if (window.innerWidth <= 768) {
      mobileMenuBtn.style.display = 'block';
    } else {
      mobileMenuBtn.style.display = 'none';
      sidebar.classList.remove('active');
    }
  }
  
  window.addEventListener('resize', handleResize);
  handleResize();
}

// Initialize mobile menu
createMobileMenu();

// Add CSS animation for portfolio items
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style); 

// Set footer year automatically
const footerYear = document.getElementById('footer-year');
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
} 

// Contact button functionality
const contactBtn = document.querySelector('.home-buttons .btn.primary');
if (contactBtn) {
  contactBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showPage('contact');
    
    // Smooth scroll to top of main content
    const mainContent = document.querySelector('.main-content');
    mainContent.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
} 