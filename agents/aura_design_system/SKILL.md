---
name: Aura Design System
description: Comprehensive guide and code snippets for using ALL Aura Design System components.
---

# Aura Design System Skill

This skill provides the official patterns for building user interfaces using the Aura Design System.

## 1. Project Structure & Layout

### Basic Template

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Page Title</title>
    <link rel="stylesheet" href="./dist/app.css" />
    <link rel="stylesheet" href="./icons/icons-dist/icons.css" />
  </head>
  <body>
    <!-- Standard Loader (Hidden by default) -->
    <div class="ajax_load">
      <div class="ajax_load_box">
        <div class="ajax_load_box_loader"></div>
        <div class="ajax_load_box_title">Aguarde, carregando...</div>
      </div>
    </div>

    <!-- Floating Action Button -->
    <div class="fab-container">
      <button class="fab main-fab">+</button>
      <div class="fab-options">
        <a href="#" class="fab-option"><i class="icon icon-plus-2"></i></a>
      </div>
    </div>

    <div class="wrapper">
      <div class="navbar">...</div>
      <div class="sidebar">...</div>
      <main class="app">
        <div class="container">
          <!-- Content -->
        </div>
      </main>
    </div>
    <script src="./dist/jquery.min.js"></script>
    <script>
      /* Theme Toggle Logic */
    </script>
  </body>
</html>
```

### Grid System

- **Container**: `.container` (centered max-width).
- **Row**: `.row` (flex container).
- **Columns**: `.span-X` (1-12).
- **Responsive**: `.span-sm-X`.
- **Spacing**: `.spacing-X` (1, 2, 4, etc.) on parent adds gaps.

```html
<div class="row spacing-4">
  <div class="span-6 span-sm-12">Left Half</div>
  <div class="span-6 span-sm-12">Right Half</div>
</div>
```

## 2. Core Components

### Buttons

- **Sizes**: `.btn-sm`, `.btn`, `.btn-lg`.
- **Colors**: `.btn-aura-500`, `.btn-green`, `.btn-red`, `.btn-blue`, `.btn-gray-200`.

```html
<button class="btn btn-aura-500">Primary</button>
<button class="btn-sm btn-green"><i class="icon icon-check-1"></i> Save</button>
```

### Forms

Use `.app_form` generally inside a `.card`.

```html
<form class="app_form card column spacing-4">
  <label class="label">
    <span class="legend">Email:</span>
    <input type="email" placeholder="user@example.com" />
  </label>

  <!-- Input Group -->
  <label class="label">
    <span class="legend">Search:</span>
    <div class="group">
      <span><i class="icon icon-search-1"></i></span>
      <input type="text" />
    </div>
  </label>
</form>
```

### Messages / Tags

Simple text containers.

```html
<!-- Message Box -->
<div class="message message-blue">
  <h4 class="title">Info</h4>
  <div class="body"><p>Details here.</p></div>
</div>

<!-- Tags -->
<div class="tags">
  <span class="tag">Tag 1</span>
  <span class="tag">Tag 2</span>
</div>
```

## 3. Navigation & Steps

### Navbar & Breadcrumbs

```html
<ul class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">Home</a></li>
  <li class="breadcrumb-item active">Current Page</li>
</ul>
```

### Steppers (Steps)

Horizontal or Vertical steps.

```html
<div class="stepper stepper-horizontal">
  <div class="stepper-item completed">
    <div class="stepper-step">1</div>
    <div class="stepper-content">
      <div class="stepper-label">Account</div>
    </div>
  </div>
  <div class="stepper-item active">
    <div class="stepper-step">2</div>
  </div>
</div>
```

### Tabs (Pure CSS)

Uses radio inputs to toggle content.

```html
<div class="tabs">
  <input type="radio" name="tab-group" id="tab-1" checked />
  <input type="radio" name="tab-group" id="tab-2" />

  <nav>
    <label for="tab-1" class="tab-1">Tab 1</label>
    <label for="tab-2" class="tab-2">Tab 2</label>
  </nav>

  <section>
    <div class="tabs-content content-1">Content 1</div>
    <div class="tabs-content content-2">Content 2</div>
  </section>
</div>
```

### Paginator

```html
<div class="paginator">
  <a href="#"><i class="icon icon-arrow-25"></i></a>
  <span>1</span>
  <a href="#">2</a>
  <a href="#"><i class="icon icon-arrow-24"></i></a>
</div>
```

## 4. Data Display

### Tables

Wrapped in `.table-container`.

```html
<div class="table-container">
  <table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>#1</td>
        <td>Name</td>
        <td><span class="badge badge-green">Active</span></td>
      </tr>
    </tbody>
  </table>
</div>
```

### Lists & Dividers

Detailed list items with metadata sections.

```html
<div class="list column spacing-2">
  <div class="list_item">
    <div class="infors">
      <div class="infors_body">...</div>
    </div>
  </div>

  <div class="divider divider-text"><span>OR</span></div>
</div>
```

### Carousels & Sliders

```html
<div class="carousels">
  <h2 class="carousel-title">Title</h2>
  <div class="carousel">
    <div class="carousel-item"><img src="..." /></div>
    <div class="carousel-item"><img src="..." /></div>
  </div>
