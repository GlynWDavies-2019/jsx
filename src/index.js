import React from 'react';
import ReactDOM from 'react-dom';

const style = {
    backgroundColor:'teal',
    color:'white'
};

const buttonText = () => 'Click Here';

const App = () => { 
    return (
        <div>
            <label className="label" htmlFor="name">Name:</label>
            <input id="name" type="text" />
            <button style={style}>{buttonText()}</button>
        </div>
    )
};


ReactDOM.render(<App />, document.querySelector('#root'));