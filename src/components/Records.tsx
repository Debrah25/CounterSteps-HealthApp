
import { StyleSheet, Text, View ,StyleProp} from 'react-native';



type ValueProps={
    label:string;
    value:string;
  
  }
  
  const Records=( {label,value}:ValueProps)=>(
    
  <View style={styles.valueContainer}>
  <Text style={styles.label}>{label}</Text>
  <Text style={styles.value} >{value}</Text>
  </View> 
  )
  

  const styles = StyleSheet.create({
      valueContainer:{
    
      },
      label:{color:"white",fontWeight:"600",fontSize:20},
      value:{fontSize:45,color:"white",fontWeight:"600"},
    
    });

 export default  Records