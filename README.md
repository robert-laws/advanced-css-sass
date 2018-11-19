# Advanced CSS and Sass

Following along with the course from Udemy by Jonas Schmedtmann.

CSS Architecture systems:

* Block Element Modifier (BEM)
* Object Oriented CSS (OOCSS)
* Scalable and Modular Architecture for CSS

[Medium article - How to organize your CSS with OOCSS, BEM & SMACSS](https://medium.com/@Intelygenz/how-to-organize-your-css-with-oocss-bem-smacss-a2317fa083a7)

[Atomic Design Theory Articles](https://www.creativebloq.com/web-design/10-reasons-you-should-be-using-atomic-design-61620771)

## BEM Methodology

Block Element Modifier

* Block = standalone component that is meaningful on its own

* Element = part of a block that has no meaning on its own

* Modifier = a different version of a block or an element

```css
.block {}
.block__element {}
.block__element--modifier {}
```

## Sass

Main features

* Variables - reusable values (colors, fonts, etc.)
* Nesting - nest selectors inside other selectors
* Operators - perform mathematical operations
* Partials and Imports - separate sass into separate files and import them via one file
* Mixins - reusable pieces of code
* Functions - a mixin that produces a value
* Extends - pieces of repeatable code thhat can be inherited by selectors
* Control Directives - use of conditionals and loops

## Use a logical architecture for organizing folders for development

The 7-1 Pattern = 7 different folders for partial Sass files, and 1 main Sass file to import all other files into a compiled CSS stylesheet.

### The 7 Folders

* base/
* components/
* layout/
* pages/
* themes/
* abstracts/
* vendors/

[Article about Sass Architecture](https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization)

[Documentation about the 7-1 Sass Design structure](https://sass-guidelin.es/#architecture)

## Layout Types

* Fluid Grids and Layouts

  Allow content to easily adapt to the current viewport width. Uses % rather than px for layout-related lengths.

  * *Technologies available are Float Layouts, Flexbox, CSS Grid*

* Flexible/Responsive Images

  Images need special attention that differs from text to make sure they adapt to the current viewport.

* Media Queries

  Change styles on certain viewports widths (breakpoints) to display the website different.

## HTML Entity Reference

[HTML Entity Reference by CSS-Tricks](https://css-tricks.com/snippets/html/glyphs)