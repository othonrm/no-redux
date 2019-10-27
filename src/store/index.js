import React, { createContext, useReducer, useContext } from 'react'

// Reducers
import episodesReducer from './ducks/episodes';
import favouritesReducer from './ducks/favourites';

// Initial States
import { INITIAL_STATE as EpisodesInitialState } from './ducks/episodes';
import { INITIAL_STATE as FavouritesInitialState } from './ducks/favourites';

const COMBINED_INITIAL_STATE = { ...EpisodesInitialState, ...FavouritesInitialState };

function combineReducers(state, action) {

    let newState = episodesReducer(state, action);
    
    if(!Object.is(state, newState)) return newState;
    
    newState = favouritesReducer(state, action);

    if(!Object.is(state, newState)) return newState;
    
    return state;
}

export function StoreProvider(props) {


    // const [state, dispatch] = useReducer(episodesReducer, COMBINED_INITIAL_STATE);
    const [state, dispatch] = useReducer(combineReducers, COMBINED_INITIAL_STATE);

    const value = { state, dispatch };

    return (<Store.Provider value={value}>
        {props.children}
    </Store.Provider>);
}

export const Store = createContext();

export const useStore = () => useContext(Store);
