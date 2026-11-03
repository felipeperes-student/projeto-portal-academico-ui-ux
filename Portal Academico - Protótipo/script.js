
const links = document.querySelectorAll(".menu-link");

const paginas = document.querySelectorAll(".pagina");

const breadcrumb = document.getElementById("breadcrumb");

// FUNÇÃO PARA TROCAR DE PÁGINA

function abrirPagina(nome) {

    // Esconde todas as páginas
    paginas.forEach(pagina => {
        pagina.classList.remove("visivel");
    });

    // Remove a seleção de todos os links
    links.forEach(link => {
        link.classList.remove("ativo");
    });

    // Encontra a página selecionada
    const paginaSelecionada = document.getElementById(nome);

    const linkSelecionado = document.querySelector(
        `[data-page="${nome}"]`
    );

    // Exibe a página e atualiza o menu
    if (paginaSelecionada && linkSelecionado) {

        paginaSelecionada.classList.add("visivel");

        linkSelecionado.classList.add("ativo");

        breadcrumb.textContent = linkSelecionado.textContent;
    }
}

// EVENTOS DO MENU

links.forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        abrirPagina(this.dataset.page);

    });

});

// BOTÕES QUE DIRECIONAM PARA OUTRAS PÁGINAS

document.querySelectorAll("[data-go]").forEach(botao => {

    botao.addEventListener("click", () => {

        abrirPagina(botao.dataset.go);

    });

});

// SIMULAÇÃO DE PAGAMENTO

document.getElementById("pagar").addEventListener("click", () => {

    document.getElementById("mensagem-pagamento").textContent =
        "Demonstração: o pagamento seria encaminhado para o ambiente bancário.";

});

// SIMULAÇÃO DE SALVAMENTO DO PERFIL

document.getElementById("salvar-perfil").addEventListener("click", () => {

    document.getElementById("mensagem-perfil").textContent =
        "Alterações salvas (simulação para fins acadêmicos).";

});

// BOTÃO SAIR

document.getElementById("sair").addEventListener("click", event => {

    event.preventDefault();

    alert("Esta é uma demonstração acadêmica. A sessão não está conectada a um servidor.");

    abrirPagina("inicio");

});
