function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
	document.getElementById('result').innerHTML = '';
}

function printEndResult(rlt){
	let div = document.createElement('div');
	div.innerHTML = rlt;
	document.getElementById('result').appendChild(div);
}