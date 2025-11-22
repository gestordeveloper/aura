# Accessibility

Utilitários de acessibilidade para tornar sua aplicação mais inclusiva e acessível a todos os usuários.

## Screen Reader Only

Oculta visualmente mas mantém acessível para leitores de tela.

::::{.docs-example}

::: {.docs-example-preview}
<button class="btn btn-aura-500">
  <span class="sr-only">Adicionar ao carrinho</span>
  <i class="bi bi-cart-plus"></i>
</button>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<button class="btn btn-aura-500">
  <span class="sr-only">Adicionar ao carrinho</span>
  <i class="bi bi-cart-plus"></i>
</button>
```
:::
::::

## Skip Link

Link para pular para o conteúdo principal (aparece ao focar).

::::{.docs-example}

::: {.docs-example-preview}
<a href="#main-content" class="skip-link">Pular para o conteúdo principal</a>
<p id="main-content">Conteúdo principal aqui</p>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<a href="#main-content" class="skip-link">
  Pular para o conteúdo principal
</a>

<main id="main-content">
  <!-- Conteúdo -->
</main>
```
:::
::::

## Focus Ring

Anéis de foco para navegação por teclado.

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3}
<button class="btn btn-aura-500 focus-ring">Focus Ring</button>
<button class="btn btn-blue focus-ring focus-ring-offset-0">Offset 0</button>
<button class="btn btn-green focus-ring focus-ring-offset-4">Offset 4</button>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<button class="btn btn-aura-500 focus-ring">Focus Ring</button>
<button class="btn btn-blue focus-ring focus-ring-offset-0">Offset 0</button>
<button class="btn btn-green focus-ring focus-ring-offset-4">Offset 4</button>
```
:::
::::

## Focus Visible

Mostra foco apenas para navegação por teclado.

::::{.docs-example}

::: {.docs-example-preview}
<button class="btn btn-aura-500 focus-visible">
  Foco apenas com teclado (Tab)
</button>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<button class="btn btn-aura-500 focus-visible">
  Foco apenas com teclado
</button>
```
:::
::::

## Classes Disponíveis

### Screen Reader
- `.sr-only` - Oculta visualmente, acessível para leitores de tela
- `.not-sr-only` - Reverte sr-only

### Focus
- `.focus-visible` - Foco apenas para navegação por teclado
- `.focus-ring` - Anel de foco customizado
- `.focus-ring-offset-0` - Sem offset
- `.focus-ring-offset-1` - Offset de 1px
- `.focus-ring-offset-2` - Offset de 2px
- `.focus-ring-offset-4` - Offset de 4px

### Navegação
- `.skip-link` - Link para pular conteúdo

## Media Queries Automáticas

O sistema inclui suporte automático para:

- **prefers-contrast: high** - Bordas mais grossas em modo alto contraste
- **prefers-reduced-motion** - Reduz animações para usuários sensíveis
- **forced-colors** - Suporte para modo de alto contraste do Windows

## Boas Práticas

1. **Sempre use sr-only** para ícones sem texto
2. **Skip links** no topo de cada página
3. **Focus visible** para melhor UX de teclado
4. **Teste com leitores de tela** (NVDA, JAWS, VoiceOver)
5. **Contraste adequado** (WCAG AA mínimo)
6. **Navegação por teclado** funcional em todos os elementos interativos
