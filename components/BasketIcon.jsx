import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { formatCurrency } from "react-native-format-currency";

const BasketIcon = () => {

    const items = useSelector(selectBasketItems)
    const navigation = useNavigation()
    const basketTotal = useSelector(selectBasketTotal)

    const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] = formatCurrency({ amount: basketTotal, code: "INR" });

    if (items.length === 0 ) return null;

    return (
        <View className='absolute bottom-10 w-full z-50'>
            <TouchableOpacity onPress={() => navigation.navigate("Basket")} className='bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center space-x-1'>
                <Text className='text-white font-extralight text-lg bg-[#01A296] py-1 px-2'>
                    {items.length}
                </Text>
                <Text className='flex-1 text-white text-lg font-extrabold text-center'>
                    View Basket
                </Text>
                <Text className='text-lg text-white font-extrabold'>
                    {valueFormattedWithSymbol}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon