import React from 'react';


// react.component 라이브러리 및 class 상속  - > render() 사용
class Customer extends React.Component{
    render(){
        return(
        <div>
            <h2>홍길동</h2>
            <p>남자</p>
        </div>
        )
    }

}


export default Customer;