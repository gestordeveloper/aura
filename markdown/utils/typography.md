# Typography

Sistema completo de tipografia com classes semânticas e utilitários para controle preciso do texto.

## Headings

::::{.docs-example}

::: {.docs-example-preview}
<h1 class="heading-1">Heading 1</h1>
<h2 class="heading-2">Heading 2</h2>
<h3 class="heading-3">Heading 3</h3>
<h4 class="heading-4">Heading 4</h4>
<h5 class="heading-5">Heading 5</h5>
<h6 class="heading-6">Heading 6</h6>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<h1 class="heading-1">Heading 1</h1>
<h2 class="heading-2">Heading 2</h2>
<h3 class="heading-3">Heading 3</h3>
<h4 class="heading-4">Heading 4</h4>
<h5 class="heading-5">Heading 5</h5>
<h6 class="heading-6">Heading 6</h6>
```
:::
::::

## Body Text

::::{.docs-example}

::: {.docs-example-preview}
<p class="body-1">Body 1 - Texto padrão para parágrafos e conteúdo principal.</p>
<p class="body-2">Body 2 - Texto menor para conteúdo secundário.</p>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<p class="body-1">Body 1 - Texto padrão</p>
<p class="body-2">Body 2 - Texto menor</p>
```
:::
::::

## Subtitles e Variações

::::{.docs-example}

::: {.docs-example-preview}
<p class="subtitle-1">Subtitle 1 - Subtítulo grande</p>
<p class="subtitle-2">Subtitle 2 - Subtítulo médio</p>
<p class="lead">Lead - Texto introdutório destacado</p>
<p class="caption">Caption - Texto pequeno para legendas</p>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<p class="subtitle-1">Subtitle 1</p>
<p class="subtitle-2">Subtitle 2</p>
<p class="lead">Lead text</p>
<p class="caption">Caption text</p>
```
:::
::::

## Text Transform

::::{.docs-example}

::: {.docs-example-preview}
<p class="text-uppercase">Texto em maiúsculas</p>
<p class="text-lowercase">TEXTO EM MINÚSCULAS</p>
<p class="text-capitalize">texto capitalizado</p>
<p class="text-normal-case">Texto Normal</p>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<p class="text-uppercase">Texto em maiúsculas</p>
<p class="text-lowercase">TEXTO EM MINÚSCULAS</p>
<p class="text-capitalize">texto capitalizado</p>
```
:::
::::

## Line Clamp (Truncate)

::::{.docs-example}

::: {.docs-example-preview}
<p class="line-clamp-1" style="max-width: 300px;">
  Este texto será truncado em uma linha com reticências no final quando ultrapassar o limite.
</p>
<p class="line-clamp-2 mt-3" style="max-width: 300px;">
  Este texto será truncado em duas linhas com reticências no final quando ultrapassar o limite estabelecido.
</p>
<p class="line-clamp-3 mt-3" style="max-width: 300px;">
  Este texto será truncado em três linhas com reticências no final quando ultrapassar o limite estabelecido para o componente.
</p>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<p class="line-clamp-1">Texto truncado em 1 linha...</p>
<p class="line-clamp-2">Texto truncado em 2 linhas...</p>
<p class="line-clamp-3">Texto truncado em 3 linhas...</p>
```
:::
::::

## Line Height

::::{.docs-example}

::: {.docs-example-preview}
<p class="leading-none">Leading None (1.0)</p>
<p class="leading-tight">Leading Tight (1.25)</p>
<p class="leading-normal">Leading Normal (1.5)</p>
<p class="leading-relaxed">Leading Relaxed (1.625)</p>
<p class="leading-loose">Leading Loose (2.0)</p>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<p class="leading-none">Leading None</p>
<p class="leading-tight">Leading Tight</p>
<p class="leading-normal">Leading Normal</p>
<p class="leading-relaxed">Leading Relaxed</p>
<p class="leading-loose">Leading Loose</p>
```
:::
::::

## Letter Spacing

::::{.docs-example}

::: {.docs-example-preview}
<p class="tracking-tighter">Tracking Tighter</p>
<p class="tracking-tight">Tracking Tight</p>
<p class="tracking-normal">Tracking Normal</p>
<p class="tracking-wide">Tracking Wide</p>
<p class="tracking-wider">Tracking Wider</p>
<p class="tracking-widest">Tracking Widest</p>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<p class="tracking-tighter">Tracking Tighter</p>
<p class="tracking-normal">Tracking Normal</p>
<p class="tracking-widest">Tracking Widest</p>
```
:::
::::

## Text Decoration

::::{.docs-example}

::: {.docs-example-preview}
<p class="underline">Texto sublinhado</p>
<p class="line-through">Texto riscado</p>
<p class="no-underline">Sem decoração</p>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<p class="underline">Texto sublinhado</p>
<p class="line-through">Texto riscado</p>
<p class="no-underline">Sem decoração</p>
```
:::
::::

## Classes Disponíveis

### Headings
- `.heading-1` a `.heading-6` - Títulos responsivos

### Body
- `.body-1`, `.body-2` - Texto de corpo

### Variações
- `.subtitle-1`, `.subtitle-2` - Subtítulos
- `.lead` - Texto introdutório
- `.caption` - Legendas

### Transform
- `.text-uppercase`, `.text-lowercase`, `.text-capitalize`, `.text-normal-case`

### Truncate
- `.text-truncate` - Trunca com reticências
- `.line-clamp-1`, `.line-clamp-2`, `.line-clamp-3`

### Line Height
- `.leading-none`, `.leading-tight`, `.leading-snug`, `.leading-normal`, `.leading-relaxed`, `.leading-loose`

### Letter Spacing
- `.tracking-tighter`, `.tracking-tight`, `.tracking-normal`, `.tracking-wide`, `.tracking-wider`, `.tracking-widest`

### Decoration
- `.underline`, `.line-through`, `.no-underline`

### White Space
- `.whitespace-normal`, `.whitespace-nowrap`, `.whitespace-pre`, `.whitespace-pre-line`, `.whitespace-pre-wrap`

### Word Break
- `.break-normal`, `.break-words`, `.break-all`

## Boas Práticas

1. **Hierarquia clara**: Use headings em ordem (h1 → h2 → h3)
2. **Legibilidade**: Line-height de 1.5-1.6 para texto de corpo
3. **Contraste**: Garanta contraste adequado (WCAG AA)
4. **Responsividade**: Headings ajustam automaticamente em mobile
5. **Truncate com cuidado**: Use apenas quando necessário
