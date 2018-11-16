# Advanced CSS and Sass

Following along with the course from Udemy by Jonas Schmedtmann.

CSS Architecture systems:

* Block Element Modifier (BEM)
* Object Oriented CSS (OOCSS)
* Scalable and Modular Architecture for CSS

[Medium article - How to organize your CSS with OOCSS, BEM & SMACSS](https://medium.com/@Intelygenz/how-to-organize-your-css-with-oocss-bem-smacss-a2317fa083a7)

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

## Use a logical architecture for organizing folders for development

The 7-1 Pattern - 7 different folders for partial Sass files, and 1 main Sass file to import all other files into a compiled CSS stylesheet.

### The 7 Folders

* base
* components
* layout
* pages
* themes
* abstracts
* vendors