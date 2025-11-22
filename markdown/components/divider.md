# Divider

Os dividers são elementos visuais usados para separar e organizar conteúdo, criando hierarquia visual e melhorando a legibilidade.

## Divider Horizontal

:::: {.docs-example}

::: {.docs-example-preview}
<p>Conteúdo acima do divider</p>
<hr class="divider">
<p>Conteúdo abaixo do divider</p>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<p>Conteúdo acima do divider</p>
<hr class="divider">
<p>Conteúdo abaixo do divider</p>
```
:::
::::

## Divider Vertical

:::: {.docs-example}

::: {.docs-example-preview .flex .items-center .gap-3}
<span>Item 1</span>
<hr class="divider divider-vertical">
<span>Item 2</span>
<hr class="divider divider-vertical">
<span>Item 3</span>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="flex items-center gap-3">
  <span>Item 1</span>
  <hr class="divider divider-vertical">
  <span>Item 2</span>
  <hr class="divider divider-vertical">
  <span>Item 3</span>
</div>
```
:::
::::

## Divider com Texto

:::: {.docs-example}

::: {.docs-example-preview}
<p>Conteúdo da seção anterior</p>
<hr class="divider divider-text">
  <span>OU</span>
</hr>
<p>Conteúdo da próxima seção</p>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<p>Conteúdo da seção anterior</p>
<hr class="divider divider-text">
  <span>OU</span>
</hr>
<p>Conteúdo da próxima seção</p>
```
:::
::::

## Variações de Estilo

### Divider Tracejado (Dashed)

:::: {.docs-example}

::: {.docs-example-preview}
<p>Conteúdo acima</p>
<hr class="divider divider-dashed">
<p>Conteúdo abaixo</p>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<p>Conteúdo acima</p>
<hr class="divider divider-dashed">
<p>Conteúdo abaixo</p>
```
:::
::::

### Divider Pontilhado (Dotted)

:::: {.docs-example}

::: {.docs-example-preview}
<p>Conteúdo acima</p>
<hr class="divider divider-dotted">
<p>Conteúdo abaixo</p>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<p>Conteúdo acima</p>
<hr class="divider divider-dotted">
<p>Conteúdo abaixo</p>
```
:::
::::

### Divider Grosso (Thick)

:::: {.docs-example}

::: {.docs-example-preview}
<p>Conteúdo acima</p>
<hr class="divider divider-thick">
<p>Conteúdo abaixo</p>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<p>Conteúdo acima</p>
<hr class="divider divider-thick">
<p>Conteúdo abaixo</p>
```
:::
::::

## Combinações de Estilos

:::: {.docs-example}

::: {.docs-example-preview}
<p>Divider grosso e tracejado</p>
<hr class="divider divider-thick divider-dashed">

<p>Divider grosso e pontilhado</p>
<hr class="divider divider-thick divider-dotted">
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<p>Divider grosso e tracejado</p>
<hr class="divider divider-thick divider-dashed">

<p>Divider grosso e pontilhado</p>
<hr class="divider divider-thick divider-dotted">
```
:::
::::

## Divider Vertical com Estilos

:::: {.docs-example}

::: {.docs-example-preview .flex .items-center .gap-3}
<span>Sólido</span>
<hr class="divider divider-vertical">
<span>Tracejado</span>
<hr class="divider divider-vertical divider-dashed">
<span>Pontilhado</span>
<hr class="divider divider-vertical divider-dotted">
<span>Grosso</span>
<hr class="divider divider-vertical divider-thick">
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="flex items-center gap-3">
  <span>Sólido</span>
  <hr class="divider divider-vertical">
  <span>Tracejado</span>
  <hr class="divider divider-vertical divider-dashed">
  <span>Pontilhado</span>
  <hr class="divider divider-vertical divider-dotted">
  <span>Grosso</span>
  <hr class="divider divider-vertical divider-thick">
</div>
```
:::
::::

