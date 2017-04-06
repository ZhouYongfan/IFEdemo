function createNode(num) {
	var newItem = document.createElement("span");
	var textNode = document.createTextNode(num);
	newItem.appendChild(textNode);
	newItem.setAttribute("class","box");
    return newItem;
}

document.getElementById("leftIn").onclick = function() {
    var value = document.getElementById('input').value;
	if(value.length>0){
		var inputArray = value.split(/\r|,|，|、|\s|\t/);
		var queue = document.getElementById("queue");
		for(let i = 0; i < inputArray.length; i ++) {
			var newNode = createNode(inputArray[i]);	
			queue.insertBefore(newNode,queue.childNodes[0]);
		}	
	}
}

document.getElementById("rightIn").onclick = function() {
    var value = document.getElementById('input').value;
	if(value.length>0){
		var inputArray = value.split(/\r|,|，|、|\s|\t/);
		var queue = document.getElementById("queue");
		for(let i = 0; i < inputArray.length; i ++) {
			var newNode = createNode(inputArray[i]);	
			queue.appendChild(newNode);
		}	
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


document.getElementById("inquire").onclick = function() {
	var queue = document.getElementById("queue").children;
	var inquireInput = document.getElementById("inquire_input").value;
	var reg = eval("/" + inquireInput + "/g");//object
	for(let i = 0; i < queue.length; i ++) {
		var str = queue[i].innerHTML.replace(reg, "<span style='color:blue;'>" + inquireInput + "</span>");
		queue[i].innerHTML = str;
	}
}