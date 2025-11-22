# Animations

Sistema completo de animações e transições para criar interfaces dinâmicas e envolventes.

## Animações de Entrada

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .flex-wrap}
<div class="card animate-fade-in" style="padding: 1rem; width: 150px;">Fade In</div>
<div class="card animate-slide-up" style="padding: 1rem; width: 150px;">Slide Up</div>
<div class="card animate-slide-down" style="padding: 1rem; width: 150px;">Slide Down</div>
<div class="card animate-zoom-in" style="padding: 1rem; width: 150px;">Zoom In</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="animate-fade-in">Fade In</div>
<div class="animate-slide-up">Slide Up</div>
<div class="animate-slide-down">Slide Down</div>
<div class="animate-zoom-in">Zoom In</div>
```
:::
::::

## Animações Contínuas

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .flex-wrap}
<div class="card animate-pulse" style="padding: 1rem; width: 150px;">Pulse</div>
<div class="card animate-bounce" style="padding: 1rem; width: 150px;">Bounce</div>
<div class="card animate-spin" style="padding: 1rem; width: 150px;"><i class="bi bi-arrow-repeat"></i> Spin</div>
<div class="card animate-ping" style="padding: 1rem; width: 150px; position: relative;">
  <span style="position: absolute; top: 10px; right: 10px; width: 10px; height: 10px; background: var(--green); border-radius: 50%;"></span>
  Ping
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="animate-pulse">Pulse</div>
<div class="animate-bounce">Bounce</div>
<div class="animate-spin"><i class="bi bi-arrow-repeat"></i></div>
<div class="animate-ping">Ping</div>
```
:::
::::

## Animações de Atenção

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3}
<button class="btn btn-aura-500 animate-shake">Shake</button>
<button class="btn btn-blue animate-wiggle">Wiggle</button>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<button class="btn btn-aura-500 animate-shake">Shake</button>
<button class="btn btn-blue animate-wiggle">Wiggle</button>
```
:::
::::

## Transições

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3}
<button class="btn btn-aura-500 transition-all">Transition All</button>
<button class="btn btn-blue transition-colors">Transition Colors</button>
<button class="btn btn-green transition-transform">Transition Transform</button>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<button class="btn transition-all">Transition All</button>
<button class="btn transition-colors">Transition Colors</button>
<button class="btn transition-transform">Transition Transform</button>
```
:::
::::

## Duração

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3}
<button class="btn btn-aura-500 transition-all duration-75">75ms</button>
<button class="btn btn-blue transition-all duration-300">300ms</button>
<button class="btn btn-green transition-all duration-1000">1000ms</button>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<button class="btn transition-all duration-75">75ms</button>
<button class="btn transition-all duration-300">300ms</button>
<button class="btn transition-all duration-1000">1000ms</button>
```
:::
::::

## Timing Functions

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3}
<button class="btn btn-aura-500 transition-all ease-linear">Linear</button>
<button class="btn btn-blue transition-all ease-in">Ease In</button>
<button class="btn btn-green transition-all ease-out">Ease Out</button>
<button class="btn btn-yellow transition-all ease-in-out">Ease In-Out</button>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<button class="btn transition-all ease-linear">Linear</button>
<button class="btn transition-all ease-in">Ease In</button>
<button class="btn transition-all ease-out">Ease Out</button>
<button class="btn transition-all ease-in-out">Ease In-Out</button>
```
:::
::::

## Classes Disponíveis

### Animações de Entrada/Saída
- `.animate-fade-in` / `.animate-fade-out`
- `.animate-slide-up` / `.animate-slide-down`
- `.animate-slide-left` / `.animate-slide-right`
- `.animate-zoom-in` / `.animate-zoom-out`

### Animações Contínuas
- `.animate-pulse` - Pulsação suave
- `.animate-bounce` - Salto
- `.animate-spin` - Rotação contínua
- `.animate-ping` - Expansão com fade

### Animações de Atenção
- `.animate-shake` - Tremor horizontal
- `.animate-wiggle` - Balanço rotacional

### Transições
- `.transition-none` - Sem transição
- `.transition-all` - Todas as propriedades
- `.transition-colors` - Apenas cores
- `.transition-opacity` - Apenas opacidade
- `.transition-transform` - Apenas transformações

### Duração
- `.duration-75` a `.duration-1000` (75ms, 100ms, 150ms, 200ms, 300ms, 500ms, 700ms, 1000ms)

### Timing
- `.ease-linear`, `.ease-in`, `.ease-out`, `.ease-in-out`

### Delay
- `.delay-75` a `.delay-1000`

## Boas Práticas

1. **Use com moderação**: Animações em excesso cansam o usuário
2. **Duração adequada**: 150-300ms para a maioria das transições
3. **Reduced motion**: Sistema respeita `prefers-reduced-motion`
4. **Performance**: Prefira `transform` e `opacity` para animações suaves
5. **Propósito claro**: Cada animação deve ter um objetivo
