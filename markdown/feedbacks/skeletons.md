# Skeletons

Os skeletons são placeholders animados que indicam que o conteúdo está sendo carregado, melhorando a percepção de performance da aplicação.

## Skeleton de Texto

::::{.docs-example}

::: {.docs-example-preview}
<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-text"></div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-text"></div>
```
:::
::::

## Skeleton Circular (Avatar)

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center}
<div class="skeleton skeleton-circle skeleton-sm"></div>
<div class="skeleton skeleton-circle"></div>
<div class="skeleton skeleton-circle skeleton-lg"></div>
<div class="skeleton skeleton-circle skeleton-xl"></div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<!-- Small -->
<div class="skeleton skeleton-circle skeleton-sm"></div>

<!-- Default (48px) -->
<div class="skeleton skeleton-circle"></div>

<!-- Large -->
<div class="skeleton skeleton-circle skeleton-lg"></div>

<!-- Extra Large -->
<div class="skeleton skeleton-circle skeleton-xl"></div>
```
:::
::::

## Skeleton Retangular

::::{.docs-example}

::: {.docs-example-preview}
<div class="skeleton skeleton-rect"></div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="skeleton skeleton-rect"></div>
```
:::
::::

## Skeleton Personalizado

::::{.docs-example}

::: {.docs-example-preview}
<div class="skeleton" style="width: 100%; height: 100px; border-radius: 8px;"></div>
<div class="skeleton mt-3" style="width: 60%; height: 20px;"></div>
<div class="skeleton mt-2" style="width: 80%; height: 20px;"></div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="skeleton" style="width: 100%; height: 100px; border-radius: 8px;"></div>
<div class="skeleton mt-3" style="width: 60%; height: 20px;"></div>
<div class="skeleton mt-2" style="width: 80%; height: 20px;"></div>
```
:::
::::

## Skeleton com Animação Pulse

::::{.docs-example}

::: {.docs-example-preview}
<div class="skeleton skeleton-pulse skeleton-text"></div>
<div class="skeleton skeleton-pulse skeleton-text"></div>
<div class="skeleton skeleton-pulse skeleton-text"></div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="skeleton skeleton-pulse skeleton-text"></div>
<div class="skeleton skeleton-pulse skeleton-text"></div>
<div class="skeleton skeleton-pulse skeleton-text"></div>
```
:::
::::

## Casos de Uso

### Card de Produto Carregando

::::{.docs-example}

::: {.docs-example-preview}
<div class="card" style="max-width: 350px;">
  <div class="skeleton skeleton-rect" style="height: 200px;"></div>
  <div class="card_body">
    <div class="skeleton skeleton-text" style="width: 70%;"></div>
    <div class="skeleton skeleton-text mt-2" style="width: 40%;"></div>
    <div class="skeleton skeleton-text mt-3"></div>
    <div class="skeleton skeleton-text"></div>
    <div class="skeleton mt-3" style="width: 100%; height: 40px; border-radius: 8px;"></div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="card">
  <div class="skeleton skeleton-rect" style="height: 200px;"></div>
  <div class="card_body">
    <div class="skeleton skeleton-text" style="width: 70%;"></div>
    <div class="skeleton skeleton-text mt-2" style="width: 40%;"></div>
    <div class="skeleton skeleton-text mt-3"></div>
    <div class="skeleton skeleton-text"></div>
    <div class="skeleton mt-3" style="width: 100%; height: 40px; border-radius: 8px;"></div>
  </div>
</div>
```
:::
::::

### Lista de Comentários Carregando

::::{.docs-example}

::: {.docs-example-preview}
<div class="card">
  <div class="card_body">
    <!-- Comentário 1 -->
    <div class="flex gap-3 mb-4">
      <div class="skeleton skeleton-circle"></div>
      <div class="flex-grow">
        <div class="skeleton skeleton-text" style="width: 30%;"></div>
        <div class="skeleton skeleton-text mt-2"></div>
        <div class="skeleton skeleton-text"></div>
      </div>
    </div>
    
    <!-- Comentário 2 -->
    <div class="flex gap-3 mb-4">
      <div class="skeleton skeleton-circle"></div>
      <div class="flex-grow">
        <div class="skeleton skeleton-text" style="width: 40%;"></div>
        <div class="skeleton skeleton-text mt-2"></div>
        <div class="skeleton skeleton-text"></div>
      </div>
    </div>
    
    <!-- Comentário 3 -->
    <div class="flex gap-3">
      <div class="skeleton skeleton-circle"></div>
      <div class="flex-grow">
        <div class="skeleton skeleton-text" style="width: 35%;"></div>
        <div class="skeleton skeleton-text mt-2"></div>
        <div class="skeleton skeleton-text"></div>
      </div>
    </div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="card">
  <div class="card_body">
    <!-- Comentário 1 -->
    <div class="flex gap-3 mb-4">
      <div class="skeleton skeleton-circle"></div>
      <div class="flex-grow">
        <div class="skeleton skeleton-text" style="width: 30%;"></div>
        <div class="skeleton skeleton-text mt-2"></div>
        <div class="skeleton skeleton-text"></div>
      </div>
    </div>
    
    <!-- Comentário 2 -->
    <div class="flex gap-3 mb-4">
      <div class="skeleton skeleton-circle"></div>
      <div class="flex-grow">
        <div class="skeleton skeleton-text" style="width: 40%;"></div>
        <div class="skeleton skeleton-text mt-2"></div>
        <div class="skeleton skeleton-text"></div>
      </div>
    </div>
    
    <!-- Comentário 3 -->
    <div class="flex gap-3">
      <div class="skeleton skeleton-circle"></div>
      <div class="flex-grow">
        <div class="skeleton skeleton-text" style="width: 35%;"></div>
        <div class="skeleton skeleton-text mt-2"></div>
        <div class="skeleton skeleton-text"></div>
      </div>
    </div>
  </div>
