# qr-code-for-illustrator

Generate QRCodes in Adobe Illustrator and Indesign via ExtendScript.

## Usage example

```js
//@include 'QRCode.js'

var qr = new QRCode({
  text: 'The quick brown fox jumps over the lazy dog.',
  container: doc,
  position: [0, 0], // [left, top], measured in points
  width: 72, // measured in points, includes outer border
  margin: 4, // outer border, measured in "squares"
  joinSquares: true, // whether to unite the squares into compound path
});
```

## Show your support

![Profile Picture](https://avatars.githubusercontent.com/u/29587184)

If any of these scripts will help you, please consider supporting me:

[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg?style=for-the-badge)](https://www.paypal.com/donate?hosted_button_id=SBQHVWHSSTA9Q)

---

## Installation

#### Step 1: Download the script files

To install this script, first download this repository (zipped):

[![Download](https://img.shields.io/badge/download-latest-blue.svg?style=for-the-badge)](https://github.com/mark1bean/qr-code-for-illustrator/archive/refs/heads/main.zip)

#### Step 2: Place the scripts in the appropriate folder

Expand the zipped file and move the downloaded scripts to Illustrator's scripts folder.

See [How To Install Scripts in Adobe Illustrator](https://creativepro.com/how-to-install-scripts-in-adobe-illustrator).

## Update: now works in Indesign, too

> Why would you do this? Indesign has native functions to generate QR Codes already!

Two reasons:

1. You have more control over the QR Code, eg. type and error correction level, even shape of squares if you edit the drawSquare functions.

2. A [forum user](https://community.adobe.com/t5/indesign-discussions/function-createplaintextqrcode-crashes-adobe-indesign-without-any-reason-provided/m-p/15036628) discovered [a bug](https://indesign.uservoice.com/forums/601180-adobe-indesign-bugs/suggestions/46357459-id-crashes-when-call-method-createhyperlinkqrcode) where the create QR Code methods crashed Indesign *when called from within an event handler*. I remembered I had written this port for Illustrator and it wasn't much extra work to write some functions to draw into Indesign.

## Acknowledgements

- [https://github.com/davidshimjs/qrcodejs/tree/master](https://github.com/davidshimjs/qrcodejs/tree/master)
- [https://kazuhikoarase.github.io/qrcode-generator/js/demo/](https://kazuhikoarase.github.io/qrcode-generator/js/demo/)
