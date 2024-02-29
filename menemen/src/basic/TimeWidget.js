import { ImageBackground, StyleSheet, Text, View } from "react-native";

function TimeWidget() {
    const CurrentTime = new Date();
    return( 
    <ImageBackground>
    <View style={styles.container}>
        <Text style={styles.time}>
            {CurrentTime.getHours()}:{CurrentTime.getMinutes().toString().padStart(2,'0')}
        </Text>
    </View>
    </ImageBackground>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'darkorange',
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    time:{
        colur:'white',
        fontSize:40
    }
})

export default TimeWidget;