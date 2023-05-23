const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modal-body");
const modalClose = document
  .querySelector(".modal-close")
  .addEventListener("click", () => closeModal());
const modalButton = document.querySelector(".modal-button");

const btns = document.querySelectorAll(".btn");

const modalInputName = document.querySelector(".modal-input_name");
const modalInputTel = document.querySelector(".modal-input_tel");

const errorList = ["Ошибка, заполните поле"];

const burger = document.getElementById("burger");
const menu_modile = document.getElementById("menu_modile");
const page = document.getElementById("page");
const element = document.querySelectorAll(
  ".menu_modile-list > .menu-item > .menu-link"
);

burger.addEventListener("click", () => {
  if (document.body.classList.contains("body-hide")) closeSidebar();
  else showSidebar();
});

function showSidebar() {
  document.body.classList.add("body-hide", "show-menu");
  page.classList.add("page-open");
}

page.addEventListener("click", () => closeSidebar());

function closeSidebar() {
  document.body.classList.remove("body-hide", "show-menu");
  page.classList.remove("page-open");
}

for (let elem of element) {
  elem.addEventListener("click", closeSidebar);
}

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

btns.forEach((btn) => btn.addEventListener("click", () => openModal()));

modal.addEventListener("click", () => closeModal());

function openModal() {
  modal.classList.add("show");
  document.body.classList.add("body-hide");

  modalBody.addEventListener("click", (event) => event.stopPropagation());
}

function closeModal() {
  modal.classList.remove("show");
  document.body.classList.remove("body-hide");
  clearErrorModal();
}

function clearErrorModal() {
  const modalErrors = document.querySelectorAll(".modal-error");
  if (modalErrors.length > 0)
    modalErrors.forEach((modalError) => modalError.remove());
}

modalInputName.addEventListener("input", () => {
  modalInputName.value = modalInputName.value.replace(/[^a-zA-Zа-яА-Я ]/g, "");
});

modalInputTel.addEventListener(
  "input",
  () => (modalInputTel.value = modalInputTel.value.replace(/\D/g, ""))
);

modalButton.addEventListener("click", () => {
  clearErrorModal();

  if (
    modalInputName.value.trim() == "" ||
    modalInputName.value.trim().length == 0
  )
    modalInputName.insertAdjacentHTML(
      "afterend",
      `<div class="modal-error  modal-error_name">
        <svg class="modal-error__icon" viewBox="0 0 16 16" fill="rgb(255, 0, 0)">
          <path
            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z">
          </path>
        </svg>
        <p class="modal-error__text">${errorList[0]}</p>
      </div>`
    );

  if (
    modalInputTel.value.trim() == "" ||
    modalInputTel.value.trim().length == 0
  )
    modalInputTel.insertAdjacentHTML(
      "afterend",
      `<div class="modal-error  modal-error_name">
        <svg class="modal-error__icon" viewBox="0 0 16 16" fill="rgb(255, 0, 0)">
          <path
            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z">
          </path>
        </svg>
        <p class="modal-error__text">${errorList[0]}</p>
      </div>`
    );
});
