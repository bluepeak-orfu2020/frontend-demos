import spinner from './spinner.js';

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log('namn', e.target[0].value);
  console.log('age', e.target[1].value);

  spinner.show(form);

  fetch('https://localhost:44353/api/slow', {
    method: 'POST'
  }).then(() => {
    console.log('done!');
  }).catch(() => {
    console.log('error!');
  }).finally(() => {
    spinner.hide();
  });
});
