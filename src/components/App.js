import React from 'react';
// Don't need to add the file name if it is index file ../actions/index
// {} for named export
import { selectSong } from '../actions';
import SongList from './SongList';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />  
                </div>
            </div>            
        </div>
    );
};

export default App;