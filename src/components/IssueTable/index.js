import { h, render, Component } from 'preact';
import style from './style';

import IssueRow from '../IssueRow';

class IssueTable extends Component {
  render(props) {
    const issueRows = props.issues.map(issue => (
      <IssueRow key={issue.id} issue={issue} />
    ));
    return (
      <table class={'bordered-table'}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Effort</th>
            <th>Completion Date</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>{issueRows}</tbody>
      </table>
    );
  }
}

export default IssueTable;
