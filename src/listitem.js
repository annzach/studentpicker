import React from 'react'

const ListItem = React.createClass({
  getInitialState: function(){
    return {
      text : this.props.singleStudent.text,
      newDivStyle : { 'display' : 'none'},
      curDivStyle : { 'display' : 'block'},
      saveEditStyle : { 'display' : 'none'}
    }
  },
  deleteStudentInListItem : function() {
      this.props.deleteStudent(this.props.singleStudent.id);
  },
  editStudentInListItem : function() {
      this.props.editStudent(this.props.singleStudent.id, newText);
  },
  handleEdit : function() {
      this.setState({'curDivStyle' : {'display' : 'none'},
      'newDivStyle' : {'display' : 'block'} ,
      'saveDivStyle' : {'display' : 'block'} ,
    });

  },
  changeHandler : function(event) {
    this.setState({text : event.target.value});
  },
  saveEdit : function() {
      
      let newVal = $("#newVal_" + this.props.singleStudent.id).val();
      console.log('saving  ' + newVal);
      this.setState({text : newVal,'curDivStyle' : {'display' : 'block'},
                  'newDivStyle' : {'display' : 'none'} ,
                  'saveDivStyle' : {'display' : 'none'}
          });
      this.props.editStudent(this.props.singleStudent.id, this.state.text);
  },
  render : function() {
    console.log('rendering ' + new Date());
    return(
      <li>
        <div id={"f_" + this.props.singleStudent.id} style={this.state.curDivStyle} 
          onClick={this.handleEdit}>{this.state.text} &nbsp;
        </div>
        <div id={"new_" + this.props.singleStudent.id} style= {this.state.newDivStyle}>
          <input id={"newVal_" + this.props.singleStudent.id} type='text' onChange={this.changeHandler} value={this.state.text}/></div>
        <button onClick={this.deleteStudentInListItem}>Remove</button>
        <button id={"saveEdit_" + this.props.singleStudent.id} style = {this.state.saveDivStyle} 
            onClick={this.saveEdit}>SaveEdit</button>
      </li>
    )
  }
}
);

export default ListItem
