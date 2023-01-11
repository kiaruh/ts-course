"use strict";
exports.__esModule = true;
var User = {
    name: 'Nico',
    isPaid: true,
    email: 'hola@hola.com'
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
function createCourse() {
    return { name: 'TS-Course', price: 300 };
}
createUser({ name: User.name, isPaid: User.isPaid });
createUser(User);
function createUsario(tipodeusuario) {
    return { name: '', email: '', isActive: true };
}
var miUsuarioOtro = {
    _id: '12345',
    name: 'Nico',
    email: 'hola@hola.com',
    isActive: true
};
