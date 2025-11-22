# Tooltips

Os tooltips são pequenas mensagens informativas que aparecem quando o usuário passa o mouse sobre um elemento, fornecendo contexto adicional sem sobrecarregar a interface.

## Tooltip Básico

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center}
<button class="btn btn-aura-500" data-tooltip="Este é um tooltip básico">
  Passe o mouse aqui
</button>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<button class="btn btn-aura-500" data-tooltip="Este é um tooltip básico">
  Passe o mouse aqui
</button>
```
:::
::::

## Posições do Tooltip

### Tooltip no Topo (Padrão)

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center}
<button class="btn btn-outline-aura-500" data-tooltip="Tooltip no topo">
  Topo
</button>
<div class="tooltip tooltip-top show" style="position: relative; display: inline-block; margin-left: 20px;">
  Tooltip no topo
  <div class="tooltip-arrow"></div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<button data-tooltip="Tooltip no topo">Topo</button>

<!-- Estrutura do tooltip -->
<div class="tooltip tooltip-top show">
  Tooltip no topo
  <div class="tooltip-arrow"></div>
</div>
```
:::
::::

### Tooltip Embaixo

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center}
<button class="btn btn-outline-blue" data-tooltip="Tooltip embaixo">
  Embaixo
</button>
<div class="tooltip tooltip-bottom show" style="position: relative; display: inline-block; margin-left: 20px;">
  Tooltip embaixo
  <div class="tooltip-arrow"></div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<button data-tooltip="Tooltip embaixo">Embaixo</button>

<!-- Estrutura do tooltip -->
<div class="tooltip tooltip-bottom show">
  Tooltip embaixo
  <div class="tooltip-arrow"></div>
</div>
```
:::
::::

### Tooltip à Esquerda

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center}
<button class="btn btn-outline-green" data-tooltip="Tooltip à esquerda">
  Esquerda
</button>
<div class="tooltip tooltip-left show" style="position: relative; display: inline-block; margin-left: 20px;">
  Tooltip à esquerda
  <div class="tooltip-arrow"></div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<button data-tooltip="Tooltip à esquerda">Esquerda</button>

<!-- Estrutura do tooltip -->
<div class="tooltip tooltip-left show">
  Tooltip à esquerda
  <div class="tooltip-arrow"></div>
</div>
```
:::
::::

### Tooltip à Direita

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center}
<button class="btn btn-outline-yellow" data-tooltip="Tooltip à direita">
  Direita
</button>
<div class="tooltip tooltip-right show" style="position: relative; display: inline-block; margin-left: 20px;">
  Tooltip à direita
  <div class="tooltip-arrow"></div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<button data-tooltip="Tooltip à direita">Direita</button>

<!-- Estrutura do tooltip -->
<div class="tooltip tooltip-right show">
  Tooltip à direita
  <div class="tooltip-arrow"></div>
</div>
```
:::
::::

## Tooltips em Diferentes Elementos

### Tooltip em Ícones

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center}
<button class="btn btn-sm btn-outline-aura-500" data-tooltip="Editar">
  <i class="bi bi-pencil"></i>
</button>
<button class="btn btn-sm btn-outline-red" data-tooltip="Excluir">
  <i class="bi bi-trash"></i>
</button>
<button class="btn btn-sm btn-outline-blue" data-tooltip="Compartilhar">
  <i class="bi bi-share"></i>
</button>
<button class="btn btn-sm btn-outline-green" data-tooltip="Salvar">
  <i class="bi bi-save"></i>
</button>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<button class="btn btn-sm btn-outline-aura-500" data-tooltip="Editar">
  <i class="bi bi-pencil"></i>
</button>
<button class="btn btn-sm btn-outline-red" data-tooltip="Excluir">
  <i class="bi bi-trash"></i>
</button>
<button class="btn btn-sm btn-outline-blue" data-tooltip="Compartilhar">
  <i class="bi bi-share"></i>
</button>
<button class="btn btn-sm btn-outline-green" data-tooltip="Salvar">
  <i class="bi bi-save"></i>
</button>
```
:::
::::

