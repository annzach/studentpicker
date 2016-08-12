import React from 'react'
import uuid from 'uuid'
import NewStudentForm from './newstudentform'
import StudentList from './studentlist'
import RandomGroup from './randomgroup'
const StudentBoard = React.createClass({
  getInitialState: function() {
    try{
      var studs = JSON.parse(localStorage.localstuds);
    }
    catch(error){
       studs=[];
    }

    return {

      students:studs,
      currentStudent:'',
      randomGroup:[]
    };
  },

 componentDidUpdate:function(){
   localStorage.localstuds = JSON.stringify(this.state.students)
 },
 selectRandomGroup:function(){

let randomGroup = _.chunk(this.state.students,3);
console.log(randomGroup);
 },

  selectRandomStudent: function(){
    var random_index = this.state.students[Math.floor(Math.random() * this.state.students.length)];
    console.log('random_index',random_index.text);
    this.setState({
      currentStudent : random_index.text
    });
  },

  deleteStudent: function(studentId) {
    let newStudentList = this.state.students.filter(x => x.id !== studentId);
    this.setState({
      students : newStudentList
    });
  },
  addStudent: function(text) {
    let student = text.map(name => {
      let newStudent = {};
      newStudent.id = uuid();
      newStudent.text = name;
      return newStudent;
    })
    this.setState({
      students : this.state.students.concat(student)
    });

  }, 
  editStudent:function(studentID,text){
    console.log('adding the final edited student => ' + text);
    let editedArray = this.state.students.map(x => {
        if(x.id === studentID)
          x.text = text;
        return x;
    });

    this.setState({
      students : editedArray
    });
  },

  render: function(){
    return (
      <div>
        <h3>Add Students</h3>
        <NewStudentForm studentFormAddStudent = {this.addStudent}/>
        <StudentList students = {this.state.students} 
            deleteStudent={this.deleteStudent} 
            editStudent = {this.editStudent}/>
        <button onClick = {this.selectRandomStudent}>RANDOM STUDENT</button>
        <div>{this.state.currentStudent}</div>
        <RandomGroup students ={this.state.students}/>
      </div>
    )
  }
});

export default StudentBoard