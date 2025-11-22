# Alerts

Os alerts são componentes de notificação que exibem mensagens importantes para o usuário, como sucessos, avisos, erros ou informações gerais.

## Alert Básico

::::{.docs-example}

::: {.docs-example-preview}
<div class="alert">
  <div class="alert-title">Informação</div>
  <div class="alert-description">Esta é uma mensagem informativa básica.</div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="alert">
  <div class="alert-title">Informação</div>
  <div class="alert-description">Esta é uma mensagem informativa básica.</div>
</div>
```
:::
::::

## Tipos de Alert

### Alert de Sucesso

::::{.docs-example}

::: {.docs-example-preview}
<div class="alert alert-success">
  <div class="alert-title">
    <i class="bi bi-check-circle-fill alert-icon"></i>
    Sucesso!
  </div>
  <div class="alert-description">Sua operação foi concluída com sucesso.</div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="alert alert-success">
  <div class="alert-title">
    <i class="bi bi-check-circle-fill alert-icon"></i>
    Sucesso!
  </div>
  <div class="alert-description">Sua operação foi concluída com sucesso.</div>
</div>
```
:::
::::

### Alert de Informação

::::{.docs-example}

::: {.docs-example-preview}
<div class="alert alert-info">
  <div class="alert-title">
    <i class="bi bi-info-circle-fill alert-icon"></i>
    Informação
  </div>
  <div class="alert-description">Aqui está uma informação importante para você.</div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="alert alert-info">
  <div class="alert-title">
    <i class="bi bi-info-circle-fill alert-icon"></i>
    Informação
  </div>
  <div class="alert-description">Aqui está uma informação importante para você.</div>
</div>
```
:::
::::

### Alert de Aviso

::::{.docs-example}

::: {.docs-example-preview}
<div class="alert alert-warning">
  <div class="alert-title">
    <i class="bi bi-exclamation-triangle-fill alert-icon"></i>
    Atenção!
  </div>
  <div class="alert-description">Esta ação pode ter consequências. Prossiga com cuidado.</div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="alert alert-warning">
  <div class="alert-title">
    <i class="bi bi-exclamation-triangle-fill alert-icon"></i>
    Atenção!
  </div>
  <div class="alert-description">Esta ação pode ter consequências. Prossiga com cuidado.</div>
</div>
```
:::
::::

### Alert de Erro

::::{.docs-example}

::: {.docs-example-preview}
<div class="alert alert-error">
  <div class="alert-title">
    <i class="bi bi-x-circle-fill alert-icon"></i>
    Erro!
  </div>
  <div class="alert-description">Ocorreu um erro ao processar sua solicitação. Tente novamente.</div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="alert alert-error">
  <div class="alert-title">
    <i class="bi bi-x-circle-fill alert-icon"></i>
    Erro!
  </div>
  <div class="alert-description">Ocorreu um erro ao processar sua solicitação. Tente novamente.</div>
</div>
```
:::
::::

## Alert Dispensável (Dismissible)

::::{.docs-example}

::: {.docs-example-preview}
<div class="alert alert-success alert-dismissible">
  <div class="alert-title">
    <i class="bi bi-check-circle-fill alert-icon"></i>
    Sucesso!
  </div>
  <div class="alert-description">Você pode fechar este alerta clicando no botão X.</div>
  <button class="alert-close">
    <i class="bi bi-x"></i>
  </button>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="alert alert-success alert-dismissible">
  <div class="alert-title">
    <i class="bi bi-check-circle-fill alert-icon"></i>
    Sucesso!
  </div>
  <div class="alert-description">Você pode fechar este alerta clicando no botão X.</div>
  <button class="alert-close">
    <i class="bi bi-x"></i>
  </button>
</div>
```
:::
::::

## Alerts Dispensáveis com Diferentes Tipos

::::{.docs-example}

::: {.docs-example-preview .flex .flex-column .gap-3}
<div class="alert alert-info alert-dismissible">
  <div class="alert-title">
    <i class="bi bi-info-circle-fill alert-icon"></i>
    Informação
  </div>
  <div class="alert-description">Este é um alerta informativo que pode ser fechado.</div>
  <button class="alert-close">
    <i class="bi bi-x"></i>
  </button>
</div>

<div class="alert alert-warning alert-dismissible">
  <div class="alert-title">
    <i class="bi bi-exclamation-triangle-fill alert-icon"></i>
    Aviso
  </div>
  <div class="alert-description">Este é um alerta de aviso que pode ser fechado.</div>
  <button class="alert-close">
    <i class="bi bi-x"></i>
  </button>
</div>

<div class="alert alert-error alert-dismissible">
  <div class="alert-title">
    <i class="bi bi-x-circle-fill alert-icon"></i>
    Erro
  </div>
  <div class="alert-description">Este é um alerta de erro que pode ser fechado.</div>
  <button class="alert-close">
    <i class="bi bi-x"></i>
  </button>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="alert alert-info alert-dismissible">
  <div class="alert-title">
    <i class="bi bi-info-circle-fill alert-icon"></i>
    Informação
  </div>
  <div class="alert-description">Este é um alerta informativo que pode ser fechado.</div>
  <button class="alert-close">
    <i class="bi bi-x"></i>
  </button>
</div>

<div class="alert alert-warning alert-dismissible">
  <div class="alert-title">
    <i class="bi bi-exclamation-triangle-fill alert-icon"></i>
    Aviso
  </div>
  <div class="alert-description">Este é um alerta de aviso que pode ser fechado.</div>
  <button class="alert-close">
    <i class="bi bi-x"></i>
  </button>
