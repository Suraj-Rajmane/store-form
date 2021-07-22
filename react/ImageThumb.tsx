import React from 'react';

const ImageThumb = ({ image }: any) => {
    return <img src={image} alt="Your file is safe with us although you cannot see it on the browser." style={{ width: "200px", height: "200px" }} />;
};

export default ImageThumb;