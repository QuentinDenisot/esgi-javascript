function type_check_v1(arg1, arg2)
{
    let isType = false;

    switch (arg2)
    {
        case 'number':
            isType = typeof arg1 === 'number';
            break;

        case 'string':
            isType = typeof arg1 === 'string';
            break;

        case 'object':
            isType = typeof arg1 === 'object' && arg1 !== null;
            break;

        case 'null':
            isType = arg1 === null;
            break;

        case 'undefined':
            isType = typeof arg1 === 'undefined';
            break;

        case 'array':
            isType = Array.isArray(arg1);
            break;
    }

    return isType;
}

console.log(type_check_v1(1, 'number'));
console.log(type_check_v1('azer', 'string'));
console.log(type_check_v1({prop: 'test'}, 'object'));
console.log(type_check_v1(null, 'null'));
console.log(type_check_v1(undefined, 'undefined'));
console.log(type_check_v1([1, 2, 3], 'array'));