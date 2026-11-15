ORBIT Mobile — update build 262: phone app (installable)
=========================================================

Upload these files to the mob.alnajjar.in site, keeping the same folders.
Replace the old ones; leave every other file on the site as it is.

CHANGED
  index.html              app icon + install settings
  mobile.html             viewport-fit=cover (notch / home-bar spacing now works),
                          install settings, loads the 2 new files, ?v=262 on all files
  version.json            build 262
  js/60-update-check.js   APP_BUILD 262 (phones get the "new version" refresh)
  js/71-mobile-app.js     3 new home layouts (E, F, G) with line icons; old layouts A–D unchanged
  js/79d-lcd-reader.js    unchanged
  js/79e-mobile-connection.js  unchanged

NEW
  manifest.webmanifest    makes ORBIT installable (name, icon, full screen, colours)
  icons/                  ORBIT app icons (Android, iPhone, maskable)
  css/05-phone-app.css    phone sign-in screen, installed-app behaviour, install banner
  js/80-install-app.js    "Install ORBIT" banner (Android) / "Add to Home Screen" help (iPhone)
  css/06-mobile-layouts.css  styles for the 3 new layouts (light + dark for each)

NEW LAYOUTS (Profile → Home layout, or admin → Layout for all users)
  E · Clean Executive   white cards, one blue accent, line icons
  F · Midnight Gold     deep night with a gold accent, floating menu bar
  G · Corporate Navy    navy header, summary card, 2×2 quick actions
  Each one works in light and dark (the ☀️/🌙 button).

HOW USERS INSTALL
  Android (Chrome / Edge): tap "Install" on the banner, or ⋮ → Install app / Add to Home screen
  iPhone / iPad (Safari):  Share → Add to Home Screen

IMPORTANT
  · Upload the WHOLE folder contents, including the new "icons" folder.
  · This mobile.html is built from build 261. If you changed mobile.html on the site
    after 261, merge instead of replacing.
  · Test Microsoft 365 sign-in once from the installed app on an iPhone.
