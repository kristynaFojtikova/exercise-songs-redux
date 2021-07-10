/*
 * Created Date: Sat, 10th Jul 2021, 14:37:27 pm
 * Author: Kristyna Fojtikova
 * Email: fojtik.kristyna@gmail.com
 */

import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {

    if (!selectedSong) {
        return <h2>Select a song!</h2>

    }
    return (
        <div >
            <h3> Song Detail: </h3>
            <p>
                {selectedSong.title}
                <br />
                {selectedSong.duration}
            </p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedSong: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail);