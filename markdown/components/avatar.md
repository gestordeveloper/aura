# Avatar

Os avatars são componentes visuais que representam usuários ou entidades, podendo exibir imagens, iniciais ou ícones.

## Avatar Básico

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center}
<div class="avatar">
  <img src="https://i.pravatar.cc/150?img=1" alt="Avatar">
</div>
<div class="avatar">
  <img src="https://i.pravatar.cc/150?img=2" alt="Avatar">
</div>
<div class="avatar">
  <img src="https://i.pravatar.cc/150?img=3" alt="Avatar">
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="avatar">
  <img src="avatar.jpg" alt="Avatar">
</div>
```
:::
::::

## Tamanhos

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center}
<div class="avatar avatar-xs">
  <img src="https://i.pravatar.cc/150?img=4" alt="Avatar XS">
</div>
<div class="avatar avatar-sm">
  <img src="https://i.pravatar.cc/150?img=5" alt="Avatar SM">
</div>
<div class="avatar avatar-md">
  <img src="https://i.pravatar.cc/150?img=6" alt="Avatar MD">
</div>
<div class="avatar avatar-lg">
  <img src="https://i.pravatar.cc/150?img=7" alt="Avatar LG">
</div>
<div class="avatar avatar-xl">
  <img src="https://i.pravatar.cc/150?img=8" alt="Avatar XL">
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="avatar avatar-xs">
  <img src="avatar.jpg" alt="Avatar XS">
</div>
<div class="avatar avatar-sm">
  <img src="avatar.jpg" alt="Avatar SM">
</div>
<div class="avatar avatar-md">
  <img src="avatar.jpg" alt="Avatar MD">
</div>
<div class="avatar avatar-lg">
  <img src="avatar.jpg" alt="Avatar LG">
</div>
<div class="avatar avatar-xl">
  <img src="avatar.jpg" alt="Avatar XL">
</div>
```
:::
::::

## Formas

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center}
<div class="avatar avatar-circle">
  <img src="https://i.pravatar.cc/150?img=9" alt="Circle">
</div>
<div class="avatar avatar-rounded">
  <img src="https://i.pravatar.cc/150?img=10" alt="Rounded">
</div>
<div class="avatar avatar-square">
  <img src="https://i.pravatar.cc/150?img=11" alt="Square">
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="avatar avatar-circle">
  <img src="avatar.jpg" alt="Circle">
</div>
<div class="avatar avatar-rounded">
  <img src="avatar.jpg" alt="Rounded">
</div>
<div class="avatar avatar-square">
  <img src="avatar.jpg" alt="Square">
</div>
```
:::
::::

## Avatar com Iniciais (Fallback)

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center}
<div class="avatar">
  <div class="avatar-fallback">JS</div>
</div>
<div class="avatar avatar-lg">
  <div class="avatar-fallback">AB</div>
</div>
<div class="avatar avatar-xl">
  <div class="avatar-fallback">MK</div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="avatar">
  <div class="avatar-fallback">JS</div>
</div>
<div class="avatar avatar-lg">
  <div class="avatar-fallback">AB</div>
</div>
<div class="avatar avatar-xl">
  <div class="avatar-fallback">MK</div>
</div>
```
:::
::::

## Avatar com Status

::::{.docs-example}

::: {.docs-example-preview .flex .gap-3 .items-center}
<div class="avatar">
  <img src="https://i.pravatar.cc/150?img=12" alt="Online">
  <span class="avatar-status status-online"></span>
</div>
<div class="avatar">
  <img src="https://i.pravatar.cc/150?img=13" alt="Offline">
  <span class="avatar-status status-offline"></span>
</div>
<div class="avatar">
  <img src="https://i.pravatar.cc/150?img=14" alt="Busy">
  <span class="avatar-status status-busy"></span>
</div>
<div class="avatar">
  <img src="https://i.pravatar.cc/150?img=15" alt="Away">
  <span class="avatar-status status-away"></span>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="avatar">
  <img src="avatar.jpg" alt="Online">
  <span class="avatar-status status-online"></span>
</div>
<div class="avatar">
  <img src="avatar.jpg" alt="Offline">
  <span class="avatar-status status-offline"></span>
</div>
<div class="avatar">
  <img src="avatar.jpg" alt="Busy">
  <span class="avatar-status status-busy"></span>
</div>
<div class="avatar">
  <img src="avatar.jpg" alt="Away">
  <span class="avatar-status status-away"></span>
</div>
```
:::
::::

## Grupo de Avatars

::::{.docs-example}

::: {.docs-example-preview}
<div class="avatar-group">
  <div class="avatar">
    <img src="https://i.pravatar.cc/150?img=16" alt="User 1">
  </div>
  <div class="avatar">
    <img src="https://i.pravatar.cc/150?img=17" alt="User 2">
  </div>
  <div class="avatar">
    <img src="https://i.pravatar.cc/150?img=18" alt="User 3">
  </div>
  <div class="avatar">
    <img src="https://i.pravatar.cc/150?img=19" alt="User 4">
  </div>
  <div class="avatar">
    <div class="avatar-fallback">+5</div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="avatar-group">
  <div class="avatar">
    <img src="user1.jpg" alt="User 1">
  </div>
  <div class="avatar">
    <img src="user2.jpg" alt="User 2">
  </div>
  <div class="avatar">
    <img src="user3.jpg" alt="User 3">
  </div>
  <div class="avatar">
    <img src="user4.jpg" alt="User 4">
  </div>
  <div class="avatar">
    <div class="avatar-fallback">+5</div>
  </div>
</div>
```
:::
::::

