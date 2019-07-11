const postReducer = (State = [], action ) =>{
    switch(action.type){
        case 'ADD_POST':
            return State.concat([action.data]);
            //console.log(State);
            
        case 'DELETE_POST':
            return State.filter((post)=>post.id !== action.id);
        case 'EDIT_POST':
             return State.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post)
        case 'UPDATE':
            return State.map((post)=>{
              if(post.id === action.id) {
                return {
                   ...post,
                   prenom:action.data.newPrenom,
                   editing: !post.editing
                }
              } else return post;
            })    
        default:
            return State;

           
    }
}

export default postReducer