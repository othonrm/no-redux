import React from 'react'

import { useStore } from './../../store';

import { Creators as FavouritesActions } from './../../store/ducks/favourites';

export default function EpisodesBox(props) {

    // Map state to props + bind action creators
    props = {...props, ...useStore().state, ...FavouritesActions };

    // Declare dispatch
    FavouritesActions.dispatch = useStore().dispatch;

    const { episode } = props;

    return <section className="episode-box">
        { episode.image &&
            <img
                width="100%"
                src={episode.image.medium}
                alt={`Rick and Morty ${episode.name}`}
            />
        }
        <section style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
            { props.fav && <h1 style={{ marginRight: 10 }}>⭐</h1> }
            
            <div style={{ maxWidth: 200, marginRight: 'auto' }}>
                {episode.name}
                <br/>
                Season: {episode.season} Number: {episode.number}
            </div>
            <button type='button' onClick={() => props.toggleFavAction(episode.id)}>
                {props.fav ? 'Unfav' : 'Fav'}
            </button>
        </section>
    </section>

}