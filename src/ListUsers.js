import React, {Component} from 'react';

class ListUsers extends Component{
  
  
  
render(){
 // console.log(this.props.users)

  return(
    <ol>
     
     {this.props.profiles.map((profile) => (
    
    // const userName =  this.props.users[profile.userID].name
    
    // const favMovie = this.props.movies[profile.favoriteMovieID].name
          <li >
                 
           
           <p> {this.props.users[profile.userID].name}'s fav movie is {this.props.movies[profile.favoriteMovieID].name}	</p>
          </li>
    ))}
    </ol>

  );
}
}
   

 export default ListUsers;