import React from 'react';
import SearchSideBar from './SearchSideBar';
import ChampionContent from './ChampionContent';


export default class ChampionComponent extends React.Component {

    render() {
        return(
            <div id = "appDiv"> 
                <SearchSideBar />
                <ChampionContent />
            </div>
        )
        }
}