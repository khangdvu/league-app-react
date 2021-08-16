import React from 'react';
import SearchSideBar from './SearchSideBar';
import ChampionContent from './ChampionContent';


export default class ChampionComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handlerChampionSelect = this.handlerChampionSelect.bind(this);
        this.state = {
            currentChampion: ''
        };
    }


    handlerChampionSelect(event){
        let element = event.target;
        this.setState(
            {currentChampion: element.innerHTML}
        )
    }

    render() {
        return(
            <div id = "appDiv"> 
                <SearchSideBar handlerChampionSelect = {this.handlerChampionSelect} />
                <ChampionContent currentChampion = {this.state.currentChampion} />
            </div>
        )
        }
}