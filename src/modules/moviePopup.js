import sendComment from './sendComment.js';
import displayComment, { includeUI } from './displayComment.js';

const container = document.querySelector('.pop-content');
const moviePopup = async (id, image, name, summary) => {
  container.innerHTML = '';
  container.innerHTML += `
          <div class="movie-div show-${id}" >
            <p class="pop-header">${name}</p>
            <button class="btn-close">❌</button>
          </div>
          <img src=${image.medium} class="pop-img" alt="movie logo" />
          <p class="pop-header">${name}</p>
          <p class="descr">
            ${summary}
          </p>
            <div class="comment-holder">
                <div class="comments">
                </div>
            </div>
          <p>Comments (<span class="number">0</span>)</p>
          <form id="add-comment">
            <div class="error">Please fill in all fields!</div>
            <div class="div-form">
              <label for="name">
                <input type="text" id="name" placeholder="Your name" />
              </label>
              <label for="comment">
                <input type="text" id="comment" placeholder="Your comment" />
              </label>
              <div class="btn-comment">
                <button type="submit" id="sub-comment">Submit</button>
              </div>
            </div>
          </form>
    `;
  const names = document.getElementById('name');
  const comment = document.getElementById('comment');
  const submit = document.getElementById('sub-comment');

  submit.addEventListener('click', async (e) => {
    e.preventDefault();
    if (names.value !== '' && comment.value !== '') {
      await sendComment(id, names.value, comment.value);
      includeUI(names.value, comment.value);
      names.value = '';
      comment.value = '';
    }
  });

  displayComment(id);
};

export default moviePopup;
