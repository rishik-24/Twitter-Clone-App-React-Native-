import all from "@/app/(NotifiTabBarPages)/all";
import mentions from "@/app/(NotifiTabBarPages)/mentions";
import verified from "@/app/(NotifiTabBarPages)/verified";
import { MyColors } from "@/theme/MyColors";
import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

const renderScene = SceneMap({
  first: all,
  second: verified,
  third: mentions,
});

const routes = [
  { key: "first", title: "All" },
  { key: "second", title: "Verified" },
  { key: "third", title: "Mentions" },
];

const NotifiTabBar = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  return (
    <TabView
      swipeEnabled
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

export default NotifiTabBar;

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
