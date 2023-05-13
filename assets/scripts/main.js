function onToggle(event) {
  if (event.target.open) {
    document.querySelectorAll(".faq-item[open]").forEach((el) => {
      if (el === event.target) return;

      el.open = false;
    });
  }
}

document
  .querySelectorAll(".faq-item")
  .forEach((el) => el.addEventListener("toggle", onToggle));
