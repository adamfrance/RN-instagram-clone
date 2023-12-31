import { FlatList } from "react-native";
import React from "react";
import Story from "./Story";

const Stories = ({ stories, profile }) => {
  const renderItem = ({ item, index }) => {
    if (index === 0) {
      return (
        <>
          <Story name="Clarian" avatar={profile.avatar} isCreateStory={true} />
          <Story name={item.name} avatar={item.avatar} isSeen={item.isSeen} />
        </>
      );
    } else {
      return (
        <>
          <Story name={item.name} avatar={item.avatar} isSeen={item.isSeen} />
        </>
      );
    }
  };

  return (
    <FlatList
      data={stories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Stories;
