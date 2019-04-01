import { h, Component } from 'preact';
import { Router } from 'preact-router';
import IssueList from './IssueList';

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <IssueList />
      </div>
    );
  }
}
