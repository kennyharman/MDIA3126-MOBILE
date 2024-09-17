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
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: { width: -3, height: 9 },
      shadowOpacity: 0.4,
      shadowRadius: 4,
      elevation: 4
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


