import React,  {Component} from 'react';

class UpdateContent extends Component{
    constructor(props){
      super(props);
      this.state = {
        id: this.props.data.id,
        title: this.props.data.title,
        desc : this.props.data.desc
      }
      // 각각 bind를 넣기 불편하니. 변경시켜준다
      this.inputFormHandler = this.inputFormHandler.bind(this);
    }

    //onChange = {function(e){
    //  console.log(e.target.value);
    //   this.setState({ desc:e.target.value});
    //}.bind(this)}     각각 input 값에 onchange를 넣으면 복잡해진다.
    inputFormHandler(e){
      this.setState({ [e.target.name]:e.target.value});
    }
    render(){
     
      console.log('UpdateContent render');
      return (
        <article>
           <h2>UpdateContent</h2>
           <form action="/create_process" method="post" 
             onSubmit={function(e){
              e.preventDefault(); //페이지 전환 x
              
              this.props.onSubmit(
                this.state.id,
                this.state.title,
                this.state.desc
                // e.target.title.value,
                //e.target.desc.value
             );

           }.bind(this)}>

             <input type="hidden" name ="id" value ={this.state.id}></input>

             <p>
               <input type="text" name="title" placeholder ="title" value={this.state.title} 
                  onChange ={this.inputFormHandler}></input>
             </p>
              <p>
                <textarea name="desc" placeholder="description" value ={this.state.desc} 
                   onChange ={this.inputFormHandler}></textarea>

              </p>
              <p>
                <input type="submit"></input>
              </p>
           </form>
        </article>
      );
    }
  }

  export default UpdateContent;