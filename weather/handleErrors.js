function handleErrors(fn) {
    return function(...params) {
        return fn(...params).catch(function (err) {
            // do something with the error
            console.error(err)
        }) 
    }
};

// const safeFunction = handleErrors(fn)

export { handleErrors }
