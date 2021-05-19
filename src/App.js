import React from "react";
import productData from "./ProductData";
import ProductDetails from "./ProductDetails";
import ProductPreview from "./ProductPreview";
import  './styles.css'
class App extends React.Component {
  state={
    productData : productData,
    currentPreview : 'https://imgur.com/xSIK4M8.png',
    beats :false
  }
  onColor=(pos)=>{
    const updatedImage=this.state.productData.colorOptions[pos].imageUrl
    this.setState({currentPreview : updatedImage})
  }
  onChangeBtn=(pos)=>{
    let upState = false;
    if (pos === 1){
      upState=true;
    }
    this.setState({beats :upState})
  }
  render(){
  return (
   <div className="MainContainer">
     <div className="ProductPreview">
        <ProductPreview  currentPreview={this.state.currentPreview}  beats={this.state.beats}/>
     </div>
     <div className="ProductData">
        <ProductDetails  data={this.state.productData} onColor={this.onColor}  onChangeBtn={this.onChangeBtn}/>
    </div>
    
   </div>
  )
}
}

export default App;
