import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  Pressable,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import styles from "./styles";
import { useState } from "react";
import Box from "./components/Box";
import Title from "./components/Title";
export default function App() {
  // const [userName, setUserName] = useState("");
  const [User, setUser] = useState({ name: "", age: 0 });
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handelEmailChange = (val) => {
    if (val.length == 0) {
      setEmailError("Email is Required");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/.test(val)) {
      setEmailError("Plz enter a valid Email");
    } else {
      setEmailError("");
    }
    setEmail(val);
  };

  const handelChange = (val, inputType) => {
    // if (inputType == "name") {
    //   setUser({ ...User, name: val });
    // } else if (inputType == "age") {
    //   setUser({ ...User, age: val });
    // }
    setUser({ ...User, [inputType]: val });
  };

  const COLORS = [
    { colorName: "Base03", hexCode: "#002b36" },
    { colorName: "Base02", hexCode: "#073642" },
    { colorName: "Base01", hexCode: "#586e75" },
    { colorName: "Base00", hexCode: "#657b83" },
    { colorName: "Base0", hexCode: "#839496" },
    { colorName: "Base1", hexCode: "#93a1a1" },
    { colorName: "Base2", hexCode: "#eee8d5" },
    { colorName: "Base3", hexCode: "#fdf6e3" },
    { colorName: "Yellow", hexCode: "#b58900" },
    { colorName: "Orange", hexCode: "#cb4b16" },
    { colorName: "Red", hexCode: "#dc322f" },
    { colorName: "Magenta", hexCode: "#d33682" },
    { colorName: "Cyan", hexCode: "#2aa198" },
    { colorName: "Green", hexCode: "#859900" },
  ];
  // const COLORS = [];

  const phoneContacts = [
    {
      id: "0",
      title: "basic comps",
      data: [
        { id: "0", text: "View" },
        { id: "1", text: "Text" },
        { id: "2", text: "Image" },
      ],
    },
    {
      id: "1",
      title: "List comps",
      data: [
        { id: "3", text: "ScrollView" },
        { id: "4", text: "ListView" },
      ],
    },
  ];

  const handelPress = () => {
    alert("button Pressed!");
  };
  return (
    <>
      <View style={mystyles.container}>
        {/* 1 */}
        {/* <Button title="Click Me!" onPress={handelPress}
     color={'pink'}
     ></Button> */}

        {/* 2 */}
        <TouchableOpacity style={mystyles.button1} onPress={handelPress}>
          <Text style={mystyles.btnText}>Click Me!</Text>
        </TouchableOpacity>

        {/* 3 */}
        <TouchableWithoutFeedback onPress={handelPress}>
          <View style={[mystyles.button1,{backgroundColor:'pink'}]}>
            <Text style={mystyles.btnText}>Click Me!</Text>
          </View>
        </TouchableWithoutFeedback>


        {/* self study */}
        <Pressable></Pressable>
      </View>

      {/* <View style={mystyles.container}>
        <SectionList
          sections={phoneContacts}
          renderItem={({ item:{text} }) => (
            <Text style={mystyles.item}>{text}</Text>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={mystyles.header}>{section.title}</Text>
          )}
        ></SectionList>
      </View> */}

      {/* <Title heading={"Here are some Boxes with differant colors"}></Title> */}
      {/* <FlatList
        data={COLORS}
        renderItem={({ item:{colorName,hexCode} }) => (
          <Box colorName={colorName} hexCode={hexCode}></Box>
        )}
        keyExtractor={({ hexCode }) => hexCode}
        ListHeaderComponent={
          <Title heading={"Here are some Boxes with differant colors"}></Title>
        }
        ListEmptyComponent={<Title heading={"No Data Avaliable"}></Title>}

        // ItemSeparatorComponent={
        //   <View style={{backgroundColor:'red',height:10}}></View>
        // }
      ></FlatList>  */}

      {/* <ScrollView style={styles.container}> */}
      {/* <Title heading={"Here are some Boxes with differant colors"}></Title>

        {COLORS.map(({ colorName, hexCode }) => (
          <Box key={hexCode} colorName={colorName} hexCode={hexCode}></Box>
        ))} */}

      {/* <Box colorName={'Base03'} hexCode={'#002b36'}></Box>
     <Box colorName={'Orange'} hexCode={'#cb4b16'}></Box>
     <Box colorName={'Cyan'} hexCode={'#859900'}></Box>  */}
      {/* </ScrollView> */}

      {/* <View style={styles.container}>
        <View style={mystyles.view1}>
          <View style={mystyles.view2}></View>
        </View>
      </View> */}
    </>

    // <View style={{ marginTop: 30, marginLeft: 10 }}>
    //   <TextInput
    //     style={styles.input}
    //     placeholder="enter your name"
    //     value={User.name}
    //     onChangeText={(txt) => handelChange(txt, "name")}
    //   ></TextInput>
    //   <TextInput
    //     keyboardType="number-pad"
    //     style={styles.input}
    //     placeholder="enter your age"
    //     value={User.age}
    //     onChangeText={(value) => handelChange(value, "age")}
    //   ></TextInput>
    //   <TextInput
    //     keyboardType="email-address"
    //     style={styles.input}
    //     placeholder="enter your Email"
    //     value={email}
    //     onChangeText={handelEmailChange}
    //   ></TextInput>
    //   <Text style={{ fontSize: 20, color: "red" }}>{emailError}</Text>
    // </View>
  );
}

const mystyles = StyleSheet.create({
  view1: {
    backgroundColor: "blue",
    height: 100,
    width: 100,
    marginLeft: 10,
  },
  view2: {
    backgroundColor: "pink",
    height: 100,
    width: 100,
    position: "absolute",
    bottom: 0,
    left: 30,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 35,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
  button1: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
});
