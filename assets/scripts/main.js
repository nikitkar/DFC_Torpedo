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

const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modal-body");
const modalClose = document
  .querySelector(".modal-close")
  .addEventListener("click", () => closeModal());
const modalButton = document.querySelector(".modal-button");

const btns = document.querySelectorAll(".btn");

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
}

const errorList = [
  "Ошибка, заполните поле",
  "Ошибка, разрешен ввод только букв",
  "Ошибка, разрешен ввод только цифр",
];

modalButton.addEventListener("click", () => {
  const modalInputName = document.querySelector(".modal-input_name");
  const modalInputTel = document.querySelector(".modal-input_tel");

  const modalErrors = document.querySelectorAll(".modal-error");

  if (modalErrors.length > 1) {
    modalErrors.forEach((modalError) => modalError.remove());
  }

  if (
    modalInputName.value.trim() == "" ||
    modalInputName.value.trim().length == 0
  )
    modalInputName.insertAdjacentHTML(
      "afterend",
      `<div class="modal-error  modal-error_name">${errorList[0]}</div>`
    );

  if (
    modalInputTel.value.trim() == "" ||
    modalInputTel.value.trim().length == 0
  )
    modalInputTel.insertAdjacentHTML(
      "afterend",
      `<div class="modal-error  modal-error_name">${errorList[1]}</div>`
    );
});
