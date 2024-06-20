import {useEffect, useState} from "react";
import {getAllCategories} from "@/server/category";
import {DashboardCustomHeader} from "@/app/components/dash-header";
import {CreateProductHeader} from "@/app/create-product/components/header";
import {CreateProductFields} from "@/app/create-product/components/fields";
import {CreateProductActions} from "@/app/create-product/components/action";
import {KeyboardAvoidingView, Platform, ScrollView, View} from "react-native";

export default function CreateProductPage() {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [categoryType, setCategoryType] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [categories, setCategories] = useState([]);

    const getCategory = async() => {
        const allProducts = await getAllCategories(setIsLoading);
        if(allProducts?.statusCode === 200){
            // @ts-ignore
            setCategories(allProducts?.data);
        }
    }

    useEffect(() => {
        getCategory();
    },[])

    return (
        <DashboardCustomHeader>
           <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled={true}>
               <ScrollView className={'flex flex-col w-full'} showsVerticalScrollIndicator={false}>
                   <CreateProductHeader title={"Create Product"} />

                   <CreateProductFields
                       productName={productName}
                       setProductName={setProductName}
                       productDescription={productDescription}
                       setProductDescription={setProductDescription}
                       price={price}
                       quantity={quantity}
                       categoryType={categoryType}
                       setCategoryType={setCategoryType}
                       setQuantity={setQuantity}
                       setPrice={setPrice}
                       categories={categories}
                   />

                   <CreateProductActions
                       productName={productName}
                       setProductName={setProductName}
                       productDescription={productDescription}
                       setProductDescription={setProductDescription}
                       price={price}
                       quantity={quantity}
                       categoryType={categoryType}
                       setCategoryType={setCategoryType}
                       setQuantity={setQuantity}
                       setPrice={setPrice}
                       isLoading={isLoading}
                       setIsLoading={setIsLoading}
                   />
               </ScrollView>
           </KeyboardAvoidingView>
        </DashboardCustomHeader>
    )
}
