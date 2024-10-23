# Use an official Node runtime as the parent image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source inside the docker image
COPY . .

# Make port 1337 available to the world outside this container
EXPOSE 1337

# Define environment variable
ENV NODE_ENV production

# Run app when the container launches
CMD ["npm", "start"]