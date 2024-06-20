import {useRouter} from "expo-router";
import {CustomButton} from "@/components/button";
import {addProduct} from "@/server/product";
import {View} from "react-native";
import LottieView from "lottie-react-native";

export const CreateProductActions = (props:any) => {
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
                <CustomButton title={'Create'} onClick={() => {
                addProduct(props?.productName, props?.productDescription, props?.price, props?.quantity, props?.categoryType, props?.setIsLoading)
                    .then((res) => {
                        props?.setProductName('');
                        props?.setProductDescription('');
                        props?.setPrice('');
                        props?.setQuantity('');
                        props?.setCategoryType('');
                        router.replace('/dashboard');
                    })
            }}/>}
        </View>
    )
}
