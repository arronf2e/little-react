const HelloWorld = React.createElement('div', null, 'hello world')



const Hello = function() {
    return React.createElement('div', null, 'hello component')
}
const HelloComponent = React.createElement(Hello, null, null)


const Hello3 = function() {
    return React.createElement('div', null, 'hello 3')
}

const Hello3_1 = React.createElement(Hello3, null, null)
const Hello3_2 = React.createElement(Hello3, null, null)
const Hello3_3 = React.createElement('div', null, 'hello3 inner html')
// children 分别为组件， div， text
const HelloComponent3 = React.createElement('div', null, 
    Hello3_1,
    Hello3_2,
    Hello3_3,
    'hello inner three'
)

ReactDOM.render(HelloComponent3, document.getElementById('app'))