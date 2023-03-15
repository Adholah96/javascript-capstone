import './style.css';
import './cute.png';
import './anime.jpeg';
import fetchAnime from './modules/fetchAnimes.js';
import displayAnime from './modules/displayMovies.js';
import postLike from './modules/postLikes.js';
import getLikes from './modules/getLikes.js';
import showLike from './modules/showLikes.js';

const likedAnimes = async () => {
  const likeBtn = document.querySelectorAll('.btn-like');
  likeBtn.forEach((btn) => {
    btn.addEventListener('click', async () => {
      await postLike(btn.dataset.id);
      const likes = await getLikes();
      showLike(likes);
    });
  });
};

window.addEventListener('load', async () => {
  const animes = await fetchAnime();
  displayAnime(animes);
  likedAnimes();
  const likes = await getLikes();
  showLike(likes);
});
