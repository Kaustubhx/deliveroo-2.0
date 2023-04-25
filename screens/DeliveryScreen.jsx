import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { selectRestaurant } from '../features/restaurantSlice';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XIcon } from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress';
import { MapView } from 'react-native-maps';

const DeliveryScreen = () => {

    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);

    return (
        <View className='bg-[#00CCBB] flex-1'>
            <SafeAreaView className='z-50'>
                <View className='flex-row justify-between items-center p-5'>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <XIcon size={30} color='white' />
                    </TouchableOpacity>
                    <Text className='font-light text-white text-lg'>Order Help</Text>
                </View>

                <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
                    <View className='flex-row justify-between'>
                        <View>
                            <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
                            <Text className='text-4xl font-bold'>45-55 Minutes</Text>
                        </View>
                        <Image source={{
                            uri: 'https://links.papareact.com/fls'
                        }}
                            className='h-20 w-20'
                        />
                    </View>

                    <Progress.Bar size={30} color='#00CCBB' indeterminate={true} />

                    <Text className='mt-3 text-gray-500'>
                        Your order at {restaurant.title} is being prepared
                    </Text>

                    <MapView
                        initialRegion={{
                            latitude: restaurant.lat,
                            longitude: restaurant.long,
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.005,
                        }}
                        className='flex-1 h-full w-full -mt-10 z-0'
                        mapType='standard'
                    ></MapView>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default DeliveryScreen