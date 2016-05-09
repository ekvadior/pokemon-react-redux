const LOAD_DATA = 'app/pokemon/LOAD_DATA';
const LOAD_SUCCESS_DATA = 'app/pokemon/LOAD_SUCCESS_DATA';
const LOAD_FAIL_DATA = 'app/pokemon/LOAD_FAIL_DATA';


const I_AM_A_DUMBASS = 'asjdbalsjdkh';

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

    case I_AM_A_DUMBASS:
      return {
        ...state,
        isLoading: true
      };

    default:
      return state;
  }
}

export function load(id, dispatch) {
  fetch('http://pokeapi.co/api/v2/pokemon/' + id).then((response) => {
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

export function iamadumbass() {
  return {
    type: I_AM_A_DUMBASS
  };
}
