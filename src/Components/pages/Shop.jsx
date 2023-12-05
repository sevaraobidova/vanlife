import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const { productId } = useParams();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((fetchedData) => {
                console.log(fetchedData);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const shopProduct = data.find(product => product.id === parseInt(productId));
    
    // Check if shopProduct exists before accessing its properties
    if (!shopProduct) {
        return <div>Loading...</div>; // or display an error message
    }

    const { title, price, image, description } = shopProduct;

    return (
        <div className='single'>
            <h1 className="single-heading">
                {title}
            </h1>

            <div className="single-card">
                <img src={image} className='single-img' alt="single product image" />
                <h2>{title}</h2>
                <p className='description'>{description}</p>
                <h3 className='price'>Price: {price}</h3>
                <div className="flex-row">
                    <button className='btn' onClick={() => navigate(-1)}>Back</button>
                    <button className='btn' onClick={() => navigate('/category')}>Navigate To Products</button>
                    <Link className='btn' to='/category'>Products</Link>
                </div>
            </div>
        </div>
    );
}

export default Shop;
