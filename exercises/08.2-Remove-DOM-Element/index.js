let list = document.querySelector("#parentLi");
let children = list.childNodes;
list.removeChild(children[3]);
console.log(children);