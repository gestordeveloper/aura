# Navbar

A navbar é um componente de navegação superior para aplicações web.

## Navbar Básica

::::{.docs-example}

::: {.docs-example-preview}
<div class="navbar" style="position: relative; left: 0; width: 100%;">
  <div class="container">
    <div class="navbar_actions">
      <button id="menu-toggle" class="navbar_button">
        <i class="bi bi-list"></i>
      </button>
      <a href="#" class="navbar_link">Dashboard</a>
    </div>
    
    <div class="navbar_actions">
      <button class="navbar_button">
        <i class="bi bi-bell"></i>
        <span class="badge">3</span>
      </button>
      <button class="navbar_button">
        <i class="bi bi-envelope"></i>
        <span class="badge">5</span>
      </button>
      <div class="navbar_user">
        <img src="https://i.pravatar.cc/150?img=1" alt="User">
      </div>
    </div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="navbar">
  <div class="container">
    <div class="navbar_actions">
      <button id="menu-toggle" class="navbar_button">
        <i class="bi bi-list"></i>
      </button>
      <a href="#" class="navbar_link">Dashboard</a>
    </div>
    
    <div class="navbar_actions">
      <button class="navbar_button">
        <i class="bi bi-bell"></i>
        <span class="badge">3</span>
      </button>
      <button class="navbar_button">
        <i class="bi bi-envelope"></i>
        <span class="badge">5</span>
      </button>
      <div class="navbar_user">
        <img src="user.jpg" alt="User">
      </div>
    </div>
  </div>
</div>
```
:::
::::

## Classes Disponíveis

- `.navbar` - Container principal (fixo, 60px altura)
- `.container` - Container interno
- `.navbar_actions` - Grupo de ações
- `.navbar_button` - Botão de ação (28x28px)
- `.navbar_link` - Link de navegação
- `.navbar_user` - Avatar do usuário (38x38px)
- `.badge` - Badge de notificação
- `#menu-toggle` - Botão de menu (mobile)

## Boas Práticas

1. **Posição fixa**: Navbar fica fixa no topo
2. **Altura padrão**: 60px de altura
3. **Badges**: Use para notificações não lidas
4. **Mobile**: Botão de menu aparece apenas em mobile
5. **Z-index**: Navbar tem z-index 1000
6. **Sidebar**: Ajusta largura quando há sidebar (calc(100% - 240px))
