# Use official Node.js image as a base
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if you have one)
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port that the app will run on
EXPOSE 2004


# Start the app
CMD ["node", "index.js"]
