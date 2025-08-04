const BOOTSTRAP_CSS = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
const BOOTSTRAP_JS = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
const FONTAWESOME = 'https://kit.fontawesome.com/6b8f0c7049.js';
 
const removeNumbers = (str) => {
	return str.split("\n").filter((ele) => !ele.match(/^[1-9]/)).join("\n").trim()
}

const createPen = (options) => {
	const form = document.createElement("form");
	form.action = "https://codepen.io/pen/define";
	form.method = "POST";
	form.target = "_blank";
	const input = document.createElement("input");
	input.type = "hidden";
	input.name = "data";
	input.value = JSON.stringify({
		title: options.title || '',
		html: removeNumbers(options.html) || '',
		css: options.css || '',
		js: options.js || '// js here',
		css_external: options.bs ? BOOTSTRAP_CSS : '',
		js_external: (options.bs ? BOOTSTRAP_JS  : '') + (options.fa ? `;${FONTAWESOME}` : ''),
		layout: "right"
	});
	form.insertAdjacentElement("afterbegin", input);
	document.body.appendChild(form);
	form.submit();
	document.body.removeChild(form);
}