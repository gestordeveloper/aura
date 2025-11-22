# Badges

Os badges são componentes compactos usados para exibir informações de status, contadores, labels e outras informações contextuais.

## Variações Básicas

### Badge Padrão

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center}
<span class="badge">Default Badge</span>
<span class="badge badge-sm">Small Badge</span>
<span class="badge badge-lg">Large Badge</span>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<span class="badge">Default Badge</span>
<span class="badge badge-sm">Small Badge</span>
<span class="badge badge-lg">Large Badge</span>
```
:::
::::

## Badges com Cores

### Cores Sólidas

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center .flex-wrap}
<span class="badge badge-aura-500">Aura</span>
<span class="badge badge-blue">Blue</span>
<span class="badge badge-green">Green</span>
<span class="badge badge-red">Red</span>
<span class="badge badge-yellow">Yellow</span>
<span class="badge badge-gray-500">Gray</span>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<span class="badge badge-aura-500">Aura</span>
<span class="badge badge-blue">Blue</span>
<span class="badge badge-green">Green</span>
<span class="badge badge-red">Red</span>
<span class="badge badge-yellow">Yellow</span>
<span class="badge badge-gray-500">Gray</span>
```
:::
::::

### Badges Outline

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center .flex-wrap}
<span class="badge badge-outline-aura-500">Aura</span>
<span class="badge badge-outline-blue">Blue</span>
<span class="badge badge-outline-green">Green</span>
<span class="badge badge-outline-red">Red</span>
<span class="badge badge-outline-yellow">Yellow</span>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<span class="badge badge-outline-aura-500">Aura</span>
<span class="badge badge-outline-blue">Blue</span>
<span class="badge badge-outline-green">Green</span>
<span class="badge badge-outline-red">Red</span>
<span class="badge badge-outline-yellow">Yellow</span>
```
:::
::::

## Variações de Forma

### Badge Pill (Arredondado)

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center}
<span class="badge badge-pill badge-aura-500">Pill Badge</span>
<span class="badge badge-pill badge-blue">99+</span>
<span class="badge badge-pill badge-green">New</span>
<span class="badge badge-pill badge-outline-red">Hot</span>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<span class="badge badge-pill badge-aura-500">Pill Badge</span>
<span class="badge badge-pill badge-blue">99+</span>
<span class="badge badge-pill badge-green">New</span>
<span class="badge badge-pill badge-outline-red">Hot</span>
```
:::
::::

## Badge com Indicador (Dot)

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center .flex-wrap}
<span class="badge badge-dot badge-green">Online</span>
<span class="badge badge-dot badge-red">Offline</span>
<span class="badge badge-dot badge-yellow">Away</span>
<span class="badge badge-dot badge-blue">Busy</span>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<span class="badge badge-dot badge-green">Online</span>
<span class="badge badge-dot badge-red">Offline</span>
<span class="badge badge-dot badge-yellow">Away</span>
<span class="badge badge-dot badge-blue">Busy</span>
```
:::
::::

## Tamanhos

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center}
<span class="badge badge-sm badge-aura-500">Small</span>
<span class="badge badge-aura-500">Default</span>
<span class="badge badge-lg badge-aura-500">Large</span>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<span class="badge badge-sm badge-aura-500">Small</span>
<span class="badge badge-aura-500">Default</span>
<span class="badge badge-lg badge-aura-500">Large</span>
```
:::
::::

## Casos de Uso Comuns

### Contadores e Notificações

::::{.docs-example}

::: {.docs-example-preview .flex .gap-4 .items-center}
<button class="btn btn-outline-aura-500">
  Mensagens
  <span class="badge badge-pill badge-red">5</span>
</button>
<button class="btn btn-outline-blue">
  Notificações
  <span class="badge badge-pill badge-blue">12</span>
</button>
<button class="btn btn-outline-green">
  Carrinho
  <span class="badge badge-pill badge-green">3</span>
</button>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<button class="btn btn-outline-aura-500">
  Mensagens
  <span class="badge badge-pill badge-red">5</span>
