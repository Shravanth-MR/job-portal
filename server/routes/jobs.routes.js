const { getJobs, createJob } = require('../controllers/jobs.controller')

const express = require('express')
const router = express.Router()

router.route('/list').get(getJobs)
router.route('/create').post(createJob)
// router.route("/login").post(userLogin);

module.exports = router
