const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/sql_intro')


// Exercise 2
// sequelize
//     .query("SELECT MAX(weight) FROM pokemon")
//     .then(function ([results, metadata]) {
//         console.log(results)
//     })



//Exercise 3   
// let findByType = function(type){
//    sequelize
//        .query(`SELECT name FROM pokemon AS p , pokemon_type AS p_t  
//                 Where type = '${type}' AND p.type_id = p_t.id `)
//        .then(function ([results, metadata]) {
//            console.log(results)
//        })
// }

// findByType('grass')


//Exercise 4 
// let findOwners = function(pocemonName){
//     sequelize   
//     .query(`SELECT t.name FROM pokemon AS p  , pokemon_trainer AS p_t , trainer AS t 
//         WHERE p.name = '${pocemonName}' AND p.id = p_t.pokemon_id AND t.id = p_t.trainer_id `)
//         .then(function ([results, metadata]) {
//                        console.log(results)
//                    })
// } 
//findOwners('gengar')


//Exercise 5 
// let findRoster = function(trainerName){
//     sequelize   
//     .query(`SELECT p.name FROM pokemon AS p  , pokemon_trainer AS p_t , trainer AS t 
//         WHERE t.name = '${trainerName}' AND p.id = p_t.pokemon_id AND t.id = p_t.trainer_id `)
//         .then(function ([results, metadata]) {
//             console.log(results)
//         })
// } 
// findRoster('Loga')
