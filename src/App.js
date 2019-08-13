import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { voteAngular, voteReact, updateState } from './actions';

export default class App extends Component {

  customElementRef;

  constructor(props) {
    super(props)
    this.store = this.props.store;
    this._state = this.store.getState();
    this.customElementRef = React.createRef();
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
    this.setState(JSON.parse(e))
    console.log(this.store.getState())
  }

  componentDidMount() {
    this.customElementRef.current.addEventListener('emitstate', (e) => {
        console.log(e.detail);
        this.store.dispatch(updateState(e.detail))
      }
    );
  }

  componentWillUnmount() {
    this.customElementRef.current.removeEventListener('emitstate');
  }

  render() {
    return (
      <div className="App">
		<header className="App-header">
          <button onClick={this.handleVoteAngular}>Vote angular</button>
          <button onClick={this.handleVoteReact}>Vote React</button>
          {JSON.stringify(this.store.getState())}
        <div className="results">
          <h3>
            Angular ->  <custom-card setstore={JSON.stringify(this.store.getState())} ref={this.customElementRef}></custom-card>
          </h3>
          <h3>
            React -> {this.store.getState().react}
          </h3>
        </div>
        </header>
      </div>
    );
  }
};
