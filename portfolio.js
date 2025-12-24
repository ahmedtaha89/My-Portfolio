// ==================== DATA ====================

// Certifications data
const certifications = [
    {
        name: "ISTQB Certified Tester Foundation Level",
        issuer: "ISTQB",
        date: "2025",
        credentialId: "251110033",
        icon: "fa-check-circle",
        verified: true,
        verifyLink: "#",
        category: ["testing"]
    },
    {
        name: "Software Testing Engineer",
        issuer: "ITI",
        date: "2025",
        credentialId: "",
        icon: "fa-bug",
        verified: true,
        verifyLink: "https://drive.google.com/file/d/1Ro1Lv0jfjMxoIDItojpD8yuMLCEGRSrK/view?usp=sharing",
        category: ["testing"]
    },
    {
        name: "Business Intelligence Specialist",
        issuer: "ITI",
        date: "2023",
        credentialId: "",
        icon: "fa-chart-line",
        verified: true,
        verifyLink: "https://github.com/ahmedtaha89/Certificates",
        category: ["bi"]
    },
    {
        name: "Intro to Excel",
        issuer: "365 Data Science",
        date: "November 2023",
        credentialId: "",
        icon: "fa-file-excel",
        verified: true,
        verifyLink: "https://github.com/ahmedtaha89/Certificates/blob/master/Intro%20to%20excel.pdf",
        category: ["analytics"]
    },
    {
        name: "Python for Data Science, AI & Development",
        issuer: "Coursera",
        date: "August 2023",
        credentialId: "",
        icon: "fa-python",
        verified: true,
        verifyLink: "https://github.com/ahmedtaha89/Certificates/blob/master/Python%20for%20Data%20Science%2C%20AI%20%26%20Development.pdf",
        category: ["python"]
    },
    {
        name: "Pandas",
        issuer: "Kaggle",
        date: "August 2023",
        credentialId: "",
        icon: "fa-table",
        verified: true,
        verifyLink: "https://github.com/ahmedtaha89/Certificates/blob/master/Ahmed%20Taha%20-%20Pandas.png",
        category: ["python"]
    },
    {
        name: "Excel Fundamentals for Data Analysis",
        issuer: "Coursera",
        date: "August 2023",
        credentialId: "",
        icon: "fa-file-excel",
        verified: true,
        verifyLink: "https://github.com/ahmedtaha89/Certificates/blob/master/Excel%20Fundamentals%20for%20Data%20Analysis.pdf",
        category: ["analytics"]
    },
    {
        name: "SQL for Data Science",
        issuer: "Coursera",
        date: "August 2023",
        credentialId: "",
        icon: "fa-database",
        verified: true,
        verifyLink: "https://github.com/ahmedtaha89/Certificates/blob/master/Coursera%20SQL%20for%20Data%20Science.pdf",
        category: ["sql"]
    },
    {
        name: "Tech Freelancing",
        issuer: "Mahara Tech",
        date: "April 2023",
        credentialId: "",
        icon: "fa-briefcase",
        verified: true,
        verifyLink: "https://github.com/ahmedtaha89/Certificates/blob/master/Mahara%20Tech%20Freelancing.pdf",
        category: ["business"]
    },
    {
        name: "Data Analysis in Excel",
        issuer: "Coursera",
        date: "December 2022",
        credentialId: "",
        icon: "fa-chart-bar",
        verified: true,
        verifyLink: "https://github.com/ahmedtaha89/Certificates/blob/master/Data%20Analysis%20In%20Excel.pdf",
        category: ["analytics"]
    },
    {
        name: "Introduction to SQL",
        issuer: "365 Data Science",
        date: "September 2022",
        credentialId: "",
        icon: "fa-database",
        verified: true,
        verifyLink: "https://github.com/ahmedtaha89/Certificates/blob/master/Intro%20SQL.pdf",
        category: ["sql"]
    }
];

// Projects data
const projects = [
    {
        title: "SQL Data Warehouse Project",
        description: "Comprehensive data warehouse built using Medallion Architecture (Bronze, Silver, Gold layers) with SQL Server. Features ETL pipelines, star schema modeling, data cleansing, and analytics for sales data from multiple source systems.",
        tech: ["SQL Server", "ETL", "Data Modeling", "Data Warehouse", "Analytics"],
        icon: "fa-database",
        link: "https://github.com/DataWithBaraa/sql-data-warehouse-project",
        category: ["sql", "etl"]
    },
    {
        title: "Call Center Analytics",
        description: "Analyzed call center data to test operational effectiveness and created visualizations for performance monitoring.",
        tech: ["Power BI", "Excel", "SQL"],
        icon: "fa-phone-volume",
        link: "https://github.com/ahmedtaha89/Call-Center-Project.git",
        category: ["bi", "sql"]
    },
    {
        title: "High School Results Analysis",
        description: "Data analysis project on Egyptian high school public results 2022, extracting insights and trends using Excel.",
        tech: ["Excel", "Data Analysis"],
        icon: "fa-graduation-cap",
        link: "https://github.com/ahmedtaha89/High-School-Public-Results-2022-EG.git",
        category: ["bi"]
    },
    {
        title: "Data Cleaning with SQL",
        description: "Comprehensive data cleaning project demonstrating SQL techniques for data quality improvement and standardization.",
        tech: ["SQL", "Data Quality"],
        icon: "fa-broom",
        link: "https://github.com/ahmedtaha89/PortfolioProjects.git",
        category: ["sql"]
    },
    {
        title: "Egyptian ID Numbers Analyzer",
        description: "Python utility that extracts information from Egyptian national ID numbers including birthdate, governorate, gender, and calculates age in multiple units (years, months, days, hours, minutes, seconds).",
        tech: ["Python", "DateTime", "Data Processing"],
        icon: "fa-id-card",
        link: "https://github.com/ahmedtaha89/egyptian-national-id-parser",
        category: ["python"]
    }
];

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen
    setTimeout(() => {
        document.querySelector('.loading-screen').classList.add('hidden');
    }, 1000);

    // Initialize all features
    initMobileMenu();
    initThemeToggle();
    initScrollAnimations();
    initBackToTop();
    initStatsCounter();
    initProjectFilters();
    initContactForm();
    initSmoothScroll();
    
    // Load dynamic content
    loadProjects();
    loadCertifications();
});

