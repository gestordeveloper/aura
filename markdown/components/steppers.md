# Steppers

Os steppers são componentes de navegação que guiam os usuários através de um processo dividido em etapas sequenciais.

## Stepper Horizontal

::::{.docs-example}

::: {.docs-example-preview}
<div class="stepper stepper-horizontal">
  <div class="stepper-item completed">
    <div class="stepper-step">
      <i class="bi bi-check"></i>
    </div>
    <div class="stepper-content">
      <div class="stepper-label">Informações Pessoais</div>
      <div class="stepper-description">Dados básicos</div>
    </div>
  </div>
  
  <div class="stepper-item active">
    <div class="stepper-step">2</div>
    <div class="stepper-content">
      <div class="stepper-label">Endereço</div>
      <div class="stepper-description">Localização</div>
    </div>
  </div>
  
  <div class="stepper-item">
    <div class="stepper-step">3</div>
    <div class="stepper-content">
      <div class="stepper-label">Pagamento</div>
      <div class="stepper-description">Método de pagamento</div>
    </div>
  </div>
  
  <div class="stepper-item">
    <div class="stepper-step">4</div>
    <div class="stepper-content">
      <div class="stepper-label">Confirmação</div>
      <div class="stepper-description">Revisar pedido</div>
    </div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="stepper stepper-horizontal">
  <div class="stepper-item completed">
    <div class="stepper-step">
      <i class="bi bi-check"></i>
    </div>
    <div class="stepper-content">
      <div class="stepper-label">Informações Pessoais</div>
      <div class="stepper-description">Dados básicos</div>
    </div>
  </div>
  
  <div class="stepper-item active">
    <div class="stepper-step">2</div>
    <div class="stepper-content">
      <div class="stepper-label">Endereço</div>
      <div class="stepper-description">Localização</div>
    </div>
  </div>
  
  <div class="stepper-item">
    <div class="stepper-step">3</div>
    <div class="stepper-content">
      <div class="stepper-label">Pagamento</div>
      <div class="stepper-description">Método de pagamento</div>
    </div>
  </div>
  
  <div class="stepper-item">
    <div class="stepper-step">4</div>
    <div class="stepper-content">
      <div class="stepper-label">Confirmação</div>
      <div class="stepper-description">Revisar pedido</div>
    </div>
  </div>
</div>
```
:::
::::

## Stepper Vertical

::::{.docs-example}

::: {.docs-example-preview}
<div class="stepper stepper-vertical">
  <div class="stepper-item completed">
    <div class="stepper-step">
      <i class="bi bi-check"></i>
    </div>
    <div class="stepper-content">
      <div class="stepper-label">Criar Conta</div>
      <div class="stepper-description">Preencha seus dados pessoais e crie uma senha segura.</div>
    </div>
  </div>
  
  <div class="stepper-item completed">
    <div class="stepper-step">
      <i class="bi bi-check"></i>
    </div>
    <div class="stepper-content">
      <div class="stepper-label">Verificar Email</div>
      <div class="stepper-description">Confirme seu endereço de email através do link enviado.</div>
    </div>
  </div>
  
  <div class="stepper-item active">
    <div class="stepper-step">3</div>
    <div class="stepper-content">
      <div class="stepper-label">Configurar Perfil</div>
      <div class="stepper-description">Adicione uma foto e complete suas informações.</div>
    </div>
  </div>
  
  <div class="stepper-item">
    <div class="stepper-step">4</div>
    <div class="stepper-content">
      <div class="stepper-label">Começar a Usar</div>
      <div class="stepper-description">Explore os recursos da plataforma.</div>
    </div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="stepper stepper-vertical">
  <div class="stepper-item completed">
    <div class="stepper-step">
      <i class="bi bi-check"></i>
    </div>
    <div class="stepper-content">
      <div class="stepper-label">Criar Conta</div>
      <div class="stepper-description">Preencha seus dados pessoais e crie uma senha segura.</div>
    </div>
  </div>
  
  <div class="stepper-item completed">
    <div class="stepper-step">
      <i class="bi bi-check"></i>
    </div>
    <div class="stepper-content">
      <div class="stepper-label">Verificar Email</div>
      <div class="stepper-description">Confirme seu endereço de email através do link enviado.</div>
    </div>
  </div>
  
  <div class="stepper-item active">
    <div class="stepper-step">3</div>
    <div class="stepper-content">
      <div class="stepper-label">Configurar Perfil</div>
      <div class="stepper-description">Adicione uma foto e complete suas informações.</div>
    </div>
  </div>
  
  <div class="stepper-item">
    <div class="stepper-step">4</div>
    <div class="stepper-content">
      <div class="stepper-label">Começar a Usar</div>
      <div class="stepper-description">Explore os recursos da plataforma.</div>
    </div>
  </div>
</div>
```
:::
::::

