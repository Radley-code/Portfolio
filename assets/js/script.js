// Mobile menu from html by using its id
const mobileMenu = document.getElementById("mobile-menu");
mobileMenu.addEventListener("click", () => {
  //add event listener to the mobile menu
  const desktopMenu = document.getElementById("desktop-menu"); // gets the desktop menu
  // Swap class mames of mobile and desktop menus
  mobileMenu.classList.toggle("active");
  desktopMenu.classList.toggle("active");
});

//DOM MANIPULATION FOR PROJECTS SECTION

//Store cards data as an array of objects

const projects = [
  {
    title: "Professional Art Printing Data",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    techStark: ["HTML", "Ruby", "BootStrap"],
    button: "#",
  },
  {
    title: "Professional Art Printing Data",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    techStark: ["HTML", "Ruby", "BootStrap"],
    button: "#",
  },
  {
    title: "Professional Art Printing Data",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    techStark: ["HTML", "Ruby", "BootStrap"],
    button: "#",
  },
  {
    title: "Professional Art Printing Data",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    techStark: ["HTML", "Ruby", "BootStrap"],
    button: "#",
  },
  {
    title: "Professional Art Printing Data",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    techStark: ["HTML", "Ruby", "BootStrap"],
    button: "#",
  },
  {
    title: "Professional Art Printing Data",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    techStark: ["HTML", "Ruby", "BootStrap"],
    button: "#",
  },
];

let diffcard = {
    title: 'Multi-Post Stories',
    description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required.  has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer  took a standard dummy text.',
    techStark: ["CSS","HTML","Bootstrap", "Ruby"],
    button: "#", 
}

function createCard(card) {
  // Create main div with class name same class name from the css file
  const cardDiv = document.createElement("div");
  cardDiv.className = "sim_card";

  // Create h3 element and set its text content
  const title = document.createElement("h3");
  title.textContent = card.title;
  cardDiv.appendChild(title); // Append h3 to main div

  // Create p element and set its text content
  const description = document.createElement("p");
  description.textContent = card.description;
  cardDiv.appendChild(description);

  // Create ul element for tech stack
  const techStackList = document.createElement("ul");
  card.techStark.forEach((tech) => {
    const listItem = document.createElement("li");
    listItem.textContent = tech;
    techStackList.appendChild(listItem);
  });
  cardDiv.appendChild(techStackList); // append the list to parent

  // Create button element and set its text content and attributes
  const button = document.createElement("button");
  button.type = "button";
  button.title = "See Project";
  button.textContent = "See Project";

  // Add event listener for modal pop-up
  button.addEventListener("click", function () {
    openModal(card);
  });

  cardDiv.appendChild(button);
  return cardDiv; // Return the complete card div
}

//Render the card in the div called Sim_cards

function displayCards() {
  const cardsContainer = document.querySelector(".sim_cards"); // Selects the container for the cards
  projects.forEach((project) => {
    const cardElement = createCard(project); // Create a card for each project
    cardsContainer.appendChild(cardElement); // Append the card to the container
  });
}

document.addEventListener("DOMContentLoaded", displayCards());

// Modal logic
function openModal(card) {
  const modal = document.getElementById("project-modal");
  document.getElementById("modal-title").textContent = card.title;
  document.getElementById("modal-description").textContent = card.description;
  const techList = document.getElementById("modal-tech");
  techList.innerHTML = "";
  card.techStark.forEach((tech) => {
    const li = document.createElement("li");
    li.textContent = tech;
    techList.appendChild(li);
  });
  modal.style.display = "block";
}



// Close modal logic
document.getElementById("close-modal").onclick = function () {
  document.getElementById("project-modal").style.display = "none";
};

// Close modal when clicking outside modal content
window.onclick = function (event) {
  const modal = document.getElementById("project-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
