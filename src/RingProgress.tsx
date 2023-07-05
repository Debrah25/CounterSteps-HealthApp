import { StyleSheet, Text, View } from 'react-native'
import SVG,{Circle} from "react-native-svg"



type RingProgressProps={
radius?:number,
strokeWidth?:number,
progress:number,


}

const color="red"


const RingProgress =({radius=100, strokeWidth=35 ,progress}: RingProgressProps) => {

  const innerRadius = radius - strokeWidth /2 ;
  const circumference= 2 *Math.PI *innerRadius;
  return (
    <View style={{ width: radius * 2, height: radius * 2 ,/* backgroundColor:"green" */ alignSelf:"center" }}>
      <SVG>
        <Circle cx={radius} cy={radius} r={innerRadius}  /* fill={"red"}  */   stroke={color}  strokeWidth={strokeWidth} opacity={0.3}/> 
        <Circle cx={radius} cy={radius} originX={radius} originY={radius} r={innerRadius}  /* fill={"red"}  */   stroke={color}  strokeWidth={strokeWidth}  strokeDasharray={[circumference* 0.5,circumference]} strokeLinecap='round' rotation={-90} /> 
    
      </SVG>
    </View>
  )
}

export default RingProgress;

const styles = StyleSheet.create({})