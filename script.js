//add active class in select tab
const list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

//Funciones del Toggle
function toggleMenu() {
  let toggle = document.querySelector(".toggle");
  let navigation = document.querySelector(".navigation");
  let main = document.querySelector(".main");
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
  main.classList.toggle("active");
}
//Funcion Alertas
Swal.fire({
  title: "¡Bienvenido!",
  confirmButtonColor: "#4187f6",
});

function signOut() {
  Swal.fire({
    title: "Cerrar Sesión",
    text: "¿Seguro de cerrar sesión?",
    icon: "question",
    confirmButtonColor: "#4187f6",
    showCancelButton: true,
  });
}
