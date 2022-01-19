const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/sql_intro')

const pocemons = require('./data.json')
// -------------------------------------- 
// FILLING THE TYPES AND THE TOWNS
// const typeSet = new Set()
// const townSet = new Set()
// for( let poce of pocemons){
//     typeSet.add(poce.type)
// }

// const addType = async function (type) {
//     let query =`INSERT INTO pokemon_type VALUES (null, '${type}')`
//     let result = await sequelize.query(query)
//     console.log(result);
//     return result[0]
// }

// for(let t of typeSet){
//     addType(t)
// }

// for( let poce of pocemons){
//     for( let trainer of poce.ownedBy){
//         townSet.add(trainer.town)
//     }    
// }

// const addTown = async function (name) {
//     let query =`INSERT INTO town VALUES (null, '${name}')`
//     let result = await sequelize.query(query)
//     console.log(result);
//     return result[0]
// }

// for(let t of townSet){
//     addTown(t)
// }
// -------------------------------------- 
// FILLING THE Pocemon data
// const addPocemon = async function (id, name ,type ,height,weight) {
//     sequelize
//         .query(`SELECT id FROM pokemon_type WHERE type =  '${type}'`)
//         .then(async function ([results, metadata]) {
//             // console.log(results[0].id);

//             let typeId = results[0].id

//             let query =`INSERT INTO pokemon VALUES (${id}, '${name}', ${typeId}, ${height} ,${weight})`
//             let result = await sequelize.query(query)
//             console.log(result);
//             return result[0]
//         })
// }

// for( let poce of pocemons){
//     addPocemon(poce.id,poce.name,poce.type,poce.height,poce.weight)
//     // console.log(poce.id +" "+ poce.name +" "+ poce.type +" "+poce.height+" "+poce.weight);
// }
// -------------------------------------- 
// Filling trainers table 

// const trainers = {}
// const addTrainer = async function (name ,town ) {   
//         sequelize
//         .query(`SELECT id FROM town WHERE name ='${town}'`)
//         .then(async function ([results, metadata]) {
//             let townId = results[0].id
//             let query =`INSERT INTO trainer VALUES (null, '${name}', ${townId})`
//             let result = await sequelize.query(query)
//             console.log(result);
//             return result[0]
//         })
// }

// for( let poce of pocemons){
//     for( let trainer of poce.ownedBy){
//       if(!trainers[trainer.name]){
//         trainers[`${trainer.name}`] = trainer.town
//       }  
//     }    
// }

// for( let t of Object.keys(trainers)){
//     addTrainer(t,trainers[t])
//     // console.log(t , trainers[t]);
// }
// ---------------
// Filling the pocemon_trainer Table 
// let p_t = async function() {
//     for( let poce of pocemons){
//         for( let trainer of poce.ownedBy){
//             let trainerId = await findTrainerId(trainer.name)
//             let query = `INSERT INTO pokemon_trainer VALUES (${poce.id} , ${trainerId})`
//             let result = await sequelize.query(query)
//         }
//     }
// }

// let findTrainerId = async function(trainerName) {
//     let trainer = await sequelize.query(`SELECT id FROM trainer WHERE name = '${trainerName}'`)
//     let trainerId = trainer[0][0].id
//     return trainerId 
// }

// p_t()


