import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";

export const screenOptions = {
  headerShown: false,
};

export default function Index() {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingVertical: 20,
        gap: 30,
        paddingHorizontal: 20,
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* Card 1: Charmander */}
      <View
        style={{
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "#000",
          backgroundColor: "white",
          paddingBottom: 20,
          marginTop: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 10,
          }}
        >
          <Text
            style={{
              color: "#0D0F13",
              fontSize: 22,
              fontWeight: "700",
            }}
          >
            Charmander
          </Text>

          <Image
            source={require("../assets/images/heart.png")}
            style={{
              width: 40,
              height: 30,
              marginLeft: 50,
            }}
          />

          <Text
            style={{
              color: "#0D0F13",
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            HP: 39
          </Text>
        </View>

        <Image
          source={require("../assets/images/charmander.webp")}
          style={{
            width: 180,
            height: 180,
            alignSelf: "center",
            borderRadius: 12,
          }}
        />

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            width: 115,
            backgroundColor: "white",
            paddingVertical: 6,
            paddingHorizontal: 12,
            borderRadius: 24,
            borderColor: "darkorange",
            borderWidth: 3,
            marginTop: 10,
          }}
        >
          <Image
            source={require("../assets/images/fire.png")}
            style={{ width: 40, height: 50, marginRight: 12 }}
          />
          <Text style={{ color: "black", fontSize: 18, fontWeight: "700" }}>
            Fire
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            color: "#0D0F13",
            fontSize: 14,
            fontWeight: "700",
            textAlign: "left",
            paddingHorizontal: 20,
            marginTop: 20,
          }}
        >
          Moves: Scratch, Growl, Ember, Leer
        </Text>

        <Text
          style={{
            color: "#0D0F13",
            fontSize: 14,
            fontWeight: "700",
            textAlign: "left",
            paddingHorizontal: 20,
          }}
        >
          Weakness: Water, Ground, Rock
        </Text>
      </View>

      {/* Card 2: Bulbasaur */}
      <View
        style={{
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "#000",
          backgroundColor: "white",
          paddingBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 10,
          }}
        >
          <Text
            style={{
              color: "#0D0F13",
              fontSize: 22,
              fontWeight: "700",
            }}
          >
            Bulbasaur
          </Text>

          <Image
            source={require("../assets/images/heart.png")}
            style={{
              width: 40,
              height: 30,
              marginLeft: 60,
            }}
          />

          <Text
            style={{
              color: "#0D0F13",
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            HP: 45
          </Text>
        </View>

        <Image
          source={require("../assets/images/Bulbasaur.jpg")} 
          style={{
            width: 180,
            height: 180,
            alignSelf: "center",
            borderRadius: 12,
          }}
        />

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            width: 130,
            backgroundColor: "white",
            paddingVertical: 6,
            paddingHorizontal: 12,
            borderRadius: 24,
            borderColor: "green",
            borderWidth: 3,
            marginTop: 10,
          }}
        >
          <Image
            source={require("../assets/images/leaves.png")} 
            style={{ width: 40, height: 50, marginRight: 12 }}
          />
          <Text style={{ color: "black", fontSize: 18, fontWeight: "700" }}>
            Grass
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            color: "#0D0F13",
            fontSize: 14,
            fontWeight: "700",
            textAlign: "left",
            paddingHorizontal: 20,
            marginTop: 20,
          }}
        >
          Moves: Tackle, Growl, Vine Whip, Sleep Powder
        </Text>

        <Text
          style={{
            color: "#0D0F13",
            fontSize: 14,
            fontWeight: "700",
            textAlign: "left",
            paddingHorizontal: 20,
          }}
        >
          Weakness: Fire, Ice, Flying, Psychic
        </Text>
      </View>

      {/* Card 3: Squirtle */}
      <View
        style={{
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "#000",
          backgroundColor: "white",
          paddingBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 10,
          }}
        >
          <Text
            style={{
              color: "#0D0F13",
              fontSize: 22,
              fontWeight: "700",
            }}
          >
            Squirtle
          </Text>

          <Image
            source={require("../assets/images/heart.png")}
            style={{
              width: 40,
              height: 30,
              marginLeft: 80,
            }}
          />

          <Text
            style={{
              color: "#0D0F13",
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            HP: 42
          </Text>
        </View>

        <Image
          source={require("../assets/images/Squirtle.png")} 
          style={{
            width: 180,
            height: 180,
            alignSelf: "center",
            borderRadius: 12,
          }}
        />

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            width: 140,
            backgroundColor: "white",
            paddingVertical: 6,
            paddingHorizontal: 12,
            borderRadius: 24,
            borderColor: "skyblue",
            borderWidth: 3,
            marginTop: 10,
          }}
        >
          <Image
            source={require("../assets/images/water1.jpg")} 
            style={{ width: 40, height: 50, marginRight: 12 }}
          />
          <Text style={{ color: "black", fontSize: 18, fontWeight: "700" }}>
            Water
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            color: "#0D0F13",
            fontSize: 14,
            fontWeight: "700",
            textAlign: "left",
            paddingHorizontal: 20,
            marginTop: 20,
          }}
        >
          Moves: Tackle, Tail Whip, Bubble, Water Gun
        </Text>

        <Text
          style={{
            color: "#0D0F13",
            fontSize: 14,
            fontWeight: "700",
            textAlign: "left",
            paddingHorizontal: 20,
          }}
        >
          Weakness: Electric, Grass, Fighting, Fairy
        </Text>
      </View>

      {/* Card 4: Pikachu */}
      <View
        style={{
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "#000",
          backgroundColor: "white",
          paddingBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 10,
          }}
        >
          <Text
            style={{
              color: "#0D0F13",
              fontSize: 22,
              fontWeight: "700",
            }}
          >
            Pikachu
          </Text>

          <Image
            source={require("../assets/images/heart.png")}
            style={{
              width: 40,
              height: 30,
              marginLeft: 80,
            }}
          />

          <Text
            style={{
              color: "#0D0F13",
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            HP: 59
          </Text>
        </View>

        <Image
          source={require("../assets/images/pika.png")} 
          style={{
            width: 180,
            height: 180,
            alignSelf: "center",
            borderRadius: 12,
          }}
        />

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            width: 160,
            backgroundColor: "white",
            paddingVertical: 6,
            paddingHorizontal: 12,
            borderRadius: 24,
            borderColor: "#FDDA0D",
            borderWidth: 3,
            marginTop: 10,
          }}
        >
          <Image
            source={require("../assets/images/electric.png")} 
            style={{ width: 40, height: 50, marginRight: 12 }}
          />
          <Text style={{ color: "black", fontSize: 18, fontWeight: "700" }}>
            Electric
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            color: "#0D0F13",
            fontSize: 14,
            fontWeight: "700",
            textAlign: "left",
            paddingHorizontal: 20,
            marginTop: 20,
          }}
        >
          Moves: Quick Attack, Thunder Sock, Electro Ball, Iron Tail
        </Text>

        <Text
          style={{
            color: "#0D0F13",
            fontSize: 14,
            fontWeight: "700",
            textAlign: "left",
            paddingHorizontal: 20,
          }}
        >
          Weakness: Ground, Fighting, Electric
        </Text>
      </View>


    </ScrollView>
  );
}
