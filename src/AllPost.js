import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';

class AllPost extends Component {

  
  total = () => {
    //var somme = 'this.props.post.prenom'
    
    var test = this.props.posts;
    var longT = test.length;
    var tab = test[longT-1];
    var som = tab.mme

    var somme = document.getElementById('tot')
    somme.innerHTML = new Intl.NumberFormat('de-DE').format(som)
    // this.props.posts.map((post) => <Conste key={post.id} post={post} />) 
    console.log('1==W>', test)
    console.log('2==W>', longT)
    console.log('3==W>', tab)
    console.log('4==W>', tab.mme)

    
      //console.log(this.props.posts.map(post.mme));
    
  }
  render() {
    return (
      <center className={"form"}>
      <form onSubmit={event => {
								event.preventDefault()
                
                }}>
        <table> 

          <thead>
            <tr className={"active"}>
              <th>Id</th>
              <th>Produits</th>
              <th>Prix</th>
              <th>Actions </th>
            </tr>
          </thead>
          {this.props.posts.map((post) => <Post key={post.id} post={post} />)}
          {}
        </table>
        <div  >
          <button   className={'total btn btn-info'} 
          onClick={()=>{this.total()}}
          >TOTAL </button>

        </div>

        <div className={'ariary'}>
          TOTAL=  <b id='tot'>  
   { //this.props.posts.map((post) => <Conste key={post.id} post={post} />)  }</b>   Ar}
   this.props.posts.map.mme}</b>   Ar
        </div>
      </form>
        </center>
    )}


   
}



const mapStateToProps = (state) => {
    return  {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPost)