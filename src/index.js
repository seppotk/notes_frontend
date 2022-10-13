/* import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />) */

// this is for notes

import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './P2_a_rendering_a_collection_modules/App'
import App from './P2_b_forms/App'
const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
] 

ReactDOM.createRoot(document.getElementById('root')).render(
  <App notes={notes} />
)



// this is for part2 

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'



// ReactDOM.createRoot(document.getElementById('root')).render(<App />)


