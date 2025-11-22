# Calendar

O calendar é um componente completo para visualização e gerenciamento de eventos em formato de calendário mensal.

## Calendar Básico

::::{.docs-example}

::: {.docs-example-preview}
<div class="calendar" style="height: 600px;">
  <div class="calendar_week">
    <div>Dom</div>
    <div>Seg</div>
    <div>Ter</div>
    <div>Qua</div>
    <div>Qui</div>
    <div>Sex</div>
    <div>Sáb</div>
  </div>
  
  <div class="calendar_days">
    <div class="day inactive">
      <div class="day_header"><span>30</span></div>
    </div>
    <div class="day">
      <div class="day_header"><span>1</span></div>
      <div class="events">
        <div class="event">
          <p>Reunião 9h</p>
        </div>
      </div>
    </div>
    <div class="day">
      <div class="day_header"><span>2</span></div>
    </div>
    <div class="day active">
      <div class="day_header"><span>3</span></div>
      <div class="events">
        <div class="event">
          <p>Apresentação 14h</p>
        </div>
        <div class="event">
          <p>Workshop 16h</p>
        </div>
      </div>
    </div>
    <div class="day">
      <div class="day_header"><span>4</span></div>
    </div>
    <div class="day">
      <div class="day_header"><span>5</span></div>
    </div>
    <div class="day">
      <div class="day_header"><span>6</span></div>
    </div>
  </div>
</div>
:::

::: {.docs-example-code}
<button class="copy-button">Copiar</button>

```html
<div class="calendar">
  <div class="calendar_week">
    <div>Dom</div>
    <div>Seg</div>
    <div>Ter</div>
    <div>Qua</div>
    <div>Qui</div>
    <div>Sex</div>
    <div>Sáb</div>
  </div>
  
  <div class="calendar_days">
    <div class="day">
      <div class="day_header"><span>1</span></div>
      <div class="events">
        <div class="event">
          <p>Evento 1</p>
        </div>
      </div>
    </div>
    <!-- Mais dias... -->
  </div>
</div>
```
:::
::::

## Classes Disponíveis

- `.calendar` - Container principal
- `.calendar_week` - Cabeçalho dos dias da semana
- `.calendar_days` - Grid dos dias
- `.day` - Dia individual
- `.day.active` - Dia atual
- `.day.inactive` - Dia de outro mês
- `.day_header` - Cabeçalho do dia (número)
- `.events` - Container de eventos
- `.event` - Evento individual
- `.more` - Link "ver mais"

## Boas Práticas

1. **Responsividade**: Em mobile, muda para lista vertical
2. **Eventos limitados**: Use `.more` para muitos eventos
3. **Dia atual**: Sempre marque com `.active`
4. **Navegação**: Implemente prev/next mês
