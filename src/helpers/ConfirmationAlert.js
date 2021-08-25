import Swal from "sweetalert2";

export const alertAdd = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto añadido al carrito",
      showConfirmButton: false,
      timer: 1400,
    });
  };