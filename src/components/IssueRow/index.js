import { h, Component } from 'preact';
import style from './style';

class IssueRow extends Component {
  render(props) {
    const issue = props.issue;
    return (
      <tr>
        <td>{issue.id}</td>
        <td>{issue.status}</td>
        <td>{issue.owner}</td>
        <td>{issue.created.toDateString()}</td>
        <td>{issue.effort}</td>
        <td>
          {issue.completionDate ? issue.completionDate.toDateString() : ''}
        </td>
        <td>{issue.title}</td>
      </tr>
    );
  }
}

export default IssueRow;
