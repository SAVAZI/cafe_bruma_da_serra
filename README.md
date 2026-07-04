# Café Bruma da Serra

Site institucional estático para a cafeteria Café Bruma da Serra, com aviso de abertura em breve em São José dos Campos.

## Estrutura

- `index.html`: página principal.
- `styles.css`: estilos e responsividade.
- `script.js`: menu mobile e formulário de aviso.
- `assets/imagens/`: logo e imagem principal.
- `vercel.json`: configuração para deploy estático no Vercel.

## Rodar localmente

Abra o arquivo `index.html` no navegador.

Opcionalmente, com Node.js instalado:

```bash
npm start
```

## Deploy no Vercel

1. Suba este projeto para um repositório no GitHub.
2. No Vercel, escolha **Add New Project**.
3. Importe o repositório.
4. Use as configurações padrão:
   - Framework Preset: **Other**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: vazio
5. Clique em **Deploy**.

Como o site é estático, o Vercel publica os arquivos da raiz do projeto.
