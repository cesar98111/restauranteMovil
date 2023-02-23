import { View, Text, Modal , StyleSheet, Pressable} from "react-native"
import { useEffect, useState } from "react";
import DatePicker from "react-native-modern-datepicker"


const Calendar =({show, setShow, date , dateHandle})=>{
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(()=>{
        dateHandle((date)=>{
            return{
                ...date,
                date:selectedDate
            }
        })
    },[selectedDate])
    
    return(
        <Modal visible={show} transparent={true}>
            <View style={styles.calendarDirection}>
                <View style={styles.calendarContainer}>
                    <DatePicker
                        onSelectedChange={date => setSelectedDate(date)}
                    />
                <View style={styles.buttonGroups}>
                    <Pressable style={styles.buttonAdd} onPress={()=>setShow(!show)}>
                        <Text style={styles.buttonText}>Aceptar</Text>
                    </Pressable>
                </View>
                </View>
                
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    calendarDirection:{
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        width:"100%"
    },
    calendarContainer:{
        height:400,
        width:300,
        backgroundColor:"#1b5e20"
    },
    buttonAdd:{
        height:30,
        width:"25%",
        backgroundColor:"#039be5"
        
    },
    buttonText:{
        height:"100%",
        textAlign:"center",
        textAlignVertical:"center"
    },
    buttonGroups:{
        marginTop:20,
        flexDirection:"row",
        justifyContent:"space-around",
        width:"100%"
    }
})

export default Calendar