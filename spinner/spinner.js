const spinnerElement = document.querySelector('.spinner-wrapper');

spinnerElement.parentElement.removeChild(spinnerElement);

let currentElement;
const spinner = {
  show: (elem) => {
    console.log('showing spinner');
    currentElement = elem;
    elem.appendChild(spinnerElement);
  },
  hide: () => {
    console.log('hiding spinner');
    if (currentElement) {
      currentElement.removeChild(spinnerElement);
    }
  },
}

export default spinner;
