# Forms

Os forms são componentes essenciais para coleta de dados do usuário, incluindo inputs, selects, textareas, checkboxes e radios.

## Input Básico

::::{.docs-example}

::: {.docs-example-preview}
<div class="app_form">
  <div class="label">
    <legend>Nome</legend>
    <input type="text" placeholder="Digite seu nome">
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="app_form">
  <div class="label">
    <legend>Nome</legend>
    <input type="text" placeholder="Digite seu nome">
  </div>
</div>
```
:::
::::

## Tipos de Input

::::{.docs-example}

::: {.docs-example-preview}
<div class="app_form">
  <div class="label mb-3">
    <legend>Email</legend>
    <input type="email" placeholder="seu@email.com">
  </div>
  
  <div class="label mb-3">
    <legend>Senha</legend>
    <input type="password" placeholder="••••••••">
  </div>
  
  <div class="label mb-3">
    <legend>Data</legend>
    <input type="date">
  </div>
  
  <div class="label">
    <legend>Arquivo</legend>
    <input type="file">
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="app_form">
  <div class="label">
    <legend>Email</legend>
    <input type="email" placeholder="seu@email.com">
  </div>
  
  <div class="label">
    <legend>Senha</legend>
    <input type="password" placeholder="••••••••">
  </div>
  
  <div class="label">
    <legend>Data</legend>
    <input type="date">
  </div>
  
  <div class="label">
    <legend>Arquivo</legend>
    <input type="file">
  </div>
</div>
```
:::
::::

## Select

::::{.docs-example}

::: {.docs-example-preview}
<div class="app_form">
  <div class="label">
    <legend>País</legend>
    <select>
      <option>Selecione um país</option>
      <option>Brasil</option>
      <option>Portugal</option>
      <option>Estados Unidos</option>
    </select>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="app_form">
  <div class="label">
    <legend>País</legend>
    <select>
      <option>Selecione um país</option>
      <option>Brasil</option>
      <option>Portugal</option>
      <option>Estados Unidos</option>
    </select>
  </div>
</div>
```
:::
::::

## Textarea

::::{.docs-example}

::: {.docs-example-preview}
<div class="app_form">
  <div class="label">
    <legend>Mensagem</legend>
    <textarea rows="4" placeholder="Digite sua mensagem aqui..."></textarea>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="app_form">
  <div class="label">
    <legend>Mensagem</legend>
    <textarea rows="4" placeholder="Digite sua mensagem aqui..."></textarea>
  </div>
</div>
```
:::
::::

## Checkbox

::::{.docs-example}

::: {.docs-example-preview}
<div class="app_form">
  <div class="label">
    <label>
      <input type="checkbox">
      <u></u>
      Aceito os termos e condições
    </label>
  </div>
  
  <div class="label mt-2">
    <label>
      <input type="checkbox" checked>
      <u></u>
      Desejo receber novidades por email
    </label>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="app_form">
  <div class="label">
    <label>
      <input type="checkbox">
      <u></u>
      Aceito os termos e condições
    </label>
  </div>
  
  <div class="label">
    <label>
      <input type="checkbox" checked>
      <u></u>
      Desejo receber novidades por email
    </label>
  </div>
</div>
```
:::
::::

## Radio Buttons

::::{.docs-example}

::: {.docs-example-preview}
<div class="app_form">
  <div class="label">
    <label>
      <input type="radio" name="plano">
      <u></u>
      Plano Básico
    </label>
  </div>
  
  <div class="label mt-2">
    <label>
      <input type="radio" name="plano" checked>
      <u></u>
      Plano Premium
    </label>
  </div>
  
  <div class="label mt-2">
    <label>
      <input type="radio" name="plano">
      <u></u>
      Plano Enterprise
    </label>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="app_form">
  <div class="label">
    <label>
      <input type="radio" name="plano">
      <u></u>
      Plano Básico
    </label>
  </div>
  
  <div class="label">
    <label>
      <input type="radio" name="plano" checked>
      <u></u>
      Plano Premium
    </label>
  </div>
  
  <div class="label">
    <label>
      <input type="radio" name="plano">
      <u></u>
      Plano Enterprise
    </label>
  </div>
</div>
```
:::
::::

## Input com Ícone (Group)

::::{.docs-example}

::: {.docs-example-preview}
<div class="app_form">
  <div class="label">
    <legend>Email</legend>
    <div class="group">
      <i class="bi bi-envelope"></i>
      <input type="email" placeholder="seu@email.com">
    </div>
  </div>
  
  <div class="label mt-3">
    <legend>Telefone</legend>
    <div class="group">
      <i class="bi bi-telephone"></i>
      <input type="tel" placeholder="(11) 98765-4321">
    </div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="app_form">
  <div class="label">
    <legend>Email</legend>
    <div class="group">
      <i class="bi bi-envelope"></i>
      <input type="email" placeholder="seu@email.com">
    </div>
  </div>
  
  <div class="label">
    <legend>Telefone</legend>
    <div class="group">
      <i class="bi bi-telephone"></i>
      <input type="tel" placeholder="(11) 98765-4321">
    </div>
  </div>
</div>
```
:::
::::

## Input Pequeno

::::{.docs-example}

::: {.docs-example-preview}
<div class="app_form">
  <div class="label-sm">
    <legend>Código</legend>
    <input type="text" placeholder="ABC123">
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="app_form">
  <div class="label-sm">
    <legend>Código</legend>
    <input type="text" placeholder="ABC123">
  </div>
</div>
```
:::
::::

