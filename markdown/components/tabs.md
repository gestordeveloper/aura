# Tabs

Os tabs são componentes de navegação que permitem alternar entre diferentes painéis de conteúdo sem recarregar a página.

## Tabs Básicas

::::{.docs-example}

::: {.docs-example-preview}
<div class="tabs">
  <input type="radio" name="tabs" id="tab-1" checked>
  <input type="radio" name="tabs" id="tab-2">
  <input type="radio" name="tabs" id="tab-3">
  
  <nav>
    <label for="tab-1" class="tab-1">
      <i class="bi bi-house"></i>
      Início
    </label>
    <label for="tab-2" class="tab-2">
      <i class="bi bi-person"></i>
      Perfil
    </label>
    <label for="tab-3" class="tab-3">
      <i class="bi bi-gear"></i>
      Configurações
    </label>
  </nav>
  
  <section>
    <div class="tabs-content content-1">
      <div class="card">
        <div class="card_body">
          <h3>Conteúdo da Aba Início</h3>
          <p>Este é o conteúdo da primeira aba.</p>
        </div>
      </div>
    </div>
    
    <div class="tabs-content content-2">
      <div class="card">
        <div class="card_body">
          <h3>Conteúdo da Aba Perfil</h3>
          <p>Este é o conteúdo da segunda aba.</p>
        </div>
      </div>
    </div>
    
    <div class="tabs-content content-3">
      <div class="card">
        <div class="card_body">
          <h3>Conteúdo da Aba Configurações</h3>
          <p>Este é o conteúdo da terceira aba.</p>
        </div>
      </div>
    </div>
  </section>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="tabs">
  <input type="radio" name="tabs" id="tab-1" checked>
  <input type="radio" name="tabs" id="tab-2">
  <input type="radio" name="tabs" id="tab-3">
  
  <nav>
    <label for="tab-1" class="tab-1">
      <i class="bi bi-house"></i>
      Início
    </label>
    <label for="tab-2" class="tab-2">
      <i class="bi bi-person"></i>
      Perfil
    </label>
    <label for="tab-3" class="tab-3">
      <i class="bi bi-gear"></i>
      Configurações
    </label>
  </nav>
  
  <section>
    <div class="tabs-content content-1">
      <h3>Conteúdo da Aba Início</h3>
      <p>Este é o conteúdo da primeira aba.</p>
    </div>
    
    <div class="tabs-content content-2">
      <h3>Conteúdo da Aba Perfil</h3>
      <p>Este é o conteúdo da segunda aba.</p>
    </div>
    
    <div class="tabs-content content-3">
      <h3>Conteúdo da Aba Configurações</h3>
      <p>Este é o conteúdo da terceira aba.</p>
    </div>
  </section>
</div>
```
:::
::::

## Tabs com Cores

::::{.docs-example}

::: {.docs-example-preview}
<div class="tabs tabs-aura-500">
  <input type="radio" name="tabs-color" id="tab-c1" checked>
  <input type="radio" name="tabs-color" id="tab-c2">
  <input type="radio" name="tabs-color" id="tab-c3">
  
  <nav>
    <label for="tab-c1" class="tab-1">Tab 1</label>
    <label for="tab-c2" class="tab-2">Tab 2</label>
    <label for="tab-c3" class="tab-3">Tab 3</label>
  </nav>
  
  <section>
    <div class="tabs-content content-1">
      <div class="card mt-3">
        <div class="card_body">
          <p>Conteúdo da Tab 1 com cor Aura</p>
        </div>
      </div>
    </div>
    <div class="tabs-content content-2">
      <div class="card mt-3">
        <div class="card_body">
          <p>Conteúdo da Tab 2 com cor Aura</p>
        </div>
      </div>
    </div>
    <div class="tabs-content content-3">
      <div class="card mt-3">
        <div class="card_body">
          <p>Conteúdo da Tab 3 com cor Aura</p>
        </div>
      </div>
    </div>
  </section>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="tabs tabs-aura-500">
  <input type="radio" name="tabs-color" id="tab-c1" checked>
  <input type="radio" name="tabs-color" id="tab-c2">
  <input type="radio" name="tabs-color" id="tab-c3">
  
  <nav>
    <label for="tab-c1" class="tab-1">Tab 1</label>
    <label for="tab-c2" class="tab-2">Tab 2</label>
    <label for="tab-c3" class="tab-3">Tab 3</label>
  </nav>
  
  <section>
    <div class="tabs-content content-1">
      <p>Conteúdo da Tab 1</p>
    </div>
    <div class="tabs-content content-2">
      <p>Conteúdo da Tab 2</p>
    </div>
    <div class="tabs-content content-3">
      <p>Conteúdo da Tab 3</p>
    </div>
  </section>
</div>
```
:::
::::

## Variações de Cores

::::{.docs-example}

::: {.docs-example-preview .flex .flex-column .gap-3}
<div class="tabs tabs-blue">
  <input type="radio" name="tabs-blue" id="tab-b1" checked>
  <input type="radio" name="tabs-blue" id="tab-b2">
  <nav>
    <label for="tab-b1" class="tab-1">Blue Tab 1</label>
    <label for="tab-b2" class="tab-2">Blue Tab 2</label>
  </nav>
  <section>
    <div class="tabs-content content-1">
      <div class="card mt-3">
        <div class="card_body"><p>Conteúdo Blue</p></div>
      </div>
    </div>
    <div class="tabs-content content-2">
      <div class="card mt-3">
        <div class="card_body"><p>Conteúdo Blue 2</p></div>
      </div>
    </div>
  </section>
</div>

