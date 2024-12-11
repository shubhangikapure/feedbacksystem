import React from 'react';

const AverageRating = ({ feedback }) => {
  const approvedFeedback = feedback.filter(f => f.approved);
  const average =
    approvedFeedback.length === 0
      ? 0
      : approvedFeedback.reduce((acc, item) => acc + item.rating, 0) /
        approvedFeedback.length;

  return (
    <div>
      <h3>Average Rating: {average.toFixed(2)}</h3>
    </div>
  );
};

export default AverageRating;
