import React, { useState } from 'react';
import FeedbackForm from './FeedbackForm';
import FeedbackList from './FeedbackList';
import AverageRating from './AverageRating';

const AdminDashboard = () => {
  const [feedback, setFeedback] = useState([]);
  
  const handleSubmit = (newFeedback) => {
    setFeedback([
      ...feedback,
      { ...newFeedback, approved: false },
    ]);
  };

  const handleDelete = (index) => {
    setFeedback(feedback.filter((_, i) => i !== index));
  };

  const handleApprove = (index) => {
    const updatedFeedback = [...feedback];
    updatedFeedback[index].approved = true;
    setFeedback(updatedFeedback);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <FeedbackForm onSubmit={handleSubmit} />
      <AverageRating feedback={feedback} />
      <FeedbackList
        feedback={feedback}
        onDelete={handleDelete}
        onApprove={handleApprove}
      />
    </div>
  );
};

export default AdminDashboard;
