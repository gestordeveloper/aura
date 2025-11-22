# Messages

Os messages são componentes de comunicação visual que exibem mensagens centralizadas com bordas coloridas, ideais para páginas de status ou feedback.

## Message Básico

::::{.docs-example}

::: {.docs-example-preview}
<div class="message">
  <div class="title">Mensagem Padrão</div>
  <div class="body">
    <p>Esta é uma mensagem básica com borda padrão.</p>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="message">
  <div class="title">Mensagem Padrão</div>
  <div class="body">
    <p>Esta é uma mensagem básica com borda padrão.</p>
  </div>
</div>
```
:::
::::

## Messages com Cores

::::{.docs-example}

::: {.docs-example-preview .flex .flex-column .gap-3}
<div class="message message-aura-500">
  <div class="title">Mensagem Aura</div>
  <div class="body">
    <p>Mensagem com cor primária do sistema.</p>
  </div>
</div>

<div class="message message-blue">
  <div class="title">Mensagem Azul</div>
  <div class="body">
    <p>Mensagem com cor azul.</p>
  </div>
</div>

<div class="message message-green">
  <div class="title">Mensagem Verde</div>
  <div class="body">
    <p>Mensagem com cor verde.</p>
  </div>
</div>

<div class="message message-yellow">
  <div class="title">Mensagem Amarela</div>
  <div class="body">
    <p>Mensagem com cor amarela.</p>
  </div>
</div>

<div class="message message-red">
  <div class="title">Mensagem Vermelha</div>
  <div class="body">
    <p>Mensagem com cor vermelha.</p>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="message message-aura-500">
  <div class="title">Mensagem Aura</div>
  <div class="body">
    <p>Mensagem com cor primária do sistema.</p>
  </div>
</div>

<div class="message message-blue">
  <div class="title">Mensagem Azul</div>
  <div class="body">
    <p>Mensagem com cor azul.</p>
  </div>
</div>

<div class="message message-green">
  <div class="title">Mensagem Verde</div>
  <div class="body">
    <p>Mensagem com cor verde.</p>
  </div>
</div>

<div class="message message-yellow">
  <div class="title">Mensagem Amarela</div>
  <div class="body">
    <p>Mensagem com cor amarela.</p>
  </div>
</div>

<div class="message message-red">
  <div class="title">Mensagem Vermelha</div>
  <div class="body">
    <p>Mensagem com cor vermelha.</p>
  </div>
</div>
```
:::
::::

## Message com Link

::::{.docs-example}

::: {.docs-example-preview}
<div class="message message-blue">
  <div class="title">Bem-vindo!</div>
  <div class="body">
    <p>Obrigado por se cadastrar. <a href="#">Clique aqui</a> para começar.</p>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="message message-blue">
  <div class="title">Bem-vindo!</div>
  <div class="body">
    <p>Obrigado por se cadastrar. <a href="#">Clique aqui</a> para começar.</p>
  </div>
</div>
```
:::
::::

## Casos de Uso

### Página de Sucesso

::::{.docs-example}

::: {.docs-example-preview}
<div class="message message-green">
  <div class="title">
    <i class="bi bi-check-circle-fill" style="font-size: 3rem; display: block; margin-bottom: 1rem;"></i>
    Pagamento Confirmado!
  </div>
  <div class="body">
    <p>Seu pagamento foi processado com sucesso.</p>
    <p>Número do pedido: <strong>#12345</strong></p>
    <p class="mt-3">
      <a href="#">Ver detalhes do pedido</a> ou 
      <a href="#">Voltar para a loja</a>
    </p>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="message message-green">
  <div class="title">
    <i class="bi bi-check-circle-fill" style="font-size: 3rem; display: block; margin-bottom: 1rem;"></i>
    Pagamento Confirmado!
  </div>
  <div class="body">
    <p>Seu pagamento foi processado com sucesso.</p>
    <p>Número do pedido: <strong>#12345</strong></p>
    <p class="mt-3">
      <a href="#">Ver detalhes do pedido</a> ou 
      <a href="#">Voltar para a loja</a>
    </p>
  </div>
</div>
```
:::
::::

### Página de Erro 404

::::{.docs-example}

