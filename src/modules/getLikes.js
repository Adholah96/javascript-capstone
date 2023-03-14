import showLike from './showLikes'

const url =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7FpyBFkfuWU4RjPiGc48/likes/'
const getLikes = async () => {
  let likes = []
  const response = await fetch(url)
  likes = await response.json()
  showLike(likes)
}

export default getLikes
