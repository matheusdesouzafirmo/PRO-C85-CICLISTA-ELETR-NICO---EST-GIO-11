import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  KeyboardAvoidingView
} from "react-native";


import firebase from "firebase";
import db from "../config";


const bgImage = require("../assets/background1.png");
const appIcon = require("../assets/appIcon.png");












const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D0E6F0"
  },
  upperContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  appIcon: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginTop: 80
  },
  title: {
    fontSize: 40,
    fontFamily: "Rajdhani_600SemiBold",
    paddingTop: 20,
    color: "#4C5D70"
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "Rajdhani_600SemiBold",
    color: "#4C5D70"
  },
  lowerContainer: {
    flex: 0.5,
    alignItems: "center"
  },
  textinput: {
    width: "75%",
    height: 55,
    padding: 10,
    borderColor: "#FBE5C0",
    borderWidth: 3,
    borderRadius: 10,
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "Rajdhani_600SemiBold",
    backgroundColor: "#F88379"
  },
  button: {
    width: "43%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FBE5C0",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#4C5D70"
  },
  buttonText: {
    fontSize: 24,
    color: "#4C5D70",
    fontFamily: "Rajdhani_600SemiBold"
  }
});
