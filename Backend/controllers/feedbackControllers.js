const Feedback = require('../libs/model/feedbackModel')

exports.createFeedback = async (req, res) => {
 try{
  const feedback = await Feedback.create(req.body)
  res.status(201).json(feedback)
 }catch(error){
  res.status(500).json({error: error.message})
 }
}

exports.getFeedbacks = async (req, res) => {
  try{
    const feedbacks = await Feedback.find()
    res.status(200).json(feedbacks)
   }catch(error){
    res.status(500).json({error: error.message})
   }
}

exports.updateFeedback = async (req, res) => {
  try{
    const feedback = await Feedback.findByIdAndUpdate(req.params.id, req.body)
    if(!feedback) return res.status(404).json({message: "feedback not found!"})
    res.status(200).json({message: "feedback updated successfully!!"})
   }catch(error){
    res.status(500).json({error: error.message})
   }
}

exports.deleteFeedback = async (req, res) => {
  try{
    const feedback = await Feedback.findByIdAndDelete(req.params.id)
    if(!feedback) return res.status(404).json({message: "feedback not found!"})
    res.status(200).json({message: "feedback deleted successfully!!"})
   }catch(error){
    res.status(500).json({error: error.message})
   }
}