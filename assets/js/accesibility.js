document.addEventListener("DOMContentLoaded", () => {
	let contentH2Elements = document.querySelectorAll("[aria-label='Main Content'] h2");
	let contentH3Elements = document.querySelectorAll("[aria-label='Main Content'] h3");
	let contentPElements = document.querySelectorAll("p");
	if (contentH2Elements.length === 0 && contentH3Elements.length === 0) return;
  
	function getOriginalValues(elements) {
	  if (elements.length === 0) return null;
	  return {
		fontSize: parseFloat(window.getComputedStyle(elements[0]).fontSize),
		marginTop: parseFloat(window.getComputedStyle(elements[0]).marginTop),
		marginBottom: parseFloat(window.getComputedStyle(elements[0]).marginBottom),
	  };
	}
	let h2Original = getOriginalValues(contentH2Elements);
	let h3Original = getOriginalValues(contentH3Elements);
	let pOriginal = getOriginalValues(contentPElements);
  
	document.getElementById("font_big").onclick = () => {
	  document.querySelector("[aria-label='Main Content']").style.fontSize = "1.43rem";
	  document.querySelector(".content").style.fontSize = "1.43rem";

	  if (h2Original) {
		contentH2Elements.forEach((h2) => {
		  h2.style.fontSize = (h2Original.fontSize * 1.7) + "px";
		  h2.style.marginTop = (h2Original.marginTop * 1.2) + "px";
		  h2.style.marginBottom = (h2Original.marginBottom * 1.3) + "px";
		});
	  }
  
	  if (h3Original) {
		contentH3Elements.forEach((h3) => {
		  h3.style.fontSize = (h3Original.fontSize * 1.5) + "px";
		  h3.style.marginTop = (h3Original.marginTop * 1.15) + "px";
		  h3.style.marginBottom = (h3Original.marginBottom * 1.2) + "px";
		});
	  }
	};
  
	document.getElementById("font_normal").onclick = () => {
	  document.querySelector("[aria-label='Main Content']").style.fontSize = pOriginal.fontSize + "px";
	  document.querySelector(".content").style.fontSize = pOriginal.fontSize + "px";
  
	  if (h2Original) {
		contentH2Elements.forEach((h2) => {
		  h2.style.fontSize = h2Original.fontSize + "px";
		  h2.style.marginTop = h2Original.marginTop + "px";
		  h2.style.marginBottom = h2Original.marginBottom + "px";
		});
	  }
  
	  if (h3Original) {
		contentH3Elements.forEach((h3) => {
		  h3.style.fontSize = h3Original.fontSize + "px";
		  h3.style.marginTop = h3Original.marginTop + "px";
		  h3.style.marginBottom = h3Original.marginBottom + "px";
		});
	  }
	};
  });
