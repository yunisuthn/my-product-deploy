import React, { Component } from 'react'
import {connect} from 'react-redux'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'
class Post extends Component {

	
  submit = () => (
		confirmAlert({
		customUI: ({ onClose }) => {
			return (
				<div className='custom-ui edit'>
					<h4 className={'h4'}>Suppression Produit</h4>
					<p className={'p'}>{this.props.post.produit }</p>
					<button className={'boutton1'} onClick={() => {
							this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})
							onClose()
					}}>OUI</button>
					<button className={'boutton2'}onClick={onClose}>NON</button>
				</div>
			)
		}
	}))

handleSubmit = (jj) => {
  //e.preventDefault();
  // //const newNom = this.getNom.value;
  // const newPrenom = this.getPrenom.value;
  // const data = {
  //   //newNom,
  //   newPrenom
	// }
	
	//this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: jj })
	//console.log('jj ==>', jj)

	// var test = this.props.posts;
	// var longT = test.length;
	// var tab = test[longT-1];
	// var som = tab.mme
	// console.log('jj ==>', som)
}


  update = () => (
		confirmAlert({
			customUI: ({ onClose }) => {
				//var data = {this.props.post.prenom}

			
				return (
					<div className="custom-ui" >
					<form className={'edit'}  
						onSubmit={event => {
								event.preventDefault()
								if(isNaN(this.newPrenom.value)){
										var err1 = document.getElementById('erreur1')
										err1.innerHTML = 'Entrer un nombre'
								}else{
										this.handleSubmit(this.newPrenom.value)
										onClose();
								}}}
					>
						<input type='text' className={'input'} ref={(input)=>this.newPrenom = input }defaultValue={this.props.post.prenom}  />
						<br/>

						<p id='erreur1' className={'erreur1'}></p>
						<button className={'boutton3 nom'}

							//  onClick={() => {
							// 	 if	(isNaN(this.newPrenom.value)){
							// 		//const data = this.newPrenom.value
							// 		//console.log('data = ', data)
							// 		//this.handleSubmit(this.newPrenom.value) 
							// 		//var jj = 12
							// 		console.log('doucosud');
									
							// 		}else	{
							// 			console.log('dd');
							// 		}
							// 	 }}
							// 	//this.props.dispatch({type:'EDIT_POST',id:this.props.post.id });
							// 	this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id,data:  this.newPrenom.value})
							// 	console.log(this.newPrenom.value)
							// 	onClose();
							// }}
						>
							OK
						</button>
						<button onClick={onClose} className={'boutton4 '}>Annuler</button>
						</form>
					</div>
				);
			}
		})
	)
  render() {
  return (

		<tbody>
      <tr>
        <td>{this.props.post.nb}</td>
        <td>{this.props.post.produit }</td>
        <td className={'prix'}>{this.props.post.prenom}{this.handleSubmit()}</td>
        <td> 
		<button onClick={()=>this.submit() } className={"btn btn-danger"} >X</button>
		<button onClick={()=>this.update()} className={'ajout btn btn-success'}> Edit</button>
					{/* {this.props.posts.map((post) => (
			<div key={post.id}>
				 {post.editing ? <EditComponent post={post} key={post.id} /> : <Post post={post}
    key={post.id} />}
			</div>
	))} */}
					{/* <button
       onClick={()=>this.props.dispatch({type:'EDIT_POST',id:this.props.post.id})}>
       Edit</button> */}
					</td>        
      </tr>
		</tbody>
     

		
  
  );
 }
}

const somme = (state) => {
    return  {
		
    }
}
export default connect(somme)(Post);