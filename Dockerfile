FROM node:24-alpine

WORKDIR /app

ENV NODE_ENV=production

# Installe uniquement les dépendances nécessaires à l’exécution.
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Le projet doit être compilé avant docker build.
COPY dist ./dist

USER node

CMD ["node", "dist/index.js"]