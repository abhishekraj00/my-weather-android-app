import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ConuntryContext } from "../utils/counteryContex";
import { CAPITAL_WEATHER_API } from "../utils/apiData";
import { CaptitalDataType } from "../utils/Model";

const CapitalWeatherScreen = () => {
  const { capital } = useContext(ConuntryContext);
  const [captalData, setCapitalData] = useState<CaptitalDataType>();

  useEffect(() => {
    async function fetchData() {
      try {
        const respose = await fetch(CAPITAL_WEATHER_API + capital);
        if (respose.ok) {
          const data = await respose.json();
          setCapitalData(data.current);
        } else {
          throw new Error("Api call get Failed");
        }
      } catch (error) {
        console.warn(error);
      }
    }
    fetchData();
  }, []);

  //loader
  if (!captalData?.temp_c) {
    return (
      <View style={styles.mainContainer}>
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={{ width: 50, height: 50 }}
        />
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri: `https:${captalData?.condition?.icon}`,
        }}
      />

      <View style={styles.textBox}>
        <Text style={styles.boldText}>Temperature in C:</Text>
        <Text style={styles.text}>{captalData?.temp_c}.C</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.boldText}>Temperature in F :</Text>
        <Text style={styles.text}>{captalData?.temp_f}.F</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.boldText}>Wind Speed :</Text>
        <Text style={styles.text}>{captalData?.wind_kph} Kph</Text>
      </View>

      <View style={styles.textBox}>
        <Text style={styles.boldText}>Precipitation :</Text>
        <Text style={styles.text}>{captalData?.precip_in}</Text>
      </View>
    </View>
  );
};

export default CapitalWeatherScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    padding: 10,
  },
  textBox: {
    margin: 5,
  },
  text: {
    fontSize: 14,
    textAlign: "left",
  },
  boldText: {
    fontSize: 16,
    fontWeight: "600",
  },
  image: {
    width: 100,
    height: 150,
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
