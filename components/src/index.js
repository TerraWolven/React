import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'; // relative path
import ApprovalCard from './ApprovalCard'; // relative path

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Jim-Bo"
        timeAgo="Today at 4pm"
        comment="Here is my comment"
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Jack"
        timeAgo="Today at 2:20pm"
        comment="Here is my other comment. It sucks"
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Big Dave"
        timeAgo="Today at 1pm"
        comment="Notta"
      />
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Smaller Dave"
          timeAgo="Today at 3am"
          comment="Blue man stuff"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Smallest Dave (aka Fred)"
          timeAgo="Yester-year at 8:30pm"
          comment="Blah blah"
        />
      </ApprovalCard>
    </div>
  );
};

//semantic-ui.com
ReactDOM.render(<App />, document.querySelector('#root'));
