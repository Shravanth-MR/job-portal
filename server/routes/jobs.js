// routes/jobs.js
const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/jobs', jobController.getJobs);
router.post('/jobs', authMiddleware.isAdmin, jobController.createJob);

module.exports = router;
