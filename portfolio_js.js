// Projects data - Easy to add new projects
const projects = [
    {
        title: "ETL Pipeline for Data Warehousing",
        description: "Designed and implemented ETL pipeline using Informatica PowerCenter to load and transform large datasets, ensuring data integrity and consistency.",
        tech: ["Informatica", "SQL Server", "ETL"],
        icon: "fa-database",
        link: ""
    },
    {
        title: "Power BI Dashboard Development",
        description: "Developed business intelligence dashboard to visualize key business metrics, improving decision-making processes with dynamic reports and KPI visualizations.",
        tech: ["Power BI", "SQL", "DAX"],
        icon: "fa-chart-bar",
        link: ""
    },
    {
        title: "SQL Server BI Development",
        description: "Built reports using SSRS and developed OLAP cubes with SSAS for efficient multidimensional analysis and reporting.",
        tech: ["SSRS", "SSAS", "SQL", "OLAP"],
        icon: "fa-cube",
        link: ""
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
    }
];

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
});