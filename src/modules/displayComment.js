import getComment from './getComment.js';

let counter = 0;
const displayComment = async (id) => {
  const commentData = await getComment(id);
  counter = commentData.length;
  const totalCount = document.querySelector('.number');
  const comments = document.querySelector('.comment-holder');
  const shwComments = document.querySelector('.comments');

  commentData.forEach((com) => {
    shwComments.innerHTML += `
        <p class="addedComment"><b>UserName</b>: ${com.username}</br></br> <b>Comment</b>: </br> ${com.comment}</p></br><hr/>
    `;
  });
  comments.appendChild(shwComments);
  totalCount.textContent = counter;
};

export const includeUI = (username, comment) => {
  const commentsHolder = document.querySelector('.comment-holder');
  const newComment = document.createElement('p');
  newComment.classList.add('addedComment');
  newComment.innerHTML = `${username}</br>${comment}`;
  commentsHolder.appendChild(newComment);

  const totalCount = document.querySelector('.number');
  const currentCount = parseInt(totalCount.textContent, 10);
  totalCount.textContent = currentCount + 1;
};

export default displayComment;