</button>
<button class="btn btn-outline-blue">
  Notificações
  <span class="badge badge-pill badge-blue">12</span>
</button>
<button class="btn btn-outline-green">
  Carrinho
  <span class="badge badge-pill badge-green">3</span>
</button>
```
:::
::::

### Status e Labels

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center .flex-wrap}
<span class="badge badge-green">Ativo</span>
<span class="badge badge-red">Inativo</span>
<span class="badge badge-yellow">Pendente</span>
<span class="badge badge-blue">Em Progresso</span>
<span class="badge badge-outline-aura-500">Rascunho</span>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<span class="badge badge-green">Ativo</span>
<span class="badge badge-red">Inativo</span>
<span class="badge badge-yellow">Pendente</span>
<span class="badge badge-blue">Em Progresso</span>
<span class="badge badge-outline-aura-500">Rascunho</span>
```
:::
::::

### Categorias e Tags

::::{.docs-example}

::: {.docs-example-preview .flex .gap-2 .items-center .flex-wrap}
<span class="badge badge-pill badge-outline-blue">JavaScript</span>
<span class="badge badge-pill badge-outline-green">CSS</span>
<span class="badge badge-pill badge-outline-red">HTML</span>
<span class="badge badge-pill badge-outline-yellow">SCSS</span>
<span class="badge badge-pill badge-outline-aura-500">Design</span>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<span class="badge badge-pill badge-outline-blue">JavaScript</span>
<span class="badge badge-pill badge-outline-green">CSS</span>
<span class="badge badge-pill badge-outline-red">HTML</span>
<span class="badge badge-pill badge-outline-yellow">SCSS</span>
<span class="badge badge-pill badge-outline-aura-500">Design</span>
```
:::
::::

## Variações de Tonalidade

### Aura Color Scale

::::{.docs-example}

::: {.docs-example-preview .flex .gap-2 .items-center .flex-wrap}
<span class="badge badge-sm badge-aura-50">50</span>
<span class="badge badge-sm badge-aura-100">100</span>
<span class="badge badge-sm badge-aura-200">200</span>
<span class="badge badge-sm badge-aura-300">300</span>
<span class="badge badge-sm badge-aura-400">400</span>
<span class="badge badge-sm badge-aura-500">500</span>
<span class="badge badge-sm badge-aura-600">600</span>
<span class="badge badge-sm badge-aura-700">700</span>
<span class="badge badge-sm badge-aura-800">800</span>
<span class="badge badge-sm badge-aura-900">900</span>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<span class="badge badge-sm badge-aura-50">50</span>
<span class="badge badge-sm badge-aura-100">100</span>
<span class="badge badge-sm badge-aura-200">200</span>
<span class="badge badge-sm badge-aura-300">300</span>
<span class="badge badge-sm badge-aura-400">400</span>
<span class="badge badge-sm badge-aura-500">500</span>
<span class="badge badge-sm badge-aura-600">600</span>
<span class="badge badge-sm badge-aura-700">700</span>
<span class="badge badge-sm badge-aura-800">800</span>
<span class="badge badge-sm badge-aura-900">900</span>
```
:::
::::

## Classes Disponíveis

### Tamanhos
- `.badge` - Tamanho padrão
- `.badge-sm` - Tamanho pequeno
- `.badge-lg` - Tamanho grande

### Formas
- `.badge-pill` - Badge com bordas totalmente arredondadas
- `.badge-dot` - Badge com indicador de ponto

### Cores Sólidas
- `.badge-aura-{50-900}` - Variações da cor primária Aura
- `.badge-secondary-{50-900}` - Variações da cor secundária
- `.badge-blue`, `.badge-blue-{50-900}` - Variações azul
- `.badge-green`, `.badge-green-{50-900}` - Variações verde
- `.badge-red`, `.badge-red-{50-900}` - Variações vermelho
- `.badge-yellow`, `.badge-yellow-{50-900}` - Variações amarelo
- `.badge-gray-{50-900}` - Variações cinza

### Cores Outline
- `.badge-outline-{color}` - Versão outline de qualquer cor acima
