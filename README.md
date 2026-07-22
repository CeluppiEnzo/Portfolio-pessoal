# Portfolio - Enzo Celuppi

Um portfólio simples e responsivo feito com HTML, CSS e JavaScript puro. Sem dependências complexas, fácil de editar e personalizar!

## 📁 Estrutura de Arquivos

```
portfolio-simples/
├── index.html          # Arquivo principal HTML
├── style.css           # Estilos CSS (responsivo)
├── script.js           # Lógica JavaScript
├── eu_formatura_sem_fundo.png  # Sua foto (adicione este arquivo)
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### 1. Abrir no VS Code
- Abra a pasta `portfolio-simples` no VS Code
- Clique com botão direito em `index.html` e selecione "Open with Live Server"
- Ou simplesmente abra o arquivo `index.html` no navegador

### 2. Adicionar sua foto
- Coloque o arquivo `eu_formatura_sem_fundo.png` na mesma pasta dos arquivos
- O arquivo será carregado automaticamente

### 3. Personalizar o Portfólio

#### Editar Informações Pessoais
Abra `index.html` e procure por:
- `<h2 class="hero-name">Enzo Celuppi Sanzovo</h2>` - Seu nome
- `<p class="hero-description">...` - Sua descrição
- Links do LinkedIn e Instagram

#### Adicionar/Editar Projetos
Abra `script.js` e edite o array `projects`:

```javascript
const projects = [
  {
    id: 1,
    title: "Nome do Projeto",
    description: "Descrição do projeto aqui",
    image: "URL da imagem",
    link: "https://link-do-projeto.com",
    layout: "normal" // ou "reverse" para alternar posição
  },
  // Adicione mais projetos aqui...
];
```

**Exemplo de novo projeto:**
```javascript
{
  id: 7,
  title: "Meu App Web",
  description: "Um aplicativo incrível que fiz com React e Node.js",
  image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
  link: "https://meuapp.com",
  layout: "normal"
}
```

## 🎨 Personalizar Cores

Abra `style.css` e procure pela seção `:root` (linhas 10-20):

```css
:root {
    --primary-color: #9D8DF1;        /* Cor roxa - nome em destaque */
    --secondary-color: #a1b3ffa1;    /* Cor dos botões */
    --dark-color: #41463D;           /* Cor escura */
    --light-bg: #fffbf5;             /* Cor de fundo */
    /* ... outras cores */
}
```

Altere os valores HEX para as cores que desejar.

## 📱 Responsividade

O portfólio é totalmente responsivo e funciona em:
- ✅ Desktop (1280px+)
- ✅ Tablet (768px - 1279px)
- ✅ Mobile (até 480px)

As mudanças de layout são automáticas via CSS media queries.

## 🔧 Funções JavaScript Úteis

### Adicionar um novo projeto
```javascript
addProject({
  id: 7,
  title: "Novo Projeto",
  description: "Descrição",
  image: "URL",
  link: "#",
  layout: "normal"
});
```

### Remover um projeto
```javascript
removeProject(1); // Remove o projeto com id 1
```

### Atualizar um projeto
```javascript
updateProject(1, { title: "Novo Título" });
```

### Resetar para 3 projetos
```javascript
resetProjects();
```

## 📝 Dicas

1. **Imagens**: Use URLs do Unsplash ou hospede suas próprias imagens
2. **Links**: Certifique-se de usar URLs completas (https://...)
3. **Descrições**: Mantenha as descrições concisas e informativas
4. **Layout**: Alterne entre "normal" e "reverse" para variar a posição dos projetos

## 🌐 Hospedagem

Para hospedar seu portfólio gratuitamente:
- **GitHub Pages**: Envie para um repositório GitHub
- **Netlify**: Conecte seu repositório
- **Vercel**: Conecte seu repositório
- **Firebase Hosting**: Configure e deploy

## 📧 Contato

Atualize os links de contato em:
- Instagram: `https://www.instagram.com/celuppienzo/`
- LinkedIn: `https://www.linkedin.com/in/enzo-celuppi-b956bb3a6/`
- Email: `mailto:enzo@example.com`

## ✨ Melhorias Implementadas

- ✅ Responsividade completa (mobile, tablet, desktop)
- ✅ Imagens sem distorção (object-fit: cover)
- ✅ 6 projetos com carregamento progressivo
- ✅ Navegação sticky
- ✅ Smooth scroll
- ✅ Animações suaves
- ✅ Sem dependências externas (apenas Font Awesome para ícones)

## 🎓 Estrutura do Código

- **HTML**: Semântico e bem organizado
- **CSS**: Organizado em seções, fácil de encontrar e editar
- **JavaScript**: Comentado e com funções auxiliares

## 📄 Licença

Livre para usar e modificar como desejar!

---

Feito com ❤️ para Enzo Celuppi
