window.addEventListener('load', adjustPadding); // Passt das Padding beim Laden der Seite an
window.addEventListener('resize', adjustPadding); // Passt das Padding bei einer Größenänderung an

function adjustPadding() {
  const cards = document.querySelectorAll('.card');  // Alle Karten im Container auswählen
  const body = document.body;

  if (cards.length === 3) {  // Wenn es genau 3 Karten gibt
    body.style.paddingTop = '10vh';  // Padding erhöhen, wenn nur 3 Karten vorhanden sind
  } else {
    body.style.paddingTop = '2.5rem';  // Standard Padding
  }
}
