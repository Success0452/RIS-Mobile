import {useEffect, useState} from "react";
import {getAllCategories} from "@/server/category";
import {DashboardCustomHeader} from "@/app/components/dash-header";
import {UpdateProductHeader} from "@/app/update-product/components/header";
import {UpdateProductFields} from "@/app/update-product/components/fields";
import {UpdateProductActions} from "@/app/update-product/components/action";
import {getToken} from "@/server/storage";
import {KeyboardAvoidingView, Platform, ScrollView, View} from "react-native";
import {getSingleProduct} from "@/server/product";

export default function UpdateProductPage() {
    // @ts-ignore
    const [productName, setProductName] = useState('');
    const [productObject, setProductObject] = useState({});
    const [productDescription, setProductDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [categoryType, setCategoryType] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [categoryLoading, setCategoryLoading] = useState(false);
    const [product, setProduct] = useState('');

    const getCategory = async() => {
        const allProducts = await getAllCategories(setCategoryLoading);
        if(allProducts?.statusCode === 200){
            // @ts-ignore
            setCategories(allProducts?.data);
        }
    }

    const getProduct = async() => {
        const productId = await getToken('productId');
        setProduct(productId!!);
        // @ts-ignore
        const singleResponse = await getSingleProduct(productId, setIsLoading);
        if(singleResponse.statusCode === 200){
            //@ts-ignore
            const productResponse = singleResponse?.data;
            setQuantity(productResponse?.quantity);
            setProductDescription(productResponse?.description);
            setProductName(productResponse?.name);
            setPrice(productResponse?.price);
            setProductObject(productResponse);
            setCategoryType(productResponse?.categoryId);
        }
    }

    useEffect(() => {
        getProduct();
        getCategory();
    },[])

    return (
        <DashboardCustomHeader>
            <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled={true}>
                <ScrollView className={'flex flex-col w-full'} showsVerticalScrollIndicator={false}>
                    <UpdateProductHeader title={"Update Category"} />

                    <UpdateProductFields
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

                    <UpdateProductActions
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
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
                        productId={product}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        </DashboardCustomHeader>
    )
}