// ==================== MOBILE MENU ====================

function initMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close menu when clicking on a link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenu.querySelector('i').classList.add('fa-bars');
            mobileMenu.querySelector('i').classList.remove('fa-times');
        });
    });
}

// ==================== DARK MODE ====================

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
}

// ==================== SCROLL ANIMATIONS ====================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// ==================== BACK TO TOP ====================

function initBackToTop() {
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== STATS COUNTER ====================

function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let started = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                started = true;
                statNumbers.forEach(stat => {
                    animateCounter(stat);
                });
            }
        });
    }, { threshold: 0.5 });

    if (statNumbers.length > 0) {
        observer.observe(document.querySelector('.stats-section'));
    }
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };

    updateCounter();
}

// ==================== PROJECT FILTERS ====================

function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter projects
            const filter = btn.getAttribute('data-filter');
            filterProjects(filter);
        });
    });
}

function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, 100);
        } else {
            const cardCategories = card.getAttribute('data-category').split(',');
            if (cardCategories.includes(category)) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        }
    });
}

// ==================== CONTACT FORM ====================

function initContactForm() {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Simple validation
        if (!formData.name || !formData.email || !formData.message) {
            showFormStatus('Please fill in all fields', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showFormStatus('Please enter a valid email address', 'error');
            return;
        }

        // Simulate form submission (replace with actual API call)
        try {
            // You can integrate with EmailJS, Formspree, or your own backend here
            showFormStatus('Message sent successfully! I will get back to you soon.', 'success');
            form.reset();
        } catch (error) {
            showFormStatus('Something went wrong. Please try again.', 'error');
        }
    });
}

function showFormStatus(message, type) {
    const formStatus = document.getElementById('formStatus');
    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;
    
    setTimeout(() => {
        formStatus.className = 'form-status';
    }, 5000);
}

// ==================== SMOOTH SCROLL ====================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
    });
}

// ==================== LOAD PROJECTS ====================

function loadProjects() {
    const container = document.getElementById('projectsContainer');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        projectCard.setAttribute('data-category', project.category.join(','));
        
        projectCard.innerHTML = `
            <div class="project-image">
                <i class="fas ${project.icon}"></i>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <div class="project-tech">
                    ${project.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
                </div>
                <p class="project-description">${project.description}</p>
                ${project.link ? `<a href="${project.link}" target="_blank" class="project-link">View Project <i class="fas fa-arrow-right"></i></a>` : ''}
            </div>
        `;
        container.appendChild(projectCard);
    });

    // Re-initialize scroll animations for new elements
    initScrollAnimations();
}

// ==================== LOAD CERTIFICATIONS ====================

function loadCertifications() {
    const container = document.getElementById('certificationsContainer');
    
    certifications.forEach(cert => {
        const certCard = document.createElement('div');
        certCard.className = 'certification-card fade-in';
        
        const verifiedBadge = cert.verified ? 
            `<div class="cert-badge"><i class="fas fa-check-circle"></i> Verified</div>` : '';
        
        const credentialSection = cert.credentialId ? 
            `<div class="cert-id"><i class="fas fa-id-card"></i> ID: ${cert.credentialId}</div>` : '';
        
        const verifyButton = cert.verifyLink ? 
            `<a href="${cert.verifyLink}" target="_blank" class="cert-link">
                <i class="fas fa-external-link-alt"></i> Verify
            </a>` : '';
        
        certCard.innerHTML = `
            ${verifiedBadge}
            <div class="cert-icon">
                <i class="fas ${cert.icon}"></i>
            </div>
            <div class="cert-content">
                <h3>${cert.name}</h3>
                <div class="cert-issuer">
                    <i class="fas fa-award"></i>
                    ${cert.issuer}
                </div>
                <div class="cert-date">
                    <i class="fas fa-calendar-alt"></i>
                    Issued: ${cert.date}
                </div>
                ${credentialSection}
            </div>
            ${verifyButton ? `<div class="cert-footer">${verifyButton}</div>` : ''}
        `;
        container.appendChild(certCard);
    });

    // Re-initialize scroll animations for new elements
    initScrollAnimations();
}

// ==================== CV DOWNLOAD ====================

document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadCV');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const pdfFileName = 'Ahmed Taha BI & ETL Developer CV.pdf';
            
            const link = document.createElement('a');
            link.href = pdfFileName;
            link.download = pdfFileName;
            link.target = '_blank';
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            console.log('CV download initiated');
        });
    }
});