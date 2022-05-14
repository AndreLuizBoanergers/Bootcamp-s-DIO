class Animal{
    //contrutor
    constructor(type = 'animal'){
        this.type = type;
    }
}
//better e setter
get type(){
    return this._type;
}