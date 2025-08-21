const heroSocials = document.querySelector(".hero .description");
const socialsContainer = document.querySelector(".hero .socials");
const heroImg = document.querySelector(".hero .rightSide img");
const aboutTitle = document.querySelector("#about .title span");
const aboutDescription = document.querySelector("#about .description");
const aboutIcon = document.querySelectorAll("#about .icon img");
const aboutDesingTitle = document.querySelector(".desingTitle");
const aboutDesingInfo = document.querySelector(".desingInfo");
const aboutDevelopmentTitle = document.querySelector(".developmentTitle");
const aboutDevelopmentInfo = document.querySelector(".developmentInfo");
const aboutMaintanceTitle = document.querySelector(".maintanceTitle");
const aboutMaintanceInfo = document.querySelector(".maintanceInfo");
const footerContainer = document.querySelector(".footer-socials");

const heroData = {
  description: "Front-end Developer / UI Designer",
  socials: [
    { link: "#", img: "./assets/images/git.svg.png" },
    { link: "#", img: "./assets/images/@.png" },
    { link: "#", img: "./assets/images/Vector.png" },
  ],
  mainImage: "./assets/images/mainImage.svg.svg",
};
const aboutData = {
  description:
    "Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem <br /> sed viverra. In vel urna quis libero viverra facilisis ut ac est.",
  icon: "./assets/images/black2.png",
  info: {
    desing: {
      title: "DESING",
      text: "I can design the site based on your needs and suggestions. I can <br /> also design the site from scratch and consult you during the job.",
    },
    development: {
      title: "DEVELOPMENT",
      text: "I can design the site based on your needs and suggestions. I can <br /> also design the site from scratch and consult you during the job.",
    },
  },
  infoTwo: {
    maintance: {
      title: "MAINTANCE",
      text: "I can design the site based on your needs and suggestions. I can <br /> also design the site from scratch and consult you during the job.",
    },
  },
};
const skills = {
  usingNow: [
    { name: "HTML 5", img: "./assets/images/Html.svg", alt: "HTML5 Logo" },
    { name: "CSS 3", img: "./assets/images/css.svg", alt: "CSS3 Logo" },
    { name: "Sass", img: "./assets/images/Sass.svg", alt: "Sass Logo" },
    {
      name: "JavaScript",
      img: "./assets/images/javascript.svg",
      alt: "JavaScript Logo",
    },
    { name: "React", img: "./assets/images/react.svg", alt: "React Logo" },
    {
      name: "Bootstrap",
      img: "./assets/images/bootstrap-solid 1.png",
      alt: "Bootstrap Logo",
    },
    {
      name: "Git",
      img: "./assets/images/Git-Icon-1788C 1.png",
      alt: "Git Logo",
    },
    { name: "Figma", img: "./assets/images/figma.svg", alt: "Figma Logo" },
  ],
  learning: [
    { name: "Node.js", img: "./assets/images/node.png", alt: "Node.js Logo" },
    { name: "MySQL", img: "./assets/images/Delphin.svg", alt: "MySQL Logo" },
    {
      name: "MongoDB",
      img: "./assets/images/mongodb.png",
      alt: "MongoDB Logo",
    },
    {
      name: "TypeScript",
      img: "./assets/images/typescript.png",
      alt: "TypeScript Logo",
    },
  ],
  other: [
    {
      name: "English: <br /> C1/C2",
      img: "./assets/images/british.svg",
      alt: "English Flag",
    },
    {
      name: "Spanish: <br /> B1/B2",
      img: "./assets/images/spain.svg",
      alt: "Spanish Flag",
    },
    { name: "C++", img: "./assets/images/c++.svg", alt: "C++ Logo" },
    { name: "C", img: "./assets/images/C.svg", alt: "C Logo" },
  ],
};

