const Feedback = require("../libs/model/feedbackModel"); // Assuming the schema is in models/feedback.js

// Controller for handling feedback operations
const feedbackController = {
  // Create Feedback
  createFeedback: async (req, res) => {
    try {
      const { type, feedback } = req.body;

      // Validate required fields
      if (!feedback) {
        return res.status(400).json({ message: "Feedback is required!" });
      }

      const newFeedback = new Feedback({ type, feedback });
      await newFeedback.save();

      res.status(201).json({ message: "Feedback submitted successfully!", data: newFeedback });
    } catch (error) {
      res.status(500).json({ message: "Error creating feedback.", error: error.message });
    }
  },

  // Get All Feedback
  getAllFeedback: async (req, res) => {
    try {
      const feedbacks = await Feedback.find();
      res.status(200).json(feedbacks);
    } catch (error) {
      res.status(500).json({ message: "Error fetching feedback.", error: error.message });
    }
  },

  // Get Feedback by Type
  getFeedbackByType: async (req, res) => {
    try {
      const { type } = req.params;

      // Validate feedback type
      if (!["complaint", "suggestion", "compliment"].includes(type)) {
        return res.status(400).json({ message: "Invalid feedback type!" });
      }

      const feedbacks = await Feedback.find({ type });
      res.status(200).json(feedbacks);
    } catch (error) {
      res.status(500).json({ message: "Error fetching feedback by type.", error: error.message });
    }
  },

  // Update Feedback
  updateFeedback: async (req, res) => {
    try {
      const { id } = req.params;
      const { type, feedback } = req.body;

      // Validate type if provided
      if (type && !["complaint", "suggestion", "compliment"].includes(type)) {
        return res.status(400).json({ message: "Invalid feedback type!" });
      }

      const updatedFeedback = await Feedback.findByIdAndUpdate(
        id,
        { type, feedback },
        { new: true }
      );

      if (!updatedFeedback) {
        return res.status(404).json({ message: "Feedback not found!" });
      }

      res.status(200).json({ message: "Feedback updated successfully!", data: updatedFeedback });
    } catch (error) {
      res.status(500).json({ message: "Error updating feedback.", error: error.message });
    }
  },

  // Delete Feedback
  deleteFeedback: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedFeedback = await Feedback.findByIdAndDelete(id);

      if (!deletedFeedback) {
        return res.status(404).json({ message: "Feedback not found!" });
      }

      res.status(200).json({ message: "Feedback deleted successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting feedback.", error: error.message });
    }
  },
};

module.exports = feedbackController;