</div>

<div class="alert alert-error alert-dismissible">
  <div class="alert-title">
    <i class="bi bi-x-circle-fill alert-icon"></i>
    Erro
  </div>
  <div class="alert-description">Este é um alerta de erro que pode ser fechado.</div>
  <button class="alert-close">
    <i class="bi bi-x"></i>
  </button>
</div>
```
:::
::::

## Alert Simples (Sem Descrição)

::::{.docs-example}

::: {.docs-example-preview .flex .flex-column .gap-3}
<div class="alert alert-success">
  <div class="alert-title">
    <i class="bi bi-check-circle-fill alert-icon"></i>
    Operação concluída com sucesso!
  </div>
</div>

<div class="alert alert-info">
  <div class="alert-title">
    <i class="bi bi-info-circle-fill alert-icon"></i>
    Você tem 3 novas notificações
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="alert alert-success">
  <div class="alert-title">
    <i class="bi bi-check-circle-fill alert-icon"></i>
    Operação concluída com sucesso!
  </div>
</div>

<div class="alert alert-info">
  <div class="alert-title">
    <i class="bi bi-info-circle-fill alert-icon"></i>
    Você tem 3 novas notificações
  </div>
</div>
```
:::
::::

## Casos de Uso

### Confirmação de Ação

::::{.docs-example}

::: {.docs-example-preview}
<div class="alert alert-success">
  <div class="alert-title">
    <i class="bi bi-check-circle-fill alert-icon"></i>
    Cadastro Realizado!
  </div>
  <div class="alert-description">
    Seu cadastro foi realizado com sucesso. Enviamos um email de confirmação para seu endereço.
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="alert alert-success">
  <div class="alert-title">
    <i class="bi bi-check-circle-fill alert-icon"></i>
    Cadastro Realizado!
  </div>
  <div class="alert-description">
    Seu cadastro foi realizado com sucesso. Enviamos um email de confirmação para seu endereço.
  </div>
</div>
```
:::
::::

### Aviso de Manutenção

::::{.docs-example}

::: {.docs-example-preview}
<div class="alert alert-warning alert-dismissible">
  <div class="alert-title">
    <i class="bi bi-exclamation-triangle-fill alert-icon"></i>
    Manutenção Programada
  </div>
  <div class="alert-description">
    O sistema estará em manutenção no dia 25/11 das 02:00 às 04:00. Durante este período, alguns serviços podem ficar indisponíveis.
  </div>
  <button class="alert-close">
    <i class="bi bi-x"></i>
  </button>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="alert alert-warning alert-dismissible">
  <div class="alert-title">
    <i class="bi bi-exclamation-triangle-fill alert-icon"></i>
    Manutenção Programada
  </div>
  <div class="alert-description">
    O sistema estará em manutenção no dia 25/11 das 02:00 às 04:00.
  </div>
  <button class="alert-close">
    <i class="bi bi-x"></i>
  </button>
</div>
```
:::
::::

### Erro de Validação

::::{.docs-example}

::: {.docs-example-preview}
<div class="alert alert-error">
  <div class="alert-title">
    <i class="bi bi-x-circle-fill alert-icon"></i>
    Erro de Validação
  </div>
  <div class="alert-description">
    Por favor, corrija os seguintes erros antes de continuar:
    <ul class="mt-2">
      <li>O campo email é obrigatório</li>
      <li>A senha deve ter no mínimo 8 caracteres</li>
    </ul>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="alert alert-error">
  <div class="alert-title">
    <i class="bi bi-x-circle-fill alert-icon"></i>
    Erro de Validação
  </div>
  <div class="alert-description">
    Por favor, corrija os seguintes erros antes de continuar:
    <ul class="mt-2">
      <li>O campo email é obrigatório</li>
      <li>A senha deve ter no mínimo 8 caracteres</li>
    </ul>
  </div>
</div>
```
:::
::::

## Implementação JavaScript (Dispensável)

Para fechar alerts dispensáveis, adicione este JavaScript:

```javascript
document.querySelectorAll('.alert-close').forEach(button => {
  button.addEventListener('click', function() {
    this.closest('.alert').style.display = 'none';
  });
});
```

## Classes Disponíveis

### Estrutura
- `.alert` - Container principal do alert
- `.alert-title` - Título do alert
- `.alert-description` - Descrição/conteúdo do alert
- `.alert-icon` - Ícone do alert

### Tipos
- `.alert-success` - Alert de sucesso (verde)
- `.alert-info` - Alert de informação (azul)
- `.alert-warning` - Alert de aviso (amarelo)
- `.alert-error` ou `.alert-danger` - Alert de erro (vermelho)

### Modificadores
- `.alert-dismissible` - Permite fechar o alert
- `.alert-close` - Botão de fechar (dentro de alert-dismissible)

## Boas Práticas

1. **Use o tipo apropriado**: Escolha o tipo de alert que melhor representa a mensagem
2. **Seja claro e conciso**: Mensagens de alert devem ser diretas e fáceis de entender
3. **Use ícones**: Ícones ajudam a identificar rapidamente o tipo de mensagem
4. **Permita fechar quando apropriado**: Use `.alert-dismissible` para mensagens não críticas
5. **Posicionamento**: Coloque alerts próximos ao contexto relevante
6. **Não abuse**: Muitos alerts podem sobrecarregar o usuário
7. **Acessibilidade**: Considere adicionar `role="alert"` para leitores de tela
