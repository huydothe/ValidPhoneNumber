export class PhoneValidate{
    private PhoneNumber: RegExp= /^[0-9]{2}-+[0]+[0-9]{9}/ ;
    public ValidatePhone(phone:string):boolean{
        return this.PhoneNumber.test(phone)
    }
}

let phoneNeedValid=new PhoneValidate();
let validate=["84-0978489648","75-0790989648"];
let inValidate=["a8-22222222","h9-22256522"];

for(let phoneNumber of validate){
    let isValid = phoneNeedValid.ValidatePhone(phoneNumber);
    console.log(`Phone number ${phoneNumber} is : ${isValid}`);
}

for(let phoneNumber of inValidate){
    let isValid = phoneNeedValid.ValidatePhone(phoneNumber);
    console.log(`Phone number ${phoneNumber} is : ${isValid}`);
}