import following from "@/app/(tabpages)/following";
import foryou from "@/app/(tabpages)/foryou";
import { MyColors } from "@/theme/MyColors";
import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

const renderScene = SceneMap({
  first: foryou,
  second: following,
});

const routes = [
  { key: "first", title: "For you" },
  { key: "second", title: "Following" },
];

const TabBarPages = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  return (
    <TabView
      style={{}}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          style={styles.tabBar}
          indicatorStyle={styles.indicator}
          activeColor={MyColors.dark.text.primary}
          inactiveColor={MyColors.dark.text.secondary}
        />
      )}
    />
  );
};

export default TabBarPages;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: MyColors.dark.background.secondary,
    boxShadow: "none",
    borderBottomColor: MyColors.dark.background.border,
    borderBottomWidth: 1,
  },
  indicator: {
    backgroundColor: MyColors.brand.primary, // Blue underline
    height: 3,
    borderRadius: 2,
  },
});
