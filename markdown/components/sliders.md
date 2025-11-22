# Sliders

Os sliders são componentes para exibir imagens ou conteúdo em tela cheia com navegação e transições suaves.

## Slider Básico

::::{.docs-example}

::: {.docs-example-preview}
<div class="sliders">
  <div class="slider">
    <div class="slide">
      <img src="https://via.placeholder.com/1920x800/4F46E5/FFFFFF?text=Slide+1" alt="Slide 1">
      <div class="slide-content">
        <h2 class="slide-title">Bem-vindo ao Aura</h2>
        <p class="slide-description">Um design system moderno e elegante</p>
        <button class="btn btn-lg btn-aura-500">Começar Agora</button>
      </div>
    </div>
  </div>
  
  <div class="slider-nav">
    <button class="nav-button">
      <i class="bi bi-chevron-left"></i>
    </button>
    <button class="nav-button">
      <i class="bi bi-chevron-right"></i>
    </button>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="sliders">
  <div class="slider">
    <div class="slide">
      <img src="slide1.jpg" alt="Slide 1">
      <div class="slide-content">
        <h2 class="slide-title">Bem-vindo ao Aura</h2>
        <p class="slide-description">Um design system moderno e elegante</p>
        <button class="btn btn-lg btn-aura-500">Começar Agora</button>
      </div>
    </div>
  </div>
  
  <div class="slider-nav">
    <button class="nav-button">
      <i class="bi bi-chevron-left"></i>
    </button>
    <button class="nav-button">
      <i class="bi bi-chevron-right"></i>
    </button>
  </div>
</div>
```
:::
::::

## Slider com Múltiplos Slides

::::{.docs-example}

::: {.docs-example-preview}
<div class="sliders" style="height: 400px;">
  <div class="slider" id="demo-slider">
    <div class="slide">
      <img src="https://via.placeholder.com/1920x800/4F46E5/FFFFFF?text=Slide+1" alt="Slide 1">
      <div class="slide-content">
        <h2 class="slide-title">Primeiro Slide</h2>
        <p class="slide-description">Conteúdo do primeiro slide</p>
      </div>
    </div>
    <div class="slide">
      <img src="https://via.placeholder.com/1920x800/10B981/FFFFFF?text=Slide+2" alt="Slide 2">
      <div class="slide-content">
        <h2 class="slide-title">Segundo Slide</h2>
        <p class="slide-description">Conteúdo do segundo slide</p>
      </div>
    </div>
    <div class="slide">
      <img src="https://via.placeholder.com/1920x800/F59E0B/FFFFFF?text=Slide+3" alt="Slide 3">
      <div class="slide-content">
        <h2 class="slide-title">Terceiro Slide</h2>
        <p class="slide-description">Conteúdo do terceiro slide</p>
      </div>
    </div>
  </div>
  
  <div class="slider-nav">
    <button class="nav-button" onclick="prevSlide()">
      <i class="bi bi-chevron-left"></i>
    </button>
    <button class="nav-button" onclick="nextSlide()">
      <i class="bi bi-chevron-right"></i>
    </button>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="sliders">
  <div class="slider" id="demo-slider">
    <div class="slide">
      <img src="slide1.jpg" alt="Slide 1">
      <div class="slide-content">
        <h2 class="slide-title">Primeiro Slide</h2>
        <p class="slide-description">Conteúdo do primeiro slide</p>
      </div>
    </div>
    <div class="slide">
      <img src="slide2.jpg" alt="Slide 2">
      <div class="slide-content">
        <h2 class="slide-title">Segundo Slide</h2>
        <p class="slide-description">Conteúdo do segundo slide</p>
      </div>
    </div>
    <div class="slide">
      <img src="slide3.jpg" alt="Slide 3">
      <div class="slide-content">
        <h2 class="slide-title">Terceiro Slide</h2>
        <p class="slide-description">Conteúdo do terceiro slide</p>
      </div>
    </div>
  </div>
  
  <div class="slider-nav">
    <button class="nav-button" onclick="prevSlide()">
      <i class="bi bi-chevron-left"></i>
    </button>
    <button class="nav-button" onclick="nextSlide()">
      <i class="bi bi-chevron-right"></i>
    </button>
  </div>
</div>
```
:::
::::

## Implementação JavaScript

Para fazer o slider funcionar, adicione este JavaScript:

```javascript
let currentSlide = 0;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) currentSlide = 0;
  else if (index < 0) currentSlide = totalSlides - 1;
  else currentSlide = index;
  
  const offset = -currentSlide * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Auto-play (opcional)
setInterval(() => {
  nextSlide();
}, 5000); // Muda a cada 5 segundos
```

## Classes Disponíveis

### Estrutura
- `.sliders` - Container principal do slider
- `.slider` - Container dos slides
- `.slide` - Slide individual
- `.slide-content` - Conteúdo sobreposto ao slide
- `.slide-title` - Título do slide
- `.slide-description` - Descrição do slide
- `.slider-nav` - Container dos botões de navegação
- `.nav-button` - Botão de navegação

## Boas Práticas

1. **Imagens otimizadas**: Use imagens de alta qualidade mas otimizadas
2. **Altura consistente**: Mantenha altura consistente entre slides
3. **Contraste**: Garanta bom contraste entre texto e imagem de fundo
4. **Responsividade**: O componente já é responsivo (80vh desktop, 50vh mobile)
5. **Acessibilidade**: Adicione `alt` text descritivo para imagens
6. **Auto-play opcional**: Considere pausar auto-play ao hover
7. **Indicadores**: Considere adicionar indicadores de posição (dots)
