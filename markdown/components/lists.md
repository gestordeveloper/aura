# Lists

Os lists são componentes para exibir coleções de itens de forma organizada, com suporte para thumbnails, ações e cores.

## List Básica

::::{.docs-example}

::: {.docs-example-preview}
<ul class="list">
  <li class="list_item">
    <div class="infors">
      <div class="infors_body">
        <div class="body_data">
          <a href="#">Item da Lista 1</a>
          <p>Descrição do primeiro item</p>
        </div>
      </div>
    </div>
  </li>
  <li class="list_item mt-2">
    <div class="infors">
      <div class="infors_body">
        <div class="body_data">
          <a href="#">Item da Lista 2</a>
          <p>Descrição do segundo item</p>
        </div>
      </div>
    </div>
  </li>
</ul>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<ul class="list">
  <li class="list_item">
    <div class="infors">
      <div class="infors_body">
        <div class="body_data">
          <a href="#">Item da Lista 1</a>
          <p>Descrição do primeiro item</p>
        </div>
      </div>
    </div>
  </li>
  <li class="list_item">
    <div class="infors">
      <div class="infors_body">
        <div class="body_data">
          <a href="#">Item da Lista 2</a>
          <p>Descrição do segundo item</p>
        </div>
      </div>
    </div>
  </li>
</ul>
```
:::
::::

## List com Ações

::::{.docs-example}

::: {.docs-example-preview}
<ul class="list">
  <li class="list_item">
    <div class="infors">
      <div class="infors_body">
        <div class="body_data">
          <a href="#">Tarefa Importante</a>
          <p>Esta tarefa precisa ser concluída hoje</p>
        </div>
        <div class="body_actions">
          <button class="btn btn-sm btn-outline-aura-500">
            <i class="bi bi-pencil"></i>
          </button>
          <button class="btn btn-sm btn-outline-red">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  </li>
</ul>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<ul class="list">
  <li class="list_item">
    <div class="infors">
      <div class="infors_body">
        <div class="body_data">
          <a href="#">Tarefa Importante</a>
          <p>Esta tarefa precisa ser concluída hoje</p>
        </div>
        <div class="body_actions">
          <button class="btn btn-sm btn-outline-aura-500">
            <i class="bi bi-pencil"></i>
          </button>
          <button class="btn btn-sm btn-outline-red">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  </li>
</ul>
```
:::
::::

## List com Thumbnail

::::{.docs-example}

::: {.docs-example-preview}
<ul class="list-thumb">
  <li class="list_item">
    <div class="infors">
      <div class="infors_thumb">
        <img src="https://i.pravatar.cc/150?img=1" alt="User">
      </div>
      <div class="infors_body">
        <div class="body_data">
          <a href="#">João Silva</a>
          <p>Desenvolvedor Full Stack</p>
        </div>
      </div>
    </div>
  </li>
  <li class="list_item mt-2">
    <div class="infors">
      <div class="infors_thumb">
        <img src="https://i.pravatar.cc/150?img=2" alt="User">
      </div>
      <div class="infors_body">
        <div class="body_data">
          <a href="#">Maria Santos</a>
          <p>Designer UX/UI</p>
        </div>
      </div>
    </div>
  </li>
</ul>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<ul class="list-thumb">
  <li class="list_item">
    <div class="infors">
      <div class="infors_thumb">
        <img src="user1.jpg" alt="User">
      </div>
      <div class="infors_body">
        <div class="body_data">
          <a href="#">João Silva</a>
          <p>Desenvolvedor Full Stack</p>
        </div>
      </div>
    </div>
  </li>
  <li class="list_item">
    <div class="infors">
      <div class="infors_thumb">
        <img src="user2.jpg" alt="User">
      </div>
      <div class="infors_body">
        <div class="body_data">
          <a href="#">Maria Santos</a>
          <p>Designer UX/UI</p>
        </div>
      </div>
    </div>
  </li>
