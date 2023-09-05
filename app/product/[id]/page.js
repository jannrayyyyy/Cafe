import React from 'react'
import ProductDetail from './../../../components/page/ProductDetail';
import "../../style.css"

function page({ params }) {
    const {id} = params
    
    return (
        <>
            <ProductDetail id={id}/>
        </>
    )
}

export default page