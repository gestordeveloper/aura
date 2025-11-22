# Carousels

Os carousels são componentes para exibir múltiplos itens em uma linha horizontal com navegação lateral.

## Carousel Básico

::::{.docs-example}

::: {.docs-example-preview}
<div class="carousels">
  <h3 class="carousel-title">Produtos em Destaque</h3>
  <div class="carousel">
    <div class="carousel-item">
      <img src="https://via.placeholder.com/260x146/4F46E5/FFFFFF?text=Item+1" alt="Item 1">
    </div>
    <div class="carousel-item">
      <img src="https://via.placeholder.com/260x146/10B981/FFFFFF?text=Item+2" alt="Item 2">
    </div>
    <div class="carousel-item">
      <img src="https://via.placeholder.com/260x146/F59E0B/FFFFFF?text=Item+3" alt="Item 3">
    </div>
    <div class="carousel-item">
      <img src="https://via.placeholder.com/260x146/EF4444/FFFFFF?text=Item+4" alt="Item 4">
    </div>
  </div>
  <button class="carousel-button left">
    <i class="bi bi-chevron-left"></i>
  </button>
  <button class="carousel-button right">
    <i class="bi bi-chevron-right"></i>
  </button>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="carousels">
  <h3 class="carousel-title">Produtos em Destaque</h3>
  <div class="carousel">
    <div class="carousel-item">
      <img src="item1.jpg" alt="Item 1">
    </div>
    <div class="carousel-item">
      <img src="item2.jpg" alt="Item 2">
    </div>
    <div class="carousel-item">
      <img src="item3.jpg" alt="Item 3">
    </div>
    <div class="carousel-item">
      <img src="item4.jpg" alt="Item 4">
    </div>
  </div>
  <button class="carousel-button left">
    <i class="bi bi-chevron-left"></i>
  </button>
  <button class="carousel-button right">
    <i class="bi bi-chevron-right"></i>
  </button>
</div>
```
:::
::::

## Implementação JavaScript

```javascript
const carousel = document.querySelector('.carousel');
const leftBtn = document.querySelector('.carousel-button.left');
const rightBtn = document.querySelector('.carousel-button.right');

let scrollAmount = 0;
const scrollStep = 280; // 260px item + 20px margin

rightBtn.addEventListener('click', () => {
  scrollAmount += scrollStep;
  carousel.style.transform = `translateX(-${scrollAmount}px)`;
});

leftBtn.addEventListener('click', () => {
  scrollAmount = Math.max(0, scrollAmount - scrollStep);
  carousel.style.transform = `translateX(-${scrollAmount}px)`;
});
```

## Classes Disponíveis

- `.carousels` - Container principal
- `.carousel-title` - Título do carousel
- `.carousel` - Container dos itens
- `.carousel-item` - Item individual (260px)
- `.carousel-button` - Botão de navegação
- `.left` - Botão esquerdo
- `.right` - Botão direito

## Boas Práticas

1. **Itens consistentes**: Mantenha tamanho uniforme (260px)
2. **Aspect ratio**: Use 16:9 para imagens
3. **Scroll suave**: Implemente transições CSS
4. **Responsividade**: Ajuste quantidade de itens visíveis
