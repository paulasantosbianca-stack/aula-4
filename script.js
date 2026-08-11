
const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;
    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {
        let texto = botao.querySelector("span");
        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;
            botao.style.backgroundColor = "#FF69B4"; // Muda cor ao clicar
            botao.style.color = "white";
        } else {
            texto.textContent--;
            curtiu = false;
            botao.style.backgroundColor = "#FFB6C1"; // Volta cor original
            botao.style.color = "black";
        }
    }
});
