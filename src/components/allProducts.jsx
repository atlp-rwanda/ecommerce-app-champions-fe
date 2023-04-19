import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getAvailableProducts } from "../redux/features/product/productSlice";

const AllProducts = () =>{
    const product = useSelector(state => state.product);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getAvailableProducts());
    },[]);
    console.log(product);
    return (
        <div>
            <h1>Hello</h1>
            {product.loading && <h1>Loading</h1>}
            {!product.loading && product.error ? <div>Error: {product.error}</div> : null}
        </div>
    );
};

export default AllProducts;
