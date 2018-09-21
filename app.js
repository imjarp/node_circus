var kids = [{
    id:1,
    name:'Andy'
},
{
    id:2,
    name:'Sofia'
},
{
    id:3,
    name:'Adrian'
}]

var birth = [{
    id:1,
    year:2013
},
{
    id:2,
    year:2013
},
{
    id:1,
    year:1983
}]


let findChild = async(id)=>{
    //console.log(kids);
    return kids.find(kid=>kid.id === id);
}

let getAge = async(id)=>{
    return birth.find(b=> {
        //console.log(b);
        return b.id===id 
    });
}

let test =async()=>{
    let kid = await findChild(1)
    let age = await getAge(kid.id)
    console.log(`Kid ${kid.name} birth ${age.year}`)
}
test();