function ucfirst(myString)
{
    return myString[0].toUpperCase() + myString.substr(1, myString.length - 1);
}

function capitalize(myString)
{
    let finalString = '';
    const words = myString.split(' ');

    for(let i = 0; i < words.length; i++)
    {
        let space = (i == 1) ? ' ' : '';
        finalString += space + words[i][0].toUpperCase() + words[i].substr(1, words[i].length - 1);
    }

    return finalString;
}

function camelCase(myString)
{
    let finalString = '';
    myString = myString.trim();

    if(myString.length != 0)
    {
        let words = myString.split(' ');
        words = words.map(word => word.trim());
        words = words.map(word => word.toLowerCase());

        for(let i = 0; i < words.length; i++)
        {
            finalString += words[i][0].toUpperCase() + words[i].substr(1, words[i].length - 1);
        }
    }

    return finalString;
}

function snake_case(myString)
{
    let finalString = '';
    let words = myString.split(' ');

    words = words.map(word => word.toLowerCase());

    for(let i = 0; i < words.length; i++)
    {
        let underscore = (i == 1) ? '_' : '';
        finalString += underscore + words[i];
    }

    return finalString;
}

function leet(myString)
{
    let finalString = '';
    let words = myString.split(' ');
    const vowels = {
        a: '4', 
        e: '3', 
        i: '1', 
        o: '0', 
        u: '_', 
        y: '7', 
    };

    //words = words.map(word => word.map(letter => letter.replace(letter.toLowerCase(), vowels[letter.toLowerCase()])));
    // words = words.map(word => );

    return words;
}

console.log(ucfirst('hello world'));
console.log(capitalize('hello world'));
console.log(camelCase(' toggleCase'));
console.log(snake_case('HELLO WORLD'));
console.log(leet('azeroiuj ifuahezfa iuhazer'));