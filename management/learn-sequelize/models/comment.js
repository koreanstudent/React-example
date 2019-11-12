

module.exports = (sequelize, DataTypes) => {
   return sequelize.define('comment', {
     comment : {
         type: DataTypes.STRING(100),
         allowNull: false,   // not null
     },
     created_at: {
         type : DataTypes.DATE,
         allowNull : false,
         defaultValue : sequelize.literal('now()'),  // sequelize.literal()  - 인자로 넣은 문자를 그대로 사용하는 역활
     },
   }, {
       timestamps : false,  // 세번째 인자는 테이블 옵션 , timestamps가 true 시퀄라이즈가 생성일 수정 날짜 컬럼을 추가 
   });
};