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
