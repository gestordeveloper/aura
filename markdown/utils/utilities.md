# Utilities

Utilitários CSS para controle rápido de layout, espaçamento, dimensões e comportamento.

## Display

::::{.docs-example}

::: {.docs-example-preview .flex .flex-column .gap-2}
<div class="flex" style="background: var(--card); padding: 0.5rem;">Display Flex</div>
<div class="grid" style="background: var(--card); padding: 0.5rem;">Display Grid</div>
<div class="block" style="background: var(--card); padding: 0.5rem;">Display Block</div>
<div class="inline-block" style="background: var(--card); padding: 0.5rem;">Display Inline-Block</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="flex">Flex</div>
<div class="grid">Grid</div>
<div class="block">Block</div>
<div class="inline-block">Inline-Block</div>
<div class="hidden">Hidden</div>
```
:::
::::

## Flexbox

::::{.docs-example}

::: {.docs-example-preview}
<div class="flex justify-between items-center" style="background: var(--card); padding: 1rem;">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<div class="flex flex-column gap-2 mt-3" style="background: var(--card); padding: 1rem;">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="flex justify-between items-center">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<div class="flex flex-column gap-2">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```
:::
::::

## Gap

::::{.docs-example}

::: {.docs-example-preview}
<div class="flex gap-1" style="background: var(--card); padding: 1rem;">
  <div style="background: var(--aura-500); color: white; padding: 0.5rem;">Gap 1</div>
  <div style="background: var(--blue); color: white; padding: 0.5rem;">Gap 1</div>
</div>

<div class="flex gap-4 mt-3" style="background: var(--card); padding: 1rem;">
  <div style="background: var(--green); color: white; padding: 0.5rem;">Gap 4</div>
  <div style="background: var(--yellow); color: white; padding: 0.5rem;">Gap 4</div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="flex gap-1">...</div>
<div class="flex gap-4">...</div>
<div class="flex gap-8">...</div>
```
:::
::::

## Position

::::{.docs-example}

::: {.docs-example-preview}
<div class="relative" style="height: 100px; background: var(--card);">
  <div class="absolute top-0 right-0" style="background: var(--aura-500); color: white; padding: 0.5rem;">
    Absolute
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="relative">
  <div class="absolute top-0 right-0">Absolute</div>
</div>

<div class="fixed top-0 left-0">Fixed</div>
<div class="sticky top-0">Sticky</div>
```
:::
::::

## Width & Height

::::{.docs-example}

::: {.docs-example-preview .flex .flex-column .gap-2}
<div class="w-full" style="background: var(--aura-500); color: white; padding: 0.5rem;">Width 100%</div>
<div class="w-1/2" style="background: var(--blue); color: white; padding: 0.5rem;">Width 50%</div>
<div class="w-1/3" style="background: var(--green); color: white; padding: 0.5rem;">Width 33.33%</div>
<div class="w-1/4" style="background: var(--yellow); color: white; padding: 0.5rem;">Width 25%</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="w-full">Width 100%</div>
<div class="w-1/2">Width 50%</div>
<div class="w-1/3">Width 33.33%</div>
<div class="w-1/4">Width 25%</div>

<div class="h-screen">Height 100vh</div>
<div class="h-full">Height 100%</div>
```
:::
::::

## Opacity

::::{.docs-example}

::: {.docs-example-preview .flex .gap-2}
<div class="opacity-100" style="background: var(--aura-500); color: white; padding: 1rem;">100%</div>
<div class="opacity-75" style="background: var(--aura-500); color: white; padding: 1rem;">75%</div>
<div class="opacity-50" style="background: var(--aura-500); color: white; padding: 1rem;">50%</div>
<div class="opacity-25" style="background: var(--aura-500); color: white; padding: 1rem;">25%</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="opacity-100">100%</div>
<div class="opacity-75">75%</div>
<div class="opacity-50">50%</div>
<div class="opacity-25">25%</div>
```
:::
::::

## Overflow

