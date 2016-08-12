import React from 'react'
import _ from 'lodash'
const RandomTeam = React.createClass({
  render : function() {
var team = this.props.team.map(member => {
  return (
    <li key ={member.id}>{member.text}</li>
    )
})
return (<div>
  <h3>TEAM NUMBER {this.props.teamnumber}</h3>
  <ul>
   {team}
  </ul>
</div>);
}
})
const RandomGroup = React.createClass({

  getInitialState:function(){
    return {randomInput : 0,
          randomTeam:[]}
  },
  randomInputEntry : function(event){
   this.setState({randomInput : event.target.value })
  },
  randomTeam : function(){
    var shuffleArr=_.shuffle(this.props.students);
    var chunkArr = _.chunk(shuffleArr,this.state.randomInput);
    this.setState({randomTeam: chunkArr})
  },
  render:function(){
    let studentteams = this.state.randomTeam.map((team,index)=> {
      return <RandomTeam team={team} key ={index} teamnumber ={index+1}/>
    } )
    return(
      <div>
     <button onClick ={this.randomTeam}>RANDOM GROUP OF</button>
     <input type="number" value = {this.state.randomInput} onChange = {this.randomInputEntry}/>
     {studentteams}
     </div>
      )
  }
})




export default RandomGroup 