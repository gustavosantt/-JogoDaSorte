function shufflecards() {
    const cardContainer = document.querySelector('.Card-container');
    const cards = Array.from(cardContainer.children); // Pega todos os cards

    // Embaralha a ordem dos cards
    cards.sort(() => Math.random() - 0.5);

    // Remove todos os cards do contêiner
    cards.forEach(card => cardContainer.removeChild(card));

    // Reinsere os cards na nova ordem
    cards.forEach(card => cardContainer.appendChild(card));

    /*Agora, viramos todos os cards (mostrando o verso)
    cards.forEach(card => {
        card.classList.add('flipped');
    });*/

    // Agora, escutamos o clique no card para virar ele
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped'); // Quando clicar, vira o card
        });
    });

    //verificar se o card esta correto

    if (card.id === "correct-card") {
        // Se for o card correto, exibe o alerta
        alert('Você encontrou o card correto! Parabéns!');
    }

    alert ('Os card foram embaralhados');
    // Reabilita o clique nos cards após o tempo de embaralhamento (por exemplo, 1 segundo)
array.forEach(element => {
        setTimeout(() => {
    
});        cards.forEach(card => {
            card.style.pointerEvents = 'auto'; // Permite interação novamente
        });
    }, 1000); // Atraso de 1 segundo (1000 milissegundos)
}


