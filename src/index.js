module.exports = function toReadable(number) {
    let units = function (number) {
        switch (number) {
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eight';
            case 9: return 'nine';
            case 0: return '';
        }
    }
    let untilNineteen = function (number) {
        switch (number) {
            case 10: return 'ten';
            case 11: return 'eleven';
            case 12: return 'twelve';
            case 13: return 'thirteen';
            case 14: return 'fourteen';
            case 15: return 'fifteen';
            case 16: return 'sixteen';
            case 17: return 'seventeen';
            case 18: return 'eighteen';
            case 19: return 'nineteen';
        }
    }

    let dozens = function (number) {
        switch (number) {
            case 2: return 'twenty';
            case 3: return 'thirty';
            case 4: return 'forty';
            case 5: return 'fifty';
            case 6: return 'sixty';
            case 7: return 'seventy';
            case 8: return 'eighty';
            case 9: return 'ninety';
        }
    }

    let hundreds = function (number) {
        switch (number) {
            case 1: return 'one hundred';
            case 2: return 'two hundred';
            case 3: return 'three hundred';
            case 4: return 'four hundred';
            case 5: return 'five hundred';
            case 6: return 'six hundred';
            case 7: return 'seven hundred';
            case 8: return 'eight hundred';
            case 9: return 'nine hundred';
        }
    }

    if (number === 0) {
        return 'zero';
    }
    if (number < 10) {
        return units(number);
    }
    if (number <= 19) {
        return untilNineteen(number);
    }
    if (number <= 99) {
        if (number % 10 === 0) {
            return (dozens(Math.floor(number / 10)));
        } else {
            return (dozens(Math.floor(number / 10)) + ' ' + units(number % 10));
        }
    }
    if (number <= 999) {
        if (number % 100 === 0) {
            return (hundreds(Math.floor(number / 100)));
        }
        else if (number % 100 <= 9) {
            return (hundreds(Math.floor(number / 100)) + ' ' + units(number % 10));
        }
        else if (number % 100 <= 19 && number % 100 >= 10) {
            return (hundreds(Math.floor(number / 100)) + ' ' + untilNineteen(number % 100));
        }
        else if (number % 10 === 0) {
            return hundreds(Math.floor(number / 100)) + ' ' + dozens((Math.floor((number % 100) / 10)))
        } else {
            return (hundreds(Math.floor(number / 100)) + ' ' + dozens((Math.floor((number % 100) / 10))) + ' ' + units(number % 10));
        }
    }
}



