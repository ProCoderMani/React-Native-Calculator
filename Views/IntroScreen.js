import React from 'react'
import { View , Image , Text , StyleSheet} from 'react-native'
import logo from '../assets/profile-pic.png'

const IntroScreen = () => {
  return (
    <View style={styles.container}>
        
        <View style={styles.inner}>
        <Image source={logo} style={styles.innerImg}/> 
        </View>
        <Text style={styles.bottomText}>Powered By Manish Harit!</Text>
     </View>

  )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width:'100%',
        backgroundColor: '#C48CF0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inner: {
        width: 100,
        height: 100,
        backgroundColor: 'inherit'
    },
    innerImg: {
        width:100,
        height:100
    },
    bottomText:{
        marginTop:100

    }
})

export default IntroScreen
