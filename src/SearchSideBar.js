import React from 'react'

import championData from './champion.json';


export default class SearchSideBar extends React.Component{
    constructor(props){
        super(props);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.state = {
            searchInput: '',
        }

    }

    onKeyUp(e){
        this.setState({searchInput: e.target.value});
    }

    render(){
        let champions = [];
        for (var champion in championData.data){
            if (champion.includes(this.state.searchInput)){
                champions.push(champion);
            }
        }
        return (
            <div className = 'searchSidebar'>
                <input id ='searchInput' onKeyUp={e => this.onKeyUp(e)}></input>
                {champions.map((champion, index) => (
                        <div className='searchSidebarItem' onClick={(e) => this.props.handlerChampionSelect(e)}>
                            <img src={"/square/" + champion + ".png"} className="squareImage"></img>
                            <span>{champion}</span>
                            </div>
                    )
                )}
            </div>
        )
    }
}