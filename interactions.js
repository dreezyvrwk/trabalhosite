document.addEventListener("DOMContentLoaded", function () {
    const btnmensagem = document.getElementById("btnmensagem");
    const textomensagem = document.getElementById("textomensagem");

    btnmensagem.addEventListener("click", function () {
        textomensagem.textContent = "May the force be with you!";
        textomensagem.classList.add("show");
    });
});