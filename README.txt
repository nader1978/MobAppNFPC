ORBIT Mobile - TEST version 258 (split files)

Open index.html in Chrome or Safari on the phone (or host the folder on any web server - the live ODO / barcode camera needs https).
Demo data only - nothing is saved to SharePoint; saves stay in the open page.

What's new in 258: every screen of the Power Apps field app (NFPC W/L App X-14) - 12 modules, 71 screens,
live ODO scanning with the camera, barcode scanning, offline queue (Settings > Sync & offline queue).

Files
  index.html                 the page
  css/test-mode.css          test-mode toast, confirm dialog and TEST MODE badge
  js/00-test-mode-data.js    demo data and stand-ins for the ORBIT functions (sign-in, lists, racks, stock)
  js/01-test-data-suite.js   demo data for all the other lists (trips, forklifts, receiving, inspection, employees, ...)
  js/71-mobile-app.js        the mobile app shell - same file as in ORBIT_Version_258
  js/79-mobile-suite.js      the screens engine, ODO / barcode scanner, offline queue - same as ORBIT_Version_258
  js/79a-mobile-fleet.js     forklifts, trailers, fuel, energy, trips, approvals, ODO adjust
  js/79b-mobile-stock.js     temperature history, dairy stock, WH's activity, receiving, WMS extras
  js/79c-mobile-people.js    inspection, OT, employees, daily data & dashboard, cooler service, UOM, sync
  js/99-start.js             opens the mobile app
