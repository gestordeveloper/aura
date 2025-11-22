# Toasts

Os toasts são notificações temporárias que aparecem no canto da tela para informar o usuário sobre ações ou eventos.

## Toast Básico

::::{.docs-example}

::: {.docs-example-preview}
<div class="toast">
  <div class="column">
    <i class="bi bi-info-circle-fill"></i>
    <span>Esta é uma notificação básica</span>
  </div>
  <i class="bi bi-x"></i>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="toast">
  <div class="column">
    <i class="bi bi-info-circle-fill"></i>
    <span>Esta é uma notificação básica</span>
  </div>
  <i class="bi bi-x"></i>
</div>
```
:::
::::

## Toasts com Cores

::::{.docs-example}

::: {.docs-example-preview .flex .flex-column .gap-3}
<div class="toast aura-500">
  <div class="column">
    <i class="bi bi-star-fill"></i>
    <span>Toast com cor Aura</span>
  </div>
  <i class="bi bi-x"></i>
</div>

<div class="toast blue">
  <div class="column">
    <i class="bi bi-info-circle-fill"></i>
    <span>Informação importante</span>
  </div>
  <i class="bi bi-x"></i>
</div>

<div class="toast green">
  <div class="column">
    <i class="bi bi-check-circle-fill"></i>
    <span>Operação concluída com sucesso!</span>
  </div>
  <i class="bi bi-x"></i>
</div>

<div class="toast yellow">
  <div class="column">
    <i class="bi bi-exclamation-triangle-fill"></i>
    <span>Atenção: verifique os dados</span>
  </div>
  <i class="bi bi-x"></i>
</div>

<div class="toast red">
  <div class="column">
    <i class="bi bi-x-circle-fill"></i>
    <span>Erro ao processar solicitação</span>
  </div>
  <i class="bi bi-x"></i>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="toast aura-500">
  <div class="column">
    <i class="bi bi-star-fill"></i>
    <span>Toast com cor Aura</span>
  </div>
  <i class="bi bi-x"></i>
</div>

<div class="toast blue">
  <div class="column">
    <i class="bi bi-info-circle-fill"></i>
    <span>Informação importante</span>
  </div>
  <i class="bi bi-x"></i>
</div>

<div class="toast green">
  <div class="column">
    <i class="bi bi-check-circle-fill"></i>
    <span>Operação concluída com sucesso!</span>
  </div>
  <i class="bi bi-x"></i>
</div>

<div class="toast yellow">
  <div class="column">
    <i class="bi bi-exclamation-triangle-fill"></i>
    <span>Atenção: verifique os dados</span>
  </div>
  <i class="bi bi-x"></i>
</div>

<div class="toast red">
  <div class="column">
    <i class="bi bi-x-circle-fill"></i>
    <span>Erro ao processar solicitação</span>
  </div>
  <i class="bi bi-x"></i>
</div>
```
:::
::::

## Container de Toasts

::::{.docs-example}

::: {.docs-example-preview}
<div class="toasts">
  <div class="toast green">
    <div class="column">
      <i class="bi bi-check-circle-fill"></i>
      <span>Arquivo salvo com sucesso</span>
    </div>
    <i class="bi bi-x"></i>
  </div>
  
  <div class="toast blue">
    <div class="column">
      <i class="bi bi-cloud-upload-fill"></i>
      <span>Upload em andamento...</span>
    </div>
    <i class="bi bi-x"></i>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="toasts">
  <div class="toast green">
    <div class="column">
      <i class="bi bi-check-circle-fill"></i>
      <span>Arquivo salvo com sucesso</span>
    </div>
    <i class="bi bi-x"></i>
  </div>
  
  <div class="toast blue">
    <div class="column">
      <i class="bi bi-cloud-upload-fill"></i>
      <span>Upload em andamento...</span>
    </div>
    <i class="bi bi-x"></i>
  </div>
</div>
```
:::
::::

## Casos de Uso

### Notificação de Sucesso

::::{.docs-example}

::: {.docs-example-preview}
<div class="toast green">
  <div class="column">
    <i class="bi bi-check-circle-fill"></i>
    <span>Seu perfil foi atualizado com sucesso!</span>
  </div>
  <i class="bi bi-x"></i>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="toast green">
  <div class="column">
    <i class="bi bi-check-circle-fill"></i>
    <span>Seu perfil foi atualizado com sucesso!</span>
  </div>
  <i class="bi bi-x"></i>
</div>
```
:::
::::

