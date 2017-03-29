function createNode(num) {
	var newItem = document.createElement("span");
    newItem.style.height = num + 'px';
	newItem.setAttribute("class","box");
    return newItem;
}

document.getElementById("leftIn").onclick = function() {
    var value = document.getElementById('input').value;
    var queue = document.getElementById('queue');
    if(queue.childNodes.length >= 60) {
        alert('扎心了，老铁');
    }
    else if(value >= 10 && value <= 100) {
        var newNode = createNode(value);
        queue.insertBefore(newNode, queue.childNodes[0]);
    }
}

document.getElementById("rightIn").onclick = function() {
    var value = document.getElementById('input').value;
    if(queue.childNodes.length >= 60) {
        alert('扎心了，老铁');
    }
    else if(value >= 10 && value <= 100) {
        var newNode = createNode(value);
        document.getElementById("queue").appendChild(newNode);
    }
    
}

document.getElementById("leftOut").onclick = function() {
    var queue = document.getElementById('queue');
    queue.removeChild(queue.childNodes[0]);
}

document.getElementById("rightOut").onclick = function() {
    var queue = document.getElementById('queue');
    queue.removeChild(queue.lastChild);
}

document.getElementById("sort").onclick = function() {
    var queue = document.getElementById('queue');
    var len = queue.childNodes.length;
    for(let j = 0; j < len; j ++){
        for(let i = j + 1; i < len; i ++) {
            if(parseInt(queue.childNodes[j].style.height) > parseInt(queue.childNodes[i].style.height)) {
                let temp = queue.childNodes[i].style.height;
                queue.childNodes[i].style.height = queue.childNodes[j].style.height;
                queue.childNodes[j].style.height = temp;
            }
        }
    }
}
