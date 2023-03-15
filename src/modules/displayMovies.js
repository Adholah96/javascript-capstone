const animeHolder = document.querySelector('.main');

const displayAnime = async (animes) => {
  animes.forEach((anime) => {
    const div = document.createElement('div');
    div.classList.add('anime-holder');
    div.innerHTML = `
        <div class="image-holder">
          <img src=${anime.image.medium} alt="first-anime" />
        </div>
        <h1>${anime.name}</h1>
        <div class="user-interaction">
          <h3 id="${anime.id}"class="modal-btn">COMMENT</h3>
          <button data-id=${anime.id} class="btn-like">Like</button>
        </div>
        <p class="likes-counter">
          <span id="show-${anime.id}" class="total-likes"></span> likes
        </p>
      `;
    animeHolder.appendChild(div);
  });
};

export default displayAnime;
