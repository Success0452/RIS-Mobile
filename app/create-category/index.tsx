import {useState} from "react";
import {DashboardCustomHeader} from "@/app/components/dash-header";
import {CreateCategoryHeader} from "@/app/create-category/components/header";
import {CreateCategoryFields} from "@/app/create-category/components/fields";
import {CreateCategoryActions} from "@/app/create-category/components/action";
import {View} from "react-native";

export default function CreateCategoryPage() {
    const [categoryName, setCategoryName] = useState('');
    return (
        <DashboardCustomHeader>
            <View className={'flex flex-col items-center justify-center w-full'}>
                <CreateCategoryHeader title={"Create Category"} />

                <CreateCategoryFields categoryName={categoryName} setCategoryName={setCategoryName} />

                <CreateCategoryActions name={categoryName} setName={setCategoryName} />
            </View>
        </DashboardCustomHeader>
    )
}
