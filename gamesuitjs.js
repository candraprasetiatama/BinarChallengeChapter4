
// let valueUser = null
// let valueComp = null

// function pilihanUser(parameter){
    //console.log(parameter);
    // valueUser = parameter

    // document.getElementById(pilihanUser).style.property = new style;
   /* let objectUser = document.getElementById(`pilhanUser`)
   console.log(ObjectUser) */

//    if(parameter == 0){
//        document.getElementById("batuUser").style.background = "white";
//        document.getElementById(`guntingUser`).style.background = "none";
//        document.getElementById(`kertasUser`).style.background = "none";
//    } else if (parameter == 1){
//        document.getElementById("batuUser").style.background = "none";
//        document.getElementById(`guntingUser`).style.background = "white";
//        document.getElementById(`kertasUser`).style.background = "none";
//    } else if (parameter == 2){
//        document.getElementById("batuUser").style.background = "none";
//        document.getElementById(`guntingUser`).style.background = "none";
//        document.getElementById(`kertasUser`).style.background = "white"
//    }
   
//    randomPilihan ()

//    cekHasil ()  
// }

// function randomPilihan() {
//     valueComp = Math.floor(Math.random() * 3);
//     if(valueComp == 0){
//         document.getElementById("batuComp").style.background = "white";
//         document.getElementById(`guntingComp`).style.background = "none";
//         document.getElementById(`kertasComp`).style.background = "none";
//     } else if (valueComp == 1){
//         document.getElementById("batuComp").style.background = "none";
//         document.getElementById(`guntingComp`).style.background = "white";
//         document.getElementById(`kertasComp`).style.background = "none";
//     } else if (valueComp == 2){
//         document.getElementById("batuComp").style.background = "none";
//         document.getElementById(`guntingComp`).style.background = "none";
//         document.getElementById(`kertasComp`).style.background = "white"
//     }

// }

// function cekHasil() {

//     if(valueUser === valueComp){
//         console.log(`seri`)
//     }else if (valueUser === 0 && valueComp === 1){
//         console.log(`menang`)
//     }else if (valueUser === 0 && valueComp === 2){
//         console.log(`kalah`)
//     }else if (valueUser === 1 && valueComp === 0){
//         console.log(`kalah`)
//     }else if (valueUser === 1 && valueComp === 2){
//         console.log(`menang`)
//     }else if (valueUser === 2 && valueComp === 0){
//         console.log(`menang`)
//     }else if (valueUser === 2 && valueComp === 1){
//         console.log('kalah')
//     }
// }


/* Pertemuan 5 */

// membangkitkan bilangan random
// let comp = Math.floor(Math.random()* 3)
// if (comp == 0) {
//     comp = 0;
// } else if (comp == 1) {
//     comp = 1
// } else {
//     comp = 2
// }
// console.log(comp);

// //looping atau perulangan (bagian komputer)
// for (let index = 0; index < pilihanComp.length; index++ ) {
//     if(comp == 0){
//         document.getElementById (0).style.background='grey'}
//         (comp == 1) {document.getElementById (1).style.background=`none`}
//         (comp == 2) {document.getElementById (2).style.background='none'}
//     else if (comp == 0){
//         document.getElementById (0).style.background='none'}
//         (comp == 1) {document.getElementById (1).style.background=`grey`}
//         (comp == 2) {document.getElementById (2).style.background='none'}
//     else if (comp == 0){
//         document.getElementById (0).style.background='none'}
//         (comp == 1) {document.getElementById (1).style.background=`none`}
//         (comp == 2) {document.getElementById (2).style.background='grey'}
    // pilihanComp[index].addEventListener(`click`,function(){
    //     console.log(valueComp[index].getAttribute(`id`));
    // })
// }

/* OOP */

//inheritance
//encapsulation
//abstraction
//polymorphism

// class Human {

//     constructor (isStart, valuePlayer, valueComp){
//         this.isStart = isStart
//         this.valuePlayer = valuePlayer
//         this.valueComp = valueComp
//     }

//     //yang bisa dilakukan oleh game

//     gameStart(){
        
//         document.getElementById('startGame').addEventListener('click',() => {
//             //Ubah keadaan jadi start
//             this.isStart = true

//             //Listen pilihan player
//             console.log(this.isStart)
//             this.pilihPlayer()
//             alert('game start',this.isStart)
//         })
//     }

//     pilihanPlayer(){
//         if(this.isStart == false) {
//             alert('Klik Tombol Start')
//         } else { 
//             let pilihanPlayer = document.querySelectorAll('#pilihanUser')
//             console.log(typeof pilihanPlayer)
//             console.log(pilihanPlayer.length)
            
//             for(let index = 0; index < pilihanPlayer.length; index ++){
//                 pilihanPlayer[index].addEventListener('click', () => {
//                     //set nilai player
//                     this.valuePlayer = index
//                     if(!this.isStart == true && !this.valuePlayer){
//                     this.styling(pilihanPlayer[index])}

//                     if(!this.valueComp


//                     //cek hasil
//                     // this.cekHasil(this.valuePlayer, this.valueComp)
//                 })
//             }
//         }
//     }

//     randomvalue(){
//         let randomAngka = Math.floor(Math.random() * 3)
//     }
 
//     cekHasil(user, comp){
//         let hasilcek = ''
//         if(user == comp){
//             hasilcek = 'seri'
//         }else{
//             hasilcek = 'player menang'
//         }
//     }

//     stylingHasil(){
//         document.getElementById('hasil').innerHTML = hasil
//     }

//     resetGame(){

//     }

//     styling(element){

//         console.log(element)
//         // tangan[index].style.background = black
//     }

//     stylingComp(index){
//         let elementComp = document.querySelectorAll('pilihanComp div')
//         console.log('ini adalah element comp', elementComp[index])
//     }
// }

// let game = new Human(false,null,null)
