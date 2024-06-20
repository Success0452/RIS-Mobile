import {Text, View} from "react-native";
import {TextBox} from "@/components/field";
import {SelectBox} from "@/components/dropdown";


export const UpdateProductFields = (props:any) => {
    return (
        <View className={"flex flex-col w-full md:w-[50%]"}>
            <View className={"flex flex-col items-start justify-start w-full mt-10"}>
                <Text className={"text-[14px] text-black font-[500] mb-3"}>Product Name</Text>
                <TextBox value={props.productName} setValue={props.setProductName} height={40}
                         placeholder={'Product Name'}
                         inputType={'name'}/>
            </View>

            <View className={"flex flex-col items-start justify-start w-full mt-5"}>
                <Text className={"text-[14px] text-black font-[500] mb-3"}>Product Description</Text>
                <TextBox value={props.productDescription} setValue={props.setProductDescription} isTextarea={true} height={100}
                         placeholder={'Description Name'}
                         inputType={'name'}/>
            </View>

            <View className={"flex flex-col items-start justify-start w-full mt-5"}>
                <Text className={"text-[14px] text-black font-[500] mb-3"}>Price</Text>
                <TextBox value={props.price} setValue={props.setPrice} height={40}
                         placeholder={'Price(NGN)'}
                         inputType={'name'}/>
            </View>

            <View className={"flex flex-col items-start justify-start w-full mt-5"}>
                <Text className={"text-[14px] text-black font-[500] mb-3"}>Quantity</Text>
                <TextBox value={props.quantity} setValue={props.setQuantity} height={40}
                         placeholder={'Quantity'}
                         inputType={'number'}/>
            </View>

            <View className={"flex flex-col items-start justify-start w-full mt-5"}>
                <Text className={"text-[14px] text-black font-[500] mb-3"}>Category</Text>
                <SelectBox value={props.categoryType} setValue={props.setCategoryType} optionId={true} height={40}
                         placeholder={'CategoryType'} list={[{name: 'Select Category'}, ...props?.categories]}/>
            </View>
        </View>
    )
}
