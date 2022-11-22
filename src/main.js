const cabecalho = document.querySelector("header")
document.addEventListener("scroll", () => {
  const posicao = window.pageYOffset
  if (posicao == 0) {
    cabecalho.style.backgroundColor = "transparent"
    cabecalho.style.backdropFilter = "blur( 0 )"
  } else {
    cabecalho.style.backgroundColor = "rgba(0, 0, 0, 0.6)"
    cabecalho.style.backdropFilter = "blur( 15px )"
    cabecalho.style.transition = "all linear 0.5s"
  }
})
