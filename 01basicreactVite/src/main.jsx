import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// This is the custom element we are creating which is made by react when the JSX is passed in return  
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}


const anotherUser = " I am JS variable represented in form of evaluated expression";
// This is the element which the React creates (i.e. creates a tree like structure from HTML 
// provided from JSX which is passed like <App/> . Thus we have directly passed that tree 
// structure with exact params in which the react creates )
const strictReactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank' 
    },
    "Click me to visit google",
    anotherUser // only evaluated expression(final outcome of JS function) can be addedd here
    // i.e. no if else formatted js can be added here
)


function MyApp(){
    return(
        <>
        Calling from myApp
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    strictReactElement
)
