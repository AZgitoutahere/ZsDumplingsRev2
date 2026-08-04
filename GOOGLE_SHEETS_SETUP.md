# Google Sheets menu setup

The website now reads menu items and prices from a Google Sheet. If the Sheet is unavailable or has not been configured, the built-in menu is shown automatically.

## 1. Create the spreadsheet

Create one Google spreadsheet with four tabs named exactly:

- `Menu_Items`
- `Site_Settings`
- `Locations`
- `Schedule`

Import the matching CSV files from the `google-sheets-template` folder into those tabs.

## 2. Share it for read-only access

In Google Sheets, choose **Share** and set **General access** to **Anyone with the link – Viewer**. Do not allow public editing.

## 3. Copy the spreadsheet ID

In this URL:

`https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`

copy the value between `/d/` and `/edit`.

## 4. Configure the website

Copy `.env.example` to `.env.local` and enter the spreadsheet ID:

```env
VITE_GOOGLE_SHEET_ID=your_spreadsheet_id
VITE_GOOGLE_MENU_TAB=Menu_Items
VITE_GOOGLE_SETTINGS_TAB=Site_Settings
VITE_GOOGLE_LOCATIONS_TAB=Locations
VITE_GOOGLE_SCHEDULE_TAB=Schedule
```

When deploying to Vercel or Netlify, add the same variables in the hosting dashboard.

## Managing prices

Edit these rows in `Site_Settings`:

- `entree_price`: one price used for every dumpling entrée
- `combo_price`: complete combo price
- `chips_price`: price shown for every chip choice
- `drinks_price`: price shown for drinks

The initial values are $11, $16, $3, and $4.

## Adding a new menu item

Add a new row to `Menu_Items`:

- `item_id`: unique permanent ID using lowercase words and hyphens
- `section`: `dumpling`, `chip`, or `drink`
- `sort_order`: controls display order; use 10, 20, 30, etc.
- `name`: customer-facing name
- `description`: customer-facing description
- `image_key`: use an existing built-in image key
- `image_url`: optional public image URL; this overrides `image_key`
- `badge`: optional label such as `Limited Special`
- `active`: `TRUE` to show it, `FALSE` to hide it
- `sold_out`: `TRUE` to keep it visible with a Sold Out badge

For a truly new photo, put a public direct image URL in `image_url`. Adding a new row does not require changing the website code.

## Existing image keys

- `crispy-pork-soup-bao`
- `pork-soup-dumplings`
- `beef-potstickers`
- `beef-chili-oil`
- `vegetarian-bao`
- `wild-chips`
- `kettle-chips`
- `drinks`

## Notes

Google Sheets changes are normally visible after the visitor reloads the webpage. The browser or Google may briefly cache data. The website uses the built-in menu if the public Sheet cannot be loaded.

## Managing trailer locations and dates

Use `Locations` for places you may visit repeatedly. Give each place a unique `location_id`. Use `Schedule` for individual appearances and enter the matching `location_id`.

- Dates must use `YYYY-MM-DD`, for example `2026-08-15`.
- Times should use 24-hour `HH:MM`, for example `10:00` and `15:00`.
- `status` may be `scheduled`, `cancelled`, or `sold_out`.
- Set `active` to `TRUE` to show the location or event.
- Past dates are hidden automatically.
- `maps_url` is optional. When blank, the website creates a Google Maps search link from the venue name and address.

The CSV templates include inactive example rows. Replace them with real information and set `active` to `TRUE`.

## Netlify contact form

The project is prepared for Netlify Forms. After the first successful Netlify deployment, open the Netlify project dashboard and look under **Forms**. Submit one test message from the deployed website, then configure form-notification emails in Netlify. The form will not submit through Netlify while you are only running it on `localhost`.
