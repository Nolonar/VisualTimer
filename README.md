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
Simply download all `.html`, `.css`, and `.js` files to the same folder.

## How to run
#### If downloaded to your PC (offline use)
Simply open `timer.html` with a browser.

#### If downloaded to a web server
Use a browser to navigate to your webserver, for instance: https://example.com/timer.html

## How to use
When the page loads, you will be asked to enter a duration. A duration must have a value (number) followed by a unit. Valid units are:

- `ms`: milliseconds
- `s`: seconds
- `m`: minutes
- `h`: hours

Example of valid durations:

- `20m`: 20 minutes
- `20000ms`: 20 000 milliseconds (20 seconds)
- `100s`: 100 seconds (1 minute 40 seconds)
- `1.5m`: 1.5 minutes (1 minute 30 seconds)
- `.1h`: 0.1 hours (6 minutes)

There is no whitespace between the value and the unit.


  [screen]: screenshot.png
