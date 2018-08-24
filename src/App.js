import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
        <h1>
          Hello world
        </h1>
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
