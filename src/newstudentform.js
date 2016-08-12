import React from 'react'
const NewStudentForm =React.createClass({
  getInitialState: function(){
    return {
      text:''
    }
  },
  addStudent:function(){
    let text =this.state.text.split(",");
    this.props.studentFormAddStudent(text);
    this.setState({text:''});
  },
  onInputChange:function(event){
   //console.log('event.target', event.target.value);
   this.setState({ text : event.target.value});
  },
  render:function() {
    return (
      <div>
       <input type="text" value={this.state.text} onChange={this.onInputChange}/>
       <button onClick={this.addStudent}>Add</button>
      </div>
    )
  }
});

export default NewStudentForm