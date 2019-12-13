const HelloWorld = React.createElement('div', null, 'hello world')

const Hello = function() {
    return React.createElement('div', null, 'hello component')
}

const HelloComponent = React.createElement(Hello, null, '')

ReactDOM.render(HelloComponent, document.getElementById('app'))