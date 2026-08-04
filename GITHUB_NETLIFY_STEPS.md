# Publish the revised site

## Update the existing GitHub repository

Use the same `AZgitoutahere/ZsDumplingsRev2` repository. Replace the old working files with the revised files and add the new files. Do not create a second repository.

### Recommended: GitHub Desktop

1. Install and open GitHub Desktop, then sign in.
2. Choose **File > Clone repository** and select `AZgitoutahere/ZsDumplingsRev2`.
3. Open the cloned repository folder from **Repository > Show in Explorer**.
4. Copy the contents of this revised project folder into the cloned repository folder.
5. Allow Windows to replace files with the same names. Do not delete the `.git` folder in the cloned repository.
6. Return to GitHub Desktop. Review the changed-file list.
7. Enter a summary such as `Add Google Sheets schedule and Netlify contact form`.
8. Click **Commit to main**, then **Push origin**.

The `.env.local` file is intentionally not included. Enter environment variables in Netlify instead.

## Connect the repository to Netlify

1. In Netlify, choose **Add new project > Import an existing project**.
2. Select GitHub and choose `AZgitoutahere/ZsDumplingsRev2`.
3. Use build command `npm run build` and publish directory `dist`.
4. Add these environment variables in Netlify:
   - `VITE_GOOGLE_SHEET_ID` = your spreadsheet ID
   - `VITE_GOOGLE_MENU_TAB` = `Menu_Items`
   - `VITE_GOOGLE_SETTINGS_TAB` = `Site_Settings`
   - `VITE_GOOGLE_LOCATIONS_TAB` = `Locations`
   - `VITE_GOOGLE_SCHEDULE_TAB` = `Schedule`
5. Deploy the site.
6. After deployment, submit one test contact form. In Netlify, open **Forms** to verify the submission and configure email notifications.
