# feather-css
A lightweight and modular CSS framework for building beautiful and responsive web interfaces.

# Custom CSS Font Size Utility

## Font Sizes

- `ts-1`: 11px
- `ts-2`: 13px
- `ts-3`: 15px
- `ts-4`: 17px
- `ts-5`: 19px

## Usage

To use the font sizes, simply add the corresponding class to your HTML elements:

```html
<div class="ts-5">
  This text has font size 19px.
</div>

## Responsive Usage

For different screen sizes, you can use the following classes:

- `ts-sm-*`: for small screens.
- `ts-md-*`: for medium screens
- `ts-lg-*`: for large screens
- `ts-xl-*`: for extra large screens

```html
<div class="ts-5 ts-md-4 ts-lg-5">
  This text has font size 19px by default, 17px on medium screens, and 19px on large screens.
</div>