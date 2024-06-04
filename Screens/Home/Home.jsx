import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import { AntDesign, SimpleLineIcons, Feather } from '@expo/vector-icons';
import PostsScreen from "../PostsScreen/PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const Home = () => {

  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { height: 80 },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return <SimpleLineIcons name="grid" size={20} color={color} />;
          },
          headerTitleAlign: "center",
          headerRightContainerStyle: { paddingRight: 20 },
          headerRight: () => (
            <TouchableOpacity
              style={styles.logoutButton}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Login")}
            >
              <Feather name="log-out" size={24} color="gray" />
            </TouchableOpacity>
          ),
        }}
        name='PostsScreen' component={PostsScreen}
      />
       <Tab.Screen  options={{
                   tabBarIcon: () => {
                   return <TouchableOpacity style={ styles.addButton } activeOpacity={0.5} onPress={()=>navigation.navigate('CreatePostsScreen')}>
                    <Text style={ styles.addButtonText }>+</Text>
                    </TouchableOpacity>
                   },
                   headerShown: false,
                   tabBarStyle: { display: "none" },
                   headerTitleAlign: "center",
                }} name='CreatePostsScreen' component={CreatePostsScreen}/>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  registerButton: {
    backgroundColor: '#FF6C00',
    height: 50,
    width: 343, 
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 44,
  },
  registerButtonText:{
     color: '#fff',
     fontWeight: '400'
  },
  loginLink:{
    marginTop: 16,
    marginBottom: 66
  },
  loginLinkText:{
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    borderTopColor: '#999999',
    borderTopWidth: 1,
  },
  addButton:{
    backgroundColor: '#FF6C00',
    height: 40,
    width: 70, 
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  addButtonText:{
    color: '#ffffff',
    fontSize: 18,
  },
  gridButton:{
    marginRight: 40,
  },
  userButton:{
    marginLeft: 40,
  },
});

export default Home;
