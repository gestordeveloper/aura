# Tables

As tables são componentes para exibir dados tabulares de forma organizada e responsiva.

## Table Básica

::::{.docs-example}

::: {.docs-example-preview}
<div class="table-container">
  <table class="table">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>João Silva</td>
        <td>joao@example.com</td>
        <td><span class="badge badge-green">Ativo</span></td>
      </tr>
      <tr>
        <td>Maria Santos</td>
        <td>maria@example.com</td>
        <td><span class="badge badge-green">Ativo</span></td>
      </tr>
      <tr>
        <td>Pedro Costa</td>
        <td>pedro@example.com</td>
        <td><span class="badge badge-red">Inativo</span></td>
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
        <th>Nome</th>
        <th>Email</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>João Silva</td>
        <td>joao@example.com</td>
        <td><span class="badge badge-green">Ativo</span></td>
      </tr>
      <tr>
        <td>Maria Santos</td>
        <td>maria@example.com</td>
        <td><span class="badge badge-green">Ativo</span></td>
      </tr>
    </tbody>
  </table>
</div>
```
:::
::::

## Table Pequena

::::{.docs-example}

::: {.docs-example-preview}
<div class="table-container">
  <table class="table-sm">
    <thead>
      <tr>
        <th>ID</th>
        <th>Produto</th>
        <th>Preço</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>#001</td>
        <td>Notebook</td>
        <td>R$ 2.999,00</td>
      </tr>
      <tr>
        <td>#002</td>
        <td>Mouse</td>
        <td>R$ 49,90</td>
      </tr>
    </tbody>
  </table>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="table-container">
  <table class="table-sm">
    <thead>
      <tr>
        <th>ID</th>
        <th>Produto</th>
        <th>Preço</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>#001</td>
        <td>Notebook</td>
        <td>R$ 2.999,00</td>
      </tr>
      <tr>
        <td>#002</td>
        <td>Mouse</td>
        <td>R$ 49,90</td>
      </tr>
    </tbody>
  </table>
</div>
```
:::
::::

## Table com Imagens

::::{.docs-example}

::: {.docs-example-preview}
<div class="table-container">
  <table class="table">
    <thead>
      <tr>
        <th>Usuário</th>
        <th>Nome</th>
        <th>Cargo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <img src="https://i.pravatar.cc/150?img=1" alt="User" class="img_thumb">
        </td>
        <td><a href="#">João Silva</a></td>
        <td>Desenvolvedor</td>
      </tr>
      <tr>
        <td>
          <img src="https://i.pravatar.cc/150?img=2" alt="User" class="img_thumb">
        </td>
        <td><a href="#">Maria Santos</a></td>
        <td>Designer</td>
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
        <th>Usuário</th>
        <th>Nome</th>
        <th>Cargo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <img src="user.jpg" alt="User" class="img_thumb">
        </td>
        <td><a href="#">João Silva</a></td>
        <td>Desenvolvedor</td>
      </tr>
    </tbody>
  </table>
</div>
```
:::
::::

## Table com Linhas Coloridas

::::{.docs-example}

::: {.docs-example-preview}
<div class="table-container">
  <table class="table">
    <thead>
      <tr>
        <th>Tarefa</th>
        <th>Prioridade</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr class="tr-green">
        <td>Concluir documentação</td>
        <td>Alta</td>
        <td>Concluído</td>
      </tr>
      <tr class="tr-yellow">
        <td>Revisar código</td>
        <td>Média</td>
        <td>Em andamento</td>
      </tr>
      <tr class="tr-red">
        <td>Corrigir bugs</td>
        <td>Alta</td>
        <td>Pendente</td>
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
        <th>Tarefa</th>
        <th>Prioridade</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr class="tr-green">
        <td>Concluir documentação</td>
        <td>Alta</td>
        <td>Concluído</td>
      </tr>
      <tr class="tr-yellow">
        <td>Revisar código</td>
        <td>Média</td>
        <td>Em andamento</td>
      </tr>
      <tr class="tr-red">
        <td>Corrigir bugs</td>
        <td>Alta</td>
        <td>Pendente</td>
      </tr>
    </tbody>
  </table>
</div>
```
:::
::::

## Table com Ações

::::{.docs-example}

::: {.docs-example-preview}
<div class="table-container">
  <table class="table-sm">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>João Silva</td>
        <td>joao@example.com</td>
        <td>
          <div class="actions">
            <button class="btn-sm btn-outline-aura-500">
              <i class="bi bi-pencil"></i>
            </button>
            <button class="btn-sm btn-outline-red">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </td>
      </tr>
      <tr>
        <td>Maria Santos</td>
        <td>maria@example.com</td>
        <td>
          <div class="actions">
            <button class="btn-sm btn-outline-aura-500">
              <i class="bi bi-pencil"></i>
            </button>
            <button class="btn-sm btn-outline-red">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="table-container">
  <table class="table-sm">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>João Silva</td>
        <td>joao@example.com</td>
        <td>
          <div class="actions">
            <button class="btn-sm btn-outline-aura-500">
              <i class="bi bi-pencil"></i>
            </button>
            <button class="btn-sm btn-outline-red">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```
:::
::::

## Classes Disponíveis

### Containers
- `.table-container` - Container com borda e overflow
- `.table` - Tabela padrão
- `.table-sm` - Tabela compacta

### Elementos
- `thead` - Cabeçalho da tabela
- `tbody` - Corpo da tabela
- `tr` - Linha da tabela
- `th` - Célula de cabeçalho
- `td` - Célula de dados

### Imagens
- `.img_thumb` - Imagem circular pequena (28px)
- `.img_product` - Imagem de produto (60px, 16:9)

### Cores de Linha
- `.tr-aura-{50-900}` - Variações Aura
- `.tr-blue`, `.tr-blue-{50-900}` - Variações azul
- `.tr-green`, `.tr-green-{50-900}` - Variações verde
- `.tr-red`, `.tr-red-{50-900}` - Variações vermelho
- `.tr-yellow`, `.tr-yellow-{50-900}` - Variações amarelo

## Boas Práticas

1. **Sempre use table-container**: Garante bordas e responsividade
2. **Cabeçalhos descritivos**: Use `<th>` com textos claros
3. **Dados alinhados**: Mantenha alinhamento consistente
4. **Ações visíveis**: Use botões pequenos para ações
5. **Cores para status**: Use cores de linha para indicar estados
6. **Responsividade**: Considere scroll horizontal em telas pequenas