### Notificação de Erro

::::{.docs-example}

::: {.docs-example-preview}
<div class="toast red">
  <div class="column">
    <i class="bi bi-x-circle-fill"></i>
    <span>Falha ao conectar ao servidor. Tente novamente.</span>
  </div>
  <i class="bi bi-x"></i>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="toast red">
  <div class="column">
    <i class="bi bi-x-circle-fill"></i>
    <span>Falha ao conectar ao servidor. Tente novamente.</span>
  </div>
  <i class="bi bi-x"></i>
</div>
```
:::
::::

### Notificação de Aviso

::::{.docs-example}

::: {.docs-example-preview}
<div class="toast yellow">
  <div class="column">
    <i class="bi bi-exclamation-triangle-fill"></i>
    <span>Seu armazenamento está quase cheio (90% usado)</span>
  </div>
  <i class="bi bi-x"></i>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="toast yellow">
  <div class="column">
    <i class="bi bi-exclamation-triangle-fill"></i>
    <span>Seu armazenamento está quase cheio (90% usado)</span>
  </div>
  <i class="bi bi-x"></i>
</div>
```
:::
::::

## Implementação JavaScript

Para criar toasts dinamicamente e com auto-dismiss:

```javascript
function showToast(message, type = 'blue', duration = 6000) {
  // Criar container se não existir
  let container = document.querySelector('.toasts');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toasts';
    document.body.appendChild(container);
  }
  
  // Ícones por tipo
  const icons = {
    green: 'bi-check-circle-fill',
    red: 'bi-x-circle-fill',
    yellow: 'bi-exclamation-triangle-fill',
    blue: 'bi-info-circle-fill',
    'aura-500': 'bi-star-fill'
  };
  
  // Criar toast
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="column">
      <i class="bi ${icons[type] || 'bi-info-circle-fill'}"></i>
      <span>${message}</span>
    </div>
    <i class="bi bi-x"></i>
  `;
  
  // Adicionar ao container
  container.appendChild(toast);
  
  // Botão de fechar
  toast.querySelector('.bi-x').addEventListener('click', () => {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 600);
  });
  
  // Auto-dismiss
  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 600);
  }, duration);
}

// Exemplos de uso:
showToast('Operação concluída!', 'green');
showToast('Erro ao processar', 'red');
showToast('Atenção necessária', 'yellow');
showToast('Nova informação', 'blue');
```

## Animações

O componente toast inclui animações automáticas:

- **show_toast**: Animação de entrada (slide da direita)
- **hide_toast**: Animação de saída (slide para direita)
- **progress**: Barra de progresso na parte inferior (6 segundos)

Para ocultar um toast, adicione a classe `.hide`:

```javascript
toast.classList.add('hide');
```

## Classes Disponíveis

### Estrutura
- `.toasts` - Container fixo no topo direito da tela
- `.toast` - Notificação individual
- `.column` - Container do conteúdo e ícone
- `.hide` - Classe para animar saída

### Cores
- `.aura-500` - Toast com cor primária
- `.blue` - Toast azul (informação)
- `.green` - Toast verde (sucesso)
- `.yellow` - Toast amarelo (aviso)
- `.red` - Toast vermelho (erro)

### Animações (automáticas)
- `show_toast` - Entrada do toast
- `hide_toast` - Saída do toast
- `progress` - Barra de progresso inferior

## Boas Práticas

1. **Use cores apropriadas**: Verde para sucesso, vermelho para erro, amarelo para aviso, azul para informação
2. **Mensagens concisas**: Toasts devem ter mensagens curtas e diretas
3. **Auto-dismiss**: Configure tempo adequado (4-6 segundos)
4. **Posição fixa**: Toasts aparecem no topo direito por padrão
5. **Limite de toasts**: Não exiba muitos toasts simultaneamente
6. **Ícones consistentes**: Use ícones que correspondam ao tipo de mensagem
7. **Permita fechar**: Sempre inclua o botão X para fechar manualmente
8. **Não abuse**: Use toasts apenas para feedback importante e temporário
