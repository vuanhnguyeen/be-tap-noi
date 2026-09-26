# Third-party Licenses

## Google Noto Emoji

- Source repository: https://github.com/googlefonts/noto-emoji
- Assets used in this project: SVG files under `2D/svg/` (copied to `public/images/noto/`)
- License: Apache License 2.0
- Copyright: Google LLC and Noto project contributors

## Notes

- This project stores Noto Emoji assets locally and does not hotlink runtime images from external domains.
- Placeholder mappings are used for concepts that do not have an exact Noto Emoji match:
  - `Quả thanh long` currently uses melon placeholder (`TODO` in data file).
  - `Cái bàn` currently uses chair placeholder (`TODO` in data file).

## Additional topic cover illustrations

- `public/images/noto/topic-covers/actions.svg`: Noto Emoji `2D/svg/emoji_u1f44b.svg` (waving hand).
- `public/images/noto/topic-covers/foods.svg`: Noto Emoji `2D/svg/emoji_u1f35a.svg` (cooked rice).
- `public/images/noto/topic-covers/family.svg`: Noto Emoji tag `v2.038`, `svg/emoji_u1f46a.svg` (color family illustration).
- Source: https://github.com/googlefonts/noto-emoji — Apache License 2.0, Google LLC and Noto project contributors.
- `public/images/topic-covers/numbers.svg` and `alphabet.svg` are project-created SVG illustrations, drawn with paths rather than system fonts.

## Illustrations inside the five added lessons

- Family, food, and action illustrations listed in `public/images/learning-illustrations-sources.json` are copied from Noto Emoji `v2.038/svg` (Apache 2.0).
- The remaining action scenes (eat, drink, sit, open, close, jump, wash, brush, read) and food scenes (porridge, soup, yogurt) are project-created SVG drawings.
- Number and Vietnamese letter artwork uses outlined Nunito weight 800 glyphs. Nunito is licensed under the SIL Open Font License 1.1; see `public/images/alphabet/NUNITO-OFL.txt`. SVGs contain paths and do not depend on fonts installed on the device.
