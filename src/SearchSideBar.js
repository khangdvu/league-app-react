import React from 'react'
import ChampionList from './ChampionList';

import championData from './static/champion.json';


export default class SearchSideBar extends React.Component{




    render(){
        console.log(championData.data);
        let champions = [];
        for (var champion in championData.data){
            champions.push(champion);
        }
        return (
            <div className = 'searchSidebar'>
                <input></input>
                <ChampionList championList = {champions} />
            </div>
        )
    }
}