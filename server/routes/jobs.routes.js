const { getJobs, createJob } = require('../controllers/jobs.controller')

const express = require('express')
const router = express.Router()

router.route('/list').get(getJobs)
router.route('/create').post(createJob)


module.exports = router
