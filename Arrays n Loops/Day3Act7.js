// not complete


let bobsFollowers = ["Bob","Andy","Steve","Lyndsey"];
let hannahsFollowers = ["Xara","Jane","Lyndsey","Megan"];


for(let i=0;i<bobsFollowers.length;i++){
    for(var j=0;j<hannahsFollowers.length;j++){
        if(bobsFollowers[i]==hannahsFollowers[j]){
            console.log(bobsFollowers[i],hannahsFollowers[j])
        }
    }
}