::: {.docs-example-preview}
<div class="message message-red">
  <div class="title">
    <i class="bi bi-exclamation-triangle-fill" style="font-size: 3rem; display: block; margin-bottom: 1rem;"></i>
    Página Não Encontrada
  </div>
  <div class="body">
    <p>Desculpe, a página que você está procurando não existe.</p>
    <p class="mt-3">
      <a href="#">Voltar para a página inicial</a>
    </p>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="message message-red">
  <div class="title">
    <i class="bi bi-exclamation-triangle-fill" style="font-size: 3rem; display: block; margin-bottom: 1rem;"></i>
    Página Não Encontrada
  </div>
  <div class="body">
    <p>Desculpe, a página que você está procurando não existe.</p>
    <p class="mt-3">
      <a href="#">Voltar para a página inicial</a>
    </p>
  </div>
</div>
```
:::
::::

### Confirmação de Email

::::{.docs-example}

::: {.docs-example-preview}
<div class="message message-blue">
  <div class="title">
    <i class="bi bi-envelope-fill" style="font-size: 3rem; display: block; margin-bottom: 1rem;"></i>
    Verifique seu Email
  </div>
  <div class="body">
    <p>Enviamos um link de confirmação para <strong>seu@email.com</strong></p>
    <p>Por favor, verifique sua caixa de entrada e clique no link para ativar sua conta.</p>
    <p class="mt-3">
      Não recebeu o email? <a href="#">Reenviar</a>
    </p>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="message message-blue">
  <div class="title">
    <i class="bi bi-envelope-fill" style="font-size: 3rem; display: block; margin-bottom: 1rem;"></i>
    Verifique seu Email
  </div>
  <div class="body">
    <p>Enviamos um link de confirmação para <strong>seu@email.com</strong></p>
    <p>Por favor, verifique sua caixa de entrada e clique no link para ativar sua conta.</p>
    <p class="mt-3">
      Não recebeu o email? <a href="#">Reenviar</a>
    </p>
  </div>
</div>
```
:::
::::

### Manutenção do Sistema

::::{.docs-example}

::: {.docs-example-preview}
<div class="message message-yellow">
  <div class="title">
    <i class="bi bi-tools" style="font-size: 3rem; display: block; margin-bottom: 1rem;"></i>
    Sistema em Manutenção
  </div>
  <div class="body">
    <p>Estamos realizando melhorias no sistema.</p>
    <p>Voltaremos em breve. Obrigado pela compreensão!</p>
    <p class="mt-3">
      Previsão de retorno: <strong>25/11/2025 às 14:00</strong>
    </p>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="message message-yellow">
  <div class="title">
    <i class="bi bi-tools" style="font-size: 3rem; display: block; margin-bottom: 1rem;"></i>
    Sistema em Manutenção
  </div>
  <div class="body">
    <p>Estamos realizando melhorias no sistema.</p>
    <p>Voltaremos em breve. Obrigado pela compreensão!</p>
    <p class="mt-3">
      Previsão de retorno: <strong>25/11/2025 às 14:00</strong>
    </p>
  </div>
</div>
```
:::
::::

## Classes Disponíveis

### Estrutura
- `.message` - Container principal da mensagem
- `.title` - Título da mensagem
- `.body` - Corpo da mensagem

### Cores
- `.message-aura-{50-900}` - Variações da cor primária Aura
- `.message-secondary-{50-900}` - Variações da cor secundária
- `.message-blue`, `.message-blue-{50-900}` - Variações azul
- `.message-green`, `.message-green-{50-900}` - Variações verde
- `.message-red`, `.message-red-{50-900}` - Variações vermelho
- `.message-yellow`, `.message-yellow-{50-900}` - Variações amarelo
- `.message-gray-{50-900}` - Variações cinza

## Boas Práticas

1. **Use para páginas de status**: Messages são ideais para páginas dedicadas (404, sucesso, erro)
2. **Centralize o conteúdo**: O componente já centraliza automaticamente
3. **Adicione ícones grandes**: Ícones grandes ajudam a comunicar visualmente o status
4. **Forneça ações claras**: Sempre inclua links para próximos passos
5. **Seja conciso**: Mantenha mensagens curtas e diretas
6. **Escolha cores apropriadas**: Verde para sucesso, vermelho para erro, azul para informação, amarelo para aviso