## Grupo de Avatars Empilhado

::::{.docs-example}

::: {.docs-example-preview}
<div class="avatar-group avatar-group-stacked">
  <div class="avatar">
    <img src="https://i.pravatar.cc/150?img=20" alt="User 1">
  </div>
  <div class="avatar">
    <img src="https://i.pravatar.cc/150?img=21" alt="User 2">
  </div>
  <div class="avatar">
    <img src="https://i.pravatar.cc/150?img=22" alt="User 3">
  </div>
  <div class="avatar">
    <div class="avatar-fallback">+3</div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="avatar-group avatar-group-stacked">
  <div class="avatar">
    <img src="user1.jpg" alt="User 1">
  </div>
  <div class="avatar">
    <img src="user2.jpg" alt="User 2">
  </div>
  <div class="avatar">
    <img src="user3.jpg" alt="User 3">
  </div>
  <div class="avatar">
    <div class="avatar-fallback">+3</div>
  </div>
</div>
```
:::
::::

## Casos de Uso

### Perfil de Usuário

::::{.docs-example}

::: {.docs-example-preview}
<div class="card" style="max-width: 400px;">
  <div class="card_body">
    <div class="flex items-center gap-3">
      <div class="avatar avatar-lg">
        <img src="https://i.pravatar.cc/150?img=23" alt="João Silva">
        <span class="avatar-status status-online"></span>
      </div>
      <div>
        <h3 class="text-lg text-bold mb-1">João Silva</h3>
        <p class="text-sm text-muted-foreground">Desenvolvedor Full Stack</p>
        <span class="badge badge-sm badge-green mt-2">Online</span>
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
    <div class="flex items-center gap-3">
      <div class="avatar avatar-lg">
        <img src="user.jpg" alt="João Silva">
        <span class="avatar-status status-online"></span>
      </div>
      <div>
        <h3 class="text-lg text-bold mb-1">João Silva</h3>
        <p class="text-sm text-muted-foreground">Desenvolvedor Full Stack</p>
        <span class="badge badge-sm badge-green mt-2">Online</span>
      </div>
    </div>
  </div>
</div>
```
:::
::::

### Lista de Membros da Equipe

::::{.docs-example}

::: {.docs-example-preview}
<div class="card">
  <div class="card_header">
    <h2>Equipe do Projeto</h2>
    <div class="avatar-group">
      <div class="avatar avatar-sm">
        <img src="https://i.pravatar.cc/150?img=24" alt="Membro 1">
      </div>
      <div class="avatar avatar-sm">
        <img src="https://i.pravatar.cc/150?img=25" alt="Membro 2">
      </div>
      <div class="avatar avatar-sm">
        <img src="https://i.pravatar.cc/150?img=26" alt="Membro 3">
      </div>
      <div class="avatar avatar-sm">
        <div class="avatar-fallback">+7</div>
      </div>
    </div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="card">
  <div class="card_header">
    <h2>Equipe do Projeto</h2>
    <div class="avatar-group">
      <div class="avatar avatar-sm">
        <img src="member1.jpg" alt="Membro 1">
      </div>
      <div class="avatar avatar-sm">
        <img src="member2.jpg" alt="Membro 2">
      </div>
      <div class="avatar avatar-sm">
        <img src="member3.jpg" alt="Membro 3">
      </div>
      <div class="avatar avatar-sm">
        <div class="avatar-fallback">+7</div>
      </div>
    </div>
  </div>
</div>
```
:::
::::

## Classes Disponíveis

### Estrutura
- `.avatar` - Container principal do avatar
- `.avatar-fallback` - Iniciais ou texto alternativo
- `.avatar-status` - Indicador de status

### Tamanhos
- `.avatar-xs` - Extra pequeno (24px)
- `.avatar-sm` - Pequeno (32px)
- `.avatar-md` - Médio/Padrão (48px)
- `.avatar-lg` - Grande (64px)
- `.avatar-xl` - Extra grande (96px)

### Formas
- `.avatar-circle` - Circular (padrão)
- `.avatar-rounded` - Arredondado
- `.avatar-square` - Quadrado

### Status
- `.status-online` - Online (verde)
- `.status-offline` - Offline (cinza)
- `.status-busy` - Ocupado (vermelho)
- `.status-away` - Ausente (amarelo)

### Grupo
- `.avatar-group` - Grupo de avatars sobrepostos
- `.avatar-group-stacked` - Grupo empilhado (ordem normal)

## Boas Práticas

1. **Sempre use alt text**: Importante para acessibilidade
2. **Fallback para iniciais**: Use `.avatar-fallback` quando não houver imagem
3. **Tamanho apropriado**: Escolha o tamanho baseado no contexto
4. **Status quando relevante**: Adicione indicador de status em chats e perfis
5. **Grupos para colaboração**: Use avatar-group para mostrar equipes
6. **Imagens otimizadas**: Use imagens quadradas e otimizadas para web
