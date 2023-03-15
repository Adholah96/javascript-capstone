import showLike from './showLikes.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7FpyBFkfuWU4RjPiGc48/likes/';
const getLikes = async () => {
  const response = await fetch(url)
  const likes = await response.json()
  return likes
}

export default getLikes;
