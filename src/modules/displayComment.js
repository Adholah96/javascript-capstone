import getComment from './getComment.js';

const displayComment = async (id) => {
  const commentData = await getComment(id);
  const comments = document.querySelector('.comment-holder');
  const shwComments = document.querySelector('.comments');

  commentData.forEach((com) => {
    shwComments.innerHTML += `
        <p class="addedComment"><b>UserName</b>: ${com.username}</br></br> <b>Comment</b>: </br> ${com.comment}</p></br><hr/>
    `;
  });
  comments.appendChild(shwComments);
};

export const includeUI = (username, comment) => {
  const comments = document.querySelector('.comment-holder');
  const shwComments = document.querySelector('.comments');
  shwComments.innerHTML += `
  <p class="addedComment">${username}</br>${comment}</p>
  `;
  comments.appendChild(shwComments);
};

export default displayComment;
