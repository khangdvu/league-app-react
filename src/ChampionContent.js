import React from 'react'
import SpellsComponent from './SpellsComponent'
import './ChampionContent.css'
import {Transition, TransitionGroup, CSSTransition } from "react-transition-group"



export default class ChampionContent extends React.Component{


    render(){
        var championData;
        var championInfo = [];
        var bgImageStyle;
        if (this.props.currentChampion !== '') {
            //Discard two levels of header info in json file by going down "data" and "championName"
            championData = require('./data/' + this.props.currentChampion + '.json')["data"][this.props.currentChampion];
            championInfo.push(<img src={"/loading/" + this.props.currentChampion + ".jpg"} className = "loadingSplash"></img>)
            championInfo.push(
            <div className="championHeadings">
                <span id='championTitle'> {championData['name']}, {championData['title']} </span>
                <span id='championBlurb'> {championData['lore']} </span>
            </div>);
            bgImageStyle = {
                backgroundImage: "url(/img/" + this.props.currentChampion + ".jpg",
                opacity: "0.5"
            }
        }

        return (
            <div  key={this.props.currentChampion} className = 'championContentBox'>
                <div id="bg" style={bgImageStyle}></div>
                {championInfo}
                <SpellsComponent currentChampion = {this.props.currentChampion}/>
            </div>
        )}
}