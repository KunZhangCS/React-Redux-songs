const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'I want it That Way', duration: '5:15'},
        {title: 'All Star', duration: '2:29'},
        {title: 'Litter cat', duration: '3:25'}
    ] 
};

const selectedSongReducer = (selectedSong=null, action) => {
     if (action.type === 'SONG_SELECTED') {
         return action.payload;
     }

     return selectedSong;
}