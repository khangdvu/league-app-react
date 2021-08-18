import React from 'react'

import championData from './champion.json';


export default class SearchSideBar extends React.Component{

    render(){
        let champions = [];
        for (var champion in championData.data){
            champions.push(champion);
        }
        return (
            <div className = 'searchSidebar'>
                <input></input>
                {champions.map((champion, index) => (
                        <div className='searchSidebarItem' onClick={(e) => this.props.handlerChampionSelect(e)}>{champion}</div>
                    )
                )}
            </div>
        )
    }
}