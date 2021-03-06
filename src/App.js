import React, { useEffect, lazy, Suspense } from 'react';

import { useStore } from './store';

import { Creators as EpisodesActions } from './store/ducks/episodes';

const EpisodesList = lazy(() => import('./components/EpisodeList'));

function App(props) {

    // Map state to props
    props = {...props, ...useStore().state, ...EpisodesActions };

    // Declare dispatch
    EpisodesActions.dispatch = useStore().dispatch;

    useEffect(() => {

        props.episodes.length === 0 && props.fetchDataAction();
        // eslint-disable-next-line
    }, []);
    

    return (
        <>
            <div className="header">
                <h1>Rick and Morty</h1>
                <p>Pick your favourite episodes</p>
            </div>

            <div>
                Favourite(s) {props.favourites.length}
            </div>
                
            <section className="episode-layout">
                <Suspense fallback={<div>Loading...</div>}>                    
                    <EpisodesList {...props} />
                </Suspense>
            </section>
        </>
    );
    
}

export default App;
