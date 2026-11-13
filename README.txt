# Control CCM — versión con búsqueda inteligente global

## Qué se modificó
- La búsqueda normaliza mayúsculas/minúsculas, tildes, espacios, guiones y otros separadores.
- También ignora ceros a la izquierda en bloques numéricos: `CIN-2`, `CIN-02`, `cin 2` y `CIN 002` se comparan como el mismo identificador.
- Los TAG originales no se reescriben ni se modifican en Firestore.
- Si una búsqueda exacta encuentra varios equipos con TAG equivalente, se muestra un aviso y la lista presenta las coincidencias para elegir con cuidado.
- El vínculo automático entre notas/termografías y un equipo evita atribuir registros por TAG cuando existen varios equipos con el mismo TAG normalizado.
- La importación de equipos compara TAG + cubículo normalizados y omite filas ambiguas o repetidas en lugar de actualizar un equipo arbitrario.
- Se actualizó la versión de caché del Service Worker para que los dispositivos descarguen el código nuevo.

## Archivos
- `public/`: aplicación web lista para Firebase Hosting (`index.html`, `manifest.json`, `sw.js`, logo e íconos).
- `firebase.json`, `firestore.rules`: configuración actual de Firebase.

## Importante antes de probar
Esta versión conserva la configuración del proyecto Firebase actual. Las reglas incluidas permiten lectura y escritura públicas (`allow read, write: if true`). Es una configuración temporal insegura: no uses este proyecto con información confidencial ni lo publiques como versión corporativa. Antes de una prueba real con datos de la empresa, Sistemas debe revisar autenticación y reglas de acceso.

## Publicación de prueba
La carpeta `public/` coincide con el destino indicado en `firebase.json`. Para probar, publicá este proyecto en un entorno de prueba o servilo desde un servidor web local. No abras `public/index.html` directamente con doble clic: los módulos Firebase requieren un origen HTTP/HTTPS.

Esta entrega implementa la normalización global solicitada. No incluye todavía la nueva organización de Termografía por año/mes/sector que estuvimos diseñando; esa modificación queda para una siguiente etapa.
