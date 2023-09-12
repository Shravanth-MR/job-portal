const mongoose = require('mongoose')

const jobsSchema = new mongoose.Schema({
  jobName: { type: String, required: true },
  description: { type: String, required: true },
  salary: { type: Number, required: true },
  role: { type: String, required: true },
  companyName: { type: String, required: true },
  companyLocation: { type: String, required: true },
  location: { type: String, required: true },
  jobType: { type: String, required: true },
})

const Job = mongoose.model('Job', jobsSchema)

module.exports = Job
