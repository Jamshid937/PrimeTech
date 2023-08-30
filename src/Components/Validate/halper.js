export const validatePhoneNumber =(phoneNumber)=>{
    const regex = /^(\+998\d{9}|\d{9})$/
    return regex.test(phoneNumber)
}

export const validateName =(name)=>name.length > 3
export const validateText =(text)=>text.length > 6
export const validateTextTwo=(text)=>text.length > 6
export const validatePhoneContent =(phoneNumber)=>{
    const regex = /^\+?\d*$/
    return regex.test(phoneNumber)
}