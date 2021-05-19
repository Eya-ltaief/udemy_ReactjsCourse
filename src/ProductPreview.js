import React from 'react'
import './styles.css'
const ProductPreview = (props) => {
    const currHour = new Date().getHours() > 9? new Date().getHours(): '0' + new Date().getHours()
    const currMin = new Date().getMinutes() > 9? new Date().getMinutes(): '0' + new Date().getMinutes()
    return (
        <div>
            <div className="ProductPreview">
                <img src={props.currentPreview} alt="Product Preview"/>
                {props.beats?
                    <div className='heart'>
                    <i class="fas fa-heartbeat"></i>
                    <br />
                    <span>78</span>
                    </div>
                    :
                    <div className='time'>
                    <p>{`${currHour}:${currMin}`}</p>
                    </div>
                    
                    }
            </div>
        </div>
    )
}

export default ProductPreview
