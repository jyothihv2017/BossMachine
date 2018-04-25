const express = require('express');

const {   createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase } = require('./db');

const apiRouter = express.Router();

// Get all minions
apiRouter.get('/minions', (req, res, next) => {
  res.send(getAllFromDatabase('minions'));
});

// Get a single minion
apiRouter.get('/minions/:minionId', (req, res, next) => {
  const foundMinion = getFromDatabaseById('minions',req.params.minionId);
  if (foundMinion) {
    res.send(foundMinion);
  } else {
    res.status(404).send();
  }
});

// Update an minion
apiRouter.put('/minions/:minionId', (req, res, next) => {
  const foundMinion = getFromDatabaseById('minions',req.params.minionId);
  /*req.query.minionId = req.params.minionId; */
  if (foundMinion) {
    res.send(updateInstanceInDatabase(minions, req.query));
  } else {
    res.status(404).send();
  }
});

// Create an minion
apiRouter.post('/minions', (req, res, next) => {
  const receivedMinion = addToDatabase('minions', req.query);
  if (receivedMinion) {
    res.status(201).send(receivedMinion);
  } else {
    res.status(400).send();
  }
});

// Delete an minion
apiRouter.delete('/minions/:minionId', (req, res, next) => {
  const minionIndex = deleteFromDatabasebyId('minions',req.params.minionId);
  if (deleteFromDatabasebyId('minions',req.params.minionId)) {

    res.status(204).send();
  } else {
    res.status(404).send();
  }
});


module.exports = apiRouter;
