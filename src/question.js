export class Question {
  static create(question) {
    return fetch(
      'https://podcast-app-8154e-default-rtdb.europe-west1.firebasedatabase.app/questions.json',
      {
        method: 'POST',
        body: JSON.stringify(question),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        question.id = response.name;
        return question;
      })
      .then(addToLocalStoroge)
      .then(Question.renderList);
  }
  static fetch(token) {
    if (!token) {
      return Promise.resolve('<p class="error">У Вас нет Токена</p>');
    }
    return fetch(
      `https://podcast-app-8154e-default-rtdb.europe-west1.firebasedatabase.app/questions.json?auth=${token}`
    )
      .then((response) => response.json())
      .then((response) => {
        //    console.log('111', response);
        //    console.log('222', Object.keys(response));
        if (response && response.error) {
          return `<p class="error">${response.error}</p>`;
        }
        return response
          ? Object.keys(response).map((key) => ({
              ...response[key],
              id: key,
            }))
          : [];
      });
    //  .then((response) => console.log('Hello', response));
  }

  static renderList() {
    const questions = getQuestionsFromLocalStoroge();
    const html = questions.length
      ? questions.map(toCard).join(' ')
      : `<div class="mui--text-headline">Вы пока ничего не спрашивали</div>`;
    const list = document.getElementById('list');
    list.innerHTML = html;
  }

  static listToHTML(questions) {
    console.log('!!!', questions.length);
    return questions.length
      ? `<ol>${questions.map((q) => `<li>${q.text}</li>`).join(' ')}</ol>`
      : '<p>Вопросов пока нет</p>';
  }
}

function addToLocalStoroge(question) {
  const all = getQuestionsFromLocalStoroge();
  all.push(question);
  localStorage.setItem('questions', JSON.stringify(all));
}

function getQuestionsFromLocalStoroge() {
  return JSON.parse(localStorage.getItem('questions')) || [];
}

function toCard(question) {
  return `
  <div class="mui--text-black-54">
            ${new Date(question.date).toLocaleDateString()}
            ${new Date(question.date).toLocaleTimeString()}
          </div>
          <div>${question.text}</div>
          <br />
  `;
}
