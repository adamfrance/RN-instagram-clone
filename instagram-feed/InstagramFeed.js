import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Camera } from "expo-camera";
import { CameraType } from "expo-camera/build/Camera.types";
import data from "./data";
import { Feather } from "@expo/vector-icons";
import Stories from "./Stories";
import Constants from "expo-constants";
import Article from "./Article";

const INSTAGRAM_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#dbdbdb",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 44,
  },
  logo: {
    flex: 1,
    height: 30,
    resizeMode: "contain",
  },
  stories: {
    borderBottomWidth: 1,
    borderBottomColor: "#dbdbdb",
    height: 104,
    padding: 10,
    backgroundColor: "#fafafa",
  },
  camera: {
    flex: 1,
    backgroundColor: "black",
  },
  cameraContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 20,
  },
});

export default function Instagram() {
  const [showCamera, setShowCamera] = useState(false);
  const [type, setType] = useState(CameraType.back);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);

useEffect(() => {
  (async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasCameraPermission(status === 'granted');
  })();
}, []);

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const renderItem = ({ item, index }) => {
    if (index === 0) {
      return (
        <>
          <View style={styles.stories}>
            <Stories stories={data.stories} profile={data.profile} />
          </View>
          <Article item={item} />
        </>
      );
    } else {
      return <Article item={item} />;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather
            name="camera"
            size={24}
            onPress={() => {
              setShowCamera(!showCamera);
              setType(current => current === CameraType.back ? CameraType.front : CameraType.back
              );
            }}
          />
        </TouchableOpacity>

        <Image source={{ uri: INSTAGRAM_LOGO }} style={styles.logo} />
        <TouchableOpacity>
          <Feather name="send" size={24} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data.articles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      {showCamera && hasCameraPermission && (
        <Camera style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      )}
    </SafeAreaView>
  );
}
