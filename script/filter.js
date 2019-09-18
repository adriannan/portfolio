const btnsPro = [...document.querySelectorAll("button[data-cat]")];
const projects = [...document.querySelectorAll(".projects__item")];
const projectsContent = document.querySelector(".projects__content");

function clear() {
  const siteProjects = projects.filter(pro => pro.classList.contains("site"));
  projectsContent.textContent = "";
  siteProjects.forEach(pro => {
    projectsContent.appendChild(pro);
  });
}
const filter = e => {
  e.preventDefault();
  const cat = e.target.dataset.cat;
  const filterProjects = projects.filter(pro => pro.classList.contains(cat));
  projectsContent.textContent = "";
  filterProjects.forEach(pro => {
    projectsContent.appendChild(pro);
  });
};

clear();
btnsPro.forEach(btn => btn.addEventListener("click", filter));