### Tooltip em Badges

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center}
<span class="badge badge-green" data-tooltip="Produto disponível em estoque">Disponível</span>
<span class="badge badge-yellow" data-tooltip="Aguardando processamento">Pendente</span>
<span class="badge badge-red" data-tooltip="Produto fora de estoque">Esgotado</span>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<span class="badge badge-green" data-tooltip="Produto disponível em estoque">Disponível</span>
<span class="badge badge-yellow" data-tooltip="Aguardando processamento">Pendente</span>
<span class="badge badge-red" data-tooltip="Produto fora de estoque">Esgotado</span>
```
:::
::::

### Tooltip em Links

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center}
<a href="#" class="text-aura-500" data-tooltip="Clique para ver mais detalhes">
  Saiba mais
</a>
<a href="#" class="text-blue" data-tooltip="Abre em nova aba">
  Documentação <i class="bi bi-box-arrow-up-right"></i>
</a>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<a href="#" class="text-aura-500" data-tooltip="Clique para ver mais detalhes">
  Saiba mais
</a>
<a href="#" class="text-blue" data-tooltip="Abre em nova aba">
  Documentação <i class="bi bi-box-arrow-up-right"></i>
</a>
```
:::
::::

## Casos de Uso

### Barra de Ferramentas

::::{.docs-example}

::: {.docs-example-preview}
<div class="card">
  <div class="card_header">
    <h2>Editor de Texto</h2>
    <div class="actions">
      <button class="btn btn-sm" data-tooltip="Negrito (Ctrl+B)">
        <i class="bi bi-type-bold"></i>
      </button>
      <button class="btn btn-sm" data-tooltip="Itálico (Ctrl+I)">
        <i class="bi bi-type-italic"></i>
      </button>
      <button class="btn btn-sm" data-tooltip="Sublinhado (Ctrl+U)">
        <i class="bi bi-type-underline"></i>
      </button>
      <hr class="divider divider-vertical">
      <button class="btn btn-sm" data-tooltip="Alinhar à esquerda">
        <i class="bi bi-text-left"></i>
      </button>
      <button class="btn btn-sm" data-tooltip="Centralizar">
        <i class="bi bi-text-center"></i>
      </button>
      <button class="btn btn-sm" data-tooltip="Alinhar à direita">
        <i class="bi bi-text-right"></i>
      </button>
    </div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="card">
  <div class="card_header">
    <h2>Editor de Texto</h2>
    <div class="actions">
      <button class="btn btn-sm" data-tooltip="Negrito (Ctrl+B)">
        <i class="bi bi-type-bold"></i>
      </button>
      <button class="btn btn-sm" data-tooltip="Itálico (Ctrl+I)">
        <i class="bi bi-type-italic"></i>
      </button>
      <button class="btn btn-sm" data-tooltip="Sublinhado (Ctrl+U)">
        <i class="bi bi-type-underline"></i>
      </button>
      <hr class="divider divider-vertical">
      <button class="btn btn-sm" data-tooltip="Alinhar à esquerda">
        <i class="bi bi-text-left"></i>
      </button>
      <button class="btn btn-sm" data-tooltip="Centralizar">
        <i class="bi bi-text-center"></i>
      </button>
      <button class="btn btn-sm" data-tooltip="Alinhar à direita">
        <i class="bi bi-text-right"></i>
      </button>
    </div>
  </div>
</div>
```
:::
::::

### Informações Adicionais em Formulários

::::{.docs-example}

::: {.docs-example-preview}
<div class="card" style="max-width: 400px;">
  <div class="card_body">
    <div class="app_form">
      <div class="label">
        <legend>
          Senha
          <i class="bi bi-info-circle text-aura-500" data-tooltip="Mínimo 8 caracteres, incluindo letras e números"></i>
        </legend>
        <input type="password" placeholder="Digite sua senha">
      </div>
      
      <div class="label mt-3">
        <legend>
          Email de Recuperação
          <i class="bi bi-question-circle text-blue" data-tooltip="Usado para recuperar sua conta em caso de perda de acesso"></i>
        </legend>
        <input type="email" placeholder="email@exemplo.com">
      </div>
    </div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="card">
  <div class="card_body">
    <div class="app_form">
      <div class="label">
        <legend>
          Senha
          <i class="bi bi-info-circle text-aura-500" data-tooltip="Mínimo 8 caracteres, incluindo letras e números"></i>
        </legend>
        <input type="password" placeholder="Digite sua senha">
      </div>
      
      <div class="label mt-3">
        <legend>
          Email de Recuperação
          <i class="bi bi-question-circle text-blue" data-tooltip="Usado para recuperar sua conta em caso de perda de acesso"></i>
        </legend>
        <input type="email" placeholder="email@exemplo.com">
      </div>
    </div>
  </div>
</div>
```
:::
::::

