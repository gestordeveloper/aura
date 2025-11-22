# Buttons

Os botões são componentes fundamentais do Aura Design System, oferecendo diversas variações de tamanho, cor e estilo.

## Variações Básicas

### Botões Padrão

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center}
<button class="btn">Button Default</button>
<button class="btn btn-sm">Button Small</button>
<button class="btn btn-lg">Button Large</button>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<button class="btn">Button Default</button>
<button class="btn btn-sm">Button Small</button>
<button class="btn btn-lg">Button Large</button>
```
:::
::::

## Botões com Cores

### Cores Sólidas

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center .flex-wrap}
<button class="btn btn-aura-500">Aura</button>
<button class="btn btn-blue">Blue</button>
<button class="btn btn-green">Green</button>
<button class="btn btn-red">Red</button>
<button class="btn btn-yellow">Yellow</button>
<button class="btn btn-gray-500">Gray</button>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<button class="btn btn-aura-500">Aura</button>
<button class="btn btn-blue">Blue</button>
<button class="btn btn-green">Green</button>
<button class="btn btn-red">Red</button>
<button class="btn btn-yellow">Yellow</button>
<button class="btn btn-gray-500">Gray</button>
```
:::
::::

### Botões Outline

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center .flex-wrap}
<button class="btn btn-outline-aura-500">Aura Outline</button>
<button class="btn btn-outline-blue">Blue Outline</button>
<button class="btn btn-outline-green">Green Outline</button>
<button class="btn btn-outline-red">Red Outline</button>
<button class="btn btn-outline-yellow">Yellow Outline</button>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<button class="btn btn-outline-aura-500">Aura Outline</button>
<button class="btn btn-outline-blue">Blue Outline</button>
<button class="btn btn-outline-green">Green Outline</button>
<button class="btn btn-outline-red">Red Outline</button>
<button class="btn btn-outline-yellow">Yellow Outline</button>
```
:::
::::

## Variações de Tonalidade

### Aura Color Scale

::::{.docs-example}

::: {.docs-example-preview .flex .gap-2 .items-center .flex-wrap}
<button class="btn btn-sm btn-aura-50">50</button>
<button class="btn btn-sm btn-aura-100">100</button>
<button class="btn btn-sm btn-aura-200">200</button>
<button class="btn btn-sm btn-aura-300">300</button>
<button class="btn btn-sm btn-aura-400">400</button>
<button class="btn btn-sm btn-aura-500">500</button>
<button class="btn btn-sm btn-aura-600">600</button>
<button class="btn btn-sm btn-aura-700">700</button>
<button class="btn btn-sm btn-aura-800">800</button>
<button class="btn btn-sm btn-aura-900">900</button>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<button class="btn btn-sm btn-aura-50">50</button>
<button class="btn btn-sm btn-aura-100">100</button>
<button class="btn btn-sm btn-aura-200">200</button>
<button class="btn btn-sm btn-aura-300">300</button>
<button class="btn btn-sm btn-aura-400">400</button>
<button class="btn btn-sm btn-aura-500">500</button>
<button class="btn btn-sm btn-aura-600">600</button>
<button class="btn btn-sm btn-aura-700">700</button>
<button class="btn btn-sm btn-aura-800">800</button>
<button class="btn btn-sm btn-aura-900">900</button>
```
:::
::::

## Botões com Ícones

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center}
<button class="btn btn-aura-500">
  <i class="bi bi-heart-fill"></i>
  Com Ícone
</button>
<button class="btn btn-outline-blue">
  <i class="bi bi-download"></i>
  Download
</button>
<button class="btn btn-green">
  <i class="bi bi-check-circle"></i>
  Confirmar
</button>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<button class="btn btn-aura-500">
  <i class="bi bi-heart-fill"></i>
  Com Ícone
</button>
<button class="btn btn-outline-blue">
  <i class="bi bi-download"></i>
  Download
</button>
<button class="btn btn-green">
  <i class="bi bi-check-circle"></i>
  Confirmar
</button>
```
:::
::::

## Tamanhos

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center}
<button class="btn btn-sm btn-aura-500">Small</button>
<button class="btn btn-aura-500">Default</button>
<button class="btn btn-lg btn-aura-500">Large</button>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<button class="btn btn-sm btn-aura-500">Small</button>
<button class="btn btn-aura-500">Default</button>
<button class="btn btn-lg btn-aura-500">Large</button>
```
:::
::::

## Dropdown Button

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center}
<div class="dropdown">
  <button class="btn-dropdown btn-aura-500">
    Dropdown
    <i class="bi bi-chevron-down"></i>
  </button>
  <div class="dropdown_navbar">
    <div class="dropdown_navbar_li navbar_li_header">Ações</div>
    <div class="dropdown_navbar_li">
      <a href="#" class="dropdown_navbar_link">
        <i class="bi bi-pencil"></i>
        Editar
      </a>
    </div>
    <div class="dropdown_navbar_li">
      <a href="#" class="dropdown_navbar_link">
        <i class="bi bi-trash"></i>
        Excluir
      </a>
    </div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="dropdown">
  <button class="btn-dropdown btn-aura-500">
    Dropdown
    <i class="bi bi-chevron-down"></i>
  </button>
  <div class="dropdown_navbar">
    <div class="dropdown_navbar_li navbar_li_header">Ações</div>
    <div class="dropdown_navbar_li">
      <a href="#" class="dropdown_navbar_link">
        <i class="bi bi-pencil"></i>
        Editar
      </a>
    </div>
    <div class="dropdown_navbar_li">
      <a href="#" class="dropdown_navbar_link">
        <i class="bi bi-trash"></i>
        Excluir
      </a>
    </div>
  </div>
</div>
```
:::
::::

## Classes Disponíveis

### Tamanhos
- `.btn` - Tamanho padrão
- `.btn-sm` - Tamanho pequeno
- `.btn-lg` - Tamanho grande

### Cores Sólidas
- `.btn-aura-{50-900}` - Variações da cor primária Aura
- `.btn-secondary-{50-900}` - Variações da cor secundária
- `.btn-blue`, `.btn-blue-{50-900}` - Variações azul
- `.btn-green`, `.btn-green-{50-900}` - Variações verde
- `.btn-red`, `.btn-red-{50-900}` - Variações vermelho
- `.btn-yellow`, `.btn-yellow-{50-900}` - Variações amarelo
- `.btn-gray-{50-900}` - Variações cinza

### Cores Outline
- `.btn-outline-{color}` - Versão outline de qualquer cor acima

### Dropdown
- `.dropdown` - Container do dropdown
- `.btn-dropdown` - Botão do dropdown
- `.dropdown_navbar` - Menu dropdown
- `.dropdown_navbar_li` - Item do menu
- `.dropdown_navbar_link` - Link do item
