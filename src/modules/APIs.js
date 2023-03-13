export const fetchAnime = async (url) => {
  const options = {
    method: 'GET',
    url: 'https://anime-db.p.rapidapi.com/anime',
    params: {
      page: '1',
      size: '100',
      genres: 'Fantasy,Drama',
      sortBy: 'ranking',
      sortOrder: 'asc',
    },
    headers: {
      'X-RapidAPI-Key': '357461956cmsh1d505ae08426d9ap12c495jsnaa2b76bae2ac',
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
    },
  }
  const response = await fetch(url, options).then((res) => res.json())
  return response.data
}

export const fetchLikes = async (url) => {
  const response = await fetch(url).then((res) => res.json())
  console.log(response)
}
export async function fetchComments(url) {
  const response = await fetch(url).then((res) => res.json())
  return response
}
export const postLikes = async (id, url) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  })
}
export const postComments = async (id, username, comment, url) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
  })
}
