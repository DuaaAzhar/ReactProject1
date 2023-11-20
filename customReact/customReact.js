// function customRender(reactElement, container){
//     const domElement = document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.children;
//     domElement.setAttribute('href', reactElement.props.href);
//     domElement.setAttribute('target', reactElement.props.target)

//     container.appendChild(domElement);
// }
const anotherUser = "I am JS variable represented in form of evaluated expression";
function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);

}
const reactElement = {
    type: 'a', // enter the tag element
    props: {    // enter props of tag element if any, if not then give empty brackets
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google',  // the text element you wanna add
    anotherUser // only evaluated expression(final outcome of JS function) can be addedd here
    // i.e. no if else formatted js can be added here
    
}


const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);