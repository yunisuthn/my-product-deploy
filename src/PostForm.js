import React, { Component } from 'react'
import {connect} from 'react-redux'

class PostForm extends Component{
    
    constructor() {
        super()
        this.state = {
            nb: 0,
            mme : 0,
        }
    }
    handleSubmit = (e) => {
        this.setState({
            nb : this.state.nb + 1,
            mme :  this.state.mme + parseInt(this.getPrenom.value),
        })

        
        const nom = this.getNom.value;
        const prenom = this.getPrenom.value;
        const produit = nom.charAt(0).toUpperCase() + nom.substring(1).toLowerCase()
        const data = {
            id: new Date(),            
            nb : this.state.nb,
            produit,
            prenom,
            mme : this.state.mme + parseInt(prenom ),
            editing:false
        }
        this.props.dispatch({
            type:'ADD_POST',
            data
        });
        this.getNom.value = '';
        this.getPrenom.value = '';

        console.log('data1' , data.mme);
        
    }
    render(){
        return(
            <center className={"form"} >
                 <form onSubmit={event => {
                    event.preventDefault()
                    if (!this.getNom.value || !this.getPrenom.value) return

                        if(isNaN(this.getPrenom.value)){
                            var err = document.getElementById('erreur')
                            err.innerHTML = 'Entrer un nombre'
                        }else{
                            this.handleSubmit()
                            var err = document.getElementById('erreur')
                            err.innerHTML = ''
                    }}} 
                    className={'nom'}
                > 
                    <label>Produit</label>
                    <input required type='text' ref={(input)=>this.getNom = input} />
                    <label>Prix</label>
                    <input required type='text' ref={(input)=>this.getPrenom = input} />
                    <label>Ar</label>
                    <button className={'ajout btn btn-primary'}  >Ajouter</button>
                    <p id='erreur' className={'erreur'}></p>

                    
                </form>
            </center>
        )
    }
}
export default connect()(PostForm)