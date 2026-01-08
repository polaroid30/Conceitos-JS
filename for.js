//for

const jogos = ["minecraft","roblox","god of war"];
jogos.push("Eurotruck")
for(let i = 0; i <= jogos.length; i++){
    
    console.log(jogos[i])
}

// for of 

const lugares = ["Aracatuba","Birigui","Marilia"];

for(let lugar of lugares){

    console.log(lugar);
}

// for in

const user = {

    brand: "ford",
    year: "2020",
    color:"black"  
}

for( let key in user){
    console.log(key.toUpperCase())
}





