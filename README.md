# Computação Visual — Blog individual (2026.2)

Blog individual da disciplina de **Computação Visual**, publicado com **GitHub Pages**.

## Publicações

| # | Prazo | Tema | Status |
|---|---|---|---|
| 1 | 27/08 | O que eu achava que veria + o que entendi que estudaremos | ✅ pronto |
| 2 | 27/08 | Como um computador enxerga uma imagem? Pixels e RGB | ✅ pronto |
| 3 | 03/09 | Transformações geométricas 2D | planejado |
| 4 | 17/09 | Rasterização | planejado |
| 5 | 01/10 | Filtros e convolução | planejado |
| 6 | 15/10 | Visão computacional | planejado |
| 7 | 29/10 | Pipeline gráfico 3D | planejado |
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
│       ├── main.js
│       └── pixel-demo.js
└── posts
    ├── 01-computacao-visual.html
    └── 02-pixels-rgb.html
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
