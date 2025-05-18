document.querySelectorAll("p").forEach(p => {
  p.innerHTML = p.innerHTML.replace(/\(([^)]+)\)/g, '( <span class="inner-parens">$1</span> )');
})
