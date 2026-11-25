const boutonMenu = document.querySelector(".menu-toggle");
const liensMenu = document.querySelector(".menu-liens");
const projets = document.querySelectorAll(".projet");

boutonMenu.addEventListener("click", function () {
  liensMenu.classList.toggle("ouvert");
});
liensMenu.querySelectorAll("a").forEach(function (lien) {
  lien.addEventListener("click", function () {
    liensMenu.classList.remove("ouvert");
  });
});
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
});

projets.forEach(function (projet) {
  observer.observe(projet);
});
const sectionApropos = document.querySelector("#apropos");

if (sectionApropos) {
  const observerApropos = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sectionApropos.classList.add("visible");
        } else {
          sectionApropos.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.3,
    },
  );

  observerApropos.observe(sectionApropos);
}
const sectionCompetences = document.querySelector("#competences");

if (sectionCompetences) {
  const observerCompetences = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sectionCompetences.classList.add("visible");
        } else {
          sectionCompetences.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.1,
    },
  );

  observerCompetences.observe(sectionCompetences);
}
