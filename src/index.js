let units = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen'
};

let dozens = {
    '1': 'ten',
    '2': 'twenty',
    '3': 'thirty',
    '4': 'forty',
    '5': 'fifty',
    '6': 'sixty',
    '7': 'seventy',
    '8': 'eighty',
    '9': 'ninety'
};

let exclusion = {
    '1': 'eleven',
    '2': 'twelve',
    '3': 'thirteen',
    '4': 'fourteen',
    '5': 'fifteen',
    '6': 'sixteen',
    '7': 'seventeen',
    '8': 'eighteen',
    '9': 'nineteen'
}

module.exports = function toReadable (number) {
    if (number < 20) {
        number = String(number);
        let result = units[number];
        return result;
    } else if (number >= 20 && number < 100) {
        number = String(number);
        if (number[1] == '0') {
            let result = dozens[number[0]];
            return result;
        } else {
            let result = dozens[number[0]] + ' ' + units[number[1]];
            return result;
        }
    } else {
        number = String(number);
        if (number[1] == '0' && number[2] == '0') {
            let result = units[number[0]] + ' ' + 'hundred';
            return result
        } else if (number[1] == '0' && number[2] != '0') {
            let result = units[number[0]] + ' ' + 'hundred' + ' ' + units[number[2]];
            return result;
        } else if (number[2] == '0' && number[1] != '0') {
            let result = units[number[0]] + ' ' + 'hundred' + ' ' + dozens[number[1]];
            return result;
        } else if (number[1] == '1' && number[2] != '0') {
            let result = units[number[0]] + ' ' + 'hundred' + ' ' + exclusion[number[2]];
            return result;
        } else {
            let result = units[number[0]] + ' ' + 'hundred' + ' ' + dozens[number[1]] + ' ' + units[number[2]];
            return result;
        }
    }
}
