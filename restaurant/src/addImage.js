
const addImage = (image) => {
    const newImage = new Image();
    newImage.src = image;
    return newImage
};

export { addImage }
