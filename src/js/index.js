const cartas = document.querySelectorAll('.carta');

cartas.forEach((carta) => {
    carta.addEventListener('click', () => {


        
        const cartaSelecionada = document.querySelector('.selecionada');
        cartaSelecionada.classList.remove('selecionada');
        carta.classList.add('selecionada');
        
        const cartaGrande = document.querySelector('.carta-grande');  

        const idCarta = carta.attributes.id.value;

        cartaGrande.src = `./src/images/${idCarta}-grande.png`;

        const nomeCarta = document.getElementById('nome-carta');
        nomeCarta.innerText = carta.getAttribute('data-name');

        const descricaoCarta = document.getElementById('descricao-carta');
        descricaoCarta.innerText = carta.getAttribute('data-description');


        
    })
  
});