</div>
```
:::
::::

### Perfil de Usuário Carregando

::::{.docs-example}

::: {.docs-example-preview}
<div class="card" style="max-width: 400px;">
  <div class="card_body">
    <div class="flex flex-column items-center text-center">
      <div class="skeleton skeleton-circle skeleton-xl mb-3"></div>
      <div class="skeleton skeleton-text" style="width: 60%;"></div>
      <div class="skeleton skeleton-text mt-2" style="width: 40%;"></div>
      
      <hr class="divider" style="width: 100%;">
      
      <div class="w-full">
        <div class="flex justify-between mb-3">
          <div class="skeleton skeleton-text" style="width: 30%;"></div>
          <div class="skeleton skeleton-text" style="width: 20%;"></div>
        </div>
        <div class="flex justify-between mb-3">
          <div class="skeleton skeleton-text" style="width: 35%;"></div>
          <div class="skeleton skeleton-text" style="width: 25%;"></div>
        </div>
        <div class="flex justify-between">
          <div class="skeleton skeleton-text" style="width: 40%;"></div>
          <div class="skeleton skeleton-text" style="width: 30%;"></div>
        </div>
      </div>
    </div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="card">
  <div class="card_body">
    <div class="flex flex-column items-center text-center">
      <div class="skeleton skeleton-circle skeleton-xl mb-3"></div>
      <div class="skeleton skeleton-text" style="width: 60%;"></div>
      <div class="skeleton skeleton-text mt-2" style="width: 40%;"></div>
      
      <hr class="divider" style="width: 100%;">
      
      <div class="w-full">
        <div class="flex justify-between mb-3">
          <div class="skeleton skeleton-text" style="width: 30%;"></div>
          <div class="skeleton skeleton-text" style="width: 20%;"></div>
        </div>
        <div class="flex justify-between mb-3">
          <div class="skeleton skeleton-text" style="width: 35%;"></div>
          <div class="skeleton skeleton-text" style="width: 25%;"></div>
        </div>
        <div class="flex justify-between">
          <div class="skeleton skeleton-text" style="width: 40%;"></div>
          <div class="skeleton skeleton-text" style="width: 30%;"></div>
        </div>
      </div>
    </div>
  </div>
</div>
```
:::
::::

### Tabela Carregando

::::{.docs-example}

::: {.docs-example-preview}
<div class="table-container">
  <table class="table">
    <thead>
      <tr>
        <th><div class="skeleton skeleton-text"></div></th>
        <th><div class="skeleton skeleton-text"></div></th>
        <th><div class="skeleton skeleton-text"></div></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><div class="skeleton skeleton-text"></div></td>
        <td><div class="skeleton skeleton-text"></div></td>
        <td><div class="skeleton skeleton-text"></div></td>
      </tr>
      <tr>
        <td><div class="skeleton skeleton-text"></div></td>
        <td><div class="skeleton skeleton-text"></div></td>
        <td><div class="skeleton skeleton-text"></div></td>
      </tr>
      <tr>
        <td><div class="skeleton skeleton-text"></div></td>
        <td><div class="skeleton skeleton-text"></div></td>
        <td><div class="skeleton skeleton-text"></div></td>
      </tr>
    </tbody>
  </table>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="table-container">
  <table class="table">
    <thead>
      <tr>
        <th><div class="skeleton skeleton-text"></div></th>
        <th><div class="skeleton skeleton-text"></div></th>
        <th><div class="skeleton skeleton-text"></div></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><div class="skeleton skeleton-text"></div></td>
        <td><div class="skeleton skeleton-text"></div></td>
        <td><div class="skeleton skeleton-text"></div></td>
      </tr>
      <tr>
        <td><div class="skeleton skeleton-text"></div></td>
        <td><div class="skeleton skeleton-text"></div></td>
        <td><div class="skeleton skeleton-text"></div></td>
      </tr>
    </tbody>
  </table>
</div>
```
:::
::::

## Classes Disponíveis

### Tipos
- `.skeleton` - Skeleton básico (requer dimensões personalizadas)
- `.skeleton-text` - Skeleton para linhas de texto (altura: 1em)
- `.skeleton-circle` - Skeleton circular (48px padrão)
- `.skeleton-rect` - Skeleton retangular (100% x 200px)

### Tamanhos (apenas para skeleton-circle)
- `.skeleton-sm` - Círculo pequeno (32px)
- Padrão - Círculo médio (48px)
- `.skeleton-lg` - Círculo grande (64px)
- `.skeleton-xl` - Círculo extra grande (96px)

### Animações
- Padrão - Animação shimmer (brilho deslizante)
- `.skeleton-pulse` - Animação de pulsação (fade in/out)

## Boas Práticas

1. **Mantenha a estrutura**: O skeleton deve refletir o layout real do conteúdo
2. **Use dimensões apropriadas**: Ajuste largura e altura para corresponder ao conteúdo final
3. **Combine com dados reais**: Substitua skeletons por conteúdo real assim que carregado
4. **Evite excesso**: Não use skeletons para carregamentos muito rápidos (< 300ms)
5. **Acessibilidade**: Considere adicionar `aria-busy="true"` e `aria-label="Carregando"` aos containers
