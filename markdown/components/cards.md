# Cards

Os cards são containers versáteis usados para agrupar e exibir conteúdo relacionado de forma organizada e visualmente atraente.

## Card Básico

::::{.docs-example}

::: {.docs-example-preview}
<div class="card">
  <div class="card_header">
    <h2>Título do Card</h2>
  </div>
  <div class="card_body">
    <p>Este é o conteúdo do card. Você pode adicionar qualquer elemento HTML aqui.</p>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="card">
  <div class="card_header">
    <h2>Título do Card</h2>
  </div>
  <div class="card_body">
    <p>Este é o conteúdo do card. Você pode adicionar qualquer elemento HTML aqui.</p>
  </div>
</div>
```
:::
::::

## Card com Ações

::::{.docs-example}

::: {.docs-example-preview}
<div class="card">
  <div class="card_header">
    <h2>Card com Ações</h2>
    <div class="actions">
      <button class="btn btn-sm btn-outline-aura-500">
        <i class="bi bi-pencil"></i>
      </button>
      <button class="btn btn-sm btn-outline-red">
        <i class="bi bi-trash"></i>
      </button>
    </div>
  </div>
  <div class="card_body">
    <p>Card com botões de ação no cabeçalho.</p>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="card">
  <div class="card_header">
    <h2>Card com Ações</h2>
    <div class="actions">
      <button class="btn btn-sm btn-outline-aura-500">
        <i class="bi bi-pencil"></i>
      </button>
      <button class="btn btn-sm btn-outline-red">
        <i class="bi bi-trash"></i>
      </button>
    </div>
  </div>
  <div class="card_body">
    <p>Card com botões de ação no cabeçalho.</p>
  </div>
</div>
```
:::
::::

## Card com Imagem (Thumbnail)

::::{.docs-example}

::: {.docs-example-preview}
<div class="card-thumb" style="max-width: 400px;">
  <div class="card_thumb">
    <img src="https://via.placeholder.com/400x225" alt="Imagem do card">
  </div>
  <div class="card_header">
    <a href="#">Título do Artigo</a>
  </div>
  <div class="card_body">
    <p>Descrição breve do conteúdo do card com imagem em destaque.</p>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="card-thumb">
  <div class="card_thumb">
    <img src="image.jpg" alt="Imagem do card">
  </div>
  <div class="card_header">
    <a href="#">Título do Artigo</a>
  </div>
  <div class="card_body">
    <p>Descrição breve do conteúdo do card com imagem em destaque.</p>
  </div>
</div>
```
:::
::::

## Cards com Cores

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .flex-wrap}
<div class="card card-aura-500" style="max-width: 250px;">
  <div class="card_header">
    <h2>Card Aura</h2>
  </div>
  <div class="card_body">
    <p>Card com cor primária Aura.</p>
  </div>
</div>

<div class="card card-blue" style="max-width: 250px;">
  <div class="card_header">
    <h2>Card Blue</h2>
  </div>
  <div class="card_body">
    <p>Card com cor azul.</p>
  </div>
</div>

<div class="card card-green" style="max-width: 250px;">
  <div class="card_header">
    <h2>Card Green</h2>
  </div>
  <div class="card_body">
    <p>Card com cor verde.</p>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="card card-aura-500">
  <div class="card_header">
    <h2>Card Aura</h2>
  </div>
  <div class="card_body">
    <p>Card com cor primária Aura.</p>
  </div>
</div>

<div class="card card-blue">
  <div class="card_header">
    <h2>Card Blue</h2>
  </div>
  <div class="card_body">
    <p>Card com cor azul.</p>
  </div>
</div>

<div class="card card-green">
  <div class="card_header">
    <h2>Card Green</h2>
  </div>
  <div class="card_body">
    <p>Card com cor verde.</p>
  </div>
</div>
```
:::
::::

## Variações de Cores

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .flex-wrap}
<div class="card card-red" style="max-width: 200px;">
  <div class="card_body">
    <p>Card Red</p>
  </div>
</div>

<div class="card card-yellow" style="max-width: 200px;">
  <div class="card_body">
    <p>Card Yellow</p>
  </div>
</div>

<div class="card card-gray-500" style="max-width: 200px;">
  <div class="card_body">
    <p>Card Gray</p>
  </div>
