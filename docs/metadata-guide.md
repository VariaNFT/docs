---
sidebar_position: 5
---

# Metadata Guide
`metadata.json` describes attributes of an NFT, you can add custom attributes such as `Color`, `Rarity`, `Origin Owner`, and so on. To use data from the data file, use `{<column>}` in the value.
![Metadata editor](/img/metadata-guide/metadata-highlight.png)

VariaNFT follows [OpenSea Metadata Standard](https://docs.opensea.io/docs/metadata-standards), thus if you named a attribute `external_url`, `background_color`, `animation_url`, or `youtube_url`, it will be considered as a top-level attribute, otherwise it will be put under `attributes`, you can preview it by click on button at the top-right corner of `Metadata` in `Mint`.
![Preview Hightlight](/img/metadata-guide/preview-highlight.png)
