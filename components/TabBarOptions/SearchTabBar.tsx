import entertainment from "@/app/(searchtabbarpages)/entertainment";
import foryou from "@/app/(searchtabbarpages)/foryou";
import news from "@/app/(searchtabbarpages)/news";
import sports from "@/app/(searchtabbarpages)/sports";
import trending from "@/app/(searchtabbarpages)/trending";
import { MyColors } from "@/theme/MyColors";
import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

const renderScene = SceneMap({
  first: foryou,
  second: trending,
  third: news,
  fourth: sports,
  fifth: entertainment,
});

const routes = [
  { key: "first", title: "For you" },
  { key: "second", title: "Trending" },
  { key: "third", title: "News" },
  { key: "fourth", title: "Sports" },
  { key: "fifth", title: "Entertainment" },
];

const SearchTabBar = () => {
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
          scrollEnabled
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

export default SearchTabBar;

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
