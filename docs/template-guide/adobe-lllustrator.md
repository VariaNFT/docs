---
sidebar_position: 2
---

# Adobe Illustrator

Adobe Illustrator the recommended design software for VariaNFT.

# Limitation
If you want to create effects on dynamic content, make sure that you do not flatten the image, otherwise VariaNFT would not be able to modify the content. You can use SVG filters to preserve effects.
![Effect > SVG Filters](/img/template-guide/ai-svg-filters.png)

# Preparation
In this guide, we use the following as the input CSV file.
```csv=
message,background
Photo by Alexander Targov on Unsplash,https://images.unsplash.com/photo-1607981513835-f5cb460cbc4a
Photo by ruedi häberli on Unsplash,https://images.unsplash.com/photo-1611594427381-62dfd422ec96
```
<a href="https://docs.varianft.studio/file/Adobe-Illustrator-Guide-Test-Data.csv" download>Download</a>

# Text Element
You can use a text element with content `{<column>}` to replaced with data in the CSV file. Keep the text editable when applying effects.
![AI > Text Element](/img/template-guide/ai-text-element.png)

This is how it would look like:
![AI > Text Element](/img/template-guide/ai-text-demo.png)

# Image Element
You can place a image and name it to `<column>` and be sure the name is unique.
![AI > Image Element](/img/template-guide/ai-image-element.png)

This is how it would look like:
![AI > Image Element](/img/template-guide/ai-image-demo.png)

In cases where VariaNFT couldn't render properly, check the following things:

1. Use local fonts: If you use fonts provided by Adobe Creative Cloud, it will be flatten when exporting.

# Export
Once you've finished, export it as an SVG file via `File > Export > Export As`.
![AI > Export](/img/template-guide/ai-export.gif)

In `SVG Options`, check that the `Font` is `SVG` instead of `Convert to Outlined` while `Object IDs` is `Layer Names`.
![AI > Export > Options](/img/template-guide/ai-export-options.png)

In cases where VariaNFT couldn't render properly, check the following things:

1. Name the right layers: You may have named a group instead of an image layer, check if there is a child layer that you should name.
