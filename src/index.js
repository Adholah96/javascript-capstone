import './style.css';
import './cute.png';
import './anime.jpeg';
import fetchAnime from './modules/fetchAnimes.js';
import displayAnime from './modules/displayMovies.js';
import postLike from './modules/postLikes.js';
import getLikes from './modules/getLikes.js';
import showLike from './modules/showLikes.js';
import moviePopup from './modules/moviePopup.js';

const showPopup = document.querySelector('.popup');

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

  document.addEventListener('click', async (event) => {
    const commentbtn = event.target.closest('.modal-btn');
    const closebtn = event.target.closest('.btn-close');

    if (commentbtn) {
      const pickedAnime = animes.filter(
        (selected) => selected.id.toString() === commentbtn.id.toString(),
      )[0];
      const {
        id, image, name, summary,
      } = pickedAnime;
      showPopup.classList.add('show');
      moviePopup(id, image, name, summary);
    }
    if (closebtn) {
      showPopup.classList.remove('show');
      displayAnime(animes);
      likedAnimes();
      const likes = await getLikes();
      showLike(likes);
    }
  });
});
