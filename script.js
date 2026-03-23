// Frontend javascript w buttons
function toggleMenu() {
    const menu = document.querySelector(".mobile-menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  document.getElementById("resumeBtn").addEventListener("click", () => {
    window.open("./assets/resume_zara_maraj.pdf");
  });
  
  document.getElementById("contactBtn").addEventListener("click", () => {
    location.href = "./#contact";
  });

  // Loading project 
async function loadProjects() {
  // Fetch the data from our local server
  const response = await fetch('/api/projects');
  const projects = await response.json();

  // Select the container where we want to put the cards
  const container = document.getElementById('projects-container');
  
  // Clear the "Loading..." text
  container.innerHTML = '';

  //  Loop through every project in the JSON list
  projects.forEach(project => {
      // Create the HTML for ONE card using a Template String (backticks `)
      const cardHTML = `
          <div class="project-card">
            <div class="project-image-box">
              <img src="${project.image}" alt="${project.title}" class="project-img" />
            </div>
            <h2 class="project-title">${project.title}</h2>
            <p>${project.description}</p>
            <div class="button-container">
              <button class="btn button-outline" 
                onclick="location.href='${project.link}'">
                Github
              </button>
            </div>
          </div>
      `;
      
      // Add the new card to the container
      container.innerHTML += cardHTML;
  });
}

// Run the function immediately when the script loads
loadProjects();