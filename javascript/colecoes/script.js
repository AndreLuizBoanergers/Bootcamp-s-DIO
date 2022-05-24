function getAdmin(map){
    let admins = [];
    for([key,value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins
}

const usuarios = new Map();
usuarios.set("Luiz","Admin");
usuarios.set("Sthefany",Admin);
usuarios.set("jorge","User");
usuarios.set('natalia',"Admin");