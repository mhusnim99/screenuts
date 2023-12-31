import React, { useState } from 'react';
import { Box, Heading, Input, Button, Text, FormControl, NativeBaseProvider, ScrollView, Image, Center } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import food from "../datas/food";
import { HStack } from 'native-base';

const Calcucalator = () => {

  const [tinggibadan, settinggibadan] = useState('');
  const [beratbadan, setberatbadan] = useState('');
  const [umur, setumur] = useState('');

  const handleSubmit = () => {
    // Di sini, Anda dapat menambahkan logika untuk menangani data yang dimasukkan oleh pengguna
    console.log('tinggibadan:', tinggibadan);
    console.log('beratbadan:', beratbadan);
    console.log('umur:', umur);
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <NativeBaseProvider>
          <Box bg='white'>

            <TouchableOpacity onPress={() => navigation.navigate('Kategori')}>
              <Image
                source={require("../assets/arrow.jpg")}
                style={{ width: 18, height: 18 }}
                alt='Image Data'
                ml={"5"}
                mt={"3"}
                size={"2xl"}
              />
            </TouchableOpacity>
          </Box>
          <Box flex={1} p={4} alignItems='center' justifyContent='center' bg='white'>
            <Box alignItems="center">
              <Button marginTop={"5"} marginBottom={"5"} backgroundColor={"yellow.500"} width={"252"} height={"46"} fontWeight={"extraBlack"} size={"lg"} >
                <Text color='white' fontSize={21}>BMI Calcucalator</Text>
              </Button>
            </Box>
            <FormControl>
              <FormControl.Label>tinggi badan</FormControl.Label>
              <Input
                placeholder="Masukkan Angka"
                value={tinggibadan}
                onChangeText={(text) => settinggibadan(text)}
                mb={2}
                bgColor='white'
                borderRadius={15}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>berat badan</FormControl.Label>
              <Input
                placeholder="Masukkan Angka"
                value={beratbadan}
                onChangeText={(text) => setberatbadan(text)}
                mb={2}
                bgColor='white'
                borderRadius={15}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>umur</FormControl.Label>
              <Input
                placeholder="Masukkan Angka"
                value={umur}
                onChangeText={(text) => setumur(text)}
                secureText
                mb={2}
                bgColor='white'
                borderRadius={15}
              />
              <Box alignItems="center" mt={"4"} borderRadius={15} >
                <Button bg={"yellow.500"} borderRadius={15} width={"230"} height={"46"} >
                  <Text color='white' fontSize={20}>Hitung</Text>
                </Button>
              </Box>
              <FormControl>
                <FormControl.Label>Hasil</FormControl.Label>
                <Input
                  value={beratbadan}
                  onChangeText={(text) => setberatbadan(text)}
                  mb={2}
                  bgColor='white'
                  borderRadius={15}
                />
              </FormControl>
            </FormControl>
            <Text mt={2} >Berikut ini makanan yang <Text color="blue.500" onPress={() => navigation.navigate('Kategori')}>direkomendasikan</Text></Text>
          </Box>
          <TouchableOpacity onPress={() => navigation.navigate('Resep')}>
          <HStack space={3} justifyContent="center">
          <Image
            source={require("../assets/dda.jpg")}
            w="20"
            h="24"
            alt="Image Data"
            mb={"2"}
            mt={"2"}
            ml={"2"}
            borderRadius={"10"}
          />
          <Image
            source={require("../assets/mn1.jpg")}
            w="20"
            h="24"
            alt="Image Data"
            mb={"2"}
            mt={"2"}
            ml={"2"}
            borderRadius={"10"}
          />
          <Image
            source={require("../assets/mn2.jpg")}
            w="20"
            h="24"
            alt="Image Data"
            mb={"2"}
            mt={"2"}
            ml={"2"}
            borderRadius={"10"}
          />
          </HStack>
          </TouchableOpacity>
        </NativeBaseProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Calcucalator;