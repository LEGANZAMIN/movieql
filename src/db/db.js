import axios from 'axios';

const BASE_URL = "https://yts.lt/api/v2/";

const MOVIE_LIST     = `${BASE_URL}list_movies.json`;
const MOVIE_DETAIL   = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGEEST = `${BASE_URL}movie_suggestions.json`;

/*
export let movies = [{
    id : 1,
    title : "sungmin1",
    rating : 250,
    medium_cover_image:"ddd"
}]
;
*/

/*
export const getMovies = (limit, minimum_rating) => {
    var result = axios.get(`${API_URL}`);
    console.log(result);
  return  movies;

}
*/
export const getMovies = async (limit, minimum_rating) => {

    //const response = await axios.get(`${API_URL}`);
    const {
        data: {
            data:{ movies }
        }
    } = await axios.get(`${MOVIE_LIST}`, { params: {limit, minimum_rating} });

    return movies
}

export const getMovie = async (id) => {
    const {
        data: {
            data:{ movie }
        }
    } = await axios.get(`${MOVIE_DETAIL}`, { params: {movie_id:id} });

    return movie
}

export const getSuggestion = async (id) => {
    const {
        data: {
            data:{ movies }
        }
    } = await axios.get(`${MOVIE_SUGGEEST}`, { params: {movie_id:id} });

    return movies
}
    









