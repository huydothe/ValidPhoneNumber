"use strict";
exports.__esModule = true;
exports.PhoneValidate = void 0;
var PhoneValidate = /** @class */ (function () {
    function PhoneValidate() {
        this.PhoneNumber = /^[0-9]{2}-+[0]+[0-9]{9}/;
    }
    PhoneValidate.prototype.ValidatePhone = function (phone) {
        return this.PhoneNumber.test(phone);
    };
    return PhoneValidate;
}());
exports.PhoneValidate = PhoneValidate;
var phoneNeedValid = new PhoneValidate();
var validate = ["84-0978489648", "75-0790989648"];
var inValidate = ["a8-22222222", "h9-22256522"];
for (var _i = 0, validate_1 = validate; _i < validate_1.length; _i++) {
    var phoneNumber = validate_1[_i];
    var isValid = phoneNeedValid.ValidatePhone(phoneNumber);
    console.log("Phone number ".concat(phoneNumber, " is : ").concat(isValid));
}
for (var _a = 0, inValidate_1 = inValidate; _a < inValidate_1.length; _a++) {
    var phoneNumber = inValidate_1[_a];
    var isValid = phoneNeedValid.ValidatePhone(phoneNumber);
    console.log("Phone number ".concat(phoneNumber, " is : ").concat(isValid));
}
