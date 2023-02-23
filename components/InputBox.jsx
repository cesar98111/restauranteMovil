import { Text, View, TextInput, StyleSheet, Pressable, Modal} from "react-native";
import { useState } from "react";
import { createClient, createBooking,createEmploye,createDo } from "../services/service";
import NumericInput from "react-native-numeric-input";
import Calendar from "./calendar";

const InputBox = ({setShow}) =>{
    
    const [client , setClient] = useState({
        name:"",
        lastName:"",
        telephone:""
    })
    const [booking, setBooking] = useState({
        date:"fecha",
        mesa: 0,
        numPerson: 1,
        
    })
    const [id,setid]= useState({
        client:0,
        employee:0,
        booking:0
    })

    const [date, setDate] = useState(false)
    
    const handleChangeNameClient =(data)=>{
        setClient((client)=>{
            return{
                ...client,
                name:data
            }
            
        })
    }
    const setNumPerson =(data)=>{
        console.log("data:"+data)
        setBooking((booking)=>{
            return{
                ...booking,
                numPerson:data
            }
            
        })
        console.log(booking.numPerson)
    }
    const handleChangeLastNameClient = (data) =>{
        setClient((client)=>{
            return{
                ...client,
                lastName:data
            }
            
        })
    }

    const handleChangeTelephoneClient = (data) =>{
        setClient((client)=>{
            return{
                ...client,
                telephone:data
            }
            
        })
    }
    const handleSend = ()=>{
       
        setBooking(booking.mesa = parseInt(Math.random()*10))
        
        setShow(false)
        const send = async() =>{
            try{
               const dataClient = await createClient(client)
               
               
               const dataBooking = await createBooking(booking)
               console.log(dataBooking)
               const ids ={
                    clientId:dataClient.data.insertId,
                    employeeId: Math.floor(Math.random() * (9 - 1) + 1),
                    bookingId:dataBooking.data.insertId
               }
               const dataDo = await createDo(ids)
               console.log(dataDo)
            }catch(err){
                console.log(err)
            }
        }
        send()
    }
    const dateShow =() =>{

        setDate(!date)
    
    }

    return(
        <View style={styles.inputBox} >
            <View style={styles.inputText}>
                <Text>nombre</Text>
                <TextInput style={styles.input} placeholder="nombre"
                onChangeText={handleChangeNameClient}
                value={client.name}/>
            </View>
                
            <View style={styles.inputText}>
                <Text>apellidos</Text>
                <TextInput style={styles.input} placeholder="apellidos"
                onChangeText={handleChangeLastNameClient}
                value={client.lastName}/>
            </View>
                
            <View style={styles.inputText}>
                <Text>telefono</Text>
                <TextInput style={styles.input} placeholder="telefono"
                onChangeText={handleChangeTelephoneClient}
                value={client.telephone}
                keyboardType="numeric"
               />
            </View>
                
            <View Style={styles.inputBookin}>
                <Text> numero de personas y fecha de reserva</Text>
                <View style={styles.inputZone}>
                    <NumericInput 
                    value={booking.numPerson}
                    onChange={value => setNumPerson(value)} 
                    onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                    totalWidth={60} 
                    totalHeight={40} 
                    iconSize={25}
                    valueType='integer'
                    borderColor={"#1769aa"}
                    textColor='white' 
                    iconStyle={{ color: 'white' }} 
                    rightButtonBackgroundColor='#1769aa' 
                    leftButtonBackgroundColor='#1769aa'
                    maxValue={6}
                    minValue={1}/>
                    <Pressable onPress={dateShow} style={styles.inputDate}>
                        <Text style={{textAlignVertical:"center", textAlign:"center", marginTop:10}}>{!booking.date ? "fecha" : booking.date}</Text>
                    </Pressable>
                    
                </View>
                
            </View>   
            <Calendar setShow={setDate} show={date} date={booking} dateHandle={setBooking} />
            <Pressable style={styles.sendButon}>
                <Text style={{textAlign:"center", color:"white"}} onPress={handleSend}>enviar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    inputBox:{
        alignItems:"center",
        justifyContent:"space-around",
        height:300,
        width:"80%",
        padding:1,
        backgroundColor:"#4caf50",
        
    },
    inputText:{
       flexDirection:"row"
    },
    sendButon:{
        width:"30%",
        backgroundColor:"#039be5"
    },
    input:{
        backgroundColor:"#a2cf6e",
        height:"100%",
        width:"30%",
        marginLeft:30
    },
    inputBookin:{
        
        
        borderTopColor:"#1b5e20",
        justifyContent:"center",
        alignItems:"center",
        width:"100%"
    },
    inputZone:{
        marginTop:10,
        justifyContent:"space-around",
        flexDirection:"row"

    },
    inputDate:{
        
        backgroundColor:"#039be5",
        width:"30%"
    },
    inputDate:{
        backgroundColor:"#a2cf6e",
        height:"100%",
        width:"50%",
        marginLeft:30
    },
    

})
export default InputBox