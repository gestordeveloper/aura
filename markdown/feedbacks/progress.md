# Progress

As barras de progresso são componentes visuais que indicam o andamento de uma tarefa ou processo, fornecendo feedback visual ao usuário.

## Progress Básico

::::{.docs-example}

::: {.docs-example-preview}
<div class="progress">
  <div class="progress-bar" style="width: 50%;">50%</div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="progress">
  <div class="progress-bar" style="width: 50%;">50%</div>
</div>
```
:::
::::

## Tamanhos

::::{.docs-example}

::: {.docs-example-preview .flex .flex-column .gap-3}
<div class="progress progress-sm">
  <div class="progress-bar" style="width: 25%;">25%</div>
</div>

<div class="progress">
  <div class="progress-bar" style="width: 50%;">50%</div>
</div>

<div class="progress progress-lg">
  <div class="progress-bar" style="width: 75%;">75%</div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<!-- Small -->
<div class="progress progress-sm">
  <div class="progress-bar" style="width: 25%;">25%</div>
</div>

<!-- Default -->
<div class="progress">
  <div class="progress-bar" style="width: 50%;">50%</div>
</div>

<!-- Large -->
<div class="progress progress-lg">
  <div class="progress-bar" style="width: 75%;">75%</div>
</div>
```
:::
::::

## Progress com Cores

::::{.docs-example}

::: {.docs-example-preview .flex .flex-column .gap-3}
<div class="progress progress-aura-500">
  <div class="progress-bar" style="width: 60%;">60%</div>
</div>

<div class="progress progress-blue">
  <div class="progress-bar" style="width: 70%;">70%</div>
</div>

<div class="progress progress-green">
  <div class="progress-bar" style="width: 80%;">80%</div>
</div>

<div class="progress progress-yellow">
  <div class="progress-bar" style="width: 50%;">50%</div>
</div>

<div class="progress progress-red">
  <div class="progress-bar" style="width: 30%;">30%</div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="progress progress-aura-500">
  <div class="progress-bar" style="width: 60%;">60%</div>
</div>

<div class="progress progress-blue">
  <div class="progress-bar" style="width: 70%;">70%</div>
</div>

<div class="progress progress-green">
  <div class="progress-bar" style="width: 80%;">80%</div>
</div>

<div class="progress progress-yellow">
  <div class="progress-bar" style="width: 50%;">50%</div>
</div>

<div class="progress progress-red">
  <div class="progress-bar" style="width: 30%;">30%</div>
</div>
```
:::
::::

## Progress Listrado (Striped)

::::{.docs-example}

::: {.docs-example-preview .flex .flex-column .gap-3}
<div class="progress progress-striped progress-aura-500">
  <div class="progress-bar" style="width: 60%;">60%</div>
</div>

<div class="progress progress-striped progress-blue">
  <div class="progress-bar" style="width: 70%;">70%</div>
</div>

<div class="progress progress-striped progress-green">
  <div class="progress-bar" style="width: 80%;">80%</div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="progress progress-striped progress-aura-500">
  <div class="progress-bar" style="width: 60%;">60%</div>
</div>

<div class="progress progress-striped progress-blue">
  <div class="progress-bar" style="width: 70%;">70%</div>
</div>

<div class="progress progress-striped progress-green">
  <div class="progress-bar" style="width: 80%;">80%</div>
</div>
```
:::
::::

## Progress Animado

::::{.docs-example}

::: {.docs-example-preview .flex .flex-column .gap-3}
<div class="progress progress-striped progress-animated progress-aura-500">
  <div class="progress-bar" style="width: 60%;">60%</div>
</div>

<div class="progress progress-striped progress-animated progress-blue">
  <div class="progress-bar" style="width: 70%;">70%</div>
</div>

<div class="progress progress-striped progress-animated progress-green">
  <div class="progress-bar" style="width: 80%;">80%</div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="progress progress-striped progress-animated progress-aura-500">
  <div class="progress-bar" style="width: 60%;">60%</div>
</div>

<div class="progress progress-striped progress-animated progress-blue">
  <div class="progress-bar" style="width: 70%;">70%</div>
</div>

<div class="progress progress-striped progress-animated progress-green">
  <div class="progress-bar" style="width: 80%;">80%</div>
</div>
```
:::
::::

## Progress sem Texto

::::{.docs-example}

::: {.docs-example-preview .flex .flex-column .gap-3}
<div class="progress progress-aura-500">
  <div class="progress-bar" style="width: 25%;"></div>
</div>

<div class="progress progress-blue">
  <div class="progress-bar" style="width: 50%;"></div>
</div>

<div class="progress progress-green">
  <div class="progress-bar" style="width: 75%;"></div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="progress progress-aura-500">
  <div class="progress-bar" style="width: 25%;"></div>
</div>

<div class="progress progress-blue">
  <div class="progress-bar" style="width: 50%;"></div>
</div>

<div class="progress progress-green">
  <div class="progress-bar" style="width: 75%;"></div>
</div>
```
:::
::::

## Casos de Uso

### Upload de Arquivo

::::{.docs-example}

