/*
 * Created Date: Sat, 10th Jul 2021, 13:40:07 pm
 * Author: Kristyna Fojtikova
 * Email: fojtik.kristyna@gmail.com
 */

export const SELECT_SONG = "SELECT_SONG";

export const selectSong = (song) => {
    return {
        type: SELECT_SONG,
        payload: {
            song
        }
    }
}

