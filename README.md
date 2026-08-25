# Computação Visual — Blog individual (2026.2)

Blog individual da disciplina de **Computação Visual**, publicado com **GitHub Pages**.

## Publicações

| # | Prazo | Tema | Status |
|---|---|---|---|
| 1 | 27/08 | O que eu achava que veria + o que entendi que estudaremos | ✅ pronto |
| 2 | 27/08 | Por que sua cara fica estranha na câmera frontal? | ✅ pronto |
| 3 | 03/09 | Quantas vezes dá para salvar um JPEG antes dele morrer? | planejado |
| 4 | 17/09 | Como o celular sabe exatamente onde está a sua cara? | planejado |
| 5 | 01/10 | Dá para esconder uma imagem dentro de outra sem ninguém perceber? | planejado |
| 6 | 15/10 | Se uma ilusão engana você, ela também engana uma IA? | planejado |
| 7 | 29/10 | Como um videogame inventa uma luz que não existe? | planejado |
| 8 | 12/11 | Reflexão sobre o blog e a disciplina | planejado |

## Estrutura

```text
.
├── index.html
├── README.md
├── assets
│   ├── css
│   │   └── style.css
│   └── js
│       └── perspective-demo.js
│   └── images
│       └── post-02
│           ├── distancia-focal.jpg
│           └── perspectiva-grande-angular.jpg
└── posts
    ├── 01-computacao-visual.html
    └── 02-camera-frontal-perspectiva.html
```

## Publicar no GitHub Pages

1. No repositório, abra **Settings → Pages**.
2. Em **Build and deployment**, escolha **Deploy from a branch**.
3. Selecione `main` e a pasta `/ (root)`.
4. Salve.
5. O site ficará disponível em:
   `https://gabrielbuck.github.io/comp_visual/`

Como o projeto usa somente HTML, CSS e JavaScript, não é necessário instalar dependências nem executar build.

## Como adicionar o próximo post

1. Duplique um dos arquivos dentro de `posts/`.
2. Renomeie para `03-nome-do-tema.html`.
3. Atualize título, data e conteúdo.
4. Na home (`index.html`), transforme o card correspondente em um post publicado e adicione o link.
5. Atualize a navegação “post anterior / próximo post”.

## Objetivo

A proposta é registrar explorações relacionadas a Computação Visual ao longo do semestre, conectando conceitos vistos em aula com aplicações, algoritmos, tecnologias e pequenos experimentos interativos.
