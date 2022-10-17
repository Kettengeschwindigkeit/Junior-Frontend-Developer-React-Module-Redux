import React from "react"
import ReactDOM from "react-dom/client"
import { compose, pipe } from "lodash/fp"

const App = (params) => {
  const x = 2
  // const y = x * 2 
  // const z = y * y 
  const double = (number) => number * 2
  const square = (number) => number * number
  const half = (number) => number / 2
  const mathCalculate = compose(half, square, double)
  const mathCalculate1 = pipe(double, square, half)

  return <h1>{mathCalculate(x)}, {mathCalculate1(x)}</h1>
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

// const App = (params) => {
//   const x = 2
//   // const y = x * 2 
//   // const z = y * y 
//   const double = (number) => number * 2
//   const square = (number) => number * number
//   const half = (number) => number / 2

//   return <h1>{half(square(double(x)))}</h1>
// }

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
