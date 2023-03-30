import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { NavigationProp } from "@react-navigation/native";
import { ConuntryContext } from "../utils/counteryContex";
import { COUNTRY_API } from "../utils/apiData";

export type PropsNaviation = {
  navigation: NavigationProp<any, any>;
};

const HomeScreen = ({ navigation }: PropsNaviation) => {
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(false);

  const { setCountry } = useContext(ConuntryContext);

  useEffect(() => {
    if (text) {
      setDisabled(false);
      setCountry([]);
    } else {
      setDisabled(true);
    }
  }, [text]);

  const onChangeText = (newText: string) => {
    setText(newText);
  };

  const handleSubmitButton = (): void => {
    async function getApiData() {
      const response = await fetch(COUNTRY_API + text);
      try {
        if (response.ok) {
          const data = await response.json();
          //Nd When you try to get the value 4th item has no capital and gives error
          const slicedArray = data.slice(0, Math.min(data.length, 10));
          setCountry(slicedArray);
        } else {
          throw new Error("Api call get Failed ");
        }
      } catch (error) {
        console.error(error);
      }
    }
    getApiData();
    navigation.navigate("CountryScreen");
    setText("");
  };
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.textBox}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter text here"
      />
      <TouchableOpacity
        style={!disabled ? styles.button : styles.disabledButton}
        disabled={disabled}
        onPress={handleSubmitButton}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    height: 40,
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    maxHeight: 40,
    width: 100,
    flex: 1,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#CCCCCC",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    maxHeight: 40,
    width: 100,
    flex: 1,
    alignItems: "center",
  },
});

export default HomeScreen;
