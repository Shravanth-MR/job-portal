const Job = require('../models/jobs.models')

// Get a list of all jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find()
    res.status(200).json({ message: 'Jobs retrieved successfully', data: jobs })
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error retrieving jobs', error: error.message })
  }
}

// Create a new job
const createJob = async (req, res) => {
  const {
    jobName,
    description,
    salary,
    role,
    companyName,
    companyLocation,
    location,
    jobType,
  } = req.body

  try {
    const newJob = new Job({
      jobName,
      description,
      salary,
      role,
      companyName,
      companyLocation,
      location,
      jobType,
    })
    await newJob.save()
    res.status(201).json({ message: 'Job created successfully', data: newJob })
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Error creating job', error: error.message })
  }
}

module.exports = {
  getJobs,
  createJob,
}
