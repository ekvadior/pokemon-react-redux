const LOAD_DATA = 'app/site/LOAD_DATA';
const LOAD_SUCCESS_DATA = 'app/site/LOAD_SUCCESS_DATA';
const LOAD_FAIL_DATA = 'app/site/LOAD_FAIL_DATA';

const initialState = {
  isLoading: false,
  loaded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        isLoading: true,
        loaded: false
      };

    case LOAD_SUCCESS_DATA:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        data: action.data,
        error: null
      };

    case LOAD_FAIL_DATA:
      return {
        ...state,
        isLoading: false,
        loaded: false,
        data: null,
        error: action.error
      };

    default:
      return state;
  }
}

export function load(dispatch) {
  fetch('http://pokeapi.co/api/v2/pokemon').then((response) => {
    return response.json();
  }).then((data) => {
    dispatch({
      type: LOAD_SUCCESS_DATA,
      data: data
    });
  }).catch((error) => {
    dispatch({
      type: LOAD_FAIL_DATA,
      error: error
    });
  });

  return {
    type: LOAD_DATA
  };
}
