/* ==================================
   1. CONTEÚDOS DOS MODAIS
================================== */

const conteudos = {

    tubarao: {

        titulo: "MITO: Todos os tubarões precisam nadar constantemente",

        texto: `
            Nem todos os tubarões precisam nadar
            continuamente para conseguir respirar.

            Algumas espécies dependem do movimento
            para fazer a água passar pelas brânquias.

            Entretanto, outras espécies,
            como o tubarão-lixa,
            conseguem bombear água pelas brânquias
            mesmo quando estão paradas.

            Portanto, a ideia de que todos
            os tubarões precisam nadar
            constantemente é um mito!
        `

    },


    aguaviva: {

        titulo: "MEIA-VERDADE: Existem águas-vivas imortais?",

        texto: `
            Existe uma espécie de água-viva
            chamada Turritopsis dohrnii,
            popularmente conhecida como
            água-viva-imortal.

            Ela possui uma capacidade extraordinária:
            em determinadas circunstâncias,
            consegue retornar de sua fase adulta
            para uma fase anterior de desenvolvimento.

            Isso significa que pode reiniciar
            seu ciclo de vida.

            Entretanto, essa habilidade
            não a torna verdadeiramente imortal.

            Ela ainda pode morrer devido
            a doenças, predadores ou
            condições ambientais desfavoráveis.
        `

    }

};



/* ==================================
   2. FUNÇÃO PARA ABRIR O MODAL
================================== */

function abrirModal(animal) {

    // Seleciona a janela modal

    const modal = document.getElementById("modal");


    // Seleciona o título do modal

    const titulo = document.getElementById("modal-titulo");


    // Seleciona o texto do modal

    const texto = document.getElementById("modal-texto");


    // Verifica se o conteúdo existe

    if (!conteudos[animal]) {
        return;
    }


    // Insere o título correspondente

    titulo.textContent = conteudos[animal].titulo;


    // Insere o texto correspondente

    texto.textContent = conteudos[animal].texto;


    // Torna o modal visível

    modal.style.display = "flex";


    // Impede a rolagem da página

    document.body.style.overflow = "hidden";

}



/* ==================================
   3. FUNÇÃO PARA FECHAR O MODAL
================================== */

function fecharModal() {

    // Seleciona a janela modal

    const modal = document.getElementById("modal");


    // Esconde o modal

    modal.style.display = "none";


    // Libera novamente a rolagem

    document.body.style.overflow = "auto";

}



/* ==================================
   4. FECHAR CLICANDO FORA
================================== */

window.addEventListener("click", function(event) {

    const modal = document.getElementById("modal");


    // Verifica se o clique ocorreu
    // sobre o fundo escuro do modal

    if (event.target === modal) {

        fecharModal();

    }

});



/* ==================================
   5. FECHAR COM A TECLA ESC
================================== */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        fecharModal();

    }

});