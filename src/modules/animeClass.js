import { fetchAnime, fetchLikes } from './APIs.js';

class Anime {
  constructor() {
    this.animes = [];
  }

  async displayAnime(animeHolder, animeurl, likesurl) {
    const anime = await fetchAnime(animeurl);
    const likes = await fetchLikes(likesurl);

    anime.forEach((anime, index) => {
      const div = document.createElement('div');
      div.classList.add('anime-holder');
      let like = [];
      if (likes) {
        like = likes.filter((item) => item.item_id === `${index}`);
      }
      let liked = 0;
      if (like.length > 0) {
        liked = like[0].likes;
      }
      div.innerHTML = `
      <div class="image-holder">
        <img src=${anime.image} alt="first-anime" />
      </div>
      <h1 id="title-${index}">${anime.title}</h1>
      <div class="user-interaction">
        <h3 id="comment-${index}"class="modal-btn" id="modal">COMMENT</h3>
        <div id="liked-${index}" class="toggle">
          <input id="likei-${index}" type="checkbox" class="heart-check" />
        </div>
      </div>
      <p class="likes-counter">
        <span id="span-${index}">${liked}</span> likes
      </p>
  `;
      animeHolder.appendChild(div);

      const animeItem = {
        id: index,
        title: anime.title,
        image: anime.image,
        likes: liked,
      };
      this.animes.push(animeItem);
    });
  }
}

export default Anime;
