import React from 'react'


export default class SpellsComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentChampion: ''
        }
    }

    render(){
        var spellData;
        var spellRow = [];
        if (this.props.currentChampion !== '') {
            //Discard two levels of header info in json file by going down "data", spells
            spellData = require('./data/' + this.props.currentChampion + '.json')["data"][this.props.currentChampion]["spells"];
            for(var spell of spellData){
                spellRow.push(
                <div className = 'spell'>
                    <img src={"/spell/" + spell['image']['full']}></img>
                    <span>{spell['name']} </span>
                    <span>{spell['description']}</span>
                </div>)
            }
        }

        return(
            <div className = 'spellsContainer'>
                {spellRow}
            </div>
        )
    }
}