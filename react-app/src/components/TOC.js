import React,  {Component} from 'react';

class TOC extends Component{
    // 필요하면 진입하게 하기
    // 첫번째인자값을 바뀐값을 알수 있다.
    // render 이전에 실행된다.
    // return false - render() 실행이 되지 않는다.
    // this.props.data를 이용해 바로 이전값을 알 수 있다.
    // .push로 받으면 이전값을 알 수 없다. 왜냐하면 원본을 바꾸니까. concat을 사용
    shouldComponentUpdate(newProps, newState){
      console.log("===> toc shouldComponentUpdate");
      console.log(newProps.data);
      console.log(this.props.data);
      if(this.props.data === newProps.data){
        return false;
      }
      return true;
    } 

    render(){
      console.log('===>TOC render');
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        //에러 발생 확인 key넣어준다
        lists.push(<li key={data[i].id}>
          <a href={"/content/" + data[i].id}
              onClick ={function(id, e){
                e.preventDefault();
                this.props.onChangePage(id);
              }.bind(this,data[i].id)}
          >{data[i].title}</a></li>);
        i= i+1;
      }
      return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
      );
    }
  }

  export default TOC; // 다른곳에서 TOC 클래스를 사용할수 있게 한다.