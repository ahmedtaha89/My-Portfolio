// Certifications data - Updated with all certificates
const certifications = [
    {
        name: "ISTQB Certified Tester Foundation Level",
        issuer: "ISTQB",
        date: "2025",
        credentialId: "251110033",
        icon: "fa-check-circle",
        verified: true,
        verifyLink: "#"
    },
    {
        name: "Software Testing Engineer",
        issuer: "ITI",
        date: "2025",
        credentialId: "",
        icon: "fa-bug",
        verified: true,
        verifyLink: "https://drive.google.com/file/d/1Ro1Lv0jfjMxoIDItojpD8yuMLCEGRSrK/view?usp=sharing"
    },
    {
        name: "Business Intelligence Specialist",
        issuer: "ITI",
        date: "2023",
        credentialId: "",
        icon: "fa-chart-line",
        verified: true,
        verifyLink: "https://github.com/ahmedtaha89/Certificates"
    },
    {
        name: "Intro to Excel",
        issuer: "365 Data Science",
        date: "November 2023",
        credentialId: "",
        icon: "fa-file-excel",
        verified: true,
        verifyLink: "https://github.com/ahmedtaha89/Certificates/blob/master/Intro%20to%20excel.pdf"
    },
    {
        name: "Python for Data Science, AI & Development",
        issuer: "Coursera",
        date: "August 2023",
        credentialId: "",
        icon: "fa-python",
        verified: true,
        verifyLink: "https://github.com/ahmedtaha89/Certificates/blob/master/Python%20for%20Data%20Science%2C%20AI%20%26%20Development.pdf"
    },
    {
        name: "Pandas",
        issuer: "Kaggle",
        date: "August 2023",
        credentialId: "",
        icon: "fa-table",
        verified: true,
        verifyLink: "https://github.com/ahmedtaha89/Certificates/blob/master/Ahmed%20Taha%20-%20Pandas.png"
    },
    {
        name: "Excel Fundamentals for Data Analysis",
        issuer: "Coursera",
        date: "August 2023",
        credentialId: "",
        icon: "fa-file-excel",
        verified: true,
        verifyLink: "https://github.com/ahmedtaha89/Certificates/blob/master/Excel%20Fundamentals%20for%20Data%20Analysis.pdf"
    },
    {
        name: "SQL for Data Science",
        issuer: "Coursera",
        date: "August 2023",
        credentialId: "",
        icon: "fa-database",
        verified: true,
        verifyLink: "https://github.com/ahmedtaha89/Certificates/blob/master/Coursera%20SQL%20for%20Data%20Science.pdf"
    },
    {
        name: "Tech Freelancing",
        issuer: "Mahara Tech",
        date: "April 2023",
        credentialId: "",
        icon: "fa-briefcase",
        verified: true,
        verifyLink: "https://github.com/ahmedtaha89/Certificates/blob/master/Mahara%20Tech%20Freelancing.pdf"
    },
    {
        name: "Data Analysis in Excel",
        issuer: "Coursera",
        date: "December 2022",
        credentialId: "",
        icon: "fa-chart-bar",
        verified: true,
        verifyLink: "https://github.com/ahmedtaha89/Certificates/blob/master/Data%20Analysis%20In%20Excel.pdf"
    },
    {
        name: "Introduction to SQL",
        issuer: "365 Data Science",
        date: "September 2022",
        credentialId: "",
        icon: "fa-database",
        verified: true,
        verifyLink: "https://github.com/ahmedtaha89/Certificates/blob/master/Intro%20SQL.pdf"
    }
];

// Projects data - Active projects
const projects = [
    {
        title: "SQL Data Warehouse Project",
        description: "Comprehensive data warehouse built using Medallion Architecture (Bronze, Silver, Gold layers) with SQL Server. Features ETL pipelines, star schema modeling, data cleansing, and analytics for sales data from multiple source systems.",
        tech: ["SQL Server", "ETL", "Data Modeling", "Data Warehouse", "Analytics"],
        icon: "fa-database",
        link: "https://github.com/DataWithBaraa/sql-data-warehouse-project"
    },
    {
        title: "Call Center Analytics",
        description: "Analyzed call center data to test operational effectiveness and created visualizations for performance monitoring.",
        tech: ["Power BI", "Excel", "SQL"],
        icon: "fa-phone-volume",
        link: "https://github.com/ahmedtaha89/Call-Center-Project.git"
    },
    {
        title: "High School Results Analysis",
        description: "Data analysis project on Egyptian high school public results 2022, extracting insights and trends using Excel.",
        tech: ["Excel", "Data Analysis"],
        icon: "fa-graduation-cap",
        link: "https://github.com/ahmedtaha89/High-School-Public-Results-2022-EG.git"
    },
    {
        title: "Data Cleaning with SQL",
        description: "Comprehensive data cleaning project demonstrating SQL techniques for data quality improvement and standardization.",
        tech: ["SQL", "Data Quality"],
        icon: "fa-broom",
        link: "https://github.com/ahmedtaha89/PortfolioProjects.git"
    },
    {
        title: "Egyptian ID Numbers Analyzer",
        description: "Python utility that extracts information from Egyptian national ID numbers including birthdate, governorate, gender, and calculates age in multiple units (years, months, days, hours, minutes, seconds).",
        tech: ["Python", "DateTime", "Data Processing"],
        icon: "fa-id-card",
        link: "https://github.com/ahmedtaha89/egyptian-national-id-parser"
    }
];

// Load certifications dynamically
function loadCertifications() {
    const container = document.getElementById('certificationsContainer');
    certifications.forEach(cert => {
        const certCard = document.createElement('div');
        certCard.className = 'certification-card';
        
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
}

// Load projects dynamically
function loadProjects() {
    const container = document.getElementById('projectsContainer');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
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
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// CV Download Handler
document.getElementById('downloadCV').addEventListener('click', function(e) {
    e.preventDefault();
    
    // PDF Download Configuration
    // Place your PDF file in the same folder and name it: Ahmed_Taha_CV.pdf
    const pdfFileName = 'Ahmed_Taha_BI_ETLDeveloper_CV.pdf';
    
    // Create download link
    const link = document.createElement('a');
    link.href = pdfFileName;
    link.download = pdfFileName;
    link.target = '_blank';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('CV download initiated');
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    loadCertifications();
});