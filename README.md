Styleguide One
====
> A styleguide driven approach to building a custom less library.

- **Comprehensive** Easily readable
- **Coherent** Max level of factorization
- **Modest** The right amount of utilities
- **Responsive** Breakpoints for main devices

## Naming conventions

- Utility classes: `.u-class`
- Components: `.component`, `.otherComponent`, `.component-subcomponent`
- Variations: `.component--variation`, `.component--otherVariation`
- States: `.component.is-state`, `.component.has-state`
- Responsive: `.breakpoint_class`~~, `.onlyBreakpoint_class`~~
- Javascript only: `.js-javascriptOnly`

*Note: it is possible for components to solely exist in a variegated form.*

## Reset
> Use of [Normalize.css](https://necolas.github.io/normalize.css/).

## Colors

### Palettes
> It is recommanded to define a color palette at the very beginning of the configuration. Use of numbers to describe the colors of the palette and their variations.

#### Examples
`@palette-1`, `@palette-1-1`, `@palette-1-2`, `@palette-2-1`, `@palette-3`

### Helpers
> For convenience, when the palette is defined, it is recommanded to define custom color helpers using the palette elements.

#### Examples
`@color-primary: @palette-a`, `@color-primary--hover: @palette-a--dark`, `@color-white: @palette-e--light`

## Themes

## Typography

.h--1 to .h--6

## Buttons
> Define the behavior of buttons

Categories:
- Default
- Alternative
- Danger
- Simple
- Icon
- Disabled

### Mixing
`.gen-btn(primary, @palette-a, @palette-a--light)` outputs `.btn--primary` with main color `@palette-a` and alternative color `@palette-a--light`.

## Icons
> Define the behavior of svg font icons

## Space
> Define different spacing methods. They should exist only with their [size variations](#size-variations).

Possible choices:
- `.space--*` (default, 4 sides)
- `.spaceX--*` (horizontal sides)
- `.spaceY--*` (vertical sides)
- `.spaceTop--*`, `.spaceBottom--*`, `.spaceLeft--*` or `.spaceRight--*`

#### Examples
`.space--1`, `.spaceBottom--3`, `.spaceX--5`

## Grid
> Define a responsive grid system. It should exist only with its [size variations](#size-variations). Based on the utility class `width`.

## Utilities
> A set of utility classes.

Categories:
- Generic (clearfix, relative, absolute, ...)
- Background
- Display
- Float
- Text
- Width base 100 (`.u-width20`) and width base 12 (`.u-width4b12`)
- Z-Index
- Palette

#### Mixings
`.gen-paletteUtil(a)` outputs `.u-paletteTextA { color: ... }` and `.u-paletteBackgroundA { background-color: ... }`.

## Size variations
> - Spaces: 1 (min) to 5 (max)
> - Grids: 1 (min) to 12 (max)
> - Headings: 1 (max) to 6 (min)
> - Buttons: small (min) to big (max)
> - Form elements: small (min) to big (max)

#### Examples
`.spaceX--1`, `.h--2`, `.btn--small`, `.grid--4`

## Responsive breakpoints

| Bkpt    | Name    | From   | To     |
|---------|---------|--------|--------|
| **xs**  | Phone   | -      | 767px  |
| **sm**  | Tablet  | 768px  | 1023px |
| **md*** | Laptop  | 1024px | 1279px |
| **lg**  | Desktop | 1280px | 1679px |
| **xl**  | Large   | 1680px | -      |

**default*

Should have responsive sizes:
- Spaces
- Grids
- Containers
- Utilities: float, display

#### Examples
`.md_spaceY`, ~~`.onlySm_grid--1`~~, `.md_container`, ~~`.onlyLg_u-floatLeft`,~~ `.xl_u-hide`

## Components

> todo

# Usage

The idea of this project is not to be used 'as is', it should be forked and turned into a living, customised tool.

### Installation

```shell
npm install && bower install
```

### Development

```shell
grunt
```

The styleguide is available at the address `http://localhost:9001/`.