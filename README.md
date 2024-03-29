# feather-css
A lightweight and modular CSS framework for building beautiful and responsive web interfaces.


## Table of Contents


* **Typography** (This section covers the utilities provided by feather-css for managing various aspects of text formatting.)
    * [Text Size](#text-size)
    * [Heading Size](#heading-size)
    * [Font Weight](#font-weight)



# Font Size <a name="text-size"></a>

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

## Heading Size <a name="heading-size"></a>
This utility provides a set of CSS classes for easily managing heading sizes in your project. By default, these classes define globally consistent heading sizes. You can optionally use them responsively by adding specific classes for different screen sizes.

## Class Naming Convention

We use a clear and descriptive naming convention for heading size classes:

- **Base Classes:** `h-size-1`, `h-size-2`, etc. 
- **Responsive Suffixes:** `-sm` (small screens), `-md` (medium screens), `-lg` (large screens), `-xl` (extra large screens)



## Font Sizes (Text Size)

- `h-size-1`: 14px
- `h-size-2`: 20px
- `h-size-3`: 24px
- `h-size-4`: 30px
- `h-size-5`: 36px

## Usage

To use the Heading sizes, simply add the corresponding class to your HTML elements:

```html
<h1 class="h-size-3">
  This Heading has font size 24px.
</h1>
```

## Responsive Usage

For different screen sizes, you can use the following classes:

- `h-size-sm-*`: for small screens.
- `h-size-md-*`: for medium screens
- `h-size-lg-*`: for large screens
- `h-size-xl-*`: for extra large screens

```html
<h1 class="h-size-5 h-size-md-4 h-size-lg-5">
  This text has font size 36px by default, 30px on medium screens, and 36px on large screens.
</h1>
```

# Font Weight (Bold) <a name="font-weight"></a>
This utitlity provides a set of CSS classes for easily controlling font weight across your project. Font weight determines the boldness or thickness of text.

## Class Naming Convention

We use a clear and descriptive naming convention for Font Weight (Text Weight) classes:

- **Base Classes:** `t-weight-*`followed by the desired font weight value (e.g., `t-weight-bold`, `t-weight-300`). 
##Available font weights:
This utility offers a range of font weight values for various use cases. You can also use keywords like `normal`, `bold`, `light`, etc,. as defined in CSS.
Available Weight Options:
- normal
- bold
- 100
- 200
- 300
- 500
- 600
- 800
- 900
- light
- bolder
- inherit
- initial
- revert
- revert-layer
- unset

- **Responsive Suffixes:** `-sm` (small screens), `-md` (medium screens), `-lg` (large screens), `-xl` (extra large screens)


## Usage

To use the Font Weight, simply add the corresponding class to your HTML elements:

```html
<p class="t-weight-bold"> This text is bold</p>
<span class="t-weight-light"> This text is lighter</span>
```

## Responsive Usage

For different screen sizes, you can use the following classes:

- `t-weight-sm-*`: for small screens.
- `t-weight-md-*`: for medium screens
- `t-weight-lg-*`: for large screens
- `t-weight-xl-*`: for extra large screens

```html
  <h2 class="t-weight-300 t-weight-md-bold">This heading has normal weight by default, bold on medium screens.</h2>
```
