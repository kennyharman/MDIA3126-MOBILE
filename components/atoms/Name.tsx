import { View, Image } from "react-native"


export default function Name({ displayName, accountName }) {
    return (
        <View style = {{
            flex: 1,
            flexDirection: "column",
            marginBottom: -25,
            justifyContent: "space-evenly"
        }}
        >
            <View style = {{
                flex: 1,
                justifyContent: "space-around",
                
            }}>
                <p style = {{
                    marginBottom: -16,
                    fontSize: 25,
                    color: "white",
                    fontWeight: "bold",
                    fontFamily: "sans-serif"
                }}>
                    { displayName }
                </p>
                <Image style = {{
                    width: 20,
                    height: 20,
                    marginLeft: 80,
                    marginTop: -7.8,
                }}
                    source={require('@/assets/images/verified.png')}
                />
            </View>
            <p style = {{
                fontSize: 20,
                color: "#8899ac",
                fontFamily: "sans-serif",
                marginTop: 15
            }}>
                { accountName }
            </p>
        </View>
    );
};