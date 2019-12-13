function createElement(tagName, props, children) {
    let tag = document.createElement(tagName)
    tag.innerHTML = children
    return tag
}

React = {
    createElement
}