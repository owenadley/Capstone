import React, { Component } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import ServicePreview from "./ServicePreview.js";
import Category from "./Category.js";
import { TouchableOpacity } from "react-native-gesture-handler";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      username: ""
    };
  }

  componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS == "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }

  selectServiceCategory = () => {
    this.props.navigation.navigate("ServicePreview");
  };

  render() {
    const { navigation } = this.props;
    const firstName = JSON.parse(
      JSON.stringify(navigation.getParam("firstName", "NO-NAME"))
    );
    const id = JSON.parse(JSON.stringify(navigation.getParam("id", "NO-NAME")));
    AsyncStorage.getItem("userId", (err, result) => {
      //alert(result);
    });
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={st.container}>
          <View
            style={{
              height: this.startHeaderHeight,
              backgroundColor: "white",
              borderBottomWidth: 1,
              borderBottomColor: "#dddddd"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 8,
                backgroundColor: "white",
                marginHorizontal: 20,
                borderColor: "lightgrey",
                borderWidth: 0.75,
                // shadowOffset: { width: 0, height: 0 },
                // shadowColor: "black",
                // shadowOpacity: 0.2,
                elevation: 1,
                marginTop: Platform.OS == "android" ? 25 : null,
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Icon name="search" size={40} />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Try 'Lawn'"
                placeholderTextColor="lightgrey"
                style={{
                  flex: 1,
                  fontWeight: "300",
                  fontSize: 20,
                  backgroundColor: "white",
                  borderRadius: 30
                }}
              />
            </View>
          </View>
          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, paddingTop: 20 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "300",
                  paddingHorizontal: 20
                }}
              >
                What service are you looking for?
              </Text>
              <View style={{ height: 140, marginTop: 10 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <TouchableOpacity
                    onPress={() => this.selectServiceCategory()}
                  >
                    <View
                      style={{
                        overflow: "hidden",
                        height: 130,
                        width: 130,
                        marginLeft: 20,
                        borderWidth: 0.5,
                        borderColor: "#dddddd",
                        borderRadius: 10,
                        borderBottomColor: "#43B14B",
                        borderBottomWidth: 3
                      }}
                    >
                      <Category
                        imageUri={require("../image/LawnMowing.jpg")}
                        name="Lawn Mowing"
                      />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.selectServiceCategory()}
                  >
                    <View
                      style={{
                        overflow: "hidden",
                        height: 130,
                        width: 130,
                        marginLeft: 20,
                        borderWidth: 0.5,
                        borderColor: "#dddddd",
                        borderRadius: 10,
                        borderBottomColor: "#398FC7",
                        borderBottomWidth: 3
                      }}
                    >
                      <Category
                        imageUri={require("../image/SnowRemoval.jpg")}
                        name="Snow Removal"
                      />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.selectServiceCategory()}
                  >
                    <View
                      style={{
                        overflow: "hidden",
                        height: 130,
                        width: 130,
                        marginLeft: 20,
                        borderWidth: 0.5,
                        borderColor: "#dddddd",
                        borderRadius: 10,
                        borderBottomColor: "#FFDB15",
                        borderBottomWidth: 3
                      }}
                    >
                      <Category
                        imageUri={require("../image/CleaningServices.jpg")}
                        name="Cleaning Services"
                      />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.selectServiceCategory()}
                  >
                    <View
                      style={{
                        overflow: "hidden",
                        height: 130,
                        width: 130,
                        marginLeft: 20,
                        borderWidth: 0.5,
                        borderColor: "#dddddd",
                        borderRadius: 10,
                        borderBottomColor: "#AB202A",
                        borderBottomWidth: 3
                      }}
                    >
                      <Category
                        imageUri={require("../image/HandymanServices.jpg")}
                        name="Handyman"
                      />
                    </View>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          </ScrollView>
          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, paddingTop: 20 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "300",
                  paddingHorizontal: 20
                }}
              >
                Top services
              </Text>
              <View style={{ height: 230, flexDirection: "row" }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={{ flex: 1 }}
                >
                  <ServicePreview
                    style={{ flexDirection: "row" }}
                    navigation={navigation}
                  />
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const st = require("./style");
const styles = StyleSheet.create({});
export default Home;
