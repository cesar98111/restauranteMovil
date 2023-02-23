import {View, Text, StyleSheet} from 'react-native'

const Header = () =>{
    return(
    <View style={styles.headerContainer}>
        <View style={styles.header}/>
        
        <Text style={styles.title}>
            Sistema de reserva 
        </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        justifyContent:"flex-start",
        height:"20%",
        width:"100%",
        backgroundColor:"#4caf50"
    },
    header:{
        width:"100%",
        height:"40%",
        backgroundColor:"#558b2f"
    },
    title:{
        textAlign:"center",
        textAlignVertical:"center",
        width:"100%",
        height:"60%",
        fontSize:20,
        fontWeight:"bold"
    }
})
export default Header