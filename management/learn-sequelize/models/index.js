const path = require('path'); 
const Sequelize = require('sequelize'); 

const env = process.env.NODE_ENV ||'development'; 
const config = require(path.join(__dirname,'..','config','config.json'))[env]; 
const db = {};  
const sequelize = new Sequelize(config.database, config.username, config.password, config);  

db.sequelize = sequelize; 
db.Sequelize = Sequelize;  


// db라는 객체에 user 와 comment 모델을 담았다.
db.User = require('./user')(sequelize,Sequelize);
db.Comment = require('./comment')(sequelize,Sequelize);


// 1:N 관계를 hasMany 메서드 사용  반대로 belongsTo 메서드 사용
db.User.hasMany(db.Comment, { foreignKey : 'commenter', sourceKey:'id'});
db.Comment.belongsTo(db.User, { foreignKey : 'commenter', targetKey:'id'});

module.exports = db;
