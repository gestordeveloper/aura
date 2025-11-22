# Sidebar

A sidebar é um componente de navegação lateral para aplicações web.

## Sidebar Básica

::::{.docs-example}

::: {.docs-example-preview}
<div class="sidebar" style="position: relative; height: 500px; width: 240px;">
  <div class="sidebar_logo">
    <h2>Aura</h2>
  </div>
  
  <div class="sidebar_user">
    <div class="user_thumb">
      <img src="https://i.pravatar.cc/150?img=1" alt="User">
    </div>
    <div class="user_data">
      <a href="#">João Silva</a>
      <p>Desenvolvedor</p>
    </div>
  </div>
  
  <div class="sidebar_navbar">
    <ul>
      <li class="navbar_li active-primary">
        <a href="#"><i class="bi bi-house"></i> Dashboard</a>
      </li>
      <li class="navbar_li">
        <a href="#"><i class="bi bi-people"></i> Usuários</a>
      </li>
      <li class="navbar_li">
        <a href="#"><i class="bi bi-gear"></i> Configurações</a>
      </li>
    </ul>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="sidebar">
  <div class="sidebar_logo">
    <h2>Logo</h2>
  </div>
  
  <div class="sidebar_user">
    <div class="user_thumb">
      <img src="user.jpg" alt="User">
    </div>
    <div class="user_data">
      <a href="#">Nome</a>
      <p>Cargo</p>
    </div>
  </div>
  
  <div class="sidebar_navbar">
    <ul>
      <li class="navbar_li active-primary">
        <a href="#"><i class="bi bi-house"></i> Dashboard</a>
      </li>
      <li class="navbar_li">
        <a href="#"><i class="bi bi-people"></i> Usuários</a>
      </li>
    </ul>
  </div>
</div>
```
:::
::::

## Sidebar com Dropdown

::::{.docs-example}

::: {.docs-example-preview}
<div class="sidebar" style="position: relative; height: 400px; width: 240px;">
  <div class="sidebar_navbar">
    <ul>
      <li class="navbar_li li_dropdown show">
        <a href="#"><i class="bi bi-folder"></i> Projetos</a>
        <ul class="navbar_li_dropdown">
          <li class="navbar_li_dropdown_li">
            <a href="#">Projeto A</a>
          </li>
          <li class="navbar_li_dropdown_li">
            <a href="#">Projeto B</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<li class="navbar_li li_dropdown">
  <a href="#"><i class="bi bi-folder"></i> Projetos</a>
  <ul class="navbar_li_dropdown">
    <li class="navbar_li_dropdown_li">
      <a href="#">Projeto A</a>
    </li>
    <li class="navbar_li_dropdown_li">
      <a href="#">Projeto B</a>
    </li>
  </ul>
</li>
```
:::
::::

## Classes Disponíveis

- `.sidebar` - Container principal (240px)
- `.sidebar_logo` - Logo/marca
- `.sidebar_user` - Informações do usuário
- `.sidebar_navbar` - Navegação
- `.navbar_li` - Item de menu
- `.navbar_li.active` - Item ativo
- `.navbar_li.active-primary` - Item ativo com cor primária
- `.li_dropdown` - Item com submenu
- `.navbar_li_dropdown` - Submenu
- `.show` - Mostrar dropdown
- `.sidebar_footer` - Rodapé

## Boas Práticas

1. **Mobile**: Sidebar fica oculta e desliza com `.active`
2. **Navegação clara**: Use ícones + texto
3. **Item ativo**: Sempre marque a página atual
4. **Dropdown**: Use `.show` para expandir
5. **Footer**: Adicione informações de versão/copyright
