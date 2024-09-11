const initialState = {
    favorites: [],
    movies: [],
    // loading: false,
    // error: null
  };
  
  const favReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FAVORITE':
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      case 'REMOVE_FAVORITE':
        return {
          ...state,
          favorites: state.favorites.filter((movie) => movie.id !== action.payload.id),
        };
      //   case 'FETCH_MOVIES_REQUEST':
      //   return {
      //     ...state,
      //     loading: true
      //   };
      case 'FETCH_MOVIES':
        return {
          ...state,
          loading: false,
          movies: action.payload
        };
      // case 'FETCH_MOVIES_FAILURE':
      //   return {
      //     ...state,
      //     loading: false,
      //     error: action.payload
      //   };
      default:
        return state;
    }
  };

  export default favReducer;