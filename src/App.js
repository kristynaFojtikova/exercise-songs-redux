/*
 * Created Date: Sat, 10th Jul 2021, 00:05:31 am
 * Author: Kristyna Fojtikova
 * Email: fojtik.kristyna@gmail.com
 */

import React from "react";

import SongList from "./components/SongList"
import SongDetail from "./components/SongDetail"

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    )
}

export default App;