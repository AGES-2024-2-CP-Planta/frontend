# Use uma imagem base oficial do Node.js 18
FROM node:18-alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
# Utilize --only=production para instalar apenas as dependências de produção
RUN npm install --only=production

# Copie todo o código fonte do projeto para o diretório de trabalho
COPY . .

# Compila o projeto Next.js
RUN npm run build

# Exponha a porta padrão do Next.js (geralmente 3000)
EXPOSE 3000

# Comando para iniciar a aplicação Next.js em modo de produção
CMD ["npm", "run", "start"]
