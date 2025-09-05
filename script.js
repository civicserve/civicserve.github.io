// CivicServe Portal Navigation Demo JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation functionality
    initializeNavigation();
    
    // Add demo interactions
    addDemoInteractions();
});

function initializeNavigation() {
    // Get all expandable navigation items
    const expandableItems = document.querySelectorAll('.expandable');
    
    expandableItems.forEach(item => {
        item.addEventListener('click', function() {
            const parent = this.closest('.nav-section') || this.closest('.nav-subsection');
            
            if (parent) {
                // Toggle expanded state
                parent.classList.toggle('expanded');
                
                // Update expand icon rotation
                const icon = this.querySelector('.expand-icon');
                if (icon) {
                    if (parent.classList.contains('expanded')) {
                        icon.style.transform = 'rotate(180deg)';
                    } else {
                        icon.style.transform = 'rotate(0deg)';
                    }
                }
            }
        });
    });

    // Add click handlers for all navigation items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Don't trigger if it's an expandable item (handled separately)
            if (!this.classList.contains('expandable')) {
                // Remove active state from all items
                navItems.forEach(navItem => navItem.classList.remove('active'));
                
                // Add active state to clicked item
                this.classList.add('active');
                
                // Update main content with demo information
                updateMainContent(this.textContent.trim());
            }
        });
    });
}

function addDemoInteractions() {
    // Add hover effects and tooltips
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        // Add keyboard navigation
        item.setAttribute('tabindex', '0');
        
        // Add keyboard event listeners
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Add hover effects for demo
        item.addEventListener('mouseenter', function() {
            if (!this.classList.contains('expandable')) {
                this.style.backgroundColor = '#e7f3ff';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active') && !this.classList.contains('expandable')) {
                this.style.backgroundColor = '';
            }
        });
    });

    // Expand some sections by default for demo purposes
    setTimeout(() => {
        const sectionsToExpand = [
            document.querySelector('.nav-section:nth-child(4)'), // Program Types
            document.querySelector('.nav-section:nth-child(7)')  // Analytics
        ];
        
        sectionsToExpand.forEach(section => {
            if (section) {
                section.classList.add('expanded');
                const icon = section.querySelector('.expand-icon');
                if (icon) {
                    icon.style.transform = 'rotate(180deg)';
                }
            }
        });
    }, 500);
}

function updateMainContent(itemName) {
    const mainContent = document.querySelector('.main-content');
    const demoInfo = getDemoInfo(itemName);
    
    // Update the content area with information about the selected nav item
    const existingDemoContent = document.querySelector('.demo-content');
    if (existingDemoContent) {
        existingDemoContent.remove();
    }
    
    const demoContent = document.createElement('div');
    demoContent.className = 'demo-content';
    demoContent.innerHTML = `
        <div class="selected-item-info">
            <h3>Selected: ${itemName}</h3>
            <p>${demoInfo.description}</p>
            <div class="item-details">
                <h4>Features:</h4>
                <ul>
                    ${demoInfo.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            ${demoInfo.route ? `<p class="route-info"><strong>Route:</strong> <code>${demoInfo.route}</code></p>` : ''}
        </div>
    `;
    
    mainContent.appendChild(demoContent);
    
    // Scroll to the new content
    demoContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function getDemoInfo(itemName) {
    const itemInfo = {
        'Dashboard': {
            description: 'Central hub for overview metrics, quick actions, and system status.',
            features: ['Key Performance Indicators', 'Recent Activity Feed', 'Quick Action Buttons', 'System Notifications'],
            route: '/admin/dashboard'
        },
        'Leads': {
            description: 'Manage potential business prospects and track lead conversion.',
            features: ['Lead Tracking', 'Contact Management', 'Conversion Analytics', 'Follow-up Scheduling'],
            route: '/admin/leads'
        },
        'Community Dashboard': {
            description: 'Strategic planning overview with community-wide metrics.',
            features: ['Population Analytics', 'Economic Indicators', 'Development Trends', 'Growth Projections'],
            route: '/admin/community/dashboard'
        },
        'All': {
            description: 'Comprehensive view of all items in the current section.',
            features: ['Complete Listing', 'Advanced Filtering', 'Bulk Operations', 'Export Functionality'],
            route: '/admin/[section]/all'
        },
        'Intelligence': {
            description: 'Advanced reporting and analytics for data-driven decision making.',
            features: ['Custom Reports', 'Data Visualization', 'Trend Analysis', 'Predictive Analytics'],
            route: '/admin/analytics/reports/intelligence'
        },
        'Goals': {
            description: 'Track and manage municipal goals and objectives.',
            features: ['Goal Setting', 'Progress Tracking', 'Performance Metrics', 'Achievement Analytics'],
            route: '/admin/analytics/dashboards/goals'
        },
        'Management Overview': {
            description: 'Executive-level dashboard with high-level insights.',
            features: ['Executive Metrics', 'Department Overview', 'Resource Allocation', 'Strategic Indicators'],
            route: '/admin/analytics/dashboards/management-overview'
        }
    };
    
    return itemInfo[itemName] || {
        description: `${itemName} section provides specialized functionality for municipal operations.`,
        features: ['Data Management', 'User Interface', 'Reporting Tools', 'Administrative Functions'],
        route: `/admin/${itemName.toLowerCase().replace(/\s+/g, '-')}`
    };
}

// Add some CSS for the demo content
const style = document.createElement('style');
style.textContent = `
    .demo-content {
        margin-top: 2rem;
        padding: 1.5rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    .selected-item-info h3 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-weight: 600;
    }
    
    .selected-item-info p {
        margin-bottom: 1rem;
        opacity: 0.9;
        line-height: 1.6;
    }
    
    .item-details {
        margin-top: 1rem;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 0.375rem;
    }
    
    .item-details h4 {
        margin-bottom: 0.5rem;
        font-size: 1.125rem;
    }
    
    .item-details ul {
        list-style: none;
        padding-left: 0;
    }
    
    .item-details li {
        padding: 0.25rem 0;
        position: relative;
        padding-left: 1rem;
    }
    
    .item-details li:before {
        content: "✓";
        position: absolute;
        left: 0;
        color: #4ade80;
        font-weight: bold;
    }
    
    .route-info {
        margin-top: 1rem;
        padding: 0.75rem;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 0.25rem;
        font-family: 'Courier New', monospace;
    }
    
    .route-info code {
        background: none;
        color: #fbbf24;
        font-weight: 500;
    }
`;

document.head.appendChild(style);

// Console welcome message
console.log(`
🏛️ CivicServe Portal Navigation Demo
====================================
This static demo represents the dynamic React navigation
from the CivicServe municipal management platform.

Features demonstrated:
- Hierarchical navigation structure  
- Expandable sections with icons
- Responsive design patterns
- Interactive state management
- Accessibility features

Click any navigation item to see details!
`);
