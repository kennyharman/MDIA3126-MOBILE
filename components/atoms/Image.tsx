import { View, Image } from "react-native";

export default function ProfileImage() {
    return (
        <View
            style={{

            }}
        >
            <Image
                style={{
                    width: 80,
                    height: 80,
                    borderRadius: 100,
                    marginTop: 22
                }}
                source={require('@/assets/images/rodrick_screaming.jpg')}
            />
        </View>
    )
}