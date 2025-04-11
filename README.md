# Black Screen

A simple web application that displays a black and RGB screen.

## Deployment

### 1. Server Setup

1. Install Docker and Docker Compose on your server
2. Open ports 80 and 443 in your firewall
3. Point your domain to your server's IP address

### 2. GitHub Secrets Setup

Add the following secrets to your GitHub repository:

- `DOCKERHUB_USERNAME`: Your Docker Hub username
- `DOCKERHUB_TOKEN`: Your Docker Hub access token
- `VULTR_HOST`: Your server's IP address
- `VULTR_USERNAME`: SSH username for your server
- `VULTR_SSH_KEY`: SSH private key for server access
- `LETSENCRYPT_EMAIL`: Email for Let's Encrypt notifications
- `DOMAIN_NAME`: Your domain name (e.g., example.com)


## Development

### Local Development

1. Build it:
   ```bash
   # Deploy to server
   docker compose up -d
   ```

2. Connect it:
   ```bash
   docker exec -it node-lts-container bash
   ```

3. Install dependencies:
   ```bash
   yarn install
   ```

4. Start the development server:
   ```bash
   yarn dev
   ```

### Building for Production

1. Build the application:
   ```bash
    docker-compose -f docker-compose.prod.yml build
   ```

2. Build Docker image:
   ```bash
    docker-compose -f docker-compose.prod.yml up -d
   ```
3. Install dependencies:
   ```bash
   yarn install
   ```

4. Start server:
   ```bash
   yarn build
   yarn preview
   ```