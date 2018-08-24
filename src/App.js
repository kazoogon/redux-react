//ここのReactはJSX->JSに変換で使用する
import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//         <React.Fragment>{/*divとかだしてくねーよ！　って時はこれ使って*/}
//             <label htmlFor="bar">bar</label>{/*ラベルのfor属性はこういう書き方*/}
//             <input type="text" onChange={() => {console.log("I am clicked")}} />
//         </React.Fragment>
//     );
//   }
}

const App = () => {
    return <div>Hi!!</div>
}

export default App;
