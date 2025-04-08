document.querySelectorAll('.card').forEach(card => {
    const cardImg = card.querySelector('.card__img');
    
    // Überprüfen, ob das .card__img-Element ein Hintergrundbild hat
    if (cardImg && window.getComputedStyle(cardImg).backgroundImage === 'url("")') {
        // Füge die .no-image-Klasse hinzu, wenn kein Hintergrundbild vorhanden ist
        card.classList.add('no-image');
    }
});