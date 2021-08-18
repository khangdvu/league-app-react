import React from 'react'


export default class ChampionContent extends React.Component{
    render(){
        var championData;
        var championInfo = [];
        var bgImageStyle;
        if (this.props.currentChampion !== '') {
            //Discard two levels of header info in json file by going down "data" and "championName"
            championData = require('./data/' + this.props.currentChampion + '.json')["data"][this.props.currentChampion];
            championInfo.push(<>{championData['name']} </>);
            championInfo.push(<>{championData['title']} </>);
            bgImageStyle = {
                backgroundImage: "url(/img/" + this.props.currentChampion + ".jpg",

            }
        }

        return (
            <div className = 'championContentBox'  style={bgImageStyle}>
                {championInfo}
            </div>
        )}
}