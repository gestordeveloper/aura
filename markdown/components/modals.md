# Modals

Os modals são janelas sobrepostas que exibem conteúdo importante sem sair da página atual.

## Modal Básico

::::{.docs-example}

::: {.docs-example-preview}
<button class="btn btn-aura-500" onclick="document.getElementById('modal-demo').style.display='flex'">
  Abrir Modal
</button>

<div class="modal" id="modal-demo" style="display: none;">
  <div class="modal_container">
    <div class="modal_header">
      <h3>Título do Modal</h3>
      <button onclick="document.getElementById('modal-demo').style.display='none'">
        <i class="bi bi-x"></i>
      </button>
    </div>
    <div class="modal_body">
      <p>Este é o conteúdo do modal. Você pode adicionar qualquer conteúdo aqui.</p>
    </div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<button class="btn btn-aura-500" onclick="openModal('myModal')">
  Abrir Modal
</button>

<div class="modal" id="myModal">
  <div class="modal_container">
    <div class="modal_header">
      <h3>Título do Modal</h3>
      <button onclick="closeModal('myModal')">
        <i class="bi bi-x"></i>
      </button>
    </div>
    <div class="modal_body">
      <p>Conteúdo do modal.</p>
    </div>
  </div>
</div>
```
:::
::::

## Modal Grande

::::{.docs-example}

::: {.docs-example-preview}
<button class="btn btn-blue" onclick="document.getElementById('modal-large').style.display='flex'">
  Modal Grande
</button>

<div class="modal" id="modal-large" style="display: none;">
  <div class="modal_container container_large">
    <div class="modal_header">
      <h3>Modal Grande</h3>
      <button onclick="document.getElementById('modal-large').style.display='none'">
        <i class="bi bi-x"></i>
      </button>
    </div>
    <div class="modal_body">
      <p>Este modal tem largura máxima de 960px, ideal para formulários ou conteúdo extenso.</p>
    </div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="modal" id="myModal">
  <div class="modal_container container_large">
    <div class="modal_header">
      <h3>Modal Grande</h3>
      <button onclick="closeModal('myModal')">
        <i class="bi bi-x"></i>
      </button>
    </div>
    <div class="modal_body">
      <p>Conteúdo extenso aqui.</p>
    </div>
  </div>
</div>
```
:::
::::

## Modal com Cores

::::{.docs-example}

::: {.docs-example-preview .flex .gap-2}
<button class="btn btn-sm btn-blue" onclick="document.getElementById('modal-blue').style.display='flex'">
  Azul
</button>
<button class="btn btn-sm btn-green" onclick="document.getElementById('modal-green').style.display='flex'">
  Verde
</button>
<button class="btn btn-sm btn-red" onclick="document.getElementById('modal-red').style.display='flex'">
  Vermelho
</button>

<div class="modal modal-blue" id="modal-blue" style="display: none;">
  <div class="modal_container">
    <div class="modal_header">
      <h3>Modal Azul</h3>
      <button onclick="document.getElementById('modal-blue').style.display='none'">
        <i class="bi bi-x"></i>
      </button>
    </div>
    <div class="modal_body">
      <p>Modal com fundo azul.</p>
    </div>
  </div>
</div>

<div class="modal modal-green" id="modal-green" style="display: none;">
  <div class="modal_container">
    <div class="modal_header">
      <h3>Modal Verde</h3>
      <button onclick="document.getElementById('modal-green').style.display='none'">
        <i class="bi bi-x"></i>
      </button>
    </div>
    <div class="modal_body">
      <p>Modal com fundo verde.</p>
    </div>
  </div>
</div>

<div class="modal modal-red" id="modal-red" style="display: none;">
  <div class="modal_container">
    <div class="modal_header">
      <h3>Modal Vermelho</h3>
      <button onclick="document.getElementById('modal-red').style.display='none'">
        <i class="bi bi-x"></i>
      </button>
    </div>
    <div class="modal_body">
      <p>Modal com fundo vermelho.</p>
    </div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="modal modal-blue" id="myModal">
  <div class="modal_container">
    <div class="modal_header">
      <h3>Modal Azul</h3>
      <button onclick="closeModal('myModal')">
        <i class="bi bi-x"></i>
      </button>
    </div>
    <div class="modal_body">
      <p>Conteúdo.</p>
    </div>
  </div>
</div>
```
:::
::::

## Implementação JavaScript

```javascript
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Fechar ao clicar fora
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// Fechar com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal').forEach(modal => {
      modal.style.display = 'none';
    });
  }
});
```

## Classes Disponíveis

### Estrutura
- `.modal` - Container principal (overlay)
- `.modal_container` - Container do conteúdo
- `.container_large` - Versão grande (960px)
- `.modal_header` - Cabeçalho
- `.modal_body` - Corpo do modal

### Cores
- `.modal-blue` - Fundo azul
- `.modal-green` - Fundo verde
- `.modal-red` - Fundo vermelho
- `.modal-yellow` - Fundo amarelo
- `.modal-{color}` - Outras cores

## Boas Práticas

1. **Fechar facilmente**: Sempre forneça botão X e fechar ao clicar fora
2. **ESC para fechar**: Implemente tecla ESC
3. **Foco no modal**: Mova foco para o modal ao abrir
4. **Scroll interno**: Use `.modal_body` com `max-height: 80vh`
5. **Acessibilidade**: Adicione `role="dialog"` e `aria-modal="true"`
6. **Evite modals aninhados**: Não abra modal dentro de modal
