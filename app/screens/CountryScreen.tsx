import { StyleSheet, View, ScrollView, ActivityIndicator } from "react-native";
import React, { useContext } from "react";
import { ConuntryContext } from "../utils/counteryContex";
import CountriesDispaly from "../components/Buttons/CountriesDispaly";

const CountryScreen = () => {
  const { country } = useContext(ConuntryContext);

  if (!country[0]?.name?.common) {
    return (
      <View style={styles.spinerContainer}>
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={{ width: 50, height: 50 }}
        />
      </View>
    );
  }
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          {country.map((item) => {
            return (
              <CountriesDispaly countryName={item} key={item.name.common} />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default CountryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 10,
  },
  spinerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
