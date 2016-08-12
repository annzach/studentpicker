import React from 'react'
import ReactDOM from 'react-dom';
import Title from './title'
import StudentBoard from './studentboard'

const Root = React.createClass ({//creates a new component
  render: function() {
    return (
      <div>
        <Title/>
        <hr/>
        <StudentBoard/>
      </div>
    );
  }
});

ReactDOM.render(<Root/>,document.getElementById('root'));