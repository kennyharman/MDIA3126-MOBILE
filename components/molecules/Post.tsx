import { View } from "react-native"
import Message from "@/components/atoms/Message"
import Name from "@/components/atoms/Name"
import ProfileImage from "@/components/atoms/Image"

export default function Post ({ postMessage, postMention }) {
    return (
        <View>
            <View style={{
                flex: 1,
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
                justifyContent: "center",
                width: 700
            }}>
                <ProfileImage/>
                <Name
                    displayName={"Yenny"}
                    accountName={"@saturday_yenny_fever"}
                />
            </View>
            <View style ={{
                marginTop: 10
            }}>
                <Message
                messageText={ postMessage }
                messageMention={ postMention }
                />
            </View>
        </View>
    )
}