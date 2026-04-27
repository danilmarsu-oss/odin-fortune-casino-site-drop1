const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    faqQuestions.forEach((item) => {
      item.setAttribute("aria-expanded", "false");
      const panel = item.nextElementSibling;
      panel.style.maxHeight = null;
    });

    if (!isExpanded) {
      button.setAttribute("aria-expanded", "true");
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    }
  });
});

const updatedDate = document.getElementById("updated-date");

if (updatedDate) {
  const date = new Date();
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Lisbon",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  updatedDate.textContent = formatter.format(date);
}
