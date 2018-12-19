String.prototype.ucfirst = function()
{
    return this[0].toUpperCase() + this.substr(1, this.length - 1);
};

String.prototype.capitalize = function()
{
    let finalString = '';
    const words = this.split(' ');

    for (let i = 0; i < words.length; i++)
    {
        let space = (i == 1) ? ' ' : '';
        finalString += space + words[i][0].toUpperCase() + words[i].substr(1, words[i].length - 1);
    }

    return finalString;
};

String.prototype.camelCase = function()
{
    let finalString = '';
    myString = this.trim();

    if (myString.length != 0)
    {
        let words = myString.split(/_|\s/);
        words = words.map(word => word.trim());
        words = words.map(word => word.toLowerCase());

        for (let i = 0; i < words.length; i++)
        {
            finalString += words[i][0].toUpperCase() + words[i].substr(1, words[i].length - 1);
        }
    }

    return finalString;
};

String.prototype.snake_case = function()
{
    let finalString = '';
    let words = this.split(' ');

    words = words.map(word => word.toLowerCase());

    for (let i = 0; i < words.length; i++)
    {
        let underscore = (i == 1) ? '_' : '';
        finalString += underscore + words[i];
    }

    return finalString;
};

String.prototype.leet = function()
{
    let finalString = '';
    let words = this.split('');
    const vowels = {
        a: '4',
        e: '3',
        i: '1',
        o: '0',
        u: '(_)',
        y: '7'
    };

    for (let i = 0; i < words.length; i++)
    {
        if (vowels.hasOwnProperty(words[i]))
        {
            words[i] = vowels[words[i]];
        }

        finalString += words[i];
    }

    return finalString;
};

Object.prototype.prop_access = function()
{
    if (this.path === '' || this.path === null)
    {
        return this.animals;
    }
    else
    {
        const keys = this.path.split('.');

        for (let i = 0; i < keys.length; i++)
        {
            if (this.animals)
            {

            }
        }

        return keys;
    }
};

console.log('hello world'.ucfirst());
console.log('hello world'.capitalize());
console.log('ToggleCase is_the coolest'.camelCase());
console.log('HELLO WORLD'.snake_case());
console.log('anaconda'.leet());
const animals = {
    "animals": [
        {
           "type": {
               "name": "dog"
           }
        },
        {
           "type": {
               "name": "cat"
           }
        }
    ]
};
const myObject = {
    animals: animals,
    path: 'animals.type.name'
};
console.log(myObject.prop_access());