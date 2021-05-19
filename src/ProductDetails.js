import React from 'react'
import  './styles.css'


const ProductDetails = (props) => {
    const colorOptions = props.data.colorOptions.map((item,pos)=>{
        return(
            <img src={item.imageUrl} className="productImage" key={pos}  onClick={()=>props.onColor(pos)} alt='product'/>
        )
    })
    const featureList = props.data.featureList.map((item,pos)=>{
        return(
            <button className={["featureItem","selected"].join(' ')} onClick={()=>props.onChangeBtn(pos)}  >{item}</button>
        )
    })
    console.log(props.data)
    return (
        <div>
            <h2 className="ProductTitle">{props.data.title}</h2>
            <p className="ProductDescription">{props.data.description}</p>
            <h3 className="heading">Select color</h3>
                <div>
                {colorOptions}
                </div>
            <h3>Features</h3>
                {featureList}
        </div>
    )
}

export default ProductDetails
