import React from 'react';
import { Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Home from '../screen/Home';
import Akun from '../screen/Akun';
import Pengajuan from '../screen/Pengajuan';
import Peminjaman from '../screen/Peminjaman';
import Login from '../screen/Login';
// import Camera from '../screen/Camera';


const Navigation = createStackNavigator(
    {
        HomeScreen :Home,
        AkunSaya : Akun,
        TransaksiPengajuan : Pengajuan,
        TransaksiPeminjaman : Peminjaman,
        Login : Login,
        // Camera : Camera
    },
    {
        initialRouteName :"HomeScreen",
        headerMode :"none"
    }
)

export default createAppContainer(Navigation);