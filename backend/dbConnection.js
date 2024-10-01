import { Sequelize } from "sequelize";
export const sequelize= new Sequelize("tamadonmis",'root','Abbasjan123@',{
    host:'localhost',
    port:3001,
    dialect:'mysql'
  });
  export default sequelize