import './style.css'
import './cute.png'
import './anime.jpeg'
import fetchAnime from './modules/fetchAnimes'
import displayAnime from './modules/displayMovies'
import postLike from './modules/postLikes'
import getLikes from './modules/getLikes'

const likedAnimes = () => {
  const likeBtn = document.querySelectorAll('.btn-like')
  likeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      postLike(btn.dataset.id)
    })
  })
}

window.addEventListener('load', async () => {
  const animes = await fetchAnime()
  displayAnime(animes)
  likedAnimes()
  getLikes()
})
