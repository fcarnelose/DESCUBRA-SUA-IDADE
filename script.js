
function calcularIdade() {
    const nascimento = Number(
        document.getElementById("nascimento").value
    );

    const ano = Number(
        document.getElementById("ano").value
    );

    const resultado = document.getElementById("resultado");

    if (!nascimento || !ano || nascimento > ano ||
        nascimento < 1) {
        resultado.innerHTML =
            "Por favor, informe anos válidos!";
        return;
    }

    const idadeFutura = ano - nascimento;

    if (ano > 2026) {
        resultado.innerHTML =
            `Em ${ano}, você terá ${idadeFutura} anos!`;
    } else {
        resultado.innerHTML =
            `Em ${ano}, você terá completado ${idadeFutura} anos!`;
    }
}
