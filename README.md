### General project structure
```
/frontend
├── public/                        # Pasta para arquivos estáticos como imagens e ícones
├── src/
│   ├── domain/                    # Modelos de dados e lógica de domínio
│   │   ├── models/                # Modelos de dados (entidades)
│   │   └── repositories/          # Interfaces de repositórios para abstrair a persistência
│   ├── application/               # Lógica de aplicação, casos de uso, e orquestração
│   │   ├── services/              # Serviços que contêm lógica de negócios
│   │   └── dtos/                  # Objetos de Transferência de Dados (DTOs)
│   ├── interfaces/                # Camada de apresentação (views, controllers)
│   │   ├── components/            # Componentes reutilizáveis do React
│   │   ├── views/                 # Componentes que correspondem às "views" no MVC
│   │   ├── controllers/           # Lógica de controle para manipular dados entre views e models
│   │   ├── pages/                 # Páginas do Next.js e roteamento, cada arquivo representa uma rota
│   │   ├── styles/                # Arquivos de estilo usando Tailwind CSS
│   │   └── utils/                 # Utilidades diversas
│   ├── infrastructure/            # Implementações concretas de repositórios, integrações externas
│   └── tests/                     # Testes unitários e de integração
│       ├── unit/                  # Testes unitários para lógica de negócios, componentes, etc.
│       └── integration/           # Testes de integração para verificar o comportamento conjunto de componentes
├── .env                           # Arquivos de variáveis de ambiente
├── .eslintrc.json                 # Configurações do ESLint
├── .prettierrc                    # Configurações do Prettier
├── jest.config.js                 # Configurações do Jest para TDD
├── next.config.js                 # Configurações do Next.js
├── package.json
└── tsconfig.json                  # Configurações do TypeScript

```
### Project Structure Alongside Base + Example files
```
/frontend
├── public/                        # Arquivos estáticos como imagens e ícones
│   └── favicon.ico
├── src/
│   ├── domain/                    # Camada de domínio (modelos, interfaces de repositórios)
│   │   ├── models/
│   │   │   └── User.ts            # Definição do modelo de usuário
│   │   └── repositories/
│   │       └── UserRepository.ts  # Interface do repositório de usuário
│   ├── application/               # Camada de aplicação (serviços, DTOs)
│   │   ├── services/
│   │   │   └── UserService.ts     # Serviço de usuário
│   │   └── dtos/
│   │       └── UserDTO.ts         # Objeto de Transferência de Dados de Usuário
│   ├── interfaces/                # Camada de interface (views, controladores)
│   │   ├── components/
│   │   │   └── UserProfile.tsx    # Componente React para o perfil do usuário
│   │   ├── views/
│   │   │   └── UserView.tsx       # Componente de visualização para a página de usuário
│   │   ├── controllers/
│   │   │   └── UserController.ts  # Controlador de usuário para lidar com requisições de API
│   │   ├── pages/                 # Páginas e roteamento do Next.js
│   │   │   └── user/
│   │   │       └── [id].tsx       # Rota dinâmica para a página de usuário
│   │   ├── styles/
│   │   │   └── globals.css        # Estilos globais usando Tailwind CSS
│   │   └── utils/
│   │       └── formatDate.ts      # Função utilitária para formatação de datas
│   ├── infrastructure/            # Camada de infraestrutura (implementações de repositórios, integrações)
│   │   └── repositories/
│   │       └── InMemoryUserRepository.ts  # Implementação do repositório de usuário em memória
│   └── tests/                     # Testes (testes unitários e de integração)
│       ├── unit/
│       │   └── UserService.spec.ts  # Teste unitário para UserService
│       └── integration/
│           └── UserController.spec.ts  # Teste de integração para UserController
├── .env                           # Arquivos de variáveis de ambiente
├── .eslintrc.json                 # Configuração do ESLint
├── .prettierrc                    # Configuração do Prettier
├── jest.config.js                 # Configuração do Jest
├── next.config.js                 # Configuração do Next.js
├── package.json                   # Dependências e scripts do Node.js
└── tsconfig.json                  # Configuração do TypeScript
```
### Node Express template project

This project is based on a GitLab [Project Template](https://docs.gitlab.com/ee/gitlab-basics/create-project.html).

Improvements can be proposed in the [original project](https://gitlab.com/gitlab-org/project-templates/express).

### CI/CD with Auto DevOps

This template is compatible with [Auto DevOps](https://docs.gitlab.com/ee/topics/autodevops/).

If Auto DevOps is not already enabled for this project, you can [turn it on](https://docs.gitlab.com/ee/topics/autodevops/#enabling-auto-devops) in the project settings.

### Developing with Gitpod

This template has a fully-automated dev setup for [Gitpod](https://docs.gitlab.com/ee/integration/gitpod.html).

If you open this project in Gitpod, you'll get all Node dependencies pre-installed and Express will open a web preview.
