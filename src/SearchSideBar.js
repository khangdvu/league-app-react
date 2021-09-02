import React from 'react'

import championData from './champion.json';
import './SearchSideBar.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';


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
                <input id ='searchInput' placeholder="Search..." onKeyUp={e => this.onKeyUp(e)}></input>
                    {champions.map((champion, index) => (
                            <div className='searchSidebarItem' id= {champion} onClick={(e) => this.props.handlerChampionSelect(e)}>
                                <img src={"/square/" + champion + ".png"} className="squareImage" id= {champion}></img>
                                <span id= {champion}>{champion}</span>
                                </div>
                        )
                    )}
            </div>
        )
    }
}