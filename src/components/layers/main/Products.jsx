import { Link } from "react-router-dom"
import RatingStar from "./RatingStar"
import './home.css'
import Crumb from "./Breadcrumb"
function Products() {
    const pruds = [
        {
            image: "prud1.jpg",
            discriotion: "Eco plastic chair with armrests",
            price: "$19.00"
        },
        {
            image: "prud2.jpg",
            discriotion: "Eco plastic chair with armrests",
            price: "$20.00"
        },
        {
            image: "prud3.jpg",
            discriotion: "Eco plastic chair with armrests",
            price: "$19.00"
        },
        {
            image: "prud4.jpg",
            discriotion: "Eco plastic chair with armrests",
            price: "$33.00"
        },
        {
            image: "prud5.jpg",
            discriotion: "Eco plastic chair with armrests",
            price: "$19.00"
        }, {
            image: "prud6.jpg",
            discriotion: "Eco plastic chair with armrests",
            price: "$23.00"
        }

    ]
    return (
        <>
            <h3 className="mt-5  mb-5  text-center">shop by categories</h3>
            <Crumb/>
            <div className="grid-3 mt-5">
                {pruds.map(({ image, discriotion, price }) => <><div className="mb-5"><Link className="link1" to={"/gallery"}>
                    <img src={image} alt="pic" className="w-100 rounded-4 mb-4 image" height={400} />
                    <div>
                        <RatingStar />
                        <h6 className="mb-4 text-body">{discriotion}</h6>
                        <p className="mb-4 text-body">{price}</p>
                    </div>
                </Link>
                </div>
                </>)
                }


            </div>
            <div className="grid-3">

            </div>
        </>
    )
}

export default Products