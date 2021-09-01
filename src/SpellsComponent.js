import React from 'react'
import './SpellsComponent.css'


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
        var spellKeys = ["Q: ", "W: ", "E: ", "R: "];
        if (this.props.currentChampion !== '') {
            //Discard two levels of header info in json file by going down "data", spells
            spellData = require('./data/' + this.props.currentChampion + '.json')["data"][this.props.currentChampion]["spells"];


            for(var i = 0; i < spellData.length; i++){
                var spell = spellData[i]
                spellRow.push(
                    <div className = 'spell'>
                        <img src={"/spell/" + spell['image']['full']}  className='spellImg'></img>
                        <span className= 'spellName'>{spellKeys[i] + spell['name']} </span>
                        <span className= 'spellText'>{spell['description']}</span>
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