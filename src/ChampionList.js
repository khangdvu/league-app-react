import React from 'react';


export default class ChampionList extends React.Component{
    
    
    render(){
        return(
            <>
                {this.props.championList.map((champion, index) => (
                        <div className='sidebarItem'>{champion}</div>
                    )
                )}
            </>
        )
    }

}