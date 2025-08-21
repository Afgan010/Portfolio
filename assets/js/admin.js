document.addEventListener("DOMContentLoaded", () => {
  // ====== Default şəkillər ======
  const images = [
    "./assets/images/Project (1).png",
    "./assets/images/Rectangle 17.png",
    "./assets/images/Project.png",
    "./assets/images/Project (3).png",
    "./assets/images/Project (2).png",
    "./assets/images/Project (4).png",
  ];

  // ====== Projects array-i ======
  let projects = JSON.parse(localStorage.getItem("projects"));

  // Əgər localStorage boşdursa, default project-ləri əlavə et
  if (!projects || projects.length === 0) {
    projects = [
      { category: "coded", link: "#", image: images[0] },
      { category: "coded", link: "#", image: images[1] },
      { category: "designed", link: "#", image: images[2] },
      { category: "coded", link: "#", image: images[3] },
      { category: "designed", link: "#", image: images[4] },
    ];
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  // ====== HTML elementləri ======
  const form = document.getElementById("projectForm");
  const tableContainer = document.getElementById("projectsTable");

  // ====== LocalStorage-a yazmaq funksiyası ======
  function saveToLocal() {
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  // ====== Projectləri render etmək ======
  function renderProjects() {
    if (projects.length === 0) {
      tableContainer.innerHTML = "<p>No projects added yet.</p>";
      return;
    }

    tableContainer.innerHTML = `
      <table border="1" cellpadding="10" cellspacing="0">
        <thead>
          <tr>
            <th>Image</th>
            <th>Category</th>
            <th>Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${projects
            .map(
              (p, i) => `
            <tr>
              <td><img src="${p.image}" width="80" alt="Project ${i + 1}"></td>
              <td>${p.category}</td>
              <td><a href="${p.link}" target="_blank">Visit</a></td>
              <td>
                <button onclick="editProject(${i})">Edit</button>
                <button onclick="deleteProject(${i})">Delete</button>
              </td>
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>
    `;
  }

  // ====== Yeni project əlavə etmək ======
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const category = document
      .getElementById("projectCategory")
      .value.trim()
      .toLowerCase();
    const link = document.getElementById("projectLink").value.trim();
    const randomImage = images[projects.length % images.length];

    // dataset.editIndex varsa edit rejimi, yoxdursa yeni project
    if (form.dataset.editIndex === undefined || form.dataset.editIndex === "") {
      // Yeni project əlavə et
      projects.push({ image: randomImage, category, link });
    } else {
      // Edit rejimi
      const index = parseInt(form.dataset.editIndex);
      projects[index] = { image: projects[index].image, category, link };
      delete form.dataset.editIndex;
    }

    saveToLocal();
    form.reset();
    renderProjects();
  });

  // ====== Silmə funksiyası ======
  window.deleteProject = function (index) {
    if (confirm("Are you sure you want to delete this project?")) {
      projects.splice(index, 1);
      saveToLocal();
      renderProjects();
    }
  };

  // ====== Edit funksiyası ======
  window.editProject = function (index) {
    const project = projects[index];
    document.getElementById("projectCategory").value = project.category;
    document.getElementById("projectLink").value = project.link;
    form.dataset.editIndex = index;
  };

  // ====== İlk render ======
  renderProjects();
});
