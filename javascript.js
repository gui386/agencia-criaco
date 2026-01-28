const btnTopo = document.getElementById("btnTopo");

// Mostrar botão ao rolar a página
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
});

// Voltar ao topo
btnTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
