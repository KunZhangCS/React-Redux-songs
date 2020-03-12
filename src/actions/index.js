// Action creator
// This is a named export, not the default export
export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

