import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { voteAngular, voteReact } from './actions';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.store = this.props.store;
    this._state = this.store.getState();
  }

  _state;

  handleVoteAngular = ( ) => {
    this.store.dispatch(voteAngular())
  }

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  }

  updateState(e) {
    console.log(e)
  }

  value= 6;



  render() {
    return (
      <div className="App">
		<header className="App-header">
          <button onClick={this.handleVoteAngular}>Vote angular</button>
          <button onClick={this.handleVoteReact}>Vote React</button>
        </header>

        <div className="results">
          <h3>
            {JSON.stringify(this.store.getState())}
            Angular ->  <custom-card setstore={JSON.stringify(this.store.getState())} emitstate={this.updateState}></custom-card>
          </h3>
          <h3>
            React -> {this.store.getState().angular}
          </h3>
        </div>
      </div>
    );
  }
};
