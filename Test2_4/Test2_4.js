function createNode(num) {
	var newItem = document.createElement("span");
	var textNode = document.createTextNode(num);
	newItem.appendChild(textNode);
	newItem.setAttribute("class","box");
    return newItem;
}

document.getElementById("leftIn").onclick = function() {
    var value = document.getElementById('input').value;
    var newNode = createNode(value);
    var queue = document.getElementById('queue');
    queue.insertBefore(newNode, queue.childNodes[0]);
}

document.getElementById("rightIn").onclick = function() {
    var value = document.getElementById('input').value;
    var newNode = createNode(value);
    document.getElementById("queue").appendChild(newNode);
}

document.getElementById("leftOut").onclick = function() {
    var queue = document.getElementById('queue');
    queue.removeChild(queue.childNodes[0]);
}

document.getElementById("rightOut").onclick = function() {
    var queue = document.getElementById('queue');
    queue.removeChild(queue.lastChild);
}
