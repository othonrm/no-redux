// Action Types

export const Types = {
    TOGGLE: 'favourites/TOGGLE'
}

// Reducers

export const INITIAL_STATE = {
    favourites: []
}

export default function favoritesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.TOGGLE:
            let { favourites } = state;

            if(favourites.find(fav => fav === action.payload.episode_id))
            {
                console.log("Removing fav");
                favourites = favourites.filter(fav => fav !== action.payload.episode_id)                
            }
            else
            {
                console.log("Adding fav");
                favourites = [...favourites, action.payload.episode_id];
            }

            return { ...state, favourites };
        default:
            return state;
    }
}


// Action Creators
export const Creators = {

    toggleFavAction: episode_id => {
        return Creators.dispatch({ 
            type: Types.TOGGLE,
            payload: { episode_id }
        })
    }
}