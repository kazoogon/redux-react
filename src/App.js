//ここのReactはJSX->JSに変換で使用する
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// class App extends Component {
//   render() {
//     return (
//         <React.Fragment>{/*divとかだしてくねーよ！　って時はこれ使って*/}
//             <label htmlFor="bar">bar</label>{/*ラベルのfor属性はこういう書き方*/}
//             <input type="text" onChange={() => {console.log("I am clicked")}} />
//         </React.Fragment>
//     );
//   }
// }

const App = () => {
    const profiles = [
        {name: "sasaki", age: 10},
        {name: "masaki", age: 25},
        {name: 1},
    ]
    return (
      <div>
          {
              profiles.map((profile, index) => {
                return <User name={profile.name} age={profile.age} key={index}/>
              })
          }
      </div>
    );
}

const User = (props) => {
    return <div>Hi, {props.name}!, and {props.age} yrs old</div>
}

User.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
}

User.defaultProps = {
    age: 1
}

export default App;
