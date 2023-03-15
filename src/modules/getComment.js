const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7FpyBFkfuWU4RjPiGc48/comments/';

const getComment = async (id) => {
  const response = await fetch(`${url}?item_id=${id}`);
  const data = await response.json();
  return data;
};

export default getComment;
