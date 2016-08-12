import React from 'react'
import ListItem from './listitem'
const StudentList =React.createClass({

  editStudent: function(studentId,text) {
    this.props.editStudent(studentId,text);
  },
  deleteStudent: function(studentId) {
    this.props.deleteStudent(studentId);
  },
  render:function(){
    let students = this.props.students.map(student => {
      return (
        <ListItem key={student.id} singleStudent = {student} 
        deleteStudent = {this.deleteStudent}
        editStudent = {this.editStudent}
        /> 
        )
    });
    
    return(
      <ul>
        {students}
      </ul>
    )
  }
});

export default StudentList