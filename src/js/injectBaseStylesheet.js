const RULES = ''

export default function injectBaseStylesheet() {
  if (document.querySelector('.lum-base-styles')) {
    return;
  }

  let styleEl = document.createElement('style');
  styleEl.type = 'text/css';
  styleEl.classList.add('lum-base-styles');

  styleEl.appendChild(document.createTextNode(RULES));

  let head = document.head;
  head.insertBefore(styleEl, head.firstChild);
}
