for (var i = 99; i > 0; i--) {
    j = i -1;
    if (i > 2) {
        document.write(i + ' bottles of beer on the wall ' + i + ' bottles of beer, take one down, pass it around, ' + j + ' bottles of beer on the wall. <br> ');
    } else if (i === 2) {
        document.write(i + ' bottles of beer on the wall ' + i + ' bottles of beer, take one down pass it around, ' + j + ' bottle of beer on the wall. <br> ');
    } else if (i === 1) {
        document.write(i + ' bottle of beer on the wall, ' + i + ' bottle of beer, take one down pass around, 0 bottles of beer on the wall. <br> ');
    }
}