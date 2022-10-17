import React from "react"
import ReactDOM from "react-dom/client"
import { compose, pipe } from "lodash/fp"

const App = (params) => {
  const x = 2
  const y = 6
  const double = (number) => number * 2
  const square = (number) => number * number
  const half = (number, y) => number / y

  console.log(half(12))
  y = 2 
  console.log(half(12))

  const divide = (num2) => {
    return function(num1) {
      return num1 / num2
    }
  }

  const mathCalculate = pipe(double, square, half, divide(3))

  return <h1>{mathCalculate(x)}</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// =====================================================================================================================================================================

// import React from "react"
// import ReactDOM from "react-dom/client"
// import { compose, pipe } from "lodash/fp"

// const App = (params) => {
//   const x = 2
//   const y = 6
//   const double = (number) => number * 2
//   const square = (number) => number * number
//   const half = (number) => number / y

//   console.log(half(12))
//   y = 2 
//   console.log(half(12))

//   const divide = (num2) => {
//     return function(num1) {
//       return num1 / num2
//     }
//   }

//   const mathCalculate = pipe(double, square, half, divide(3))

//   return <h1>{mathCalculate(x)}</h1>
// }

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

// =====================================================================================================================================================================

// import React from "react"
// import ReactDOM from "react-dom/client"
// import { compose, pipe } from "lodash/fp"

// const App = (params) => {
//   const x = 2
//   let y = 6
//   const double = (number) => number * 2
//   const square = (number) => number * number
//   const half = (number) => number / y

//   console.log(half(12))
//   y = 2 
//   console.log(half(12))
  
//   const divide = (num2) => {
//     return function(num1) {
//       return num1 / num2
//     }
//   }

//   const mathCalculate = pipe(double, square, half, divide(3))

//   return <h1>{mathCalculate(x)}</h1>
// }

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

// =====================================================================================================================================================================

// import React from "react"
// import ReactDOM from "react-dom/client"
// import { compose, pipe } from "lodash/fp"

// const App = (params) => {
//   const x = 2

//   const double = (number) => number * 2
//   const square = (number) => number * number
//   const half = (number) => number / Math.random()

//   const divide = (num2) => {
//     return function(num1) {
//       return num1 / num2
//     }
//   }

//   const mathCalculate = pipe(double, square, half, divide(3))

//   return <h1>{mathCalculate(x)}</h1>
// }

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
