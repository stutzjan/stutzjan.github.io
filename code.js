document.querySelectorAll('.card').forEach(card => {
    const cardImg = card.querySelector('.card__img');
    
    // Überprüfen, ob das .card__img-Element ein Hintergrundbild hat
    if (cardImg && window.getComputedStyle(cardImg).backgroundImage === 'url("")') {
        card.classList.add('no-image');
    }
});