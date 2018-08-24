//ここのReactはJSX->JSに変換で使用する
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
        <React.Fragment>{/*divとかだしてくねーよ！　って時はこれ使って*/}
            <label htmlFor="bar">bar</label>{/*ラベルのfor属性はこういう書き方*/}
            <input type="text" onChange={() => {console.log("I am clicked")}} />
        </React.Fragment>
    );
  }
}

//transferされてJSXからJSの形になる
//JSXの方がhtmlタグをそのまま使用するのでわかりやすい
// class App extends Component {
//     render() {
//         return React.createElement(
//             "div",
//             null,
//             "Hello world"
//         )
//     }
// }

export default App;
