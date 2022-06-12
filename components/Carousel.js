/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'

const Carousel = ({ images }) => {

    const [image, setImage] = useState(images[0]);

    useEffect(() => {
        setImage(images[0])
    }, [images])

    return (
        <div className="w-full grid grid-cols-1 gap-2">
            <div className="h-full flex justify-center">
                <img
                    src={image.image}
                    alt="image carousel"
                    className="h-64 object-cover hoverImage"
                />
            </div>
            <div className="w-full h-max grid grid-cols-5">
                {
                    images.map((image, index) => (
                        <img
                            key={`image_carousel_${index}`}
                            alt="image"
                            src={image.image}
                            className="h-20 object-cover"
                            onClick={() => setImage(image)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Carousel