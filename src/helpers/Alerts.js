import Swal from "sweetalert2";

export const confirmationAlert = (text) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: text,
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