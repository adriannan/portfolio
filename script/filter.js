const btnsPro = [...document.querySelectorAll("button[data-cat]")];
const projects = [...document.querySelectorAll(".projects__item")];
const projectsContent = document.querySelector(".projects__content");

function clear(key) {
  const keyProjects = projects.filter(pro => pro.classList.contains(key));
  projectsContent.textContent = "";
  keyProjects.forEach(pro => {
    projectsContent.appendChild(pro);
  });
}
const filter = e => {
  e.preventDefault();
  const cat = e.target.dataset.cat;
  clear(cat);
  btnsPro.forEach(btn => btn.classList.remove("projects__btn-active"));
  e.path[0].classList.add("projects__btn-active");
};

clear("site");
btnsPro.forEach(btn => btn.addEventListener("click", filter));

// function clear() {
//   const siteProjects = projects.filter(pro => pro.classList.contains("site"));
//   projectsContent.textContent = "";
//   siteProjects.forEach(pro => {
//     projectsContent.appendChild(pro);
//   });
// }
// const filter = e => {
//   e.preventDefault();
//   const cat = e.target.dataset.cat;
//   const filterProjects = projects.filter(pro => pro.classList.contains(cat));
//   projectsContent.textContent = "";
//   filterProjects.forEach(pro => {
//     projectsContent.appendChild(pro);
//   });
// };

// clear();
// btnsPro.forEach(btn => btn.addEventListener("click", filter));
