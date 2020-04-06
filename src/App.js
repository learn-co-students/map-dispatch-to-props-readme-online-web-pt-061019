import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';
 
class App extends Component {
 
  handleOnClick = event => {
    this.props.addItem()
  }
 
  render() {
    debugger
    return (
      <div className="App">
        <button onClick={this.handleOnClick}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};
 
const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};
 
export default connect(mapStateToProps, { addItem })(App); // Code change: no mapDispatchToProps function required!


// export default connect(mapStateToProps, mapDispatchToProps)(App); *this is previous example of passing in a funtion


// export default connect(state => ({ items: state.items }), { addItem })(App);

// This is equivalent to writing:
// const mapStateToProps = state => {
//   return {
//     items: state.items
//   }
// }
 
// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => { dispatch(addItem()) }
//   }
// }
 
// export default connect(mapStateToProps, mapDispatchToProps)(App);