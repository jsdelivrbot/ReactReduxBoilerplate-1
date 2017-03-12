// Note: Cmd Alt i - Opens up console window in Chrome
//  Select console - JS tab - to see errors
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create a new compoent.
//  This component should produce some HTML.
export default class CommentBox extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // }

  // // JSX - What looks like HTML in our JavaScript
  // //  this code get s transpiled with babel to produce JS
  // //  i.e. babeljs.io/repl
  // Add className that corresponds to component for debugging purposes.
  render() {
    return (
      <div>
        <textarea />
        <button>Submit Comment</button>
      </div>
    );
  }
}
