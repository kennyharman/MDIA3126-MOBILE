import { View, TextInput } from "react-native";
import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label"

export default function InputForm ({ labelText, buttonText, placeholderText }) {
    return (
        <View>
            <Button buttonText={buttonText}/>
            <Label labelText={labelText}/>
            <TextInput defaultValue={placeholderText}/>
        </View>
    )
}