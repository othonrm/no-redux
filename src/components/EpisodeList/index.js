import React from 'react'

export default function EpisodesList(props) {

    let favouriteList = props.episodes.filter(episode => props.favourites.find(fav => fav === episode.id) ).map(episode => 
        <section className="episode-box" key={episode.id}>
            {
                episode.image && <img
                width="100%"
                src={episode.image.medium}
                alt={`Rick and Morty ${episode.name}`}
                />
            }
            <section style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                {props.favourites.find(ep_id => ep_id === episode.id) && <h1 style={{ marginRight: 10 }}>⭐</h1>}
                
                <div style={{ maxWidth: 200, marginRight: 'auto' }}>
                    {episode.name}
                    <br/>
                    Season: {episode.season} Number: {episode.number}
                </div>
                <button type='button' onClick={() => props.toggleFavAction(episode.id)}>
                    {props.favourites.find(ep_id => ep_id === episode.id) ? 'Unfav' : 'Fav'}
                </button>
            </section>
        </section>
    );

    let episodesList = props.episodes.filter(episode => props.favourites.find(fav => fav === episode.id) == null ).map(episode => 
        <section className="episode-box" key={episode.id}>
            {
                episode.image && <img
                width="100%"
                src={episode.image.medium}
                alt={`Rick and Morty ${episode.name}`}
                />
            }


            <section style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                {props.favourites.find(ep_id => ep_id === episode.id) && <h1 style={{ marginRight: 10 }}>⭐</h1>}
                <div style={{ maxWidth: 200, marginRight: 'auto' }}>
                    {episode.name}
                    <br/>
                    Season: {episode.season} Number: {episode.number}
                </div>
                <button type='button' onClick={() => props.toggleFavAction(episode.id)}>
                    {props.favourites.find(ep_id => ep_id === episode.id) ? 'Unfav' : 'Fav'}
                </button>
            </section>
        </section>
    )

    return [...favouriteList, ...episodesList];

}