import React from 'react'

import EpisodeBox from './../EpisodeBox';

export default function EpisodesList(props) {

    let favouriteList = props.episodes.filter(episode => props.favourites.find(fav => fav === episode.id) ).map(episode => 
        <EpisodeBox key={episode.id} episode={episode} fav />
    );

    let episodesList = props.episodes.filter(episode => props.favourites.find(fav => fav === episode.id) == null ).map(episode => 
        <EpisodeBox key={episode.id} episode={episode} />
    )

    return [...favouriteList, ...episodesList];

}