## Casos de Uso

### Separação de Seções

:::: {.docs-example}

::: {.docs-example-preview}
<div class="card">
  <div class="card_header">
    <h2>Informações do Usuário</h2>
  </div>
  <div class="card_body">
    <p><strong>Nome:</strong> João Silva</p>
    <p><strong>Email:</strong> joao@example.com</p>
    
    <hr class="divider">
    
    <p><strong>Telefone:</strong> (11) 98765-4321</p>
    <p><strong>Endereço:</strong> São Paulo, SP</p>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="card">
  <div class="card_header">
    <h2>Informações do Usuário</h2>
  </div>
  <div class="card_body">
    <p><strong>Nome:</strong> João Silva</p>
    <p><strong>Email:</strong> joao@example.com</p>
    
    <hr class="divider">
    
    <p><strong>Telefone:</strong> (11) 98765-4321</p>
    <p><strong>Endereço:</strong> São Paulo, SP</p>
  </div>
</div>
```
:::
::::

### Formulário com Divider de Texto

:::: {.docs-example}

::: {.docs-example-preview}
<div class="card" style="max-width: 400px;">
  <div class="card_body">
    <button class="btn btn-blue w-full mb-3">
      <i class="bi bi-google"></i>
      Continuar com Google
    </button>
    
    <hr class="divider divider-text">
      <span>OU</span>
    </hr>
    
    <div class="app_form mt-3">
      <div class="label">
        <legend>Email</legend>
        <input type="email" placeholder="seu@email.com">
      </div>
      <div class="label mt-2">
        <legend>Senha</legend>
        <input type="password" placeholder="••••••••">
      </div>
      <button class="btn btn-aura-500 w-full mt-3">Entrar</button>
    </div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="card">
  <div class="card_body">
    <button class="btn btn-blue w-full mb-3">
      <i class="bi bi-google"></i>
      Continuar com Google
    </button>
    
    <hr class="divider divider-text">
      <span>OU</span>
    </hr>
    
    <div class="app_form mt-3">
      <div class="label">
        <legend>Email</legend>
        <input type="email" placeholder="seu@email.com">
      </div>
      <button class="btn btn-aura-500 w-full mt-3">Entrar</button>
    </div>
  </div>
</div>
```
:::
::::

### Menu com Dividers Verticais

:::: {.docs-example}

::: {.docs-example-preview}
<div class="flex items-center gap-3">
  <a href="#" class="text-aura-500">Início</a>
  <hr class="divider divider-vertical">
  <a href="#" class="text-aura-500">Produtos</a>
  <hr class="divider divider-vertical">
  <a href="#" class="text-aura-500">Sobre</a>
  <hr class="divider divider-vertical">
  <a href="#" class="text-aura-500">Contato</a>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="flex items-center gap-3">
  <a href="#" class="text-aura-500">Início</a>
  <hr class="divider divider-vertical">
  <a href="#" class="text-aura-500">Produtos</a>
  <hr class="divider divider-vertical">
  <a href="#" class="text-aura-500">Sobre</a>
  <hr class="divider divider-vertical">
  <a href="#" class="text-aura-500">Contato</a>
</div>
```
:::
::::

## Classes Disponíveis

### Orientação
- `.divider` - Divider horizontal (padrão)
- `.divider-vertical` - Divider vertical

### Estilos
- `.divider-text` - Divider com texto no centro
- `.divider-dashed` - Estilo tracejado
- `.divider-dotted` - Estilo pontilhado
- `.divider-thick` - Espessura aumentada (2px)

## Boas Práticas

1. **Use com moderação**: Dividers devem separar conteúdo significativamente diferente
2. **Considere espaçamento**: Ajuste margens para criar hierarquia visual adequada
3. **Dividers verticais**: Use apenas em layouts horizontais com altura definida
4. **Texto em dividers**: Use textos curtos e descritivos (ex: "OU", "E", "MAIS")
