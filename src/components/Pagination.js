import React, { Component } from 'react';


class Pagination extends Component {
  constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
        };
    }

  handleBack(){
    console.log(this.state.currentPage)
    this.setState({
      currentPage:this.state.currentPage-1
    })
    this.props.paginate(this.state.currentPage)
  }

  handleNext(){
    this.setState({
      currentPage:this.state.currentPage+1
    })
    this.props.paginate(this.state.currentPage+2)
  }

  loadNextMovies=(i)=>{
    this.setState({
      currentPage:i
    })
    this.props.paginate(i+1);
  }

   render() {
    let arr=[]
    for (var i = 0 ;i<this.props.totalPages;i++) {
      arr.push(i)
    }
      return (
        <div className="text-right">
        <ul className="pagination justify-content-center">
          <li className="page-item"><span className="page-link" onClick={() => this.handleBack()}>Previous</span></li>
          {arr.map((item,i)=> <li key={i} className={ this.state.currentPage===i ? 'page-item active' : 'page-item'}><span className="page-link" onClick={() => this.loadNextMovies(i)} >{i+1}</span></li>) }
          <li className="page-item"><span className="page-link" onClick={() => this.handleNext()}>Next</span></li>
        </ul>
        </div>
      );
   }
}


export default Pagination;