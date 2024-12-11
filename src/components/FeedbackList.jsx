import React from 'react';

const FeedbackList = ({ feedback, onDelete, onApprove }) => {
  return (
    <div>
      {feedback.map((item, index) => (
        <div key={index} style={{ border: '1px solid #ccc', margin: '10px' }}>
          <p><strong>Rating:</strong> {item.rating}</p>
          <p><strong>Comment:</strong> {item.comment}</p>
          <p><strong>Status:</strong> {item.approved ? 'Approved' : 'Pending'}</p>
          <button onClick={() => onApprove(index)}>Approve</button>
        <br/>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
