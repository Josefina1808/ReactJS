import Swal from "sweetalert2";

export const confirmationAlert = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto añadido al carrito",
      showConfirmButton: false,
      timer: 1400,
    });
  };
  
export const declainAlert = () => {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Error",
      showConfirmButton: false,
      timer: 1400,
    });
  };