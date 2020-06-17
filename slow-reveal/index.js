let paragraphs = document.querySelectorAll('p');

for (let p of Array.from(paragraphs).slice(1)) {
  p.classList.add('hidden');
}

document.addEventListener('keypress', function (event) {
  if (event.key === 'j' || event.key === 'J') {
    let i = 0;
    let current = paragraphs.item(i);

    while (current !== null && !current.classList.contains('hidden')) {
      i++;
      current = paragraphs.item(i);
    }

    if (current !== null) {
      current.classList.remove('hidden');
    }
  }
});
