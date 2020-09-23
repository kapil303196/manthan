function sayHello(firstName, lastName) {
    if(!firstName) throw 'You must provide first name'
    if(!lastName) throw 'You must provide last name'
    if (typeof firstName != 'string') throw 'first name must be string'
    if (typeof lastName != 'string') throw 'last name must be string'
    return `Hello ${firstName} ${lastName}! How are you?`
}

try {
    sayHello('patrick');
    sayHello();
    sayHello(1, 2);
    sayHello('patric','kapil')
} catch (error) {
    console.log(error)
}