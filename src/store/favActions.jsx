import axiosInstance from "./axiosInstance";

export const  ADD_FAVORITE ="ADD_FAVORITE";
export const REMOVE_FAVORITE="REMOVE_FAVORITE";

export const FETCH_MOVIES="FETCH_MOVIES";


export const fetchMovies = (endpoint) => async (dispatch) => {

  try{
    const response = await axiosInstance.get(endpoint, { params: { language: 'en-US', page: '1' } });
    dispatch({
      type : FETCH_MOVIES,
      payload: response.data.results,
    });
  } catch(error){
    console.error(`error fetching movies: ${error}`);
  }
};






export const addFavorite = (movie) => {
    return {
      type: 'ADD_FAVORITE',
      payload: movie,
    };
  };
  
  export const removeFavorite = (movie) => {
    return {
      type: 'REMOVE_FAVORITE',
      payload: movie,
    };
  };
  