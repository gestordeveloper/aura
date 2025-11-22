# Accordion

Os accordions permitem organizar conteúdo em seções expansíveis, economizando espaço e melhorando a organização.

## Accordion Básico

::::{.docs-example}

::: {.docs-example-preview}
<div class="accordion">
  <div class="accordion-tab">
    <input type="radio" name="acc" id="acc1" checked>
    <label for="acc1">
      <span>O que é o Aura Design System?</span>
      <i class="bi bi-chevron-down icon"></i>
    </label>
    <div class="content">
      <p>Aura é um design system moderno e completo para criar interfaces web elegantes e responsivas.</p>
    </div>
  </div>
  
  <div class="accordion-tab mt-2">
    <input type="radio" name="acc" id="acc2">
    <label for="acc2">
      <span>Como começar a usar?</span>
      <i class="bi bi-chevron-down icon"></i>
    </label>
    <div class="content">
      <p>Basta incluir o arquivo CSS do Aura em seu projeto e começar a usar as classes disponíveis.</p>
    </div>
  </div>
  
  <div class="accordion-tab mt-2">
    <input type="radio" name="acc" id="acc3">
    <label for="acc3">
      <span>É gratuito?</span>
      <i class="bi bi-chevron-down icon"></i>
    </label>
    <div class="content">
      <p>Sim, o Aura Design System é totalmente gratuito e open source.</p>
    </div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="accordion">
  <div class="accordion-tab">
    <input type="radio" name="acc" id="acc1" checked>
    <label for="acc1">
      <span>Pergunta 1</span>
      <i class="bi bi-chevron-down icon"></i>
    </label>
    <div class="content">
      <p>Resposta 1</p>
    </div>
  </div>
  
  <div class="accordion-tab">
    <input type="radio" name="acc" id="acc2">
    <label for="acc2">
      <span>Pergunta 2</span>
      <i class="bi bi-chevron-down icon"></i>
    </label>
    <div class="content">
      <p>Resposta 2</p>
    </div>
  </div>
</div>
```
:::
::::

## Accordion com Cores

::::{.docs-example}

::: {.docs-example-preview}
<div class="accordion accordion-aura-500">
  <div class="accordion-tab">
    <input type="radio" name="acc-color" id="acc-c1" checked>
    <label for="acc-c1">
      <span>Accordion Aura</span>
      <i class="bi bi-chevron-down icon"></i>
    </label>
    <div class="content">
      <p>Accordion com cor primária Aura.</p>
    </div>
  </div>
</div>

<div class="accordion accordion-blue mt-3">
  <div class="accordion-tab">
    <input type="radio" name="acc-blue" id="acc-b1" checked>
    <label for="acc-b1">
      <span>Accordion Azul</span>
      <i class="bi bi-chevron-down icon"></i>
    </label>
    <div class="content">
      <p>Accordion com cor azul.</p>
    </div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="accordion accordion-aura-500">
  <div class="accordion-tab">
    <input type="radio" name="acc" id="acc1" checked>
    <label for="acc1">
      <span>Accordion Aura</span>
      <i class="bi bi-chevron-down icon"></i>
    </label>
    <div class="content">
      <p>Conteúdo.</p>
    </div>
  </div>
</div>

<div class="accordion accordion-blue">
  <div class="accordion-tab">
    <input type="radio" name="acc2" id="acc2" checked>
    <label for="acc2">
      <span>Accordion Azul</span>
      <i class="bi bi-chevron-down icon"></i>
    </label>
    <div class="content">
      <p>Conteúdo.</p>
    </div>
  </div>
</div>
```
:::
::::

## Classes Disponíveis

- `.accordion` - Container principal
- `.accordion-tab` - Item do accordion
- `.content` - Conteúdo expansível
- `.icon` - Ícone de seta
- `.accordion-{color}` - Cores (aura-500, blue, green, red, yellow)

## Boas Práticas

1. **IDs únicos**: Cada input precisa de ID único
2. **Name consistente**: Inputs do mesmo accordion devem ter o mesmo `name`
3. **Um aberto por vez**: Use `type="radio"` para comportamento exclusivo
4. **Ícone rotativo**: Use `.icon` para animar a seta
5. **Conteúdo conciso**: Mantenha conteúdo direto e objetivo
