document.addEventListener("DOMContentLoaded", () => {
    try {
      // Procesar iframes
      document.querySelectorAll("iframe").forEach((iframe) => {
        const url = iframe.getAttribute("src");
        if (!url) return;
  
        const note = document.createElement("div");
        note.className = "print-url";
        note.innerHTML = `Revisa este recurso: <a href="${url}" target="_blank">${url}</a>`;
        iframe.insertAdjacentElement("afterend", note);
      });
  
      // Función para obtener la URL absoluta
      function getFullUrl(relativeUrl) {
        return new URL(relativeUrl, window.location.href).href;
      }
  
      // Procesar solo imágenes
      document.querySelectorAll("img").forEach((img) => {
        const url = img.getAttribute("src");
        if (!url) return;
  
        const fullUrl = getFullUrl(url);
        const note = document.createElement("div");
        note.className = "print-url";
        note.innerHTML = `Imagen ubicada en: <a href="${fullUrl}" target="_blank">${fullUrl}</a>`;
        img.insertAdjacentElement("afterend", note);
      });
    } catch (error) {
      console.warn("Error al preparar recursos para impresión:", error);
    }
  });
  