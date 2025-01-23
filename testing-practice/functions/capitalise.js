function capitalise(string){
    let wordsArr = string.split(' ');

    return wordsArr.map(e => {
        let arr = e.split('');
        return [
            arr.shift().toUpperCase(),
            arr.join('')
        ].join('')
    }).join(' ')
};

module.exports = capitalise
