//@include 'QRCode.js'

/**
 * Draws a QRCode containing the document's URI.
 * @author m1b
 * @version 2023-10-26
 */
(function () {

    var doc = app.activeDocument;
    var QRErrorCorrectLevel = {
        L: 1, // 7% error correction (best for small size QR code I think)
        M: 0, // 15% error correction
        Q: 3, // 25% error correction
        H: 2, // 30% error correction (best if hard to read due to damage or dirt I think)
    };

    // draw the QRCode
    var qr = new QRCode({
        text: 'The quick brown fox jumps over the lazy dog.',
        doc: doc,
        left: 0, // points
        top: 0, // points
        width: 100, // points
        correctLevel: QRErrorCorrectLevel.H,
        joinSquares: true,
    });

})();