</ul>
```
:::
::::

## List com Cores

::::{.docs-example}

::: {.docs-example-preview}
<ul class="list">
  <li class="list_item list-aura-500">
    <div class="infors">
      <div class="infors_body">
        <div class="body_data">
          <a href="#">Item Aura</a>
          <p>Item com cor primária</p>
        </div>
      </div>
    </div>
  </li>
  <li class="list_item list-blue mt-2">
    <div class="infors">
      <div class="infors_body">
        <div class="body_data">
          <a href="#">Item Azul</a>
          <p>Item com cor azul</p>
        </div>
      </div>
    </div>
  </li>
  <li class="list_item list-green mt-2">
    <div class="infors">
      <div class="infors_body">
        <div class="body_data">
          <a href="#">Item Verde</a>
          <p>Item com cor verde</p>
        </div>
      </div>
    </div>
  </li>
</ul>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<ul class="list">
  <li class="list_item list-aura-500">
    <div class="infors">
      <div class="infors_body">
        <div class="body_data">
          <a href="#">Item Aura</a>
          <p>Item com cor primária</p>
        </div>
      </div>
    </div>
  </li>
  <li class="list_item list-blue">
    <div class="infors">
      <div class="infors_body">
        <div class="body_data">
          <a href="#">Item Azul</a>
          <p>Item com cor azul</p>
        </div>
      </div>
    </div>
  </li>
  <li class="list_item list-green">
    <div class="infors">
      <div class="infors_body">
        <div class="body_data">
          <a href="#">Item Verde</a>
          <p>Item com cor verde</p>
        </div>
      </div>
    </div>
  </li>
</ul>
```
:::
::::

## Casos de Uso

### Lista de Notificações

::::{.docs-example}

::: {.docs-example-preview}
<div class="card">
  <div class="card_header">
    <h2>Notificações</h2>
    <span class="badge badge-pill badge-red">3</span>
  </div>
  <div class="card_body p-0">
    <ul class="list-thumb">
      <li class="list_item">
        <div class="infors">
          <div class="infors_thumb">
            <img src="https://i.pravatar.cc/150?img=3" alt="User">
          </div>
          <div class="infors_body">
            <div class="body_data">
              <a href="#">Pedro comentou em sua publicação</a>
              <p>Há 5 minutos</p>
            </div>
          </div>
        </div>
      </li>
      <li class="list_item mt-2">
        <div class="infors">
          <div class="infors_thumb">
            <img src="https://i.pravatar.cc/150?img=4" alt="User">
          </div>
          <div class="infors_body">
            <div class="body_data">
              <a href="#">Ana curtiu sua foto</a>
              <p>Há 1 hora</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="card">
  <div class="card_header">
    <h2>Notificações</h2>
    <span class="badge badge-pill badge-red">3</span>
  </div>
  <div class="card_body p-0">
    <ul class="list-thumb">
      <li class="list_item">
        <div class="infors">
          <div class="infors_thumb">
            <img src="user.jpg" alt="User">
          </div>
          <div class="infors_body">
            <div class="body_data">
              <a href="#">Pedro comentou em sua publicação</a>
              <p>Há 5 minutos</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
```
:::
::::

## Classes Disponíveis

### Containers
- `.list` - Lista básica
- `.list-thumb` - Lista com thumbnails

### Items
- `.list_item` - Item da lista
- `.infors` - Container de informações
- `.infors_thumb` - Thumbnail do item
- `.infors_body` - Corpo do item
- `.body_data` - Dados do item
- `.body_actions` - Ações do item

### Cores
- `.list-aura-{50-900}` - Variações Aura
- `.list-blue`, `.list-blue-{50-900}` - Variações azul
- `.list-green`, `.list-green-{50-900}` - Variações verde
- `.list-red`, `.list-red-{50-900}` - Variações vermelho
- `.list-yellow`, `.list-yellow-{50-900}` - Variações amarelo

## Boas Práticas

1. **Use thumbnails quando relevante**: Imagens ajudam na identificação rápida
2. **Ações contextuais**: Adicione botões de ação quando necessário
3. **Cores para categorização**: Use cores para diferenciar tipos de itens
4. **Espaçamento consistente**: Use `mt-2` ou `mt-3` entre itens
5. **Links descritivos**: Títulos devem ser claros e clicáveis