</div>

<div class="card card-secondary-500" style="max-width: 200px;">
  <div class="card_body">
    <p>Card Secondary</p>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="card card-red">
  <div class="card_body">
    <p>Card Red</p>
  </div>
</div>

<div class="card card-yellow">
  <div class="card_body">
    <p>Card Yellow</p>
  </div>
</div>

<div class="card card-gray-500">
  <div class="card_body">
    <p>Card Gray</p>
  </div>
</div>

<div class="card card-secondary-500">
  <div class="card_body">
    <p>Card Secondary</p>
  </div>
</div>
```
:::
::::

## Casos de Uso

### Card de Produto

::::{.docs-example}

::: {.docs-example-preview}
<div class="card-thumb" style="max-width: 350px;">
  <div class="card_thumb">
    <img src="https://via.placeholder.com/350x200" alt="Produto">
  </div>
  <div class="card_header">
    <a href="#">Nome do Produto</a>
    <div class="actions">
      <span class="badge badge-green">Em Estoque</span>
    </div>
  </div>
  <div class="card_body">
    <p class="text-lg text-bold">R$ 299,90</p>
    <p class="text-sm">Descrição breve do produto com suas principais características.</p>
    <button class="btn btn-aura-500 w-full mt-3">Adicionar ao Carrinho</button>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="card-thumb">
  <div class="card_thumb">
    <img src="produto.jpg" alt="Produto">
  </div>
  <div class="card_header">
    <a href="#">Nome do Produto</a>
    <div class="actions">
      <span class="badge badge-green">Em Estoque</span>
    </div>
  </div>
  <div class="card_body">
    <p class="text-lg text-bold">R$ 299,90</p>
    <p class="text-sm">Descrição breve do produto.</p>
    <button class="btn btn-aura-500 w-full mt-3">Adicionar ao Carrinho</button>
  </div>
</div>
```
:::
::::

### Card de Estatísticas

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .flex-wrap}
<div class="card card-blue" style="max-width: 250px;">
  <div class="card_header">
    <h2>Vendas Hoje</h2>
    <i class="bi bi-cart-fill text-2xl"></i>
  </div>
  <div class="card_body">
    <p class="text-4xl text-bold mb-2">1.234</p>
    <p class="text-sm">+12% em relação a ontem</p>
  </div>
</div>

<div class="card card-green" style="max-width: 250px;">
  <div class="card_header">
    <h2>Receita</h2>
    <i class="bi bi-currency-dollar text-2xl"></i>
  </div>
  <div class="card_body">
    <p class="text-4xl text-bold mb-2">R$ 45.6k</p>
    <p class="text-sm">+8% este mês</p>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="card card-blue">
  <div class="card_header">
    <h2>Vendas Hoje</h2>
    <i class="bi bi-cart-fill text-2xl"></i>
  </div>
  <div class="card_body">
    <p class="text-4xl text-bold mb-2">1.234</p>
    <p class="text-sm">+12% em relação a ontem</p>
  </div>
</div>

<div class="card card-green">
  <div class="card_header">
    <h2>Receita</h2>
    <i class="bi bi-currency-dollar text-2xl"></i>
  </div>
  <div class="card_body">
    <p class="text-4xl text-bold mb-2">R$ 45.6k</p>
    <p class="text-sm">+8% este mês</p>
  </div>
</div>
```
:::
::::

## Classes Disponíveis

### Estrutura Básica
- `.card` - Container principal do card
- `.card_header` - Cabeçalho do card
- `.card_body` - Corpo do card
- `.actions` - Container para ações no cabeçalho

### Variações
- `.card-thumb` - Card com imagem em destaque
- `.card_thumb` - Container da imagem (dentro de card-thumb)

### Cores
- `.card-aura-{50-900}` - Variações da cor primária Aura
- `.card-secondary-{50-900}` - Variações da cor secundária
- `.card-blue`, `.card-blue-{50-900}` - Variações azul
- `.card-green`, `.card-green-{50-900}` - Variações verde
- `.card-red`, `.card-red-{50-900}` - Variações vermelho
- `.card-yellow`, `.card-yellow-{50-900}` - Variações amarelo
- `.card-gray-{50-900}` - Variações cinza
