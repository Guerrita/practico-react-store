import {useState} from 'react'

const initialState = {
  cart: [],
}

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  return {
    state,
  }
}

export default useInitialState;
