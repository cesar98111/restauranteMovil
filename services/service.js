import axios from "axios";

const url = 'http://192.168.0.106:8000/api/restaurant'

const createClient = async(data) =>{
    try{
        console.log(data)
        console.log(data.name)
        const result =await fetch(`${url}/insert/client`,{
            method:'POST',
            body:JSON.stringify({
                name:data.name,
                lastName:data.lastName,
                telephone:data.telephone
         }),
        headers:{
            'Content-type':'application/json'
        }
    })

    const datas = await result.json()
    return datas
    }catch(err){
        console.log(err)
    }
    
} 


const createBooking = async(data) =>{
    console.log("hola")
    let result
    await fetch(`${url}/insert/reserva`,{
        method: 'POST',
        body: JSON.stringify({
            date:data.date,
            table:data.mesa,
            numPerson:data.numPerson
        }),
        headers:{
            'Content-type':'application/json'
        }
    })
    .then((res)=>result = res.json())
    .catch((err) => console.log(err.message))

    return result
}

const createDo = async(data) =>{
    let result 
    await fetch(`${url}/insert/realizan`,{
        method: 'POST',
        body: JSON.stringify({
            employe:data.employeeId,
            booking:data.bookingId,
            client:data.clientId
        }),
        headers:{
            'Content-type':'application/json'
        }
    })
    .then((res)=>result = res.json())
    .catch((err) => console.log(err.message))

    return result
}




export{
    createClient,
    createBooking,
    createDo,
    
}