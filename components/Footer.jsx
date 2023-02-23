import {View , StyleSheet , Text, Pressable} from 'react-native'

const Footer = ({setShow})=>{
    return(
        <View style={styles.footherContainer}>
            <Pressable style={styles.buttonAdd} onPress={()=> setShow(true)} >
                <Text style={styles.textButtonAdd}>+</Text>
            </Pressable>
        </View>
        )

}

const styles = StyleSheet.create({
    footherContainer:{
        backgroundColor:"#558b2f",
        height:"13%",
        width:"100%"

    },
    buttonAdd:{
        backgroundColor:"blue",
        height:40,
        width:40,
        backgroundColor:"#039be5",
        position:"relative",
        bottom:15,
        left:310,
        borderRadius:50
    },
    textButtonAdd:{
        height:"100%",
        width:"100%",
        textAlign:"center",
        textAlignVertical:"center"
    }
})

export default Footer