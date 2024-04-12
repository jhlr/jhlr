let tablist = ['intro', 'metodo', 'resultado'] 
let thistab = tablist[0]

function togglehide(content, force) {
	if('string' == typeof content) {
		content = document.getElementById(content)
	}
	if(force || !content?.classList?.contains('hidden')) {
		content.classList.add('hidden')
	} else {
		content.classList.remove('hidden')
	}
}

function hideall() {
	for(t in tablist) {
		togglehide(tablist[t], true)
	}
}

function tab(name) {
	togglehide(thistab, true)
	togglehide(name)
	thistab = name
}

