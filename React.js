function createElement(tagName, props, ...children) {
    // 函数组件
    if(typeof tagName === 'function') {
        return tagName()
    }else {
        let tag = document.createElement(tagName)
        children.forEach(child => {
            if(typeof child === 'string') {
                tag.innerHTML += child
            }else if(typeof child === 'object'){
                tag.appendChild(child)
            }
        })
        return tag
    }
}

React = {
    createElement
}