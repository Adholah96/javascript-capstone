
import './style.css'
import './cute.png'
import './anime.jpeg'
import fetchAnime from './modules/fetchAnimes'
import displayAnime from './modules/displayMovies'
import postLike from './modules/postLikes'
import getLikes from './modules/getLikes'
import showLike from './modules/showLikes'

const likedAnimes = async () => {
  const likeBtn = document.querySelectorAll('.btn-like')
  likeBtn.forEach((btn) => {
    btn.addEventListener('click', async () => {
      await postLike(btn.dataset.id)
      const likes = await getLikes()
      showLike(likes)
    })
  })
}

window.addEventListener('load', async () => {
  const animes = await fetchAnime()
  displayAnime(animes)
  likedAnimes()
  const likes = await getLikes()
  showLike(likes)
})


