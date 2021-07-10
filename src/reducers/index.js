/*
 * Created Date: Sat, 10th Jul 2021, 13:44:30 pm
 * Author: Kristyna Fojtikova
 * Email: kristyna.fojtikova@thedistance.co.uk
 */

import { combineReducers } from "redux";
import { SELECT_SONG } from "../actions"

const sampleSongs = [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want it That Way', duration: '1:45' }
]

const songsReducer = (songsList = sampleSongs, action) => {
    return songsList;
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === SELECT_SONG) {
        return action.payload.song;
    }
    return selectedSong
}

const reducers = combineReducers({ songs: songsReducer, selectedSong: selectedSongReducer });

export default reducers;