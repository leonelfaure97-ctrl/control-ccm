CONTROL CCM - ACTUALIZACION SOBRE LA VERSION BASE DEL USUARIO

Se conservaron los archivos originales del proyecto y se aplicaron estas mejoras:

1) Busqueda normalizada global:
   - Ignora mayusculas, acentos, espacios y separadores (guiones, puntos, etc.).
   - Normaliza ceros a la izquierda en bloques numericos.
   - Ejemplos equivalentes: CIN-2, CIN-02, cin 2, CIN 002.
   - Los TAG guardados en Firestore no se modifican.
   - Si hay varios equipos que coinciden, se muestran todos para que el usuario elija; no se selecciona uno arbitrariamente.
   - Aplicada a CCM, termografia, trabajos correctivos, manuales, historial y deduplicacion de importaciones.

2) Termografia organizada por Año, Mes y Sector:
   - Filtros encadenados de año, mes y sector.
   - Sectores disponibles: L1, L2, L3, SERVICIOS, PUERTO y LOGISTICA.
   - Cada registro guarda fecha, año, mes, sector y recorrida/campaña.
   - Se pueden guardar varias recorridas en el mismo mes y sector sin sobrescribir registros anteriores.
   - Importacion XLSX admite columnas SECTOR, RECORRIDA y FECHA; si no hay columna sector, pregunta el sector.

3) Se conserva el modulo Trabajos Correctivos y su paso a historial cuando se marca una reparacion.
4) Se conserva el resto de las funciones y configuraciones de la carpeta recibida.
5) Se actualizo la version de cache del Service Worker a control-ccm-v8.

ARCHIVOS:
- index.html y sw.js de la raiz: para GitHub Pages publicado desde la raiz.
- public/index.html y public/sw.js: copias sincronizadas para Firebase Hosting si se publica desde public.
- No se cambiaron firebase.json, firestore.rules, storage.rules ni la configuracion del proyecto Firebase.

IMPORTANTE:
- Esta entrega paso una comprobacion estatica de sintaxis JavaScript, pero no se pudo probar una sesion real contra Firebase ni en todos los dispositivos.
- Antes de publicar, conservar una copia de seguridad de la carpeta anterior.
- Las reglas de seguridad de Firebase existentes no se modificaron. Revisarlas con el equipo de Sistemas antes de usar con datos corporativos reales.
- Los registros termograficos anteriores que no tengan fecha/sector quedan como "Sin clasificar"; al editarlos, completar la fecha y sector correctos para incorporarlos a la organizacion nueva.
