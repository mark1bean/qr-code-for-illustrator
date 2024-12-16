/**
 * Draws a QRCode containing some sample text.
 * Works in Adobe Illustrator and Adobe Indesign.
 *
 * If a page item is selected, it will be removed
 * and the new QRCode will be drawn with that item's
 * position and dimensions. The idea is that by
 * selecting a previous QRCode, it can be "updated".
 *
 * @author m1b
 * @version 2024-12-16
*/
//@include 'QRCode.js'

function main() {

    var doc = app.activeDocument,
        item = doc.selection[0],
        removeMe = undefined, // if we set this, it will be removed later
        position = [0, 0], // default position of QRCode
        width = 100; // default size of QRCode, including border, measured in points

    if (
        undefined != item
        && item.hasOwnProperty('geometricBounds')
    ) {
        // set up to replace `item` with new QRCode

        width = APP_IS_INDESIGN
            ? item.geometricBounds[3] - item.geometricBounds[1]
            : item.width;

        position = APP_IS_INDESIGN
            ? [item.geometricBounds[1], item.geometricBounds[0]]
            : [item.geometricBounds[0], item.geometricBounds[1]];

        removeMe = item;

    }

    var QRErrorCorrectLevel = {
        L: 1, // 7% error correction (best for small size QR code I think)
        M: 0, // 15% error correction (this is Indesign's default correction level)
        Q: 3, // 25% error correction
        H: 2, // 30% error correction (best if hard to read due to damage or dirt I think)
    };

    // draw the QRCode
    var qr = new QRCode({
        text: 'Adobe Illustrator QRCode',
        doc: doc,
        container: doc,
        position: position, // [left, top], measured in points
        width: width, // measured in points
        margin: 4, // outer border, measured in "squares"
        joinSquares: true,
        // correctLevel: QRErrorCorrectLevel.M, // this matches Indesign's native level
        // typeNumber: 2,
        // darkColor: makeColor([0, 0, 0]),
        // lightColor: makeColor([255, 255, 255]),
    });

    if (qr && removeMe) {
        // remove the existing item and select
        item.remove();
        if (APP_IS_INDESIGN)
            qr.select();
        else
            qr.selected = true;
    }

};

if (APP_IS_INDESIGN)
    app.doScript(main, ScriptLanguage.JAVASCRIPT, undefined, UndoModes.ENTIRE_SCRIPT, 'Draw QR Code');
else
    main();