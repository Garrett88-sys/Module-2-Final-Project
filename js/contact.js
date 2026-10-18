// contact.js - checks the contact form before it opens the email app,

// FAQ array of questions and answers.
const questions = [
  { q: "Where are you located?", a: "Memphis, Tennessee." },
  { q: "What kind of roles are you looking for?", a: "Help desk and IT support roles." },
  { q: "What certifications do you have?", a: "CompTIA A+ (Core 1 and Core 2)." },
  { q: "How soon can you reply?", a: "Within 24 hours but up to 72 hours" }
];

// An email check: an "@" that is not first, and a "." somewhere after it
function looksLikeEmail(text) {
  let at = -1;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "@") {
      at = i;
    }
  }
  if (at < 1) {
    return false;
  }
  for (let i = at + 2; i < text.length - 1; i++) {
    if (text[i] === ".") {
      return true;
    }
  }
  return false;
}

// Runs when the form is submitted. Returning false stops the email from opening.
function checkForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  let problems = "";

  if (name === "") {
    problems = problems + "<p>Please enter your name.</p>";
  }
  if (!looksLikeEmail(email)) {
    problems = problems + "<p>Please enter a valid email address, like name@example.com.</p>";
  }
  if (message.length < 10) {
    problems = problems + "<p>Your message should be at least 10 characters.</p>";
  }

  if (problems !== "") {
    document.getElementById("form-errors").innerHTML = '<div class="error shake">' + problems + "</div>";
    return false;
  }
  document.getElementById("form-errors").innerHTML = '<div class="error fade-in">Opening your email app...</div>';
  return true;
}

function showFaq() {
  let html = "";
  for (let i = 0; i < questions.length; i++) {
    html = html + '<button class="btn question" onclick="toggleAnswer(' + i + ')">' + questions[i].q + "</button>" +
      '<div id="answer-' + i + '" class="answer" style="display: none;">' + questions[i].a + "</div>";
  }
  document.getElementById("faq").innerHTML = html;
}

function toggleAnswer(i) {
  const box = document.getElementById("answer-" + i);
  if (box.style.display === "block") {
    box.style.display = "none";
  } else {
    box.style.display = "block";
  }
}

showFaq();
