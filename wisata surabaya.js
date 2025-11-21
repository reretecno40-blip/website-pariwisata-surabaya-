function toggleCard(card) {
  // Tutup semua card lain dulu
  document.querySelectorAll(".card").forEach(c => {
    if (c !== card) c.classList.remove("expanded");
  });

  // Toggle buka card ditekan
  card.classList.toggle("expanded");
}
