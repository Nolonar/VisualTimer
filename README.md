# VisualTimer
Visualize the time you have left. Perfect for presentations.

![Screenshot][screen]

## Requirements
Any reasonably modern browser that is kept reasonably up-to-date.

- Confirmed working:

  - **Google Chrome** (Desktop only)
  - **Mozilla Firefox** (Desktop only)
  - **MS Edge** (Legacy & Chromium)
  - **Apple Safari** (macOS & iOS)

- **Not** working:
  - **MS Internet Explorer** (all versions)

Browsers not on either list may still work, but have not been tested.

## Installation
Simply download `timer.html`, `style.css`, and `timer.js` to the same folder.

## How to use
#### If downloaded to your PC (offline use)
Simply open `timer.html` with a browser.

#### If downloaded to a web server
Use a browser to navigate to your webserver, for instance: https://example.com/timer.html

## How to configure
VisualTimer currently does not support dynamic durations, so any changes in duration must be done by editing the `timer.js` file.

1. Open `timer.js` with a text editor of your choice.
2. Look for the following line (last line): `new Timer(document.getElementById("timer-canvas")).setDuration(20 * SECONDS).start();`
3. Replace `20 * SECONDS` with any value of your choosing. Make sure to keep the asterisk (`*`) between the number and the unit. Valid units are:
  - `MILLISECONDS`
  - `SECONDS`
  - `MINUTES`
  - `HOURS`

Note: JavaScript is case-sensitive. `HOURS` is valid, but `hours` or `Hours` are not.


  [screen]: screenshot.png