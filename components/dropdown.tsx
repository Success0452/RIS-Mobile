import React, { FC, ChangeEvent } from "react";
import {View, Text} from "react-native";
import {Picker} from "@react-native-picker/picker";

interface SelectFieldProps {
    value: string;
    setValue: (value: string) => void;
    placeholder?: string;
    height?: number;
    list?: any,
    optionId?: boolean;
}

export const SelectBox: FC<SelectFieldProps> = ({ value, setValue, placeholder, height, list, optionId }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    return (
        <View className="w-full flex flex-row items-center">
            <View className="border-[1px] border-gray-500 text-black rounded-[8px] w-full h-[20px] pt-4 pb-4 pr-2 pl-2 flex items-center justify-center">
                <Picker
                    selectedValue={value}
                    onValueChange={(e, i) => setValue(e)}
                    style={{height: height ? height : 'auto', padding: 10, borderWidth: 1, borderColor: '#000000', borderRadius: 8, width: '100%'}}
                >
                    {list.map((option: any, index: number) => (
                        <Picker.Item key={index} value={optionId ? option.id : option} label={optionId ? option?.name : option} />
                    ))}
                </Picker>
            </View>
        </View>
    );
};
