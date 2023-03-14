import './style.css';
import './cute.png';
import './anime.jpeg';
import Anime from './modules/animeClass.js';

const animeObject = new Anime();
const animesURL = 'https://anime-db.p.rapidapi.com/anime?page=1&size=20&genres=Award%20Winning%2CAction%2CHorror%2CSports%2CSupernatural%2CFantasy%2CDrama%2CComedy%2CAdventure%2CRomance%2CSci-Fi&sortBy=ranking&sortOrder=asc';
const animeHolder = document.querySelector('.main');
const likesAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qvRewcmh88OIPOPoLZPA/likes/';

animeObject.displayAnime(animeHolder, animesURL, likesAPI);
