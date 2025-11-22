# Grid System

O grid system do Aura é baseado em CSS Grid, oferecendo um sistema flexível e responsivo para layouts.

## Container

::::{.docs-example}

::: {.docs-example-preview}
<div class="container" style="background: var(--card); padding: 2rem; border: 1px solid var(--border);">
  <p>Container com padding responsivo (2rem desktop, 1rem mobile)</p>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="container">
  <!-- Conteúdo -->
</div>
```
:::
::::

## Row (Grid de 12 Colunas)

::::{.docs-example}

::: {.docs-example-preview}
<div class="row">
  <div class="span-4" style="background: var(--aura-500); color: white; padding: 1rem;">Span 4</div>
  <div class="span-4" style="background: var(--blue); color: white; padding: 1rem;">Span 4</div>
  <div class="span-4" style="background: var(--green); color: white; padding: 1rem;">Span 4</div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="row">
  <div class="span-4">Coluna 1</div>
  <div class="span-4">Coluna 2</div>
  <div class="span-4">Coluna 3</div>
</div>
```
:::
::::

## Spans Variados

::::{.docs-example}

::: {.docs-example-preview}
<div class="row">
  <div class="span-6" style="background: var(--aura-500); color: white; padding: 1rem;">Span 6</div>
  <div class="span-6" style="background: var(--blue); color: white; padding: 1rem;">Span 6</div>
</div>

<div class="row mt-3">
  <div class="span-8" style="background: var(--green); color: white; padding: 1rem;">Span 8</div>
  <div class="span-4" style="background: var(--yellow); color: white; padding: 1rem;">Span 4</div>
</div>

<div class="row mt-3">
  <div class="span-3" style="background: var(--red); color: white; padding: 1rem;">Span 3</div>
  <div class="span-3" style="background: var(--aura-500); color: white; padding: 1rem;">Span 3</div>
  <div class="span-3" style="background: var(--blue); color: white; padding: 1rem;">Span 3</div>
  <div class="span-3" style="background: var(--green); color: white; padding: 1rem;">Span 3</div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="row">
  <div class="span-6">50%</div>
  <div class="span-6">50%</div>
</div>

<div class="row">
  <div class="span-8">66.67%</div>
  <div class="span-4">33.33%</div>
</div>

<div class="row">
  <div class="span-3">25%</div>
  <div class="span-3">25%</div>
  <div class="span-3">25%</div>
  <div class="span-3">25%</div>
</div>
```
:::
::::

## Column (Layout Vertical)

::::{.docs-example}

::: {.docs-example-preview}
<div class="column gap-3">
  <div style="background: var(--aura-500); color: white; padding: 1rem;">Item 1</div>
  <div style="background: var(--blue); color: white; padding: 1rem;">Item 2</div>
  <div style="background: var(--green); color: white; padding: 1rem;">Item 3</div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="column gap-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```
:::
::::

## Spacing (Gap)

::::{.docs-example}

::: {.docs-example-preview}
<div class="row spacing-2 mb-3">
  <div class="span-4" style="background: var(--aura-500); color: white; padding: 1rem;">Gap 2</div>
  <div class="span-4" style="background: var(--blue); color: white; padding: 1rem;">Gap 2</div>
  <div class="span-4" style="background: var(--green); color: white; padding: 1rem;">Gap 2</div>
</div>

<div class="row spacing-6">
  <div class="span-4" style="background: var(--aura-500); color: white; padding: 1rem;">Gap 6</div>
  <div class="span-4" style="background: var(--blue); color: white; padding: 1rem;">Gap 6</div>
  <div class="span-4" style="background: var(--green); color: white; padding: 1rem;">Gap 6</div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="row spacing-2">
  <div class="span-4">Coluna 1</div>
  <div class="span-4">Coluna 2</div>
  <div class="span-4">Coluna 3</div>
</div>

<div class="row spacing-6">
  <div class="span-4">Coluna 1</div>
  <div class="span-4">Coluna 2</div>
  <div class="span-4">Coluna 3</div>
</div>
```
:::
::::

## Classes Disponíveis

### Containers
- `.container` - Container com padding responsivo
- `.row` - Grid de 12 colunas
- `.column` - Layout vertical (1 coluna)

### Spans (1-12)
- `.span-1` a `.span-12` - Largura da coluna
- `.span-{breakpoint}-{1-12}` - Spans responsivos

### Spacing
- `.spacing-{1-12}` - Gap entre colunas

## Boas Práticas

1. **12 colunas**: Sistema baseado em 12 colunas
2. **Gap padrão**: Row tem gap de spacing('4') por padrão
3. **Responsividade**: Container ajusta padding em mobile
4. **Flexibilidade**: Use spans para criar layouts variados