### Status e Indicadores

::::{.docs-example}

::: {.docs-example-preview}
<div class="card">
  <div class="card_body">
    <div class="flex justify-between items-center mb-3">
      <span>Status do Servidor</span>
      <span class="badge badge-dot badge-green" data-tooltip="Todos os sistemas operacionais">Online</span>
    </div>
    
    <div class="flex justify-between items-center mb-3">
      <span>Backup Automático</span>
      <span class="badge badge-dot badge-blue" data-tooltip="Último backup: há 2 horas">Ativo</span>
    </div>
    
    <div class="flex justify-between items-center">
      <span>Manutenção Programada</span>
      <span class="badge badge-dot badge-yellow" data-tooltip="Programado para 25/11 às 02:00">Agendado</span>
    </div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="card">
  <div class="card_body">
    <div class="flex justify-between items-center mb-3">
      <span>Status do Servidor</span>
      <span class="badge badge-dot badge-green" data-tooltip="Todos os sistemas operacionais">Online</span>
    </div>
    
    <div class="flex justify-between items-center mb-3">
      <span>Backup Automático</span>
      <span class="badge badge-dot badge-blue" data-tooltip="Último backup: há 2 horas">Ativo</span>
    </div>
    
    <div class="flex justify-between items-center">
      <span>Manutenção Programada</span>
      <span class="badge badge-dot badge-yellow" data-tooltip="Programado para 25/11 às 02:00">Agendado</span>
    </div>
  </div>
</div>
```
:::
::::

## Implementação JavaScript

Para ativar os tooltips, você precisará de JavaScript. Aqui está um exemplo básico:

```javascript
// Inicializar tooltips
document.querySelectorAll('[data-tooltip]').forEach(element => {
  element.addEventListener('mouseenter', function() {
    const tooltipText = this.getAttribute('data-tooltip');
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip tooltip-top show';
    tooltip.innerHTML = `${tooltipText}<div class="tooltip-arrow"></div>`;
    
    document.body.appendChild(tooltip);
    
    // Posicionar tooltip
    const rect = this.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';
  });
  
  element.addEventListener('mouseleave', function() {
    document.querySelectorAll('.tooltip').forEach(t => t.remove());
  });
});
```

## Classes Disponíveis

### Container
- `.tooltip` - Container principal do tooltip
- `.tooltip.show` - Tooltip visível

### Posições
- `.tooltip-top` - Tooltip acima do elemento (padrão)
- `.tooltip-bottom` - Tooltip abaixo do elemento
- `.tooltip-left` - Tooltip à esquerda do elemento
- `.tooltip-right` - Tooltip à direita do elemento

### Elementos
- `.tooltip-arrow` - Seta indicadora do tooltip

### Atributo HTML
- `data-tooltip="texto"` - Atributo para definir o texto do tooltip

## Boas Práticas

1. **Seja conciso**: Tooltips devem conter informações breves e diretas
2. **Não esconda informações críticas**: Use tooltips apenas para informações complementares
3. **Considere dispositivos móveis**: Tooltips não funcionam bem em touch screens
4. **Evite tooltips em tooltips**: Não coloque elementos com tooltip dentro de outros tooltips
5. **Use posicionamento inteligente**: Ajuste a posição do tooltip para não sair da tela
6. **Acessibilidade**: Considere adicionar `aria-label` para leitores de tela
7. **Tempo de exibição**: Mostre o tooltip imediatamente ao hover, sem delay
