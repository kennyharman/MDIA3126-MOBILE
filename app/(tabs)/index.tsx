import { View } from "react-native"
import Post from "@/components/molecules/Post"
import { setNativeProps } from "react-native-reanimated"

export default function HomeScreen() {
  return (
    <View style={{
      flex: 1,
      justifyContent: "flexStart",
      alignItems: "center",
      paddingTop: 220,
      paddingBottom: 220,
    }}
    >
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: 30,
      paddingRight: 30,
      backgroundColor: "#22303c",
      borderWidth: 4,
      borderColor: "#8899ac",
      borderRadius: 20
    }}>
        <View>
          <Post
            postMessage = "RAISINS ARE DELICIOUS WHEN USED IN CEREAL AND COOKIES"
         />
          <p style = {{
            fontFamily: "sans-serif",
            color: "#1DA1F2",
            fontWeight: "bold",
            marginTop: -1.5,
            fontSize: 18
          }}>
            @Official_RaisinBran
          </p>
        </View>
      </View>
    </View>
  )
}


