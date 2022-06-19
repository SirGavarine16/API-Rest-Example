const validateId = (id) => {
    if (id !== '1' && id !== '2') {
        throw new Error(`User id is not valid.`);
    }
    return true;
}

module.exports = {
    validateId,
}