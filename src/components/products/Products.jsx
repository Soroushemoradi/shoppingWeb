import { Link } from "react-router-dom"
import RatingStar from "../home/RatingStar"
import './product.css'
import Crumb from "../breadcrumb/Breadcrumb"
import pruds from "./productData"
import React from "react"




function Products() {

    return (
        <>
            <h3 className="mt-5  mb-3  text-center">shop by categories</h3>
            <Crumb />
            <div className="grid-3 mt-5">
                {pruds.map(({ image, discriotion, price, defaultValue }) => <React.Fragment key={image}><div className="mb-5"><Link className="link1" to={"/gallery"}>
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
            <div className="text-center mb-5">
                <button className="btn rounded-4 border border-dark btn-prud">view all products</button>
            </div>
        </>
    )
}

export default Products