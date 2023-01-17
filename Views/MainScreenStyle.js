module.exports = {
 
    main_screen:{
        marginTop: 50,
        display:'flex',
        flexDirection: 'column',
        backgroundColor:'white',
        alignItems:'center',
        width: '100%',
        height:'100%'
    },
    main_screen_display:{
        elevation: 10,
        width:'95%',
        backgroundColor:'white',
        borderRadius: 10,
        display:'flex',
        marginBottom:10,
        padding:10
    },
    main_screen_display_text:{
        fontSize:50,
        textAlign:'right',
    },
    main_screen_keypad:{
        width:'100%',
        height:'70%',
        display:'flex',
        // flexDirection:'row'
    },
    main_screen_keypad_row:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'white',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10
    },
    btn_outer:{
        width:90,
        height:90,
        backgroundColor:'white',
        elevation:10,
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:35
    },
    bg_button:{
        backgroundColor:'white',
        color:'black',
        fontSize:30
    },
    btn1_outer:{
        width:90,
        height:90,
        backgroundColor:'#FF5757',
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center',
        elevation:2,
        borderRadius:95
    },
    bg1_button:{
        backgroundColor:'#FF5757',
        color:'white',
        fontSize:30,
        fontWeight:'bold',
    },
    btn2_outer:{
        width:90,
        height:90,

        backgroundColor:'grey',
        borderRadius:90,
        elevation:10,
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center'
    },
    bg2_button:{
        backgroundColor:'grey',
        color:'white',
        fontSize:30,
        fontWeight:'bold',
    }
}