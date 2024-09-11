import React from "react"
import RatingStar from "../../home/RatingStar"
import GalleryData from "./galleryData"
import { Link } from "react-router-dom"

function GalleryProducts() {
    return (
        <>
            <div className="grid-3 mt-5">
                {GalleryData.map(({ image, discriotion, price, defaultValue }) => <React.Fragment key={image}><div className="mb-5"><Link className="link1" to={"/gallery"}>
                    <img src={image} alt="pic" className="w-100 rounded-4 mb-4 image" height={400} />
                </Link>
                    <div>
                        <RatingStar defaultValue={defaultValue} />
                        <h6 className="mb-4 text-body">{discriotion}</h6>
                        <p className="mb-4 text-body">{price}</p>
                    </div>

                </div>
                </React.Fragment>)
                }


            </div>
        </>
    )
}

export default GalleryProducts