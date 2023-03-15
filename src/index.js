import './style.css';
import './cute.png';
import './anime.jpeg';
import fetchAnime from './modules/fetchAnimes.js';
import displayAnime from './modules/displayMovies.js';
import postLike from './modules/postLikes.js';
import getLikes from './modules/getLikes.js';
import Anime from './modules/animeClass.js';

const likedAnimes = () => {
  const likeBtn = document.querySelectorAll('.btn-like');
  likeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      postLike(btn.dataset.id);
    });
  });
};

window.addEventListener('load', async () => {
  const animes = await fetchAnime();
  displayAnime(animes);
  likedAnimes();
  getLikes();
});

const animeObject = new Anime();
const animesURL = 'https://anime-db.p.rapidapi.com/anime?page=1&size=20&genres=Award%20Winning%2CAction%2CHorror%2CSports%2CSupernatural%2CFantasy%2CDrama%2CComedy%2CAdventure%2CRomance%2CSci-Fi&sortBy=ranking&sortOrder=asc';
const animeHolder = document.querySelector('.main');
const likesAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qvRewcmh88OIPOPoLZPA/likes/';

animeObject.displayAnime(animeHolder, animesURL, likesAPI);
