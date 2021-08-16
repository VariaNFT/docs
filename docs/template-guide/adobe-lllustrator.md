---
sidebar_position: 2
---

# Adobe Illustrator

Adobe Illustrator is the recommended design software.

# Limitation
If you want to have effect on dynamic content, be sure not to flatten the image otherwise VariaNFT cannot modify the content. You can use SVG filters to preserve effects.
![Effect > SVG Filters](/img/template-guide/ai-svg-filters.png)

# Preparation
In this guide, we use the following content as the CSV file.
```csv=
message,background
Photo by Alexander Targov on Unsplash,https://images.unsplash.com/photo-1607981513835-f5cb460cbc4a
Photo by ruedi häberli on Unsplash,https://images.unsplash.com/photo-1611594427381-62dfd422ec96
```
<a href="https://docs.varianft.studio/file/Adobe-Illustrator-Guide-Test-Data.csv" download>Download</a>

# Text Element
You can use a text element with content `{<column>}`, that will be replaced with data in the CSV file. Keep the text editable when applying effects.
![AI > Text Element](/img/template-guide/ai-text-element.png)

That's how it looks like:
![AI > Text Element](/img/template-guide/ai-text-demo.png)

# Image Element
You can place a image and name it to `<column>`, be sure the name is unique.
![AI > Image Element](/img/template-guide/ai-image-element.png)

That's how it looks like:
![AI > Image Element](/img/template-guide/ai-image-demo.png)

In cases that VariaNFT didn't render well, check those things:

1. Use local fonts: If you use fonts provided by Adobe Creative Cloud, it will be flatten during exporting.

# Export
Once you finished, export it as an SVG file via `File > Export > Export As`.
![AI > Export](/img/template-guide/ai-export.gif)

In the `SVG Options`, check the `Font` is `SVG` instead of `Convert to Outlined` and `Object IDs` is `Layer Names`.
![AI > Export > Options](/img/template-guide/ai-export-options.png)

In cases that VariaNFT didn't render well, check those things:

1. Name right layers: You may name a group instead of a image layer, check if there is a child layer which is what you should name.
