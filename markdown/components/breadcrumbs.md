# Breadcrumbs

Os breadcrumbs são componentes de navegação que mostram a localização atual do usuário dentro da hierarquia do site, facilitando a navegação.

## Breadcrumb Básico

::::{.docs-example}

::: {.docs-example-preview}
<nav class="breadcrumb">
  <div class="breadcrumb-item"><a href="#">Home</a></div>
  <div class="breadcrumb-item"><a href="#">Produtos</a></div>
  <div class="breadcrumb-item active">Detalhes</div>
</nav>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<nav class="breadcrumb">
  <div class="breadcrumb-item"><a href="#">Home</a></div>
  <div class="breadcrumb-item"><a href="#">Produtos</a></div>
  <div class="breadcrumb-item active">Detalhes</div>
</nav>
```
:::
::::

## Separadores Personalizados

### Separador Seta (>)

::::{.docs-example}

::: {.docs-example-preview}
<nav class="breadcrumb">
  <div class="breadcrumb-item" data-separator=">"><a href="#">Home</a></div>
  <div class="breadcrumb-item" data-separator=">"><a href="#">Biblioteca</a></div>
  <div class="breadcrumb-item" data-separator=">" active>Livros</div>
</nav>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<nav class="breadcrumb">
  <div class="breadcrumb-item" data-separator=">"><a href="#">Home</a></div>
  <div class="breadcrumb-item" data-separator=">"><a href="#">Biblioteca</a></div>
  <div class="breadcrumb-item" data-separator=">" active>Livros</div>
</nav>
```
:::
::::

### Separador Dupla Seta (»)

::::{.docs-example}

::: {.docs-example-preview}
<nav class="breadcrumb">
  <div class="breadcrumb-item" data-separator="»"><a href="#">Dashboard</a></div>
  <div class="breadcrumb-item" data-separator="»"><a href="#">Configurações</a></div>
  <div class="breadcrumb-item" data-separator="»" active>Perfil</div>
</nav>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<nav class="breadcrumb">
  <div class="breadcrumb-item" data-separator="»"><a href="#">Dashboard</a></div>
  <div class="breadcrumb-item" data-separator="»"><a href="#">Configurações</a></div>
  <div class="breadcrumb-item" data-separator="»" active>Perfil</div>
</nav>
```
:::
::::

### Separador Ponto (·)

::::{.docs-example}

::: {.docs-example-preview}
<nav class="breadcrumb">
  <div class="breadcrumb-item" data-separator="·"><a href="#">Início</a></div>
  <div class="breadcrumb-item" data-separator="·"><a href="#">Blog</a></div>
  <div class="breadcrumb-item" data-separator="·"><a href="#">Categoria</a></div>
  <div class="breadcrumb-item" data-separator="·" active>Artigo</div>
</nav>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<nav class="breadcrumb">
  <div class="breadcrumb-item" data-separator="·"><a href="#">Início</a></div>
  <div class="breadcrumb-item" data-separator="·"><a href="#">Blog</a></div>
  <div class="breadcrumb-item" data-separator="·"><a href="#">Categoria</a></div>
  <div class="breadcrumb-item" data-separator="·" active>Artigo</div>
</nav>
```
:::
::::

## Breadcrumb com Ícones

::::{.docs-example}

::: {.docs-example-preview}
<nav class="breadcrumb">
  <div class="breadcrumb-item">
    <a href="#">
      <i class="bi bi-house-door"></i>
      Home
    </a>
  </div>
  <div class="breadcrumb-item">
    <a href="#">
      <i class="bi bi-folder"></i>
      Documentos
    </a>
  </div>
  <div class="breadcrumb-item active">
    <i class="bi bi-file-text"></i>
    Arquivo.pdf
  </div>
</nav>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<nav class="breadcrumb">
  <div class="breadcrumb-item">
    <a href="#">
      <i class="bi bi-house-door"></i>
      Home
    </a>
  </div>
  <div class="breadcrumb-item">
    <a href="#">
      <i class="bi bi-folder"></i>
      Documentos
    </a>
  </div>
  <div class="breadcrumb-item active">
    <i class="bi bi-file-text"></i>
    Arquivo.pdf
  </div>
