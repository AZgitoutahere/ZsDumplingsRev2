Redesign the menu section of the existing website using the current website’s established visual system.

IMPORTANT
- Do not create a separate poster, menu board, or fixed-width graphic.
- This must remain a responsive webpage section.
- Do not set a fixed overall width or fixed overall height.
- Use Fill Container, Auto Layout, responsive constraints, and the existing page container behavior.
- Keep the existing webpage background, colors, fonts, button styles, border styles, shadows, spacing language, and visual identity.
- Do not introduce a new font or color palette.
- Focus primarily on changing the menu layout and information hierarchy.

OVERALL RESPONSIVE STRUCTURE

Create one responsive menu section with two primary content areas:

1. Dumpling selection
2. Combo, chips, and drinks information

DESKTOP LAYOUT
- Display the two primary areas side by side.
- Use a two-column layout.
- The dumpling selection should be the larger left column.
- The combo, chips, and drinks content should be the narrower right column.
- Suggested proportional relationship:
  - Left column: approximately 60–65%
  - Right column: approximately 35–40%
- Use flexible proportions rather than fixed pixel widths.
- Align both columns at the top.
- Use a consistent gap based on the existing website spacing system.

MOBILE LAYOUT
- Change to one vertical column.
- Show the entire dumpling selection first.
- Place the combo section below all dumpling items.
- Place the chips and drinks sections below the combo section.
- Do not squeeze the desktop columns side by side on mobile.
- Do not reduce the text or images until they become difficult to read.
- Allow each section to fill the available screen width.
- Use the existing mobile page padding and spacing conventions.

TABLET LAYOUT
- Use two columns only when there is enough room for both columns to remain readable.
- At narrower tablet widths, stack the right column below the dumpling section.
- Prioritize readability over preserving the desktop column arrangement.

SECTION 1: DUMPLING SELECTION

At the top of the left section, create a heading row:

“1  CHOOSE YOUR DUMPLING”

Use the existing website heading style. The number may be placed in a badge, circle, or other treatment that matches the website.

Place the entrée price near the heading:

“$11”

The price should be visually noticeable, but its styling must remain consistent with the existing website.

Below the heading, create a vertical list of dumpling menu items.

Each dumpling item should contain:
- A food image
- Item name
- Short description
- Optional small icon or label where appropriate


Use the existing five dumpling names and descriptions.

DESKTOP DUMPLING ITEM FORMAT
- Use a horizontal menu-item layout.
- Place the food image on the left.
- Place the item name and description on the right.
- Use a consistent image width across all five items.
- Let the text area fill the remaining width.
- Separate items with spacing, a divider, or the existing website’s card treatment.
- Do not put each item into a narrow equal-width card.
- The five dumplings should read as a clear vertical menu list.

MOBILE DUMPLING ITEM FORMAT
- Allow each item to adapt based on available space.
- On wider mobile screens, the image may remain beside the text.
- On narrow mobile screens, place the image above the item name and description.
- Use full-width images or naturally sized responsive images.
- Do not use fixed image dimensions that cause horizontal scrolling.
- Keep item names and descriptions easy to scan.

SHANGHAI ITEM EMPHASIS
- Make Shanghai Crispy Soup Buns the featured item.
- Add a small “Our Signature” or “Customer Favorite” indicator.
- Use the current website’s badge or label style.
- Do not create a new decorative style that conflicts with the rest of the page.

SECTION 2: COMBO

At the top of the right column, create a section titled:

“2  MAKE IT A COMBO!”

Use the existing website’s section-heading style.

Show a simple visual equation:

ANY DUMPLING + CHIPS + DRINK

Use simple icons, illustrations, or small images that match the visual style already used elsewhere on the website.

Display the combo price prominently:

“$16”

Clarify that the price includes:
- One dumpling entrée
- One choice of chips
- One drink

Keep this section compact and easy to understand. It should not look like a separate advertisement disconnected from the menu.

SECTION 3: CHOOSE YOUR CHIPS

Place this below the combo explanation.

Heading:

“CHOOSE YOUR CHIPS”

Show the chip choices in a responsive row or small grid.

Choices:
- Z's Wild Chips (and keep the existing description)
- Kettle Chips (description: Classic crunchy kettle chips, salted to perfection)

Each option may include:
- Small product image or food image
- Flavor name

On mobile:
- Allow the chip choices to wrap into multiple rows.
- Do not shrink all three choices into unreadably narrow columns.
- Two options on one row and one on the next row is acceptable.
- A horizontal scrolling carousel may also be used only if that matches an existing website pattern.

SECTION 4: CHOOSE YOUR DRINK

Place this below or beside the chip choices within the right column.

Heading:

“CHOOSE YOUR DRINK”

Choices:
- Coke
- Diet Coke
- Sprite
- Bottled Water

Use either:
- Small drink images with labels
or
- A clean text list using the existing website list style

On desktop, the chips and drinks content may appear in two smaller columns inside the right column when there is enough space.

On mobile, place the drinks below the chips and let the section fill the screen width.

AUTO LAYOUT AND RESPONSIVE REQUIREMENTS

Build the section using nested Auto Layout frames.

Recommended structure:

Menu Section
├── Menu Content
│   ├── Dumpling Selection
│   │   ├── Dumpling Header
│   │   └── Dumpling List
│   │       ├── Dumpling Item 1
│   │       ├── Dumpling Item 2
│   │       ├── Dumpling Item 3
│   │       ├── Dumpling Item 4
│   │       └── Dumpling Item 5
│   └── Combo Options
│       ├── Combo Header
│       ├── Combo Equation
│       ├── Combo Price
│       ├── Chips Section
│       └── Drinks Section

RESPONSIVE BEHAVIOR
- Menu Content should use horizontal Auto Layout on desktop.
- Menu Content should switch to vertical Auto Layout on mobile.
- Dumpling Selection and Combo Options should use Fill Container.
- Do not assign a fixed page width.
- Do not assign a fixed section height.
- Let content determine section height.
- Images must resize proportionally.
- Text should wrap naturally.
- Prevent horizontal overflow.
- Use the existing website breakpoints when available.
- When existing breakpoints are unavailable, switch to the stacked mobile layout before either column becomes cramped.

DO NOT
- Do not create five equal-width entrée cards in one row.
- Do not create a square menu board.
- Do not lock the design to 1024 pixels.
- Do not force a white, cream, ivory, or light background.
- Do not replace the website’s existing background treatment.
- Do not specify a new font family.
- Do not specify new colors.
- Do not make the desktop layout remain two columns on narrow screens.
- Do not hide menu items on mobile.
- Do not use tiny text to keep the desktop arrangement.
- Do not use absolute positioning for the main layout.
- Do not add empty decorative panels or unused blank areas.

The finished result should feel like a natural section of the existing website, with a clear vertical dumpling menu on desktop and a responsive combo-options column beside it. On mobile, all content should become one readable sequence: dumplings first, then combo, then chips, then drinks.