::::{.docs-example}

::: {.docs-example-preview}
<div class="overflow-auto" style="max-height: 100px; background: var(--card); padding: 1rem;">
  <p>Conteúdo longo que vai gerar scroll...</p>
  <p>Mais conteúdo...</p>
  <p>Ainda mais conteúdo...</p>
  <p>E mais...</p>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="overflow-auto">...</div>
<div class="overflow-hidden">...</div>
<div class="overflow-scroll">...</div>
<div class="overflow-x-auto">...</div>
<div class="overflow-y-auto">...</div>
```
:::
::::

## Cursor

::::{.docs-example}

::: {.docs-example-preview .flex .gap-2}
<button class="btn btn-aura-500 cursor-pointer">Pointer</button>
<button class="btn btn-blue cursor-not-allowed">Not Allowed</button>
<button class="btn btn-green cursor-wait">Wait</button>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="cursor-pointer">Pointer</div>
<div class="cursor-not-allowed">Not Allowed</div>
<div class="cursor-wait">Wait</div>
<div class="cursor-move">Move</div>
```
:::
::::

## Classes Disponíveis

### Display
- `.flex`, `.inline-flex`, `.grid`, `.block`, `.inline-block`, `.hidden`, `.inline`

### Flexbox
- **Direction**: `.flex-row`, `.flex-column`, `.flex-row-reverse`, `.flex-column-reverse`
- **Wrap**: `.flex-wrap`, `.flex-nowrap`, `.flex-wrap-reverse`
- **Justify**: `.justify-start`, `.justify-end`, `.justify-center`, `.justify-between`, `.justify-around`, `.justify-evenly`
- **Align**: `.items-start`, `.items-end`, `.items-center`, `.items-baseline`, `.items-stretch`
- **Self**: `.self-auto`, `.self-start`, `.self-end`, `.self-center`, `.self-stretch`
- **Grow/Shrink**: `.flex-grow`, `.flex-grow-0`, `.flex-shrink`, `.flex-shrink-0`

### Gap
- `.gap-{1-12}`, `.gap-x-{1-12}`, `.gap-y-{1-12}`

### Position
- `.relative`, `.absolute`, `.fixed`, `.sticky`, `.static`
- `.inset-0`, `.top-0`, `.right-0`, `.bottom-0`, `.left-0`

### Width
- `.w-full`, `.w-auto`, `.w-screen`, `.w-min`, `.w-max`, `.w-fit`
- `.w-1/2`, `.w-1/3`, `.w-2/3`, `.w-1/4`, `.w-3/4`
- `.w-{1-12}/12`

### Height
- `.h-full`, `.h-auto`, `.h-screen`, `.h-min`, `.h-max`, `.h-fit`
- `.min-h-screen`, `.min-h-full`, `.max-h-screen`, `.max-h-full`

### Opacity
- `.opacity-0`, `.opacity-25`, `.opacity-50`, `.opacity-75`, `.opacity-100`

### Overflow
- `.overflow-auto`, `.overflow-hidden`, `.overflow-visible`, `.overflow-scroll`
- `.overflow-x-auto`, `.overflow-y-auto`, `.overflow-x-hidden`, `.overflow-y-hidden`

### Cursor
- `.cursor-pointer`, `.cursor-default`, `.cursor-not-allowed`, `.cursor-wait`, `.cursor-move`

### Pointer Events
- `.pointer-events-none`, `.pointer-events-auto`

### User Select
- `.select-none`, `.select-text`, `.select-all`

### Object Fit
- `.object-contain`, `.object-cover`, `.object-fill`, `.object-none`, `.object-scale-down`

## Boas Práticas

1. **Combine utilitários**: Use múltiplas classes para resultados complexos
2. **Flexbox primeiro**: Prefira flexbox para layouts simples
3. **Grid para complexos**: Use grid para layouts mais elaborados
4. **Responsividade**: Combine com breakpoints quando necessário
5. **Performance**: Evite `!important` desnecessário
