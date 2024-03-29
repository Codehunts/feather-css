# feather-css
A lightweight and modular CSS framework for building beautiful and responsive web interfaces.


# Custom CSS Font Size Utility (Global or Responsive)

This utility provides a set of CSS classes for easily managing font sizes in your project. By default, these classes define globally consistent font sizes. You can optionally use them responsively by adding specific classes for different screen sizes.

## Class Naming Convention

We use a clear and descriptive naming convention for font size classes:

- **Base Classes:** `t-size-1`, `t-size-2`, etc. 
- **Responsive Suffixes:** `-sm` (small screens), `-md` (medium screens), `-lg` (large screens), `-xl` (extra large screens)



## Font Sizes (Text Size)

- `t-size-1`: 11px
- `t-size-2`: 13px
- `t-size-3`: 15px
- `t-size-4`: 17px
- `t-size-5`: 19px

## Usage

To use the font sizes, simply add the corresponding class to your HTML elements:

```html
<div class="t-size-5">
  This text has font size 19px.
</div>
```

## Responsive Usage

For different screen sizes, you can use the following classes:

- `t-size-sm-*`: for small screens.
- `t-size-md-*`: for medium screens
- `t-size-lg-*`: for large screens
- `t-size-xl-*`: for extra large screens

```html
<div class="t-size-5 t-size-md-4 t-size-lg-5">
  This text has font size 19px by default, 17px on medium screens, and 19px on large screens.
</div>
```
