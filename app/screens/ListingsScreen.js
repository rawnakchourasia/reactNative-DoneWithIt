import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";

import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Jacket for sale",
    price: 100,
    image: require("../assets/sale_jacket.jpg"),
  },
  {
    id: 2,
    title: "3d Printer in great condition",
    price: 5000,
    image: require("../assets/sale_3dprinter.jpg"),
  },
  {
    id: 3,
    title: "Chair",
    price: 50,
    image: require("../assets/sale_chair.jpg"),
  },
  {
    id: 4,
    title: "Sofa",
    price: 3000,
    image: require("../assets/sale_sofa.jpg"),
  },
  {
    id: 5,
    title: "Table",
    price: 8000,
    image: require("../assets/sale_table.jpg"),
  },
];

const ListingsScreen = (props) => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