<div class="tabs tabs-green">
  <input type="radio" name="tabs-green" id="tab-g1" checked>
  <input type="radio" name="tabs-green" id="tab-g2">
  <nav>
    <label for="tab-g1" class="tab-1">Green Tab 1</label>
    <label for="tab-g2" class="tab-2">Green Tab 2</label>
  </nav>
  <section>
    <div class="tabs-content content-1">
      <div class="card mt-3">
        <div class="card_body"><p>Conteúdo Green</p></div>
      </div>
    </div>
    <div class="tabs-content content-2">
      <div class="card mt-3">
        <div class="card_body"><p>Conteúdo Green 2</p></div>
      </div>
    </div>
  </section>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="tabs tabs-blue">
  <input type="radio" name="tabs-blue" id="tab-b1" checked>
  <input type="radio" name="tabs-blue" id="tab-b2">
  <nav>
    <label for="tab-b1" class="tab-1">Blue Tab 1</label>
    <label for="tab-b2" class="tab-2">Blue Tab 2</label>
  </nav>
  <section>
    <div class="tabs-content content-1">
      <p>Conteúdo Blue</p>
    </div>
    <div class="tabs-content content-2">
      <p>Conteúdo Blue 2</p>
    </div>
  </section>
</div>

<div class="tabs tabs-green">
  <input type="radio" name="tabs-green" id="tab-g1" checked>
  <input type="radio" name="tabs-green" id="tab-g2">
  <nav>
    <label for="tab-g1" class="tab-1">Green Tab 1</label>
    <label for="tab-g2" class="tab-2">Green Tab 2</label>
  </nav>
  <section>
    <div class="tabs-content content-1">
      <p>Conteúdo Green</p>
    </div>
    <div class="tabs-content content-2">
      <p>Conteúdo Green 2</p>
    </div>
  </section>
</div>
```
:::
::::

## Casos de Uso

### Painel de Configurações

::::{.docs-example}

::: {.docs-example-preview}
<div class="card">
  <div class="card_header">
    <h2>Configurações da Conta</h2>
  </div>
  <div class="card_body">
    <div class="tabs">
      <input type="radio" name="settings" id="set-1" checked>
      <input type="radio" name="settings" id="set-2">
      <input type="radio" name="settings" id="set-3">
      
      <nav>
        <label for="set-1" class="tab-1">
          <i class="bi bi-person"></i>
          Perfil
        </label>
        <label for="set-2" class="tab-2">
          <i class="bi bi-shield-check"></i>
          Segurança
        </label>
        <label for="set-3" class="tab-3">
          <i class="bi bi-bell"></i>
          Notificações
        </label>
      </nav>
      
      <section>
        <div class="tabs-content content-1">
          <div class="mt-3">
            <h4>Informações do Perfil</h4>
            <p>Atualize suas informações pessoais aqui.</p>
          </div>
        </div>
        
        <div class="tabs-content content-2">
          <div class="mt-3">
            <h4>Configurações de Segurança</h4>
            <p>Gerencie sua senha e autenticação de dois fatores.</p>
          </div>
        </div>
        
        <div class="tabs-content content-3">
          <div class="mt-3">
            <h4>Preferências de Notificação</h4>
            <p>Escolha como deseja receber notificações.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="card">
  <div class="card_header">
    <h2>Configurações da Conta</h2>
  </div>
  <div class="card_body">
    <div class="tabs">
      <input type="radio" name="settings" id="set-1" checked>
      <input type="radio" name="settings" id="set-2">
      <input type="radio" name="settings" id="set-3">
      
      <nav>
        <label for="set-1" class="tab-1">
          <i class="bi bi-person"></i>
          Perfil
        </label>
        <label for="set-2" class="tab-2">
          <i class="bi bi-shield-check"></i>
          Segurança
        </label>
        <label for="set-3" class="tab-3">
          <i class="bi bi-bell"></i>
          Notificações
        </label>
      </nav>
      
      <section>
        <div class="tabs-content content-1">
          <h4>Informações do Perfil</h4>
          <p>Atualize suas informações pessoais aqui.</p>
        </div>
        
        <div class="tabs-content content-2">
          <h4>Configurações de Segurança</h4>
          <p>Gerencie sua senha e autenticação.</p>
        </div>
        
        <div class="tabs-content content-3">
          <h4>Preferências de Notificação</h4>
          <p>Escolha como deseja receber notificações.</p>
        </div>
      </section>
    </div>
  </div>
</div>
```
:::
::::

## Classes Disponíveis

### Estrutura
- `.tabs` - Container principal das tabs
- `input[type="radio"]` - Controles de navegação (ocultos)
- `nav` - Container dos labels/botões
- `label` - Botão de tab (classes: `.tab-1` a `.tab-7`)
- `section` - Container do conteúdo
- `.tabs-content` - Conteúdo de cada tab (classes: `.content-1` a `.content-7`)

### Cores
- `.tabs-aura-{50-900}` - Tabs com cor Aura
- `.tabs-blue`, `.tabs-blue-{50-900}` - Tabs azuis
- `.tabs-green`, `.tabs-green-{50-900}` - Tabs verdes
- `.tabs-red`, `.tabs-red-{50-900}` - Tabs vermelhas
- `.tabs-yellow`, `.tabs-yellow-{50-900}` - Tabs amarelas

## Boas Práticas

1. **IDs únicos**: Cada tab precisa de IDs únicos para funcionar
2. **Name consistente**: Todos os inputs devem ter o mesmo `name`
3. **Checked inicial**: Sempre marque uma tab como `checked` inicialmente
4. **Ícones opcionais**: Use ícones para melhor identificação visual
5. **Conteúdo relevante**: Organize conteúdo relacionado em cada tab
6. **Máximo 7 tabs**: O componente suporta até 7 tabs por padrão
7. **Acessibilidade**: Considere adicionar `aria-label` para leitores de tela
