const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7FpyBFkfuWU4RjPiGc48/comments/';

const sendComment = async (id, username, comment) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
  });
};

export default sendComment;
