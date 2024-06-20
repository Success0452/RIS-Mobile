import {Text, View} from "react-native";
import LottieView from "lottie-react-native";


export const EmptyState = (props:any) => {
    return (
        <View className={'flex flex-col items-center justify-center w-full h-[50%]'}>
            <LottieView
                source={require('@/assets/images/empty.json')}
                autoPlay
                loop
                style={{width:100, height:100}}
            />
            <Text className={'text-black text-[14px]'}>{props?.message}</Text>
        </View>
    )
}
