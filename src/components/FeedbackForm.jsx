import React from 'react';

const FeedbackForm = ({ feedback, setFeedback }) => {
  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedback),
      });
      setFeedback({ type: '', message: '' });
      alert('Feedback submitted successfully!');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-bold mb-4">Submit Feedback</h2>
      <form onSubmit={handleFeedbackSubmit} className="space-y-4">
        <div>
          <select
            value={feedback.type}
            onChange={(e) => setFeedback({ ...feedback, type: e.target.value })}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Type</option>
            <option value="suggestion">Suggestion</option>
            <option value="complaint">Complaint</option>
          </select>
        </div>
        <div>
          <textarea
            value={feedback.message}
            onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
            className="w-full p-2 border rounded"
            rows="4"
            placeholder="Your feedback..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
