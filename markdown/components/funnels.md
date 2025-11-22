# Funnels

O funnel é um componente tipo Kanban para gerenciar itens em diferentes estágios de um processo.

## Funnel Básico

::::{.docs-example}

::: {.docs-example-preview}
<div class="funnel_content">
  <div class="funnel_board" style="height: 400px;">
    <div class="funnel_list">
      <header>
        <div class="infors">
          <h3>Leads</h3>
          <span>Novos contatos</span>
        </div>
        <div class="list_count">5</div>
      </header>
      <ul class="funnel_list_stage">
        <li>
          <div class="infors">
            <div class="infors_body">
              <div class="body_data">
                <a href="#">Cliente A</a>
                <p>Interessado em produto X</p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="infors">
            <div class="infors_body">
              <div class="body_data">
                <a href="#">Cliente B</a>
                <p>Solicitou orçamento</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    
    <div class="funnel_list">
      <header>
        <div class="infors">
          <h3>Qualificados</h3>
          <span>Em análise</span>
        </div>
        <div class="list_count">3</div>
      </header>
      <ul class="funnel_list_stage">
        <li>
          <div class="infors">
            <div class="infors_body">
              <div class="body_data">
                <a href="#">Cliente C</a>
                <p>Reunião agendada</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    
    <div class="funnel_list">
      <header>
        <div class="infors">
          <h3>Negociação</h3>
          <span>Proposta enviada</span>
        </div>
        <div class="list_count">2</div>
      </header>
      <ul class="funnel_list_stage">
        <li>
          <div class="infors">
            <div class="infors_body">
              <div class="body_data">
                <a href="#">Cliente D</a>
                <p>Aguardando aprovação</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="funnel_content">
  <div class="funnel_board">
    <div class="funnel_list">
      <header>
        <div class="infors">
          <h3>Estágio 1</h3>
          <span>Descrição</span>
        </div>
        <div class="list_count">5</div>
      </header>
      <ul class="funnel_list_stage">
        <li>
          <div class="infors">
            <div class="infors_body">
              <div class="body_data">
                <a href="#">Item 1</a>
                <p>Descrição do item</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- Mais estágios... -->
  </div>
</div>
```
:::
::::

## Classes Disponíveis

- `.funnel_content` - Container principal
- `.funnel_board` - Board horizontal
- `.funnel_list` - Coluna/estágio (320px)
- `.funnel_list_stage` - Lista de itens
- `.infors` - Informações do item
- `.infors_body` - Corpo do item
- `.body_data` - Dados do item
- `.body_actions` - Ações do item
- `.list_count` - Contador de itens

## Classes de Estado (Drag & Drop)

- `.is-dragging` - Item sendo arrastado
- `.over` - Área de drop ativa
- `.highlight` - Destaque

## Boas Práticas

1. **Largura fixa**: Cada coluna tem 320px
2. **Scroll horizontal**: Board permite scroll
3. **Drag & Drop**: Implemente para mover itens
4. **Contador**: Atualize `.list_count` dinamicamente
5. **Ações**: Use `.body_actions` para botões