</div>
```

### Funnel (Kanban)

Board layout for pipelines.

```html
<div class="funnel_board">
  <div class="funnel_list">
    <header>
      <div class="infors"><h3>To Do</h3></div>
      <span class="list_count">3</span>
    </header>
    <ul class="funnel_list_stage">
      <li class="funnel_card">...</li>
    </ul>
  </div>
</div>
```

### Calendar

Grid based weekly/monthly view.

```html
<div class="calendar">
  <div class="calendar_week">...</div>
  <div class="calendar_days">...</div>
</div>
```

## 5. Feedback & Loading

### Skeleton & Loaders

Loading placeholders.

```html
<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-circle"></div>

<!-- Use .ajax_load class on a fixed div for full screen overlay -->
```

### Progress Bars

```html
<div class="progress progress-sm">
  <div class="progress-bar" style="width: 50%">50%</div>
</div>
```

### Alerts

```html
<div class="alert alert-warning alert-dismissible">
  <div class="alert-title">Warning</div>
  <div class="alert-description">Something happened.</div>
</div>
```

## 6. Interactive

### Accordion

Pure CSS accordion using checkbox.

```html
<div class="accordion">
  <div class="accordion-tab">
    <input type="checkbox" id="acc1" />
    <label for="acc1">
      <span>Section Title</span>
      <i class="icon icon-arrow-26"></i>
    </label>
    <div class="content">...</div>
  </div>
</div>
```

### Modals & Drawers

```html
<!-- Modal -->
<div class="modal open">
  <div class="modal_container">
    <div class="modal_header">...</div>
    <div class="modal_body">...</div>
  </div>
</div>

<!-- Drawer -->
<div class="drawer open drawerName">
  <div class="drawer_header">...</div>
  <div class="drawer_body">...</div>
</div>
```

### Dropdowns & Tooltips

```html
<div class="dropdown">
  <button data-dropdown="dd1" class="btn-dropdown">Menu</button>
  <ul class="dropdown_navbar dd1">
    ...
  </ul>
</div>

<span data-tooltip="Tooltip Text" class="tooltip-top">Hover Me</span>
```

## 7. Icons & Tokens

**Common Icons:** `icon-trash-1`, `icon-edit-1`, `icon-search-1`, `icon-plus-2`, `icon-calendar-2`, `icon-check-1`, `icon-cancel-1`, `icon-arrow-26` (down).

**Colors:** `aura-500` (Primary), `green` (Success), `red` (Danger), `yellow` (Warning), `blue` (Info).

## 8. Typography, Spacing & Animations

### Typography

- **Headings:** `.heading-1` through `.heading-6` (Responsive sizing).
- **Body:** `.body-1` (md), `.body-2` (sm).
- **Subtitles:** `.subtitle-1` (lg), `.subtitle-2` (md).
- **Lead/Caption:** `.lead` (xl, muted), `.caption` (xs, muted).
- **Utilities:**
  - Size: `.text-xs` to `.text-9xl`
  - Weight: `.text-regular`, `.text-medium`, `.text-bold`
  - Align: `.text-left`, `.text-center`, `.text-right`
  - Format: `.text-uppercase`, `.text-lowercase`, `.text-capitalize`
  - Truncate: `.text-truncate`, `.line-clamp-1`, `.line-clamp-2`

### Spacing (Margins & Paddings)

Aura uses a standard scale: 0, 1 (0.25rem), 2, 3, 4 (1rem), ..., 96.

- **Margin:** `m-X`, `mx-X`, `my-X`, `mt-X`, `mb-X`, `ml-X`, `mr-X`.
- **Padding:** `p-X`, `px-X`, `py-X`, `pt-X`, `pb-X`, `pl-X`, `pr-X`.
- **Special:** `mx-auto`, `my-auto`.

### Borders & Radius

- **Radius:** `.radius-sm`, `.radius-md`, `.radius-lg`, `.radius-full`.
- **Borders:** `.border` (1px), `.border-2`, `.border-4`, `.border-8`.
  - Directions: `.border-t`, `.border-b`, etc.
  - Colors: `.border-aura-500`, `.border-red`, `.border-transparent`.

### Animations & Transitions

- **Animations:** `.animate-fade-in`, `.animate-slide-up/down/left/right`, `.animate-zoom-in/out`, `.animate-pulse`, `.animate-spin`.
- **Transitions:** `.transition-all`, `.transition-colors`, `.transition-opacity`.
- **Duration:** `.duration-75` to `.duration-1000`.
- **Easing:** `.ease-in`, `.ease-out`, `.ease-in-out`.
- **Delay:** `.delay-75` to `.delay-1000`.

### Thumbnails

- **Classes:** `.thumbnail-4` (16px), `.thumbnail-6` (24px), `.thumbnail-8` (32px), `.thumbnail-16` (64px), `.thumbnail-32` (128px).
- **Modifiers:** `.thumb-radius-full`, `.thumb-radius-md`.
- **Group:** `.thumbnails-8` (overlapping avatars).
