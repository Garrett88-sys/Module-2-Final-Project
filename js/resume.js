// resume.js - An array of objects, with category filter buttons.

// Career experience and education objects in an array.
const entries = [
  { category: "education", title: "Computer Information Technology (CIT)", place: "TCAT Memphis", when: "Graduated August 2026",
    detail: "Coursework in computer hardware, operating systems, and networking." },
  { category: "education", title: "Full-Stack Software Development Certification", place: "CodeCrew Code School", when: "In progress",
    detail: "Learning HTML, CSS, and JavaScript by building real projects." },
  { category: "certification", title: "CompTIA A+ (Core 1 and Core 2)", place: "CompTIA", when: "Completed",
    detail: "Exams 220-1201 and 220-1202: hardware, networking, mobile devices, operating systems, security, and troubleshooting." },
  { category: "experience", title: "Warehouse Assistant Manager", place: "Dana Home Furniture Store & Warehouse Depot", when: "May 2022 - September 2022",
    detail: "Helped lead daily warehouse operations and supported the team." },
  { category: "experience", title: "Warehouse and Logistics Associate", place: "Superb Staffing Solutions", when: "April 2020 - May 2022",
    detail: "Supported warehouse operations and assisted with logistics coordination." },
  { category: "skill", title: "Hardware and PC troubleshooting", place: "", when: "",
    detail: "Diagnosing power, RAM, storage, and display problems." },
  { category: "skill", title: "Windows setup and support", place: "", when: "",
    detail: "Installing, configuring, and fixing Windows." },
  { category: "skill", title: "Networking basics", place: "", when: "",
    detail: "Wired and wireless setup and connection troubleshooting." },
  { category: "skill", title: "Customer service and teamwork", place: "", when: "",
    detail: "Clear communication and calm problem solving, built in warehouse and logistics roles." },
  { category: "skill", title: "HTML, CSS, and JavaScript", place: "", when: "",
    detail: "Building websites through the CodeCrew program." }
];

// Filter categories for the resume entries.
const categories = [
  { key: "all", label: "All" },
  { key: "education", label: "Education" },
  { key: "certification", label: "Certifications" },
  { key: "experience", label: "Experience" },
  { key: "skill", label: "Skills" }
];


function showCategory(key) {
 
  // Filter buttons, with the chosen one highlighted
  let buttons = "";
  for (let i = 0; i < categories.length; i++) {
    let style = "btn";
    if (categories[i].key === key) {
      style = "btn selected";
    }
    buttons = buttons + '<button class="' + style + '" onclick="showCategory(\'' + categories[i].key + '\')">' + categories[i].label + "</button>";
  }
  document.getElementById("filters").innerHTML = buttons;

  // Cards for the entries in that category
  let cards = "";
  for (let i = 0; i < entries.length; i++) {
    if (key === "all" || entries[i].category === key) {
      let line = "";
      if (entries[i].place !== "") {
        line = '<p class="muted">' + entries[i].place + ", " + entries[i].when + "</p>";
      }
      cards = cards + '<div class="card fade-in"><span class="tag-' + entries[i].category + '">' + entries[i].category + "</span>" +
        "<h3>" + entries[i].title + "</h3>" + line + "<p>" + entries[i].detail + "</p></div>";
    }
  }
  document.getElementById("entries").innerHTML = cards;
}

showCategory("all");
