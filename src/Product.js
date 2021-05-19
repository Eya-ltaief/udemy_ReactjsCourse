import {isEmpty} from "./utils.js"
import './App.css';
import BlogItem from './ProductItem.js'
import React from "react";
class Product extends React.Component {
  state={
    showBlogs : false
  }
   blogArr=[
    {
      id: 1,
      title:'blog1',
      description:'lorem epsum'
    },
    {
      id: 2,
      title: 'blog2',
      description :'lorem epsum',
    },
    {
      id : 3,
      title: 'blog3',
      description : 'lorem epsum'
    }
  ]
  handleClick =()=>{
    return (this.setState({showBlogs :!this.state.showBlogs}))
  }
   blogCards = isEmpty(this.blogArr)? [] : this.blogArr.map((item, key)=>{
    return(
      <BlogItem key={key} id={item.id} title ={item.title} description = {item.description} />
    )
  })
  render(){
  return (
    <div className="App">
      <button onClick={this.handleClick} >show</button>
      {this.state.showBlogs? this.blogCards : null}
    </div>
  );
  }
}