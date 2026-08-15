# TGC Technology — GitHub + Admin Portal

This package is prepared for GitHub + Netlify + Decap CMS.

## What you can manage without code

- Company name, phone, email, WhatsApp and location
- Facebook, Instagram, TikTok, LinkedIn, YouTube and X links
- Header logo, footer logo and favicon
- Main website colors
- Homepage text
- “Does this sound familiar?” text and background image
- About text and image
- News title, description, background and slider settings
- Add/edit/delete/publish News posts and upload their pictures
- Upload replacement images through the media library

## Setup

1. Upload the contents of this package to `Lushazo/TGC-TECHNOLOGY-LTD` on the `main` branch.
2. Create a Netlify site from that GitHub repository.
3. In Netlify, enable **Identity** and set registration to **Invite only**.
4. Enable **Git Gateway** for the site.
5. Invite your administrator email address.
6. Open `https://YOUR-SITE.netlify.app/admin/` and sign in.

Decap CMS uses Git Gateway to write the changes back to the GitHub repository. Your normal website is then redeployed by Netlify.

For a custom domain, open `/admin/` on that domain after connecting it in Netlify.
