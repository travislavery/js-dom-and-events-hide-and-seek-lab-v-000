function getFirstSelector(selector) {
	return document.querySelectorAll(selector)[0]
}

function nestedTarget(){
	return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n){
	const listElements = document.querySelectorAll('ul.ranked-list li')
	for (let i=0; i < listElements.length; i++) {
		listElements[i].innerHTML = parseInt(listElements[i].innerHTML) + n
	}
}

function deepestChild(){
	const grandNode = document.getElementById('grand-node')
	nextLevel(grandNode)
	return document.getElementById('deepest')
}

function nextLevel(node){
	if (node.children[0] !== undefined){
		nextLevel(node.firstElementChild)
	} else {
		node.id = 'deepest'
	}
}