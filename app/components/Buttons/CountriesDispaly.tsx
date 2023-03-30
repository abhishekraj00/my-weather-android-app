import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { CountiesDataType } from "../../utils/Model";
import { ConuntryContext } from "../../utils/counteryContex";
import { NavigationProp, useNavigation } from "@react-navigation/native";

interface PropData {
  countryName: CountiesDataType;
}

const CountriesDispaly = ({ countryName }: PropData) => {
  const { setCapital } = useContext(ConuntryContext);
  const navigation: NavigationProp<any, any> = useNavigation();

  const knowcapitaleWeather = () => {
    setCapital(countryName?.capital[0]);
    navigation.navigate("CapitalWeatherScreen");
  };
  return (
    <View style={styles.box}>
      <View style={styles.textBox}>
        <Text style={styles.boldText}>Country:</Text>
        <Text style={styles.text}>{countryName?.name?.common}</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.boldText}>Capital:</Text>
        <Text style={styles.text}>{countryName?.capital[0]}</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.boldText}>Population:</Text>
        <Text style={styles.text}>{countryName.population}</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.boldText}>Latitude, Longitude:</Text>
        <Text style={styles.text}>
          {countryName.latlng[0]},{countryName.latlng[1]}
        </Text>
      </View>
      <View style={styles.imgBox}>
        <Image
          style={styles.image}
          source={{
            uri: countryName.flags.png,
          }}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={knowcapitaleWeather}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CountriesDispaly;

const styles = StyleSheet.create({
  box: {
    width: "45%",
    height: 370,
    borderWidth: 1,
    padding: 15,
    margin: 5,
    borderRadius: 5,
  },
  textBox: {
    margin: 5,
  },
  text: {
    fontSize: 14,
  },
  boldText: {
    fontSize: 16,
    fontWeight: "600",
  },
  image: {
    width: 100,
    height: 50,
  },
  imgBox: {
    flex: 1,
    maxHeight: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    alignItems: "center",
    backgroundColor: "green",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
});
