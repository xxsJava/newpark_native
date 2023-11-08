import React, {Component,useState} from 'react';
import {
  Dimensions,
  Text,
  StyleSheet,
  View,
  Image,
  Button,
  SafeAreaView,
  ScrollView,
  Platform,
  TextInput
} from 'react-native';
import {Trans} from 'react-i18next';
import LinearGradinet from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;