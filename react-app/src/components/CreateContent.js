import React,  {Component} from 'react';

class CreateContent extends Component{
    render(){
      console.log('ReadContent render');
      return (
        <article>
           <h2>CreateContent</h2>
           <form action="/create_process" method="post" onSubmit={function(e){
             e.preventDefault(); //페이지 전환 x
             
             this.props.onSubmit(
               e.target.title.value,
               e.target.desc.value
             );
           
             alert('submit!!!');
           }.bind(this)}>
             <p><input type="text" name="title" placeholder ="title"></input></p>
              <p>
                <textarea name="desc" placeholder="description"></textarea>

              </p>
              <p>
                <input type="submit"></input>
              </p>
           </form>
        </article>
      );
    }
  }

  export default CreateContent;