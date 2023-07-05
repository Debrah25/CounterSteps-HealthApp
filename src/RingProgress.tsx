import { StyleSheet, Text, View } from 'react-native'
import SVG,{Circle} from "react-native-svg";
import  Animated ,{useAnimatedProps,useSharedValue,withTiming,WithTimingConfig} from 'react-native-reanimated';
import { useEffect } from 'react';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type RingProgressProps={
radius?:number,
strokeWidth?:number,
progress:number,



}

const color="red"


const RingProgress =({radius=100, strokeWidth=35 ,progress}: RingProgressProps) => {

  const innerRadius = radius - strokeWidth /2 ;
  const circumference= 2 *Math.PI *innerRadius;

  const fill= useSharedValue(0);

  useEffect(()=>{
    fill.value=withTiming(progress,{ duration: 2000});
  },[progress])

  const animatedProps = useAnimatedProps(() =>({


    strokeDasharray:[circumference*fill.value ,circumference],

  }));

  return (
    <View style={{ width: radius * 2, height: radius * 2 ,/* backgroundColor:"green" */ alignSelf:"center" }}>
      <SVG>
        <Circle cx={radius} cy={radius} r={innerRadius}  /* fill={"red"}  */   stroke={color}  strokeWidth={strokeWidth} opacity={0.3}/> 
        <AnimatedCircle 
        cx={radius}
        cy={radius} 
        originX={radius} 
        originY={radius}
        r={innerRadius}
        /* fill={"red"}  */  
          stroke={color}  
          strokeWidth={strokeWidth}  
          strokeLinecap='round' rotation={-90} 
          animatedProps={animatedProps}/> 
    
      </SVG>
    </View>
  )
}

export default RingProgress;

const styles = StyleSheet.create({})