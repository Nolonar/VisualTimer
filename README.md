# VisualTimer
Visualize the time you have left. Perfect for presentations or meetings.

A deployed version of VisualTimer can be found [here][webapp].

![Screenshot][screen]

| Project       | Latest release | Webapp         |
| ------------- | -------------- | -------------- |
| VisualTimer   | [Zip][release] | [Here][webapp] |

## Requirements
Any reasonably modern browser that is kept reasonably up-to-date.

Confirmed working:

- Windows
  - **Chrome**
  - **Firefox**
  - **Edge** (Legacy & Chromium)

- macOS
  - **Safari**

- Android
  - **Chrome**

- iOS
  - **Safari**

**Not** working:
- Windows
  - **Internet Explorer** (all versions)

- Windows Phone
  - **Internet Explorer**

Browsers not on either list may still work, but have not been tested.

## Installation
Simply download all files from the [webapp](webapp) folder to the same folder.

## How to run
#### If downloaded to your PC (offline use)
Simply open `index.html` with a browser.

#### If downloaded to a web server
Use a browser to navigate to your webserver, for instance: https://example.com/webapp/

## How to use
### Set a duration
Enter a duration and select a duration unit. To mix multiple units, use floating point values or the smallest unit.

Example:
- 1.5 Minutes -> 1 minute and 30 seconds.
- 100 Seconds -> 1 minute and 40 seconds.

### Start timer
Simply click on "Start timer". You can start a new timer at any time by clicking on "Start timer".

### Stop alarm
You can stop the alarm by clicking on the timer. Starting a new timer will also stop the current alarm.

## Credits

This project uses sound effects obtained from https://www.zapsplat.com  
License for the sound effects can be found here: https://www.zapsplat.com/license-type/standard-license/


  [screen]: screenshot.png
  [release]: https://github.com/Nolonar/VisualTimer/releases/latest/download/webapp.zip
  [webapp]: https://nolonar.github.io/VisualTimer/webapp/