const projects = [
  {
    category: "coded",
    img: "./assets/images/Project (1).png",
    alt: "Coded Project 1",
    link: "#",
  },
  {
    category: "coded",
    img: "./assets/images/Rectangle 17.png",
    alt: "Coded Project 2",
    link: "#",
  },
  {
    category: "designed",
    img: "./assets/images/Project.png",
    alt: "Designed Project 1",
    link: "#",
  },
  {
    category: "coded",
    img: "./assets/images/Project (3).png",
    alt: "Coded Project 3",
    link: "#",
  },
  {
    category: "designed",
    img: "./assets/images/Project (2).png",
    alt: "Designed Project 2",
    link: "#",
  },
  {
    category: "coded",
    img: "./assets/images/Project (4).png",
    alt: "Coded Project 4",
    link: "#",
  },
];
const footerData = {
  socials: [
    { link: "#", img: "./assets/images/facebook.svg", alt: "Facebook" },
    { link: "#", img: "./assets/images/instagram.svg", alt: "Instagram" },
    { link: "#", img: "./assets/images/linkedin.svg", alt: "LinkedIn" },
    { link: "#", img: "./assets/images/email.svg", alt: "Email" },
  ],
};

heroSocials.textContent = heroData.description;
heroImg.src = heroData.mainImage;

socialsContainer.innerHTML = "";
heroData.socials.forEach((s) => {
  const a = document.createElement("a");
  a.href = s.link;
  const img = document.createElement("img");
  img.src = s.img;
  img.alt = "icon";
  a.appendChild(img);
  socialsContainer.appendChild(a);
});

aboutDescription.innerHTML = aboutData.description;

aboutIcon.forEach((img) => {
  img.src = aboutData.icon;
});

aboutDesingTitle.textContent = aboutData.info.desing.title;
aboutDesingInfo.innerHTML = aboutData.info.desing.text;

aboutDevelopmentTitle.textContent = aboutData.info.development.title;
aboutDevelopmentInfo.innerHTML = aboutData.info.development.text;

aboutMaintanceTitle.textContent = aboutData.infoTwo.maintance.title;
aboutMaintanceInfo.innerHTML = aboutData.infoTwo.maintance.text;

function renderSkills(containerId, data) {
  const container = document.getElementById(containerId);
  container.innerHTML = data
    .map(
      (skill) => `
        <div class="logo">
          <img src="${skill.img}" alt="${skill.alt}" />
          <p>${skill.name}</p>
        </div>
      `
    )
    .join("");
}

renderSkills("using-now", skills.usingNow);
renderSkills("learning", skills.learning);
renderSkills("other-skills", skills.other);

const container = document.getElementById("portfolio-container");
const filterBtns = document.querySelectorAll(".choose p");

function renderProjects(filter = "all") {
  container.innerHTML = projects
    .filter((p) => filter === "all" || p.category === filter)
    .map(
      (p) => `
      <div class="project">
        <a href="${p.link}">
          <img src="${p.img}" alt="${p.alt}" />
        </a>
      </div>
    `
    )
    .join("");
}

renderProjects("all");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.getAttribute("data-filter");
    renderProjects(filter);
  });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  let errorSpans = document.querySelectorAll(".error");
  errorSpans.forEach((span) => (span.textContent = ""));

  let name = this.name.value.trim();
  let email = this.email.value.trim();
  let phone = this.phone.value.trim();
  let message = this.message.value.trim();

  if (name.length < 3) {
    this.name.nextElementSibling.textContent = "Minimum 2 hərfli ad daxil edin";
    valid = false;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    this.email.nextElementSibling.textContent = "düzgün email daxil edin";
    valid = false;
  }

  let phonePattern = /^\+?[0-9]{7,15}$/;
  if (!phonePattern.test(phone)) {
    this.phone.nextElementSibling.textContent = "nömrəni düzgün daxil edin.";
    valid = false;
  }

  if (message.length < 10) {
    this.message.nextElementSibling.textContent = "minimum 10 hərf daxil edin";
    valid = false;
  }

  if (valid) {
    alert("Form ugurla daxil edildi");
    this.reset();
  }
});

footerData.socials.forEach((s) => {
  const a = document.createElement("a");
  a.href = s.link;
  a.innerHTML = `<img src="${s.img}" alt="${s.alt}">`;
  footerContainer.appendChild(a);
});
