  
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

// post a new project
server.post('/api/projects', (req, res) => {
  const projectName = req.body.name
  if(!projectName){
    res.status(401).json({message: 'Please include a name field and fil it out'})
  }
  
  db('projects')
  .insert({name: projectName})
  .then(projectId => res.status(201).json({data: projectId}))
})

// post a new resource, notes are optional
server.post('/api/resources', (req, res) => {
  const resourceName = req.body.name
  if(!resourceName){
    res.status(401).json({message: 'Please include a name field'})
  }
  
  db('resources')
  .insert({name: resourceName})
  .then(resourceId => res.status(201).json({data: resourceId}))
})

// create a new task, description and existing id are required
server.post('/api/tasks', (req, res) => {
  const taskDesc = req.body.description
  const projectId = req.body.project_id
  if(!taskDesc){
    res.status(400).json({message: 'Please provide a task description field that is filled out'})
  } else if (!projectId){
    res.status(400).json({message: 'Please provide a project_id field with a valid project id number'})
  }
  db('projects')
  .select()
  .where({id: projectId})
  .then(project => {
    if(project.length > 0){
      db('tasks')
      .insert(req.body)
      .then(() => {
        db('tasks')
        .select()
        .where({project_id: projectId})
        .then( tasks => {
          res.status(201).json({data: tasks})
        })
      })
    } else {
      res.status(400).json({message: "That project ID does not exist"})
    }
  })
})

const port = process.env.PORT || 5000
server.listen(port, () => console.log(`server listening on port ${port}`))