import React from 'react'
import SpellsComponent from './SpellsComponent'
import './ChampionContent.css'

export default class ChampionContent extends React.Component{
    render(){
        var championData;
        var championInfo = [];
        var bgImageStyle;
        if (this.props.currentChampion !== '') {
            //Discard two levels of header info in json file by going down "data" and "championName"
            championData = require('./data/' + this.props.currentChampion + '.json')["data"][this.props.currentChampion];
            championInfo.push(<span id='championTitle'>{championData['name']}, {championData['title']} </span>);
            championInfo.push(<span id='championBlurb'>{championData['blurb']} </span>);
            bgImageStyle = {
                backgroundImage: "url(/img/" + this.props.currentChampion + ".jpg",
                backgroundColor: "rgba(0, 0, 0, 0.9)",

            }
        }

        return (
            <div className = 'championContentBox'  >
                <div id="bg" style={bgImageStyle}></div>
                {championInfo}
                <SpellsComponent currentChampion = {this.props.currentChampion}/>
            </div>
        )}
}