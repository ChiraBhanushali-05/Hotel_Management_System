const express = require('express');
const router = express.Router();
const { createWaiter, getAllWaiters, getWaiterById, updateWaiter, deleteWaiter, generateTokenForWaiter } = require('../controllers/waiterController');
const { validateWaiterRequest } = require("../middleware/validateWaiter");

router.post('/', validateWaiterRequest, createWaiter);
router.get('/', getAllWaiters);
router.get('/:id', getWaiterById);
router.put('/:id', validateWaiterRequest, updateWaiter);
router.delete('/:id', deleteWaiter);


module.exports = router;
