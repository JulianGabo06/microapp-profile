# Micro app — Profile

Remote de **Module Federation** para el host [MicroApps](../MicroApps).

- Puerto dev: **9002**
- Federation name: `profile`
- Expone: `./App` → `src/App.tsx`
- **No** genera binario nativo (lo provee el host)

## Requisitos

- Node.js ≥ 20
- El host MicroApps debe apuntar a:
  `profile@http://localhost:9002/${platform}/mf-manifest.json`

## Arranque

```bash
npm install
npm start
```

Comprobar:

```bash
curl http://localhost:9002/android/mf-manifest.json
```

## Lint / format (Biome)

```bash
npm run lint
npm run lint:fix
npm run format
```

## Relación con el host

```text
Proyectos/
├── MicroApps/           # host (base)
├── microapp-catalog/
└── microapp-profile/    # este repo
```

Desde el host:

```bash
npm run start:profile
```
