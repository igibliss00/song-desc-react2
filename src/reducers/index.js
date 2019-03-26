import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'No Scrubs', length: '4:30' },
        {title: 'I Want It That Way', length: '3:50' },
        {title: 'Macarena', length: '1:55' },
        {title: 'All Star', length: '2:13' },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});