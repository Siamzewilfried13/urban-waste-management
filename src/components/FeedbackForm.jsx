import React, { useState, useEffect } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({ type: '', message: '' });
  const [feedbackList, setFeedbackList] = useState([]); // To store and display all feedback
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false); // Track if we're editing feedback
  const [editingId, setEditingId] = useState(null); // Store the ID of the feedback being edited

  // Fetch all feedback on component mount
  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch all feedback from the API
  const fetchFeedback = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/feedback');
      if (!response.ok) {
        throw new Error('Failed to fetch feedback.');
      }
      const data = await response.json();
      setFeedbackList(data);
    } catch (error) {
      setErrorMessage(error.message || 'An error occurred while fetching feedback.');
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  // Handle form submission for Create/Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!feedback.type || !feedback.message) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    try {
      const method = isEditing ? 'PUT' : 'POST';
      const url = isEditing
        ? `http://localhost:3000/api/feedback/${editingId}`
        : 'http://localhost:3000/api/feedback';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: feedback.type,
          feedback: feedback.message,
        }),
      });

      if (!response.ok) {
        throw new Error(isEditing ? 'Failed to update feedback.' : 'Failed to submit feedback.');
      }

      setSuccessMessage(
        isEditing ? 'Feedback updated successfully!' : 'Feedback submitted successfully!'
      );
      setFeedback({ type: '', message: '' }); // Reset form
      setIsEditing(false); // Reset editing state
      setEditingId(null); // Clear editing ID
      fetchFeedback(); // Refresh feedback list
    } catch (error) {
      setErrorMessage(error.message || 'An error occurred.');
    }
  };

  // Handle feedback deletion
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/feedback/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete feedback.');
      }
      setSuccessMessage('Feedback deleted successfully!');
      fetchFeedback(); // Refresh feedback list
    } catch (error) {
      setErrorMessage(error.message || 'An error occurred while deleting feedback.');
    }
  };

  // Handle editing a feedback item
  const handleEdit = (feedbackItem) => {
    setFeedback({ type: feedbackItem.type, message: feedbackItem.feedback });
    setIsEditing(true);
    setEditingId(feedbackItem._id); // Assume `_id` is the unique identifier from the backend
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">{isEditing ? 'Edit Feedback' : 'Submit Feedback'}</h2>

      {/* Success and Error Messages */}
      {errorMessage && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{errorMessage}</div>
      )}
      {successMessage && (
        <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">{successMessage}</div>
      )}

      {/* Feedback Form */}
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
          {isEditing ? 'Update Feedback' : 'Submit Feedback'}
        </button>
      </form>

      {/* Feedback List */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Feedback List</h3>
        {feedbackList.map((item) => (
          <div
            key={item._id}
            className="p-4 mb-4 border rounded-lg flex justify-between items-center"
          >
            <div>
              <p>
                <strong>Type:</strong> {item.type}
              </p>
              <p>
                <strong>Message:</strong> {item.feedback}
              </p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(item)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackForm;
