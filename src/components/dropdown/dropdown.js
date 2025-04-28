import "./_dropdown.scss";

export default function Dropdown() {
  const dropdownWrapper = document.createElement("div");
  dropdownWrapper.classList.add("dropdown-wrapper");

  const categories = [
    {
      name: "Health",
      headlines: [
        { title: "Surfing", text: "Surfing is a surface water sport..." },
        {
          title: "Running",
          text: "Running is a method of terrestrial locomotion...",
        },
      ],
    },
    {
      name: "Health",
      headlines: [
        { title: "Surfing", text: "Surfing is a surface water sport..." },
        {
          title: "Running",
          text: "Running is a method of terrestrial locomotion...",
        },
      ],
    },
    {
      name: "Sport",
      headlines: [
        { title: "Surfing", text: "Surfing is a surface water sport..." },
        {
          title: "Running",
          text: "Running is a method of terrestrial locomotion...",
        },
      ],
    },
    {
      name: "Travel",
      headlines: [
        {
          title: "Exploring Bali",
          text: "Bali is a beautiful Indonesian island...",
        },
        {
          title: "Visiting Rome",
          text: "Rome is known for its stunning architecture...",
        },
      ],
    },
    {
      name: "Bussiness",
      headlines: [
        {
          title: "Exploring Bali",
          text: "Bali is a beautiful Indonesian island...",
        },
        {
          title: "Visiting Rome",
          text: "Rome is known for its stunning architecture...",
        },
      ],
    },
  ];

  categories.forEach((category) => {
    const categoryItem = document.createElement("div");
    categoryItem.classList.add("category-item");

    const categoryHeader = document.createElement("div");
    categoryHeader.classList.add("category-header");

    categoryHeader.innerHTML = `
      <img src="src/img/newsify_logo 2.png" alt="Logo" class="category-logo">
      <h2 class="category-title">${category.name}</h2>
      <span class="arrow">&#9654;</span> <!-- Right-pointing arrow -->
    `;

    const dropdownContent = document.createElement("div");
    dropdownContent.classList.add("dropdown-content");

    // Insert headlines
    category.headlines.forEach((headline) => {
      const item = document.createElement("div");
      item.classList.add("headline-item");

      item.innerHTML = `
        <img class="border-radius--5" src="https://placehold.co/50x50" alt="Placeholder Image">
        <div class="headline-text">
          <h3>${headline.title}</h3>
          <p>${headline.text}</p>
        </div>
      `;

      dropdownContent.appendChild(item);
    });

    // Start closed
    dropdownContent.style.display = "none";

    // Toggle open/close when header clicked
    categoryHeader.addEventListener("click", () => {
      const isOpen = dropdownContent.style.display === "block";
      dropdownContent.style.display = isOpen ? "none" : "block";
      categoryHeader.querySelector(".arrow").innerHTML = isOpen
        ? "&#9654;"
        : "&#9660;"; // Toggle arrow right/down
    });

    categoryItem.appendChild(categoryHeader);
    categoryItem.appendChild(dropdownContent);
    dropdownWrapper.appendChild(categoryItem);
  });

  return dropdownWrapper;
}
