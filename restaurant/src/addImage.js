
const addImage = (image,name) => {
    const newImage = new Image();
    newImage.src = image;
    newImage.classList.add(name);
    return newImage
};

export { addImage }
