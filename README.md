# CivicServe Portal Navigation Demo

A static HTML representation of the CivicServe Portal's left navigation menu, hosted on GitHub Pages.

## Overview

This repository contains a static HTML/CSS/JavaScript implementation that demonstrates the hierarchical navigation structure used in the CivicServe municipal management platform. The demo showcases the complete navigation tree with interactive expandable sections.

## Features

- **📱 Responsive Design**: Works on desktop, tablet, and mobile devices
- **🎯 Interactive Navigation**: Expandable sections with smooth animations
- **🎨 Professional Styling**: Clean, modern UI matching the original application
- **♿ Accessibility**: Keyboard navigation and screen reader friendly
- **📊 Demo Content**: Click navigation items to see detailed information

## Navigation Structure

The demo includes all major sections from the CivicServe Portal:

### Main Sections
- **Dashboard** - Central hub for overview metrics
- **Leads** - Business prospect management
- **Community** - Strategic planning tools
- **Program Types** - Various municipal programs
- **Projects** - Project lifecycle management
- **Contacts** - Business and individual contact management
- **Analytics** - Reports and dashboards
- **Tools** - Administrative utilities

### Sub-sections
Each main section contains relevant sub-navigation items, including:
- All program types (Grants, Loans, TIF, etc.)
- Project status categories (Active, Pending, Closed, etc.)
- Contact types (All, Businesses, Individuals, Surveys)
- Analytics categories (Reports, Dashboards)
- Administrative tools (Documents, Templates, etc.)

## Technical Implementation

### Files Structure
```
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and responsive design  
├── script.js           # JavaScript interactivity
└── README.md          # This documentation
```

### Key Technologies
- **HTML5** semantic markup
- **CSS3** with Flexbox and Grid
- **Vanilla JavaScript** for interactivity
- **Font Awesome** icons
- **Responsive design** principles

## Local Development

To run locally:

1. Clone this repository
2. Open `index.html` in your browser
3. No build process or dependencies required!

## GitHub Pages Deployment

This site is automatically deployed to GitHub Pages from the `main` branch.

**Live Demo**: `https://[username].github.io/civicserve-nav-demo`

### Setup Instructions

1. Create a new GitHub repository named `civicserve-nav-demo`
2. Upload these files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Your site will be available at the GitHub Pages URL

## About CivicServe

This navigation demo represents the structure of CivicServe's municipal management platform, which provides:

- **Program Management**: Handle incentive and non-incentive programs
- **Project Tracking**: Monitor economic development projects
- **Contact Management**: Maintain business and individual relationships  
- **Analytics & Reporting**: Data-driven insights for decision making
- **Document Management**: Centralized file and template storage

## Comparison with Live Application

### Static Demo Features
- Visual representation of navigation structure
- Interactive expand/collapse functionality
- Responsive design demonstration
- Clean, professional styling

### Live Application Features (Not in Demo)
- **Permission-based access control**: Items shown based on user roles
- **Feature flags**: Dynamic showing/hiding of navigation items
- **Real-time data**: Program types loaded from database
- **Localization**: Multi-language support
- **Dynamic content**: Navigation items change based on active programs
- **Integration**: Full routing and page functionality

## Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox  
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Contributing

This is a demonstration repository. For actual CivicServe platform development, contact the development team.

## License

This demo is provided for demonstration purposes. CivicServe is a proprietary platform.

---

**Note**: This is a static demonstration and does not include backend functionality, user authentication, or data persistence features present in the actual CivicServe platform.
