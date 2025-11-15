FROM node:20

# Creates app directory inside container
WORKDIR /app

# Copies package files (faster)
COPY package*.json ./

# Installs dependencies
RUN npm install

# Copies the rest of the project files
COPY . .

# Exposes the port your app listens on
EXPOSE 3000

# Starts your application
CMD ["npm", "start"]