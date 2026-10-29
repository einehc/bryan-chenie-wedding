BRYAN & CHENIE — WEDDING INVITATION

Included:
- index.html
- styles.css
- script.js
- images/floral-background.png
- images/bryan-chenie.png

Wedding details already inserted:
Bryan & Chenie
January 8, 2027
10:00 AM
Cabalen Restaurant
67 West Ave, Quezon City

The site includes:
- Animated envelope opening screen with wax seal
- Navy/dusty-pink floral hero
- Couple photo
- Live countdown
- Google Maps button
- Wedding timeline
- Click-to-enlarge gallery
- RSVP form connected to Google Sheets through Google Apps Script
- Mobile navigation

To publish:
Upload the entire folder contents to your web host, keeping the images folder beside index.html.

To enable RSVP submissions to Google Sheets:
Follow GOOGLE_SHEETS_SETUP.txt to deploy google-apps-script.gs as a web app, then replace the RSVP_ENDPOINT placeholder in script.js with the deployed URL ending in /exec. Until that URL is configured, the form will display a delivery warning instead of claiming the RSVP was sent.
