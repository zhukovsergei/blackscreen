FROM node:18.14.2

RUN corepack enable && corepack prepare yarn@4.7.0 --activate

WORKDIR /app

EXPOSE 5173

CMD ["bash"]
