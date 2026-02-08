import { MyColors } from "@/theme/MyColors";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as React from "react";
import { FAB, Portal } from "react-native-paper";

const FabGroupBTN = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Portal>
      <FAB.Group
        open={open}
        visible
        backdropColor="rgba(0,0,0,0.75)"
        icon={() =>
          open ? (
            <MaterialCommunityIcons
              name="pencil-plus"
              size={26}
              color="#fff"
            />
          ) : (
            <AntDesign
              name="plus"
              size={26}
              color="#fff"
            />
          )
        }
        fabStyle={{
          backgroundColor: MyColors.brand.primary,
          borderRadius: 50,
          height: 60,
          width: 60,
          alignItems: "center",
        }}
        style={{
          position: "absolute",
          bottom: 100,
          right: 0,
        }}
        actions={[
          {
            icon: () => (
              <Entypo
                name="video-camera"
                size={24}
                color={MyColors.brand.primary}
              />
            ),
            label: "Go Live",
            labelTextColor: "#fff", // ✅ white text

            style: {
              backgroundColor: "#fff", // ✅ white mini FAB
              borderRadius: 20,
            },
            onPress: () => console.log("Go Live"),
          },

          {
            icon: () => (
              <FontAwesome
                name="microphone"
                size={24}
                color={MyColors.brand.primary}
              />
            ),
            label: "Spaces",
            labelTextColor: "#FFF",
            size: "small",
            style: {
              backgroundColor: "#fff",
              borderRadius: 20,
            },
            onPress: () => console.log("Spaces"),
          },

          {
            icon: () => (
              <MaterialIcons
                name="insert-photo"
                size={24}
                color={MyColors.brand.primary}
              />
            ),
            label: "Photos",
            labelTextColor: "#fff",
            style: {
              backgroundColor: "#fff",
              borderRadius: 20,
            },
            onPress: () => console.log("Photos"),
          },
        ]}
        onStateChange={({ open }) => setOpen(open)}
      />
    </Portal>
  );
};

export default FabGroupBTN;
