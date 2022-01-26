import React, { Component } from 'react'
import './shared-sources/less/link.less'

export default class link extends Component {
    render() {
        return (
            <div id="whole">
                <div id="gamePanel" tabindex="0">
                    <div id="pieces">
                    </div>
                </div>
                <div id="gameLogo">
                </div>
                <div id="scorePanel">
                    <span>分 数</span>
                </div>
                <div id="score">
                    <span>0</span>
                </div>
                <div id="timePanel">
                    <span>时 间</span>
                </div>
                <div id="time">
                    <span>0</span>
                </div>
                <div id="button">
                    <input id="start" type="button" onclick="Start();" value="开始"></input>
                    <input id="reset" type="button" onclick="Reset();" value="重置"></input>
                </div>
            </div>
        )
    }
}