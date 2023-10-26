# qr-code-for-illustrator

Generate QRCodes in Adobe Illustrator via ExtendScript.

## Usage example

```
//@include 'QRCode.js'

var qr = new QRCode({
    text: 'The quick brown fox jumps over the lazy dog.',
    doc: app.activeDocument,
    left: 0, // points
    top: 0, // points
    width: 72, // points
});
```

## Acknowledgements

- [https://github.com/davidshimjs/qrcodejs/tree/master](https://github.com/davidshimjs/qrcodejs/tree/master)
- [https://kazuhikoarase.github.io/qrcode-generator/js/demo/](https://kazuhikoarase.github.io/qrcode-generator/js/demo/)
