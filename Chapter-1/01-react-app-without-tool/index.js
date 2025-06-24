const rootElement = document.getElementById("root")

// type, props(configration), children
// function Helloworld() {
//   return React.createElement("h1", {className: "heading"}, "Hello World"); // Object
// }

// component name always start with Capital letter if we start from small then it give error in JSX
// if we it is not capital letter then jsx think it is a html not component
// So in jsx used Capital letter in the component
function Helloworld() {
    return <h1>Hello World</h1>
}

// render takes object
ReactDOM.createRoot(rootElement).render(<Helloworld />)


// JSX -> Javascript XML
// We used babel which convert jsx syntax into  React syntax

// Things to remember

// react, reactDOM
//JSX(babel convert jsx to actual react code)