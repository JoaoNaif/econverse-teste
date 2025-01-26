# Econverse Teste - Guia de Instalação

## Requisitos
Antes de iniciar o projeto, certifique-se de ter os seguintes requisitos instalados em sua máquina:

- **Node.js** v22.12.0 ou superior
- **Git** para clonar o repositório

## Instalação

1. **Clonar o Repositório**
   
   Abra o prompt de comando e execute:
   
   ```bash
   git clone https://github.com/JoaoNaif/econverse-teste
   ```

2. **Instalar as Dependências**

   Acesse a pasta do repositório clonado:

   ```bash
   cd econverse-teste
   ```

   Em seguida, instale as dependências do projeto:

   ```bash
   npm install
   ```

3. **Configuração do Ambiente**

   Crie um arquivo `.env.local` na raiz do projeto e adicione a seguinte variável de ambiente:

   ```env
   VITE_API_URL="/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
   ```

4. **Executar o Projeto**

   Para iniciar a aplicação em ambiente de desenvolvimento, execute o seguinte comando:

   ```bash
   npm run dev
   ```

## Considerações Finais

Após seguir os passos acima, o projeto estará rodando localmente e pronto para ser utilizado.

Se tiver alguma dúvida, entre em contato com joaonaif@gmail.com.

