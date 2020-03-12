import React from 'react';
// Don't need to add the file name if it is index file ../actions/index
// {} for named export
import { selectSong } from '../actions';
import SongList from './SongList';

const App = () => {
    return (
        <div>
            <SongList />
        </div>
    );
};

export default App;