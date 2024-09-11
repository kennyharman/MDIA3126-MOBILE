import { View } from "react-native"
import InputForm from "@/components/molecules/InputForm"

export default function HomeScreen() {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}
    >
    <InputForm
      buttonText="GOD'S PLAN"
      labelText="CLICK TO UPDATE GOD'S PLAN"
      placeholderText="WHERE DO I FIND THE REST BUTTON"
    />
    </View>
  )
}


