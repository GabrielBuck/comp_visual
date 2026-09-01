# Computação Visual — 2026.2

Blog individual da disciplina de Computação Visual, publicado com GitHub Pages.

**Site:** https://gabrielbuck.github.io/comp_visual/

> Conteúdo preparado antecipadamente; as datas exibidas correspondem ao cronograma oficial da disciplina.

## Posts

1. **27/08 — Eu achava que Computação Visual era uma coisa. Era umas cinco.**  
   Expectativas iniciais e relação entre Computação Gráfica, Processamento de Imagens e Visão Computacional.

2. **27/08 — Por que sua cara fica estranha na câmera frontal?**  
   Perspectiva, distância, distância focal e campo de visão, com demonstração interativa.

3. **03/09 — Quantas vezes dá para salvar um JPEG antes dele morrer?**  
   Compressão com perda, DCT, quantização e recompressão real em Canvas.

4. **17/09 — Como o celular sabe exatamente onde está a sua cara?**  
   Face detection, bounding boxes, landmarks e tracking.

5. **01/10 — Dá para esconder uma imagem dentro de outra sem ninguém perceber?**  
   Esteganografia, RGB, bits e LSB.

6. **15/10 — Se uma ilusão engana você, ela também engana uma IA?**  
   Percepção humana, contexto visual e adversarial examples.

7. **29/10 — Como um videogame inventa uma luz que não existe?**  
   Normais, diffuse, specular, shaders e iluminação em tempo real.

8. **12/11 — Depois de oito posts, ainda existe “ver” sem computar?**  
   Reflexão final conectando as explorações do semestre.

## Estrutura

```text
comp_visual/
├── index.html
├── README.md
├── .nojekyll
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │   └── post-02/
│   └── js/
│       ├── perspective-demo.js
│       ├── post-03-jpeg.js
│       ├── post-04-face.js
│       ├── post-05-steg.js
│       ├── post-06-illusion.js
│       └── post-07-light.js
└── posts/
    ├── 01-computacao-visual.html
    ├── 02-camera-frontal-perspectiva.html
    ├── 03-jpeg-recompressao.html
    ├── 04-deteccao-facial.html
    ├── 05-esteganografia.html
    ├── 06-ilusoes-ia.html
    ├── 07-iluminacao-shaders.html
    └── 08-reflexao-final.html
```

## Tecnologias

- HTML semântico
- CSS responsivo
- JavaScript vanilla
- Canvas 2D
- SVG inline para diagramas
- GitHub Pages

Não existe etapa de build ou dependência de framework.

## Design

A home e todos os posts compartilham o mesmo sistema visual editorial: fundo off-white, tipografia legível, cards discretos e conteúdo visual usado apenas quando ajuda a explicar o tema.

## Manutenção

Os caminhos são relativos porque este repositório é publicado como **Project Pages** dentro de `/comp_visual/`. Ao alterar o CSS ou JavaScript principal, atualize a query de cache busting usada nas páginas.

Versão atual de assets: `20260901-final`.