## Stepper Simples (sem descrição)

::::{.docs-example}

::: {.docs-example-preview}
<div class="stepper stepper-horizontal">
  <div class="stepper-item completed">
    <div class="stepper-step">
      <i class="bi bi-check"></i>
    </div>
    <div class="stepper-content">
      <div class="stepper-label">Carrinho</div>
    </div>
  </div>
  
  <div class="stepper-item active">
    <div class="stepper-step">2</div>
    <div class="stepper-content">
      <div class="stepper-label">Entrega</div>
    </div>
  </div>
  
  <div class="stepper-item">
    <div class="stepper-step">3</div>
    <div class="stepper-content">
      <div class="stepper-label">Pagamento</div>
    </div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="stepper stepper-horizontal">
  <div class="stepper-item completed">
    <div class="stepper-step">
      <i class="bi bi-check"></i>
    </div>
    <div class="stepper-content">
      <div class="stepper-label">Carrinho</div>
    </div>
  </div>
  
  <div class="stepper-item active">
    <div class="stepper-step">2</div>
    <div class="stepper-content">
      <div class="stepper-label">Entrega</div>
    </div>
  </div>
  
  <div class="stepper-item">
    <div class="stepper-step">3</div>
    <div class="stepper-content">
      <div class="stepper-label">Pagamento</div>
    </div>
  </div>
</div>
```
:::
::::

## Stepper com Item Desabilitado

::::{.docs-example}

::: {.docs-example-preview}
<div class="stepper stepper-horizontal">
  <div class="stepper-item completed">
    <div class="stepper-step">
      <i class="bi bi-check"></i>
    </div>
    <div class="stepper-content">
      <div class="stepper-label">Passo 1</div>
    </div>
  </div>
  
  <div class="stepper-item active">
    <div class="stepper-step">2</div>
    <div class="stepper-content">
      <div class="stepper-label">Passo 2</div>
    </div>
  </div>
  
  <div class="stepper-item disabled">
    <div class="stepper-step">3</div>
    <div class="stepper-content">
      <div class="stepper-label">Passo 3</div>
    </div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="stepper stepper-horizontal">
  <div class="stepper-item completed">
    <div class="stepper-step">
      <i class="bi bi-check"></i>
    </div>
    <div class="stepper-content">
      <div class="stepper-label">Passo 1</div>
    </div>
  </div>
  
  <div class="stepper-item active">
    <div class="stepper-step">2</div>
    <div class="stepper-content">
      <div class="stepper-label">Passo 2</div>
    </div>
  </div>
  
  <div class="stepper-item disabled">
    <div class="stepper-step">3</div>
    <div class="stepper-content">
      <div class="stepper-label">Passo 3</div>
    </div>
  </div>
</div>
```
:::
::::

## Casos de Uso

### Processo de Checkout

::::{.docs-example}

::: {.docs-example-preview}
<div class="card">
  <div class="card_body">
    <div class="stepper stepper-horizontal mb-4">
      <div class="stepper-item completed">
        <div class="stepper-step">
          <i class="bi bi-check"></i>
        </div>
        <div class="stepper-content">
          <div class="stepper-label">Carrinho</div>
        </div>
      </div>
      
      <div class="stepper-item completed">
        <div class="stepper-step">
          <i class="bi bi-check"></i>
        </div>
        <div class="stepper-content">
          <div class="stepper-label">Entrega</div>
        </div>
      </div>
      
      <div class="stepper-item active">
        <div class="stepper-step">3</div>
        <div class="stepper-content">
          <div class="stepper-label">Pagamento</div>
        </div>
      </div>
      
      <div class="stepper-item">
        <div class="stepper-step">4</div>
        <div class="stepper-content">
          <div class="stepper-label">Confirmação</div>
        </div>
      </div>
    </div>
    
    <h3 class="mb-3">Informações de Pagamento</h3>
    <p class="text-sm text-muted-foreground mb-4">Escolha seu método de pagamento preferido</p>
    
    <div class="flex gap-3">
      <button class="btn btn-outline-aura-500">Voltar</button>
      <button class="btn btn-aura-500">Continuar</button>
    </div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="card">
  <div class="card_body">
    <div class="stepper stepper-horizontal mb-4">
      <div class="stepper-item completed">
        <div class="stepper-step">
          <i class="bi bi-check"></i>
        </div>
        <div class="stepper-content">
          <div class="stepper-label">Carrinho</div>
        </div>
      </div>
      
      <div class="stepper-item completed">
        <div class="stepper-step">
          <i class="bi bi-check"></i>
        </div>
        <div class="stepper-content">
          <div class="stepper-label">Entrega</div>
        </div>
      </div>
      
      <div class="stepper-item active">
        <div class="stepper-step">3</div>
        <div class="stepper-content">
          <div class="stepper-label">Pagamento</div>
        </div>
      </div>
      
      <div class="stepper-item">
        <div class="stepper-step">4</div>
        <div class="stepper-content">
          <div class="stepper-label">Confirmação</div>
        </div>
      </div>
    </div>
    
    <h3 class="mb-3">Informações de Pagamento</h3>
    <p class="text-sm text-muted-foreground mb-4">Escolha seu método de pagamento preferido</p>
    
    <div class="flex gap-3">
      <button class="btn btn-outline-aura-500">Voltar</button>
      <button class="btn btn-aura-500">Continuar</button>
    </div>
  </div>
