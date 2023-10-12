# Product Color Swatches and Options on Category Pages using Stencil util-api

## Overview

Enhance your e-commerce website's user experience and boost sales by displaying product color swatches and other options on product listing pages (category pages) using the Stencil util-api. This README provides a guide on implementing this feature and outlines the benefits.

## Benefits

1. **Enhanced Visual Appeal:** Color swatches add an attractive element to category pages, capturing shoppers' attention.

2. **Improved User Experience:** Shoppers can quickly identify product variations, reducing the effort required to find the desired product.

3. **Faster Decision-Making:** Streamlined product selection leads to quicker purchasing decisions.

4. **Reduced Clicks:** Fewer clicks mean less friction in the shopping process and can result in higher conversion rates.

5. **Enhanced Product Discovery:** Visual options encourage customers to explore different variations, leading to increased sales and upselling opportunities.

6. **Greater Customer Satisfaction:** A more informative and efficient shopping experience leaves customers more satisfied.

7. **Improved SEO:** Including product options on category pages can boost your SEO efforts and drive more organic traffic.

8. **Competitive Advantage:** Stand out from the competition and provide a unique selling point.

9. **Reduced Cart Abandonment:** Customers are less likely to abandon their shopping carts due to confusion.

10. **Data Insights:** Track customer preferences and buying patterns for better inventory management and marketing strategies.

## Implementation

To implement this feature using Stencil util-api, follow these steps:

1. [Step 1: Identify Product Options](#step-1-identify-product-options): Determine the product variations you want to display on category pages.

2. [Step 2: Utilize Stencil util-api](#step-2-utilize-stencil-util-api): Incorporate the util-api to show color swatches and other product options.

3. [Step 3: Test and Optimize](#step-3-test-and-optimize): Test the feature to ensure it functions correctly and optimize it based on user feedback.

## Installation

To get started, clone this repository and follow the installation instructions in the included documentation.

## Contributing

We welcome contributions from the community. If you'd like to contribute to this project, please review our [Contributing Guidelines](CONTRIBUTING.md).


## JS API
When writing theme JavaScript (JS) there is an API in place for running JS on a per page basis. To properly write JS for your theme, the following page types are available to you:

* "pages/account/addresses"
* "pages/account/add-address"
* "pages/account/add-return"
* "pages/account/add-wishlist"
* "pages/account/recent-items"
* "pages/account/download-item"
* "pages/account/edit"
* "pages/account/return-saved"
* "pages/account/returns"
* "pages/account/payment-methods"
* "pages/auth/login"
* "pages/auth/account-created"
* "pages/auth/create-account"
* "pages/auth/new-password"
* "pages/blog"
* "pages/blog-post"
* "pages/brand"
* "pages/brands"
* "pages/cart"
* "pages/category"
* "pages/compare"
* "pages/errors"
* "pages/gift-certificate/purchase"
* "pages/gift-certificate/balance"
* "pages/gift-certificate/redeem"
* "global"
* "pages/home"
* "pages/order-complete"
* "pages/page"
* "pages/product"
* "pages/search"
* "pages/sitemap"
* "pages/subscribed"
* "pages/account/wishlist-details"
* "pages/account/wishlists"

These page types will correspond to the pages within your theme. Each one of these page types map to an ES6 module that extends the base `PageManager` abstract class.

```javascript
    export default class Auth extends PageManager {
        constructor() {
            // Set up code goes here; attach to internals and use internals as you would 'this'
        }
    }
```

### JS Template Context Injection
Occasionally you may need to use dynamic data from the template context within your client-side theme application code.

Two helpers are provided to help achieve this.

The inject helper allows you to compose a JSON object with a subset of the template context to be sent to the browser.

```
{{inject "stringBasedKey" contextValue}}
```

To retrieve the parsable JSON object, just call `{{jsContext}}` after all of the `{{@inject}}` calls.

For example, to setup the product name in your client-side app, you can do the following if you're in the context of a product:

```html
{{inject "myProductName" product.title}}

<script>
// Note the lack of quotes around the jsContext handlebars helper, it becomes a string automatically.
var jsContext = JSON.parse({{jsContext}}); // jsContext would output "{\"myProductName\": \"Sample Product\"}" which can feed directly into your JavaScript

console.log(jsContext.myProductName); // Will output: Sample Product
</script>
```

You can compose your JSON object across multiple pages to create a different set of client-side data depending on the currently loaded template context.

The stencil theme makes the jsContext available on both the active page scoped and global PageManager objects as `this.context`.

## Polyfilling via Feature Detection
Cornerstone implements [this strategy](https://philipwalton.com/articles/loading-polyfills-only-when-needed/) for polyfilling.

In `templates/components/common/polyfill-script.html` there is a simple feature detection script which can be extended to detect any recent JS features you intend to use in your theme code.

If any one of the conditions is not met, an additional blocking JS bundle configured in `assets/js/polyfills.js` will be loaded to polyfill modern JS features before the main bundle executes. 

This intentionally prioritizes the experience of the 90%+ of shoppers who are on modern browsers in terms of performance, while maintaining compatibility (at the expense of additional JS download+parse for the polyfills) for users on legacy browsers.

## Static assets
Some static assets in the Stencil theme are handled with Grunt if required. This
means you have some dependencies on grunt and npm. To get started:

First make sure you have Grunt installed globally on your machine:

```
npm install -g grunt-cli
```

and run:

```
npm install
```

Note: package-lock.json file was generated by Node version 18 and npm version 9. The app supports Node 18 as well as multiple versions of npm, but we should always use those versions when updating package-lock.json, unless it is decided to upgrade those, and in this case the readme should be updated as well. If using a different version for node OR npm, please delete the package-lock.json file prior to installing node packages and also prior to pushing to github.

If updating or adding a dependency, please double check that you are working on Node version 18 and npm version 9 and run ```npm update <package_name>```  or ```npm install <package_name>``` (avoid running npm install for updating a package). After updating the package, please make sure that the changes in the package-lock.json reflect only the updated/new package prior to pushing the changes to github.


### Icons
Icons are delivered via a single SVG sprite, which is embedded on the page in
`templates/layout/base.html`. It is generated via a grunt task `grunt svgstore`.

The task takes individual SVG files for each icon in `assets/icons` and bundles
them together, to be inlined on the top of the theme, via an ajax call managed
by svg-injector. Each icon can then be called in a similar way to an inline image via:

```
<svg><use xlink:href="#icon-svgFileName" /></svg>
```

The ID of the SVG icon you are calling is based on the filename of the icon you want,
with `icon-` prepended. e.g. `xlink:href="#icon-facebook"`.

Simply add your new icon SVG file to the icons folder, and run `grunt svgstore`,
or just `grunt`.

#### License

(The MIT License)
Copyright (C) 2015-present BigCommerce Inc.
All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