</nav>
```
:::
::::

## Breadcrumb Apenas com Ícones

::::{.docs-example}

::: {.docs-example-preview}
<nav class="breadcrumb">
  <div class="breadcrumb-item">
    <a href="#" title="Home">
      <i class="bi bi-house-door-fill"></i>
    </a>
  </div>
  <div class="breadcrumb-item">
    <a href="#" title="Usuários">
      <i class="bi bi-people-fill"></i>
    </a>
  </div>
  <div class="breadcrumb-item active" title="Perfil">
    <i class="bi bi-person-fill"></i>
  </div>
</nav>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<nav class="breadcrumb">
  <div class="breadcrumb-item">
    <a href="#" title="Home">
      <i class="bi bi-house-door-fill"></i>
    </a>
  </div>
  <div class="breadcrumb-item">
    <a href="#" title="Usuários">
      <i class="bi bi-people-fill"></i>
    </a>
  </div>
  <div class="breadcrumb-item active" title="Perfil">
    <i class="bi bi-person-fill"></i>
  </div>
</nav>
```
:::
::::

## Casos de Uso Comuns

### E-commerce

::::{.docs-example}

::: {.docs-example-preview}
<nav class="breadcrumb">
  <div class="breadcrumb-item"><a href="#">Loja</a></div>
  <div class="breadcrumb-item"><a href="#">Eletrônicos</a></div>
  <div class="breadcrumb-item"><a href="#">Smartphones</a></div>
  <div class="breadcrumb-item active">iPhone 15 Pro</div>
</nav>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<nav class="breadcrumb">
  <div class="breadcrumb-item"><a href="#">Loja</a></div>
  <div class="breadcrumb-item"><a href="#">Eletrônicos</a></div>
  <div class="breadcrumb-item"><a href="#">Smartphones</a></div>
  <div class="breadcrumb-item active">iPhone 15 Pro</div>
</nav>
```
:::
::::

### Dashboard Administrativo

::::{.docs-example}

::: {.docs-example-preview}
<nav class="breadcrumb">
  <div class="breadcrumb-item" data-separator=">">
    <a href="#">
      <i class="bi bi-speedometer2"></i>
      Dashboard
    </a>
  </div>
  <div class="breadcrumb-item" data-separator=">">
    <a href="#">
      <i class="bi bi-gear"></i>
      Configurações
    </a>
  </div>
  <div class="breadcrumb-item" data-separator=">" active>
    <i class="bi bi-shield-check"></i>
    Segurança
  </div>
</nav>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<nav class="breadcrumb">
  <div class="breadcrumb-item" data-separator=">">
    <a href="#">
      <i class="bi bi-speedometer2"></i>
      Dashboard
    </a>
  </div>
  <div class="breadcrumb-item" data-separator=">">
    <a href="#">
      <i class="bi bi-gear"></i>
      Configurações
    </a>
  </div>
  <div class="breadcrumb-item" data-separator=">" active>
    <i class="bi bi-shield-check"></i>
    Segurança
  </div>
</nav>
```
:::
::::

### Sistema de Arquivos

::::{.docs-example}

::: {.docs-example-preview}
<nav class="breadcrumb">
  <div class="breadcrumb-item" data-separator="»">
    <a href="#">
      <i class="bi bi-hdd"></i>
      Disco C:
    </a>
  </div>
  <div class="breadcrumb-item" data-separator="»">
    <a href="#">Usuários</a>
  </div>
  <div class="breadcrumb-item" data-separator="»">
    <a href="#">Documentos</a>
  </div>
  <div class="breadcrumb-item" data-separator="»" active>Projetos</div>
</nav>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<nav class="breadcrumb">
  <div class="breadcrumb-item" data-separator="»">
    <a href="#">
      <i class="bi bi-hdd"></i>
      Disco C:
    </a>
  </div>
  <div class="breadcrumb-item" data-separator="»">
    <a href="#">Usuários</a>
  </div>
  <div class="breadcrumb-item" data-separator="»">
    <a href="#">Documentos</a>
  </div>
  <div class="breadcrumb-item" data-separator="»" active>Projetos</div>
</nav>
```
:::
::::

## Classes Disponíveis

### Container
- `.breadcrumb` - Container principal do breadcrumb

### Items
- `.breadcrumb-item` - Item individual do breadcrumb
- `.breadcrumb-item.active` - Item ativo (página atual)

### Separadores
- `data-separator="/"` - Separador padrão (barra)
- `data-separator=">"` - Separador seta
- `data-separator="»"` - Separador dupla seta
- `data-separator="·"` - Separador ponto

## Boas Práticas

1. **Sempre marque o item atual**: Use a classe `.active` no último item para indicar a página atual
2. **Não use links no item ativo**: O item ativo não deve ser clicável
3. **Mantenha a hierarquia clara**: Os breadcrumbs devem refletir a estrutura real do site
4. **Use ícones com moderação**: Ícones podem ajudar, mas não abuse deles
5. **Considere dispositivos móveis**: Em telas pequenas, considere ocultar itens intermediários
