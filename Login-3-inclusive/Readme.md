# login creado con la ayuda de Copilot  

## Atributos funcionales estándar de  
Estos controlan cómo se envía y procesa el formulario:  
-action: URL a la que se envían los datos del formulario.  
-method: Método HTTP (GET o POST) para enviar los datos.  
-enctype: Tipo de codificación (application/x-www-form-urlencoded, multipart/form-data, etc.).  
-target: Define dónde se abrirá la respuesta (_self, _blank, etc.).  
-name: Nombre del formulario, útil para scripts  .
-autocomplete: Activa (on) o desactiva (off) el autocompletado.  
-novalidate: Desactiva la validación HTML5 del formulario.  
-accept-charset: Define el conjunto de caracteres aceptado (ej. UTF-8)  
## Atributos y prácticas de accesibilidad  
Estos ayudan a que el formulario sea más usable por personas con discapacidades:  
🔹 Atributos directamente en  
aria-labelledby: Asocia el formulario con un encabezado descriptivo.  
aria-describedby: Proporciona una descripción adicional del formulario.  
role="form": Define el propósito semántico del contenedor (aunque ya lo implica).  
tabindex: Controla el orden de navegación por teclado.  
🔹 Buenas prácticas complementarias  
Usar etiquetas correctamente asociadas con for y id para cada campo.  
Agrupar campos relacionados con y , lo que mejora la navegación por lectores de pantalla.  
Evitar usar  
 o como campos interactivos; usar elementos semánticos como , , etc.  
Proporcionar mensajes de error claros y accesibles, idealmente con aria-live para que los lectores de pantalla los anuncien.  
Asegurar que todos los elementos sean accesibles por teclado, evitando interacciones que dependan solo del mouse.  



