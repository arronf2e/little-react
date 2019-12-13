function createElement(tagName, props, children) {
    // 函数组件
    if(typeof tagName === 'function') {
        return tagName()
    }else {
        let tag = document.createElement(tagName)
        tag.innerHTML = children
        return tag
    }
}

React = {
    createElement
}