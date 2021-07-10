/*
 * Created Date: Sat, 10th Jul 2021, 14:02:34 pm
 * Author: Kristyna Fojtikova
 * Email: kristyna.fojtikova@thedistance.co.uk
 */

import React from "react"
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {

    renderSongList() {
        return this.props.songs.map((song, index) => {
            return (
                <div className="item" key={song.title + index}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.props.selectSong(song)}>Select</button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            )
        })

    }

    render() {
        return (
            <div className=" ui devided list">
                {this.renderSongList()}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    const { songs } = state;
    return { songs };
}

export default connect(mapStateToProps, {
    selectSong
})(SongList);