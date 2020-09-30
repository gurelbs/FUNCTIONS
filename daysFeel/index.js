const daysFeel = (x) =>{
    str = '';
    switch (x) {
        case 'Sunday':
        case 'Monday':
            str = 'Have a good week';
            break;
        case 'Tuesday':
        case 'Wednesday':
            str = 'Ohhh';
            break;
        case 'Thursday':
            str = 'Yalla habayta';
            break;
        case 'Friday':
        case 'Saturday':
            str = 'Yammi Jachnun';
            break;
        defualt: console.log(str);
            break;
    }
    return str
}

console.log(daysFeel('Sunday'))
console.log(daysFeel('Monday'))
console.log(daysFeel('Tuesday'))
console.log(daysFeel('Wednesday'))
console.log(daysFeel('Thursday'))
console.log(daysFeel('Friday'))
console.log(daysFeel('Saturday'))