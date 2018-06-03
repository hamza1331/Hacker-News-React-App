import React, { Component } from 'react'
import Article from './Articles'
import './App.css'
export default class App extends Component {
    componentWillMount(){
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=64acbae1506941e399cd79830e738ee9')
        .then(res=>res.json()).then(data=>{
            this.setState({
              articles:data.articles
            })
        })    
        //Categories: business entertainment general health science sports technology .
    }
    constructor(){
      super()
      this.state={
        category:'General',
        articles:[]
      }
    }
    updateCategory(e){
      this.setState({
        category:e.target.innerText.toLowerCase()
      })
      fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.state.category}&apiKey=64acbae1506941e399cd79830e738ee9`)
        .then(res=>res.json()).then(data=>{
          console.log(data)
          this.setState({
            articles:data.articles
          })
        })    
    }
  render() {
    let articles = this.state.articles.map(article=>{
      return <Article article={article}/>
    })
    return (
      <div id='con' className='container'>
        <div className="row">
          <div className="col-md-2">
            <div onClick={(e)=>this.updateCategory(e)} className='btn btn-info'>
                Business
            </div>
          </div>
          <div className="col-md-2">
            <div onClick={(e)=>this.updateCategory(e)} className='btn btn-info'>
                Entertainment
            </div>
          </div>
          <div className="col-md-2">
            <div onClick={(e)=>this.updateCategory(e)} className='btn btn-info'>
                Technology
            </div>
          </div>
          <div className="col-md-2">
            <div onClick={(e)=>this.updateCategory(e)} className='btn btn-info'>
                Science
            </div>
          </div>
          <div className="col-md-2">
            <div onClick={(e)=>this.updateCategory(e)} className='btn btn-info'>
                Health
            </div>
          </div>
          <div className="col-md-2">
            <div onClick={(e)=>this.updateCategory(e)} className='btn btn-info'>
                Sports
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-md-5">
            </div>
            <div className="col-md-4">
              <h2>{this.state.category.toUpperCase()}</h2>
            </div>
            <div className="col-md-4">
            </div>
        </div>
        {articles}
      </div>
    )
  }
}
