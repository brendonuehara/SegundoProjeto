// Opacity icon whatsapp
let iconClose = document.getElementById("icon-whatsapp-close");
let spanWhatsapp = document.getElementById("span-whatsapp");

spanWhatsapp.addEventListener("mouseover", () => {
  iconClose.style.opacity = 0.4;
});

iconClose.addEventListener("mouseover", () => {
  iconClose.style.opacity = 1;
});

iconClose.addEventListener("mouseleave", () => {
  iconClose.style.opacity = 0;
});

spanWhatsapp.addEventListener("mouseleave", () => {
  iconClose.style.opacity = 0;
});
//

// Closed span whatsapp

function closeSpan() {
  setTimeout(() => {
    spanWhatsapp.style.display = "none";
    iconClose.style.display = "none";
  }, 300)
}

iconClose.addEventListener("click", closeSpan);

//
