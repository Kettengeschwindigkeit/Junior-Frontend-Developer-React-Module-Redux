import React from 'react'
import ReactDOM from 'react-dom/client'

const App = (params) => {
  const arr = ["some", "new", "data"]

  function formatArray(el) {return el + " some"}

  setTimeout(() => {

  }, timeout)

  // arr.map((el) => el + " some")

  return <h1>{arr.map(formatArray)}</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// ====================================================================================================================================================================

// import React from 'react'
// import ReactDOM from 'react-dom/client'

// const App = (params) => {

//   function someFn() {
//     return function() {
//       return "app"
//     }
//   }

//   function fn(func) {
//     return func()
//   }

//   return <h1>{fn(someFn())}</h1>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
