import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    renderList() {
        // this.props.songs is from the songs: state.songs in the mapStateToProps
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

// state stores all the data inside of Redux store
const mapStateToProps = (state) => {
    return { songs: state.songs };
};

// pass action creator into connect, then conncet automatically call dispatch
export default connect(mapStateToProps, { selectSong })(SongList);