</div>
```
:::
::::

### Onboarding de Usuário

::::{.docs-example}

::: {.docs-example-preview}
<div class="card">
  <div class="card_body">
    <h2 class="mb-4">Bem-vindo! Vamos configurar sua conta</h2>
    
    <div class="stepper stepper-vertical">
      <div class="stepper-item completed">
        <div class="stepper-step">
          <i class="bi bi-check"></i>
        </div>
        <div class="stepper-content">
          <div class="stepper-label">Conta Criada</div>
          <div class="stepper-description">Sua conta foi criada com sucesso!</div>
        </div>
      </div>
      
      <div class="stepper-item active">
        <div class="stepper-step">2</div>
        <div class="stepper-content">
          <div class="stepper-label">Complete seu Perfil</div>
          <div class="stepper-description">
            Adicione uma foto e informações adicionais para personalizar sua experiência.
            <div class="mt-3">
              <button class="btn btn-sm btn-aura-500">Adicionar Foto</button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="stepper-item">
        <div class="stepper-step">3</div>
        <div class="stepper-content">
          <div class="stepper-label">Convide Amigos</div>
          <div class="stepper-description">Compartilhe a plataforma com seus contatos.</div>
        </div>
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
    <h2 class="mb-4">Bem-vindo! Vamos configurar sua conta</h2>
    
    <div class="stepper stepper-vertical">
      <div class="stepper-item completed">
        <div class="stepper-step">
          <i class="bi bi-check"></i>
        </div>
        <div class="stepper-content">
          <div class="stepper-label">Conta Criada</div>
          <div class="stepper-description">Sua conta foi criada com sucesso!</div>
        </div>
      </div>
      
      <div class="stepper-item active">
        <div class="stepper-step">2</div>
        <div class="stepper-content">
          <div class="stepper-label">Complete seu Perfil</div>
          <div class="stepper-description">
            Adicione uma foto e informações adicionais.
            <div class="mt-3">
              <button class="btn btn-sm btn-aura-500">Adicionar Foto</button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="stepper-item">
        <div class="stepper-step">3</div>
        <div class="stepper-content">
          <div class="stepper-label">Convide Amigos</div>
          <div class="stepper-description">Compartilhe a plataforma com seus contatos.</div>
        </div>
      </div>
    </div>
  </div>
</div>
```
:::
::::

## Classes Disponíveis

### Container
- `.stepper` - Container principal do stepper
- `.stepper-horizontal` - Stepper horizontal (padrão)
- `.stepper-vertical` - Stepper vertical

### Items
- `.stepper-item` - Item individual do stepper
- `.stepper-item.completed` - Item completado (com check)
- `.stepper-item.active` - Item ativo (atual)
- `.stepper-item.disabled` - Item desabilitado

### Elementos
- `.stepper-step` - Círculo numerado do passo
- `.stepper-content` - Container do conteúdo
- `.stepper-label` - Título do passo
- `.stepper-description` - Descrição do passo

## Boas Práticas

1. **Mantenha passos claros**: Use títulos descritivos e concisos
2. **Indique progresso**: Sempre marque passos completados com `.completed`
3. **Um passo ativo por vez**: Apenas um item deve ter a classe `.active`
4. **Use ícones em completados**: Substitua números por ícones de check em passos concluídos
5. **Considere o contexto**: Use horizontal para processos curtos, vertical para processos detalhados
6. **Navegação**: Permita que usuários voltem a passos anteriores quando apropriado
