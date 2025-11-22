# Paginator

O paginator é um componente para navegação entre páginas de conteúdo paginado.

## Paginator Básico

::::{.docs-example}

::: {.docs-example-preview}
<div class="paginator">
  <a href="#"><i class="bi bi-chevron-left"></i></a>
  <a href="#">1</a>
  <span>2</span>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#"><i class="bi bi-chevron-right"></i></a>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="paginator">
  <a href="#"><i class="bi bi-chevron-left"></i></a>
  <a href="#">1</a>
  <span>2</span>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#"><i class="bi bi-chevron-right"></i></a>
</div>
```
:::
::::

## Paginator com Reticências

::::{.docs-example}

::: {.docs-example-preview}
<div class="paginator">
  <a href="#"><i class="bi bi-chevron-left"></i></a>
  <a href="#">1</a>
  <a href="#">2</a>
  <a href="#">3</a>
  <a>...</a>
  <a href="#">10</a>
  <span>11</span>
  <a href="#">12</a>
  <a>...</a>
  <a href="#">50</a>
  <a href="#"><i class="bi bi-chevron-right"></i></a>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="paginator">
  <a href="#"><i class="bi bi-chevron-left"></i></a>
  <a href="#">1</a>
  <a href="#">2</a>
  <a href="#">3</a>
  <a>...</a>
  <a href="#">10</a>
  <span>11</span>
  <a href="#">12</a>
  <a>...</a>
  <a href="#">50</a>
  <a href="#"><i class="bi bi-chevron-right"></i></a>
</div>
```
:::
::::

## Classes Disponíveis

- `.paginator` - Container principal
- `a` - Link para página
- `span` - Página atual (destacada)

## Boas Práticas

1. **Página atual**: Use `<span>` para a página ativa
2. **Navegação clara**: Sempre inclua setas prev/next
3. **Reticências**: Use para grandes quantidades de páginas
4. **Links funcionais**: Garanta que todos os links funcionem
5. **Responsividade**: Considere ocultar números em mobile
