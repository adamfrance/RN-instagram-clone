import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const styles = StyleSheet.create({
  user: {
    width: 80,
    paddingHorizontal: 4,
  },
  avatarBorder: {
    width: 54,
    height: 54,
    borderRadius: 25,
    borderWidth: 1,
    margin: 4,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'transparent',
  },
  plusIcon: {
    overflow: "hidden",
    alignSelf: "center",
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 20,
    height: 20,
    backgroundColor: "#1560bd",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    textAlign: "center",
    fontSize: 12,
    lineHeight: 16,
    color: "black",
    maxWidth: 64,
  },
});

const Story = ({ avatar, name, isCreateStory = false, isSeen }) => {
  return (
    <TouchableOpacity style={styles.user}>
      <View>
        <View
          style={[
            styles.avatarBorder,
            {
              borderColor: isCreateStory
                ? "transparent"
                : isSeen
                ? "rgba(0,0,0,.0975)"
                : "#c73191",
            },
          ]}
        >
          <Image source={avatar} style={styles.avatar} />
          {isCreateStory && (
            <View style={styles.plusIcon}>
              <Feather name="plus" size={14} color="#ffff" />
            </View>
          )}
        </View>
        <Text numberOfLines={1} style={styles.name}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Story;