::: {.docs-example-preview}
<div class="card">
  <div class="card_body">
    <div class="flex justify-between items-center mb-2">
      <span class="text-sm text-bold">documento.pdf</span>
      <span class="text-sm text-muted-foreground">2.5 MB / 5 MB</span>
    </div>
    <div class="progress progress-blue">
      <div class="progress-bar" style="width: 50%;"></div>
    </div>
    <p class="text-xs text-muted-foreground mt-2">Fazendo upload...</p>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="card">
  <div class="card_body">
    <div class="flex justify-between items-center mb-2">
      <span class="text-sm text-bold">documento.pdf</span>
      <span class="text-sm text-muted-foreground">2.5 MB / 5 MB</span>
    </div>
    <div class="progress progress-blue">
      <div class="progress-bar" style="width: 50%;"></div>
    </div>
    <p class="text-xs text-muted-foreground mt-2">Fazendo upload...</p>
  </div>
</div>
```
:::
::::

### Nível de Habilidade

::::{.docs-example}

::: {.docs-example-preview}
<div class="card">
  <div class="card_body">
    <div class="mb-3">
      <div class="flex justify-between mb-1">
        <span class="text-sm">JavaScript</span>
        <span class="text-sm text-bold">90%</span>
      </div>
      <div class="progress progress-blue">
        <div class="progress-bar" style="width: 90%;"></div>
      </div>
    </div>
    
    <div class="mb-3">
      <div class="flex justify-between mb-1">
        <span class="text-sm">CSS</span>
        <span class="text-sm text-bold">85%</span>
      </div>
      <div class="progress progress-aura-500">
        <div class="progress-bar" style="width: 85%;"></div>
      </div>
    </div>
    
    <div>
      <div class="flex justify-between mb-1">
        <span class="text-sm">HTML</span>
        <span class="text-sm text-bold">95%</span>
      </div>
      <div class="progress progress-green">
        <div class="progress-bar" style="width: 95%;"></div>
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
    <div class="mb-3">
      <div class="flex justify-between mb-1">
        <span class="text-sm">JavaScript</span>
        <span class="text-sm text-bold">90%</span>
      </div>
      <div class="progress progress-blue">
        <div class="progress-bar" style="width: 90%;"></div>
      </div>
    </div>
    
    <div class="mb-3">
      <div class="flex justify-between mb-1">
        <span class="text-sm">CSS</span>
        <span class="text-sm text-bold">85%</span>
      </div>
      <div class="progress progress-aura-500">
        <div class="progress-bar" style="width: 85%;"></div>
      </div>
    </div>
    
    <div>
      <div class="flex justify-between mb-1">
        <span class="text-sm">HTML</span>
        <span class="text-sm text-bold">95%</span>
      </div>
      <div class="progress progress-green">
        <div class="progress-bar" style="width: 95%;"></div>
      </div>
    </div>
  </div>
</div>
```
:::
::::

### Indicador de Armazenamento

::::{.docs-example}

::: {.docs-example-preview}
<div class="card">
  <div class="card_header">
    <h2>Armazenamento</h2>
  </div>
  <div class="card_body">
    <div class="flex justify-between mb-2">
      <span class="text-sm">45 GB de 100 GB usados</span>
      <span class="text-sm text-bold">45%</span>
    </div>
    <div class="progress progress-lg progress-yellow">
      <div class="progress-bar" style="width: 45%;"></div>
    </div>
    <p class="text-xs text-muted-foreground mt-2">55 GB disponíveis</p>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="card">
  <div class="card_header">
    <h2>Armazenamento</h2>
  </div>
  <div class="card_body">
    <div class="flex justify-between mb-2">
      <span class="text-sm">45 GB de 100 GB usados</span>
      <span class="text-sm text-bold">45%</span>
    </div>
    <div class="progress progress-lg progress-yellow">
      <div class="progress-bar" style="width: 45%;"></div>
    </div>
    <p class="text-xs text-muted-foreground mt-2">55 GB disponíveis</p>
  </div>
</div>
```
:::
::::

## Classes Disponíveis

### Estrutura
- `.progress` - Container da barra de progresso
- `.progress-bar` - Barra de progresso interna

### Tamanhos
- `.progress-sm` - Barra pequena (0.5rem)
- `.progress` - Tamanho padrão (1rem)
- `.progress-lg` - Barra grande (1.5rem)

### Estilos
- `.progress-striped` - Adiciona listras à barra
- `.progress-animated` - Anima as listras (requer progress-striped)

### Cores
- `.progress-aura-{50-900}` - Variações da cor primária Aura
- `.progress-secondary-{50-900}` - Variações da cor secundária
- `.progress-blue`, `.progress-blue-{50-900}` - Variações azul
- `.progress-green`, `.progress-green-{50-900}` - Variações verde
- `.progress-red`, `.progress-red-{50-900}` - Variações vermelho
- `.progress-yellow`, `.progress-yellow-{50-900}` - Variações amarelo
- `.progress-gray-{50-900}` - Variações cinza

## Boas Práticas

1. **Sempre indique progresso**: Use porcentagens ou valores absolutos
2. **Escolha cores apropriadas**: Verde para sucesso, vermelho para crítico, amarelo para atenção
3. **Considere animação**: Use progress-animated apenas para processos em andamento
4. **Acessibilidade**: Sempre forneça texto alternativo ou labels descritivos
