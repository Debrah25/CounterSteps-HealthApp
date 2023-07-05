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

 <View style={styles.Values}>

  <Records label="steps" value="12351"/>
  <Records label="Distance" value="0.6823km"/>
  <Records label="flights Climbed" value="22km"/> 
</View>


  


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Values:{
flexDirection:'row',
gap:25,
flexWrap:"wrap"
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    padding:12,
    justifyContent: 'center',
  },
  valueContainer:{

  

  },
  label:{color:"white",fontWeight:"600",fontSize:20},
  value:{fontSize:45,color:"white",fontWeight:"600"},

});
