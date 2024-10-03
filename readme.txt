generate migration   ----npm run typeorm migration:create -d ./src/migrations/mg
run migration        ----npm run migration:run  (npx typeorm-ts-node-commonjs migration:run -d ./src/data-source.ts)