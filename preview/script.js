// console.log(document.body.childNodes);
for (let node of document.body.childNodes) {
    if (node.nodeName == "#text" || node.nodeName == "#comment") {
        continue;
    }
    console.log(node);
}