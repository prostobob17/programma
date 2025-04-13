
let screamerShown = false;

function triggerScreamerThenOpen(url) {
  if (!screamerShown && Math.random() < 0.7) {
    screamerShown = true;
    const screamer = document.getElementById('screamer');
    const sound = document.getElementById('screamSound');
    screamer.classList.remove('hidden');
    sound.play();
    setTimeout(() => {
      screamer.classList.add('hidden');
      window.open(url, '_blank');
    }, 2000);
  } else {
    window.open(url, '_blank');
  }
}
