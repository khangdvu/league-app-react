import React from 'react'

export default class ChampionContent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className = 'championContentBox'>
                {this.props.currentChampion}
            </div>
        )}
}