import Swal from "sweetalert2";

export const confirmationAlert = (title, text) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: title,
      text: text,
      showConfirmButton: true,
    });
  };
  
export const declainAlert = (text) => {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: text,
      showConfirmButton: false,
      timer: 1400,
    });
  };