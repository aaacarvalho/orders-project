const validateFields = object => {
    const emptyFields = ['email', 'phone', 'comp'];

    for (let key in object) {
        if (emptyFields.indexOf(key) === -1 && object[key] === '') {
            return false;
        }
    }

    return true;
};

export default validateFields;
