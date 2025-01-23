import React, { useState } from 'react';

const FeedbackForm = ({ feedback, setFeedback }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!feedback.type || !feedback.message) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: feedback.type,
          feedback: feedback.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit feedback.');
      }

      setSuccessMessage('Feedback submitted successfully!');
      setFeedback({ type: '', message: '' }); // Reset form
    } catch (error) {
      setErrorMessage(error.message || 'An error occurred.');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Submit Feedback</h2>
      {errorMessage && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{errorMessage}</div>
      )}
      {successMessage && (
        <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">{successMessage}</div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">
            Feedback Type
          </label>
          <select
            id="type"
            name="type"
            value={feedback.type}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="">Select Type</option>
            <option value="complaint">Complaint</option>
            <option value="suggestion">Suggestion</option>
            <option value="compliment">Compliment</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Feedback Message
          </label>
          <textarea
            id="message"
            name="message"
            value={feedback.message}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Write your feedback here..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
