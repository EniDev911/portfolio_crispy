document.querySelectorAll("#main-wrapper p").forEach(p => {
  // Creamos un array a partir de los nodos hijos
  const nodes = Array.from(p.childNodes);

  nodes.forEach(node => {
    // Solo procesamos nodos de texto (nodeType === 3)
    if (node.nodeType === Node.TEXT_NODE) {
      const replaced = node.textContent.replace(
        /\(([^)]+)\)/g,
        '( <span class="inner-parens">$1</span> )'
      );

      if (replaced !== node.textContent) {
        // Creamos un fragmento y lo reemplazamos
        const span = document.createElement('span');
        span.innerHTML = replaced;
        p.replaceChild(span, node);
      }
    }
  });
});

document.querySelectorAll("li").forEach(li => {
  li.innerHTML = li.innerHTML.replace(/\(([^)]+)\)/g, '( <span class="inner-parens">$1</span> )');
})
