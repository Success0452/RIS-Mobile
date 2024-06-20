import {useRouter} from "expo-router";
import {CustomButton} from "@/components/button";
import {updateProduct} from "@/server/product";
import {View} from "react-native";
import LottieView from "lottie-react-native";

export const UpdateProductActions = (props:any) => {
    const router = useRouter();
    return (
        <View className={'flex flex-row items-center justify-center w-full mt-10 mb-5'}>
            {props?.isLoading ?
                <LottieView
                    source={require('@/assets/images/load.json')}
                    autoPlay
                    loop
                    style={{width:100, height:80}}
                /> :
                <CustomButton title={'Update'} onClick={() => {
                    updateProduct(
                        props?.productName,
                        props?.productDescription,
                        props?.price,
                        props?.quantity,
                        props?.categoryType,
                        props?.productId,
                        props?.setIsLoading
                    ).then((res) => {
                        router.back();
                    })
                }}/>
            }
        </View>
    )
}
