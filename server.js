const express = require('express')
const server = express()
const knex = require('knex')
const knexConfig = require('./knexfile')
const db = knex(knexConfig.development)
server.use(express.json())

// retrieve resources
server.get('/api/resources', (req, res) => {
  db('resources')
  .then(resources => {
    res.status(200).json({data: resources})
  })
})

// retrieve projects
server.get('/api/projects', (req, res) => {
  db('projects')
  .then(projects => res.status(200).json({data: projects}))

})

// get all tasks
server.get('/api/tasks', (req, res) => {
  db('tasks')
  .then(tasks => res.status(200).json({data: tasks}))
})

const port = process.env.PORT || 5000
server.listen(port, () => console.log(`server listening on port ${port}`))