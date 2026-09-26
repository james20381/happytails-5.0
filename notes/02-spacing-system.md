# Spacing System

This project uses an **8px spacing system**. Every margin, padding and gap should be based on multiples of 8 where possible. This creates a consistent rhythm throughout the UI.

---

# Principles

* Prefer consistent spacing over pixel-perfect adjustments.
* Use `gap` instead of margins when spacing items inside Flexbox or Grid.
* Apply spacing from the parent container whenever possible.
* Increase spacing between sections more than spacing within sections.

---

# Spacing Scale

| Tailwind | Pixels | Typical Use             |
| -------- | ------ | ----------------------- |
| `0`      | 0px    | Reset                   |
| `0.5`    | 2px    | Fine adjustments        |
| `1`      | 4px    | Icon alignment          |
| `2`      | 8px    | Small gaps              |
| `3`      | 12px   | Compact padding         |
| `4`      | 16px   | Default spacing         |
| `5`      | 20px   | Medium spacing          |
| `6`      | 24px   | Card padding            |
| `8`      | 32px   | Section content         |
| `10`     | 40px   | Large gaps              |
| `12`     | 48px   | Section spacing         |
| `16`     | 64px   | Hero spacing            |
| `20`     | 80px   | Large page sections     |
| `24`     | 96px   | Landing page sections   |
| `32`     | 128px  | Major visual separation |

---

# Dashboard Defaults

## Page Padding

```text
p-8 (32px)
```

---

## Card Padding

```text
p-6 (24px)
```

---

## Gap Between Cards

```text
gap-6 (24px)
```

---

## Sidebar Padding

```text
p-6 (24px)
```

---

## Header Padding

```text
px-8
py-4
```

---

## Form Fields

```text
gap-4 (16px)
```

---

## Buttons

```text
px-4
py-2
```

---

## Icon + Text

```text
gap-2 (8px)
```

---

## Lists

```text
gap-3 (12px)
```

---

## KPI Cards

```text
Padding: p-6

Gap between value and label: gap-2

Gap between cards: gap-6
```

---

# Responsive Guidelines

### Mobile

* Reduce page padding to `p-4` or `p-6`
* Stack cards vertically
* Keep `gap-4` between stacked components

### Tablet

* Increase page padding to `p-6`
* Use two-column layouts where appropriate

### Desktop

* Use `p-8`
* Keep `gap-6` between cards
* Increase spacing between major sections

---

# Rules

✅ Prefer `gap` over `margin`.

✅ Use multiples of **8px** whenever practical.

✅ Give components consistent internal padding.

✅ Use larger spacing to separate different sections than to separate related content.

❌ Avoid random values like `mt-[22px]` unless there is a specific design requirement.

---

# Common Layout Recipe

```text
Page
└── p-8

Section
└── gap-8

Card
└── p-6

Card Content
└── gap-4

Buttons
└── gap-2
```

---

# Philosophy

Good spacing is mostly invisible. A consistent rhythm makes an interface feel calm, balanced and professional without users consciously noticing why.
