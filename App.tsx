import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,StyleProp} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


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

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>

 <View style={{flexDirection:"row"}}>

  <Records label="steps" value="12351"/>
  <Records label="Distance" value="0.6823km"/>
  
</View>

<Records label="flights Climbed" value="22km"/>
  


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding:12,
    justifyContent: 'center',
  },
  valueContainer:{
marginRight:50,
marginVertical:20 

  },
  label:{color:"white",fontWeight:"600",fontSize:20},
  value:{fontSize:35,color:"white",fontWeight:"600"},

});
