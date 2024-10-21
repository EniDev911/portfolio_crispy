const em = document.querySelectorAll('em');

let keywords = ["string", "lista", "tupla"];

em.forEach(function(node) {
	keywords.forEach(function(word) {
		if (word === node.textContent) {
	    	node.classList.add("type");
		}
	});
})
