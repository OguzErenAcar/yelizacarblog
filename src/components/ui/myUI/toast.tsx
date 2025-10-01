import Toastify from 'toastify-js';



export function successToast(text: string) {
  Toastify({
    
    text: text,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "green",
      zIndex:"4",
    },
  }).showToast();
}
export function failToast(text: string) {
  Toastify({
    text: text,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "red",
      zIndex:"4",
    },
  }).showToast();
}