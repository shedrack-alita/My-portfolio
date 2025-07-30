# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript, inspired by the Bostami template design.

## Features

- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Sidebar Navigation**: Clean navigation with smooth page transitions
- **Preloader**: Professional loading animation
- **Multiple Pages**: Home, About, Resume, Portfolio, and Contact
- **Portfolio Filtering**: Filter projects by category
- **Contact Form**: Functional contact form with validation
- **Skill Bars**: Animated skill progress bars
- **Modern Color Palette**: Using the specified colors (#8e0f3c, #f64e57, #d8f1ee, #fb8c9c, #ffffff, #df2872)

## How to Customize

### 1. Add Your Photo
Replace the placeholder images with your actual photos:
- Replace `your-photo.jpg` in the sidebar profile section
- Replace `your-photo.jpg` in the home page image section
- Add your actual photo files to the project directory

### 2. Update Personal Information
Edit the following sections in `index.html`:

#### Profile Section (Sidebar)
```html
<h3 class="profile-name">Your Name</h3>
<p class="profile-title">Software Engineer & Designer</p>
```

#### Home Page
```html
<h1>Hello, I'm <span class="highlight">Your Name</span></h1>
<h2>Software Engineer & Designer</h2>
<p>I build modern web applications, create intuitive UI/UX designs, and develop automation solutions.</p>
```

#### About Page
- Update the personal info section with your details
- Modify the "What I Do!" services to match your skills
- Edit the about text to reflect your background

#### Resume Page
- Update education history
- Modify work experience
- Adjust skill percentages to match your expertise

#### Contact Page
- Update phone number, email, and address
- Modify the contact form message

### 3. Add Portfolio Projects
In the Portfolio section, add your projects:

```html
<div class="portfolio-item" data-category="web">
  <div class="portfolio-image">
    <img src="your-project-image.jpg" alt="Project Name">
  </div>
  <div class="portfolio-overlay">
    <h4>Project Name</h4>
    <p>Project Category</p>
  </div>
</div>
```

### 4. Customize Colors (Optional)
The website uses the specified color palette:
- Primary: `#8e0f3c` (Dark Red)
- Secondary: `#f64e57` (Red)
- Background: `#d8f1ee` (Light Blue)
- Accent: `#fb8c9c` (Pink)
- White: `#ffffff`
- Dark Accent: `#df2872`

You can modify these colors in the CSS file if needed.

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
├── your-photo.jpg      # Your profile photo
├── project1.jpg        # Portfolio project images
├── project2.jpg
└── project3.jpg
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Deployment

### Option 1: GitHub Pages
1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Netlify
1. Create a Netlify account
2. Drag and drop your project folder to Netlify
3. Your site will be deployed instantly

### Option 3: Vercel
1. Create a Vercel account
2. Connect your GitHub repository
3. Deploy automatically

## Customization Tips

1. **Images**: Use high-quality images (recommended size: 300x300px for profile photos)
2. **Content**: Keep descriptions concise and professional
3. **Projects**: Include screenshots or mockups of your work
4. **Skills**: Be honest about your skill levels
5. **Contact**: Ensure your contact information is up-to-date

## Features Included

- ✅ Preloader animation
- ✅ Responsive sidebar navigation
- ✅ Smooth page transitions
- ✅ Portfolio filtering
- ✅ Contact form with validation
- ✅ Animated skill bars
- ✅ Mobile-friendly design
- ✅ Modern color scheme
- ✅ Professional typography
- ✅ Hover effects and animations

## Support

If you need help customizing your portfolio, you can:
1. Check the HTML comments for guidance
2. Modify the CSS variables for easy color changes
3. Update the JavaScript for additional functionality

Enjoy your new portfolio website! 🚀
