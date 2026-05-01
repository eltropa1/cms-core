# ContentDocument Storage Contract (v1)

This document defines the canonical JSON storage format for `ContentDocument`
and its blocks. It is used by future infrastructure adapters (e.g. Supabase)
to serialize and re-hydrate domain objects.

This is NOT an infrastructure implementation.
It is a stable contract to avoid improvisation.

---

## ContentDocument (schemaVersion = 1)

### JSON shape

```json
{
  "schemaVersion": 1,
  "blocks": [
    {
      "id": "block-1",
      "type": "paragraph",
      "data": {
        "text": "Hello world"
      }
    },
    {
      "id": "block-cta",
      "type": "cta",
      "data": {
        "title": "Reserva",
        "buttonText": "Contactar",
        "url": "/contacto",
        "variant": "primary"
      }
    },
    {
      "id": "block-info",
      "type": "infobox",
      "data": {
        "title": "Nota",
        "content": "Contenido",
        "variant": "info"
      }
    }
  ]
}