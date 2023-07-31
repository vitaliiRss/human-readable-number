module.exports = function toReadable (number) {
    const simpleNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = [, , 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];
    const hundreds = [, 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

    const tempTens = number % 100;
    const tempSimpleNumbers = tempTens % 10;
    let str = '';

    if (number >= 100) {
        if (number % 100 === 0) {
            str = `${str}${hundreds[Math.trunc(number / 100)]}`;
        } else {
            if (tempTens >= 20 && tempTens < 100) {
                if (tempTens % 10 === 0) {
                    str = `${str}${hundreds[Math.trunc(number / 100)]} ${tens[tempTens / 10]}`;
                } else {
                    str = `${str}${hundreds[Math.trunc(number / 100)]} ${tens[Math.trunc(tempTens / 10)]} ${simpleNumbers[tempSimpleNumbers]}`;
                }
            }

            if (tempTens < 20) {
                str = `${str}${hundreds[Math.trunc(number / 100)]} ${simpleNumbers[tempTens]}`;
            }
        }
    }

    if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
            str = `${str}${tens[number / 10]}`;
        } else {
            str = `${str}${tens[Math.trunc(number / 10)]} ${simpleNumbers[tempSimpleNumbers]}`;
        }
    }

    if (number < 20) {
        str = `${str}${simpleNumbers[number]}`;
    }

    return str;
}
