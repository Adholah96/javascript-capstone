const showLike = async (likes) => {
  likes.forEach((like) => {
    const elementid = `show-${like.item_id}`
    const showLike = document.getElementById(elementid)
    if (showLike !== null) {
      const likeCount = showLike.querySelector('.total-likes')
      if (likeCount !== null) {
        likeCount.innerHTML = `${like.likes}`
      }
    }
  })
}

export default showLike
