import { Pressable, Animated } from "react-native";
import useAnimation from "../hooks/useAnimation";

export default function PressableOpacity({children, onPress, style}) {

    const {fadeIn,fadeOut,opacityValue} = useAnimation();

    return(
        <Pressable 
            style={style}
            onPressIn={fadeIn}
            onPressOut={fadeOut}
            onPress={onPress}
        >
            <Animated.View style={{opacity: opacityValue}} >
                {children}
            </Animated.View>
        </Pressable>
    )
}