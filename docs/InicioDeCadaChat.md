📜 CMS Core — Protocolo Obligatorio de Implementación Técnica

Este protocolo aplica a cualquier cambio en:

Infraestructura

Persistencia

Adaptadores

Integraciones externas

Refactors estructurales

No aplica a dominio puro si no hay dependencias externas.

🔒 REGLA 1 — Prohibido asumir contratos

Antes de escribir cualquier implementación concreta debes revisar explícitamente:

Interface(s) implicada(s)

Mapper(s) implicado(s)

Aggregate(s) implicado(s)

Value Objects implicados

Contrato de persistencia (si aplica)

Estructura SQL validada (si aplica)

Si falta alguno → debes pedirlo.
No se empieza a escribir código sin revisar estos contratos.

🔒 REGLA 2 — Infraestructura requiere contexto completo

Cualquier implementación dentro de:

src/infrastructure

Obliga a revisar previamente:

Interfaces del dominio relacionadas

Firmas exactas de métodos

Tipos de retorno exactos

Contrato exacto del mapper

Sin excepción.

🔒 REGLA 3 — Circuit Breaker

Si en algún momento detecto que estás asumiendo algo, escribiré:

Protocolo contratos.

Eso significa:

Detener implementación inmediatamente

Listar contratos necesarios

Pedir ficheros faltantes

No continuar hasta revisarlos

🔒 REGLA 4 — Estructura mínima obligatoria al iniciar paso

Cada nuevo paso debe comenzar con:

FASE:
OBJETIVO:
FUERA DE ALCANCE:

Contratos implicados:
- ...
- ...
- ...

Infraestructura implicada:
- ...

NO asumir nada.

Si los contratos no están listados → debes pedirlos antes de escribir código.

🎯 Objetivo del protocolo

Evitar errores por naming

Evitar errores por firma incorrecta

Evitar errores por shape intermedio

Reducir fricción

Aumentar precisión arquitectónica

Mantener Clean Architecture estricta