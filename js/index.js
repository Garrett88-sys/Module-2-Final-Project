// index.js - builds the "what I can help with" cards and the IT tip box.

// Skills objects in an array.
const services = [
  { title: "Hardware troubleshooting", text: "Diagnosing PCs and laptops, from power and RAM problems to failed drives." },
  { title: "Operating systems", text: "Installing, configuring, and fixing Windows and other common systems." },
  { title: "Networking basics", text: "Wired and wireless setup, IP addressing basics, and connection troubleshooting." },
  { title: "Customer-first support", text: "My warehouse and logistics background taught me to stay calm, communicate clearly, and keep work moving." }
];

// IT tips in an array.
const tips = [
  "Restart it. Many small glitches clear up after a fresh start.",
  "Check the cables first. A loose power or network cable causes a surprising number of tickets.",
  "Ask one question at a time and write down the answers.",
  "Change one thing at a time so you know what fixed the problem.",
  "Document the fix. The next person (maybe you) will thank you.",
  "Confirm with the user that it works before you close the ticket."
];


//Tech Skills cards layout.
function showServices() {
  let TechSkills = "";
  for (let i = 0; i < services.length; i++) {
    TechSkills = TechSkills + '<div class="card half"><h3>' + services[i].title + "</h3><p>" + services[i].text + "</p></div>";
  }
  document.getElementById("services").innerHTML = TechSkills;
}

// IT tips box layout 
let tipNumber = 0;
function showTip() {
  document.getElementById("tip").innerHTML =
    '<p class="fade-in"><strong>Tip ' + (tipNumber + 1) + " of " + tips.length + ":</strong> " + tips[tipNumber] + "</p>";
  tipNumber = tipNumber + 1;
  if (tipNumber === tips.length) {
    tipNumber = 0;
  }
}

showServices();
showTip();
