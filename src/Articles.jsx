import React, { Component } from 'react'

export default class Articles extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <img width={300} src={this.props.article.urlToImage} alt="" />
                    </div>
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <h2>
                            {this.props.article.title}
                </h2>
                    </div>
                </div>
                    <div className="row">
                        <div className="col-md-9">
                            <h3>
                                {this.props.article.description}
                            </h3>
                        </div>
                        <div className="col-md-3">
                            <a target='_blank' href={this.props.article.url}><h4>Click here to read full story</h4></a>
                        </div>
                    </div>
            </div>
        )
    }
}
