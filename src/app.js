import { Question } from './question';
import { createModal, isValid } from './utils';
import { authWithEmailAndPassword, getAuthForm } from './auth';
import './styles.css';

const form = document.getElementById('form');
const input = form.querySelector('#question-input');
const submitBtn = form.querySelector('#submit');
const modalBtn = document.getElementById('modal-btn');

console.log('App working...');
// console.log(form);
// console.log(input);
// console.log(submitBtn);
window.addEventListener('load', Question.renderList);
modalBtn.addEventListener('click', openModal);
form.addEventListener('submit', submitFormHandler);
input.addEventListener('input', () => {
  submitBtn.disabled = !isValid(input.value);
});
function submitFormHandler(event) {
  event.preventDefault();
  if (isValid(input.value)) {
    const question = {
      text: input.value.trim(),
      date: new Date().toJSON(),
    };
    submitBtn.disabled = true;

    // *Async request to server to save question
    Question.create(question).then(() => {
      console.log('Question', question);
      input.value = '';
      input.className = '';
      submitBtn.disabled = false;
    });
  }
  //   console.log(input.value);
}

function openModal() {
  createModal('Авторизация', getAuthForm());
  document
    .getElementById('auth-form')
    .addEventListener('submit', authFormHandler, { once: true });
}

function authFormHandler(event) {
  event.preventDefault();
  const btn = event.target.querySelector('button');
  const email = event.target.querySelector('#email').value;
  const password = event.target.querySelector('#password').value;
  console.log(email, password);
  btn.disabled = true;

  authWithEmailAndPassword(email, password)
    .then((token) => {
      console.log('Token', token);
      return Question.fetch(token); /* !!!! */
    })
    .then(rendalModalAfterAuth)
    .then(() => (btn.disabled = false));
}

function rendalModalAfterAuth(content) {
  console.log('Content', content);
  if (typeof content === 'string') {
    createModal('Ошибка', content);
  } else {
    createModal('Список вопросов', Question.listToHTML(content));
  }
}