## Formulário de Busca

::::{.docs-example}

::: {.docs-example-preview}
<div class="app_form_search">
  <input type="text" placeholder="Buscar...">
  <button type="submit">
    <i class="bi bi-search"></i>
  </button>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="app_form_search">
  <input type="text" placeholder="Buscar...">
  <button type="submit">
    <i class="bi bi-search"></i>
  </button>
</div>
```
:::
::::

## Casos de Uso

### Formulário de Login

::::{.docs-example}

::: {.docs-example-preview}
<div class="card" style="max-width: 400px;">
  <div class="card_header">
    <h2>Login</h2>
  </div>
  <div class="card_body">
    <div class="app_form">
      <div class="label mb-3">
        <legend>Email</legend>
        <div class="group">
          <i class="bi bi-envelope"></i>
          <input type="email" placeholder="seu@email.com">
        </div>
      </div>
      
      <div class="label mb-3">
        <legend>Senha</legend>
        <div class="group">
          <i class="bi bi-lock"></i>
          <input type="password" placeholder="••••••••">
        </div>
      </div>
      
      <div class="label mb-4">
        <label>
          <input type="checkbox">
          <u></u>
          Lembrar-me
        </label>
      </div>
      
      <button class="btn btn-aura-500 w-full">Entrar</button>
    </div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="card">
  <div class="card_header">
    <h2>Login</h2>
  </div>
  <div class="card_body">
    <div class="app_form">
      <div class="label mb-3">
        <legend>Email</legend>
        <div class="group">
          <i class="bi bi-envelope"></i>
          <input type="email" placeholder="seu@email.com">
        </div>
      </div>
      
      <div class="label mb-3">
        <legend>Senha</legend>
        <div class="group">
          <i class="bi bi-lock"></i>
          <input type="password" placeholder="••••••••">
        </div>
      </div>
      
      <div class="label mb-4">
        <label>
          <input type="checkbox">
          <u></u>
          Lembrar-me
        </label>
      </div>
      
      <button class="btn btn-aura-500 w-full">Entrar</button>
    </div>
  </div>
</div>
```
:::
::::

### Formulário de Contato

::::{.docs-example}

::: {.docs-example-preview}
<div class="card" style="max-width: 500px;">
  <div class="card_header">
    <h2>Entre em Contato</h2>
  </div>
  <div class="card_body">
    <div class="app_form">
      <div class="label mb-3">
        <legend>Nome Completo</legend>
        <input type="text" placeholder="Seu nome">
      </div>
      
      <div class="label mb-3">
        <legend>Email</legend>
        <input type="email" placeholder="seu@email.com">
      </div>
      
      <div class="label mb-3">
        <legend>Assunto</legend>
        <select>
          <option>Selecione um assunto</option>
          <option>Suporte Técnico</option>
          <option>Vendas</option>
          <option>Outro</option>
        </select>
      </div>
      
      <div class="label mb-4">
        <legend>Mensagem</legend>
        <textarea rows="4" placeholder="Digite sua mensagem..."></textarea>
      </div>
      
      <button class="btn btn-aura-500">Enviar Mensagem</button>
    </div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="card">
  <div class="card_header">
    <h2>Entre em Contato</h2>
  </div>
  <div class="card_body">
    <div class="app_form">
      <div class="label mb-3">
        <legend>Nome Completo</legend>
        <input type="text" placeholder="Seu nome">
      </div>
      
      <div class="label mb-3">
        <legend>Email</legend>
        <input type="email" placeholder="seu@email.com">
      </div>
      
      <div class="label mb-3">
        <legend>Assunto</legend>
        <select>
          <option>Selecione um assunto</option>
          <option>Suporte Técnico</option>
          <option>Vendas</option>
          <option>Outro</option>
        </select>
      </div>
      
      <div class="label mb-4">
        <legend>Mensagem</legend>
        <textarea rows="4" placeholder="Digite sua mensagem..."></textarea>
      </div>
      
      <button class="btn btn-aura-500">Enviar Mensagem</button>
    </div>
  </div>
</div>
```
:::
::::

## Classes Disponíveis

### Containers
- `.app_form` - Container principal do formulário
- `.app_form_search` - Formulário de busca com botão anexado
- `.app_form_note` - Formulário com avatar/imagem

### Campos
- `.label` - Container de campo padrão
- `.label-sm` - Container de campo pequeno
- `.legend` - Label do campo
- `.group` - Input com ícone

### Elementos
- `input` - Campo de entrada
- `select` - Seleção dropdown
- `textarea` - Área de texto
- `label` - Label para checkbox/radio
- `u` - Indicador visual de checkbox/radio

## Boas Práticas

1. **Sempre use legend**: Labels são essenciais para acessibilidade
2. **Placeholders descritivos**: Ajudam o usuário a entender o formato esperado
3. **Validação visual**: Use cores e mensagens para indicar erros
4. **Agrupamento lógico**: Organize campos relacionados
5. **Foco automático**: Considere focar o primeiro campo ao carregar
6. **Responsividade**: Teste em diferentes tamanhos de tela
7. **Feedback de envio**: Sempre indique quando um formulário está sendo processado
