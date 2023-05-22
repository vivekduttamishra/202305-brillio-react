var root=document.getElementById('placeholder')
var element= React.createElement('h2',null,"Welcome to react page")
// root.innerHTML=element
const link=React.createElement('a',{href: "https://react.dev",
target:'blank'},'Home')

var header= React.createElement('div',{className:'header'},element,link
)

var _root=ReactDOM.createRoot(root)
_root.render(header)