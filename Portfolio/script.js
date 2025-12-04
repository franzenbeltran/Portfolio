
/* PORTFOLIO WEBSITE - JAVASCRIPT */

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");

  // Apply saved theme on page load
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggle) themeToggle.textContent = "☀️";
  } else {
    document.body.classList.remove("dark-mode");
    if (themeToggle) themeToggle.textContent = "🌙";
  }

  // Toggle theme when user clicks button
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      themeToggle.textContent = isDark ? "☀️" : "🌙";
    });
  }
});

/*  TYPING ANIMATION (Home Page)  */
const typingText = document.querySelector(".typing-text");
if (typingText) {
  const phrases = ["Franzen Beltran", "Full Stack Developer", "Creative Developer", "Problem Solver"];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
      typingText.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeEffect, 500);
      return;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }

  typeEffect();
}

/*  PROJECTS MODAL (Projects Page)  */
const modal = document.getElementById("projectModal");
if (modal) {
  const modalBody = document.getElementById("modalBody");
  const modalClose = document.querySelector(".modal-close");
  const projectCards = document.querySelectorAll(".project-card");

  const projectDetails = {
    project1: { 
      title: "Rentify - Landlord", 
      description: "This Apartment/Room Rental Management System is a web-based platform built to help landlords handle all aspects of rental management with ease and accuracy. It allows admins to manage tenant records, monitor rent schedules, track payments, send reminders, and oversee maintenance requests in an organized dashboard. The system also provides secure document storage and generates monthly and yearly income reports for better financial tracking. Overall, it gives landlords a modern, efficient tool that simplifies property management and improves communication with tenants.", 
      technologies: ["Html", "JavaScript", "Css", "Firebase"],
      github: "https://github.com/franzenbeltran/Rentify-Landlord",
      website: "https://rentify-landlord.netlify.app/login.html" 
    },
    project2: { 
      title: "Computer Cafe Kiosk System", 
      description: "Developed a server-client kiosk system for managing a computer cafe, supporting both customer and admin functionalities. The server application allows admins to add computers, manage customer orders, track sales, and maintain logs for both orders and administrative edits. The client application interacts with the server to display available units, monitor orders, and manage sessions. Key features include a secure admin login for closing the system, session timers with configurable start and end times, price tracking, and support for open hours.", 
      technologies: ["Java", "JavaFX", "MySQL"],
      github: "https://github.com/franzenbeltran/Computer-Kiosk-Management"
    },
    project3: { 
      title: "Computer Cafe Kiosk Client", 
      description: "The client application works alongside the server application to provide real-time interaction with the system. It features a startup window that connects to the database to display available orders and their corresponding units. Closing the application requires entering an admin password for security. The client also includes a session timer with functionalities to add or end time, view prices, and manage open hours. The application is built using Java for the backend, JavaFX for the front end, and MySQL for database connectivity.", 
      technologies: ["Java", "JavaFX", "MySQL"],
      github: "https://github.com/franzenbeltran/Computer-Management---ClientSide"
    },
    project4: { 
      title: "Automated Attendance System", 
      description: "Developed an Automated Attendance System using C programming to streamline and secure classroom attendance tracking. The system is designed to only allow attendance recording during the scheduled time of each subject—for example, if a class runs from 7:00 AM to 10:00 AM, teachers can mark attendance within a configurable window (e.g., 7:00–8:00 AM). After this period, students who have not been marked present are automatically recorded as absent. The system also includes a configurable late allowance, where students arriving within a set grace period (e.g., 5 minutes) are marked as late instead of absent. This project demonstrates skills in programming logic, file handling, and implementing time-based rules, providing an efficient, fair, and automated approach to attendance management.", 
      technologies: ["C"],
      github: "https://github.com/franzenbeltran/Automated-Attendance-System"
    },
  };

  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const projectId = card.getAttribute("data-project");
      const project = projectDetails[projectId];

      // Only show website button if project.website exists
      const websiteButton = project.website 
        ? `<a href="${project.website}" class="github-button" target="_blank" rel="noopener noreferrer">View Website</a>` 
        : "";

      modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <h4 style="margin-top:1.5rem;margin-bottom:0.5rem;color:var(--primary);">Languages Used:</h4>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:1rem;">
          ${project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
        </div>
        <p style="margin-top:1.5rem;color:var(--text-secondary);font-size:0.9rem;">
          <strong>Note:</strong> This is a sample project showcase.
        </p>
        <a href="${project.github}" class="github-button" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        ${websiteButton} <!-- Website button for project 1 -->
      `;

      modal.style.display = "block";
    });
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

/*  HAMBURGER MENU (Mobile)  */
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
    hamburger.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.style.display = "none";
      hamburger.classList.remove("active");
    });
  });
}

/*  SCROLL ANIMATIONS  */
const observerOptions = { threshold: 0.5 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "slideIn 0.6s ease forwards";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".skill-progress").forEach((skillBar) => {
  observer.observe(skillBar);
});

console.log("Portfolio JS loaded safely on this page!");

