import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding:10,
    flexDirection:'row'
  },
  image: {
    width:100,
    height:100,
    borderRadius:50
  },
  innerContainer: {
    flex:1,
    padding:10,
    justifyContent:'center'
  },
  title: {
    fontWeight:'bold',
    fontSize:25
  },
  infoContainer:{
    flexDirection:'row',
    flex:1,
    alignItems:'center'
  },
  artist: {

  },
  year: {
    marginLeft:10,
    color:'gray',
    fontWeight: 'bold',
    fontSize:12
  },
  soldOutContainer: {
    borderWidth:1,
    borderColor:'red',
    padding:5,
    borderRadius:5
  },
  soldOutTitle: {
    color: 'red',
    fontSize:12,
  },
  contentContainer: {
    flexDirection:'row',
  }
})