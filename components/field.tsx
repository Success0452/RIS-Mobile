import React, { FC } from "react";
import {View, TextInput} from "react-native";

interface TextFieldProps {
    value: string;
    setValue: (value: string) => void;
    placeholder?: string;
    height?: number;
    isTextarea?: boolean;
    inputType?: string;
}

export const TextBox: FC<TextFieldProps> = ({ value, setValue, placeholder, height, isTextarea, inputType }) => {
    const handleChange = (e: string) => {
        setValue(e);
    };

    return (
        <View className="w-full flex flex-row items-center">
            {!isTextarea ? (
                <TextInput
                    value={value}
                    onChangeText={handleChange}
                    className="border-[1px] border-gray-500 text-black rounded-[8px] w-full p-2"
                    style={{ height: height ? height : 'auto', padding: 10 }}
                    placeholder={placeholder}
                    secureTextEntry={inputType === 'password'}
                />
            ) : (
                <TextInput
                    value={value}
                    onChangeText={handleChange}
                    className="border-[1px] border-gray-500 text-black rounded-[8px] w-full p-2"
                    style={{ height: height ? height : 'auto', padding: 10 }}
                    placeholder={placeholder}
                />
            )}
        </View>
    );
};
