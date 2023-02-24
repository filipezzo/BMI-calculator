export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".title span"),
  btnClose: document.querySelector(".modal .close"),

  open() {
    Modal.wrapper.classList.add('open')
  },

  close() {
    Modal.wrapper.classList.remove('open')
  }
}


Modal.btnClose.addEventListener("click", () => {
  Modal.close();
})

window.addEventListener('keydown', handleKeydown)

function handleKeydown(e) {
  if (e.key === "Escape") {
    Modal.close()
  }
}
