let lastScroll = 0;

window.addEventListener("scroll", () => {
   const header = document.getElementById("header");
   const current = window.scrollY;

   if (current > lastScroll) {
      // descendo -> esconder
      header.classList.add("hide");
   } else {
      // subindo -> mostrar
      header.classList.remove("hide");
   }

   lastScroll = current;
});


const modal = document.getElementById("modal");
const openBtn = document.querySelector(".btn");
const closeBtn = document.getElementById("closeModal");


openBtn.addEventListener("click", () => {
   modal.style.display = "flex";
});
closeBtn.addEventListener("click", () => {
   modal.style.display = "none";
});
window.addEventListener("click", (e) => {
   if (e.target === modal) modal.style.display = "none";
});
