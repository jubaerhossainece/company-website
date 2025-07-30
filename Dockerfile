# Use official Node image as base
FROM node:20-alpine AS builder


# Set working directory

WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Install dependencies
RUN \
if [ -f package-lock.json ]; then npm ci; \
elif [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm install; \
elif [ -f yarn.lock ]; then yarn install; \
else echo "No lock file found." && exit 1; fi

# Copy rest of the app
COPY . .

# Build the Next.js app
RUN npm run build

# Use a minimal image for the final container
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy only necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Start Next.js app
CMD ["npm", "start"]
