import React,{useState} from 'react'
import  {Text,FlatList,View, Button,StyleSheet} from 'react-native'
import {useSelector} from 'react-redux'
import Color from '../../constants/colors'

const OrderScreen = props=>{
    const orderItems = useSelector(state=> state.orders.order)
    
    const  [showDetail, setshowDetail] = useState(false)
    const [Buttontext,setText] =useState("Show Details")
    
    const Show=({item})=>{
        
      const itemData = item.items
      const date = new Date()
      
      const listItems=({item})=>{
       return (
       <View >
         {showDetail && <View style={styles.productInfo}>
            <Text style={styles.productText} > {item.quantity} </Text>
            <Text style={styles.productText}> {item.title}  </Text>
            <Text  style={styles.productText}>$ {item.amount} </Text>
          </View>}
        </View>
       )
        
      }
      
      return(
          <View style={styles.main}  >
            <View style={styles.datetotal} >
              <Text style={styles.text} >$ {item.amount} </Text>
              <Text> {item.date} </Text>
            </View>
            <View style={styles.button} >
              <Button title={Buttontext} onPress={(val)=>{
                setshowDetail(prevState=> !prevState)
                if(Buttontext=='Show Details'){
                  setText("Hide Details")
                }
                else if(Buttontext=='Hide Details'){
                  setText("Show Details")
                }
            }} 
            color={Color.primary} />
            </View>
            
            <FlatList data={itemData} renderItem={listItems} keyExtractor={(item)=> item.id} />  
            
                
            
          </View>
      )
    }

    return (
        <FlatList data={orderItems} renderItem={Show} keyExtractor={(item)=> item.id.toString() }  />
    )
}

const styles = StyleSheet.create({
  main:{
    borderWidth:1,
    marginHorizontal:20,
    marginVertical:10,
    padding:10
  },
  datetotal:{
    flexDirection:'row',
    marginHorizontal:5,
    justifyContent:'space-between',
    
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    marginVertical:5
  },
  text:{
    fontSize:17,
    fontWeight:'bold'
  },
  productInfo:{
    flexDirection:'row',
   
    justifyContent:'space-evenly',
    borderColor:'black',
    alignItems:'center',
   
    padding:3,
   marginVertical:2,
   marginHorizontal:30
  },
  productText:{
    fontSize:15,
    fontWeight:'900'
  }
  
})

export default OrderScreen