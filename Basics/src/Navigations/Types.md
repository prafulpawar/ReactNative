🧭 1. Stack Navigation
📚 Concept:
Navigates like a stack of pages — push/pop screens (like browser history or Android back stack).

🔧 Use Case:
Login → Dashboard → Profile → Settings

Go forward and backward easily

📦 Package:
npm install @react-navigation/native-stack

<Stack.Navigator>
  <Stack.Screen name="Home" component={HomeScreen} />
  <Stack.Screen name="Details" component={DetailsScreen} />
</Stack.Navigator>

🧭 2. Tab Navigation (Bottom Tabs)
📚 Concept:
Displays a bottom tab bar with buttons to switch between screens.

🔧 Use Case:
Instagram: Home, Search, Reels, Profile

Apps with 3–5 main sections

📦 Package:
npm install @react-navigation/bottom-tabs
<Tab.Navigator>
  <Tab.Screen name="Feed" component={FeedScreen} />
  <Tab.Screen name="Profile" component={ProfileScreen} />
</Tab.Navigator>


🧭 3. Drawer Navigation (Sidebar Menu)
📚 Concept:
Provides a side drawer menu (usually swipes in from the left).

🔧 Use Case:
App with many screens: Settings, Account, Help

Facebook-style sidebar

📦 Package:
npm install @react-navigation/drawer
<Drawer.Navigator>
  <Drawer.Screen name="Dashboard" component={DashboardScreen} />
  <Drawer.Screen name="Settings" component={SettingsScreen} />
</Drawer.Navigator>

🧭 4. Material Top Tab Navigation
📚 Concept:
Shows top tab bar like in Android apps.

🔧 Use Case:
Switching between "Active / Completed / Archived"

Like WhatsApp tabs: Chats / Status / Calls

📦 Package:
npm install @react-navigation/material-top-tabs react-native-tab-view
<TopTab.Navigator>
  <TopTab.Screen name="Chats" component={ChatsScreen} />
  <TopTab.Screen name="Status" component={StatusScreen} />
</TopTab.Navigator>


🧭 5. Switch Navigation (Auth Flow Handling)
📚 Concept:
No "go back" functionality. Used for authentication flow or splash screens.

🔧 Use Case:
Show Login screen if not logged in, else show Dashboard.

Auth flow switch (Onboarding → Login → App)

✅ Use conditional rendering inside the NavigationContainer:

<NavigationContainer>
  {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
</NavigationContainer>


🔄 You Can Combine Them!
A common pattern:

Stack Navigator for overall flow

Bottom Tabs inside Home screen

Drawer inside a specific tab

Conditional rendering for login/logout

Want a visual diagram or full working example that combines all 5?

📱 <NavigationContainer>
   └── 🔀 Switch Navigation (Auth Flow)
        ├── 🔐 AuthStack (Login, Register)
        └── 🏠 AppStack
             └── 🧭 Tab Navigator (HomeTab)
                  ├── 🏡 Home (Screen)
                  ├── 📦 Dashboard (Screen)
                  └── 📂 ProfileTab (Drawer Navigator)
                       ├── 👤 Profile (Screen)
                       └── ⚙️ Settings (Screen)

npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs @react-navigation/drawer react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons react-native-svg


import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Button } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// 🧾 Dummy Screens
<!-- const LoginScreen = ({ navigation, setLogin }) => (
  <View><Text>Login Screen</Text><Button title="Login" onPress={() => setLogin(true)} /></View>
);

const RegisterScreen = () => (
  <View><Text>Register Screen</Text></View>
);

const HomeScreen = () => (
  <View><Text>🏡 Home Screen</Text></View>
);

const DashboardScreen = () => (
  <View><Text>📦 Dashboard Screen</Text></View>
);

const ProfileScreen = () => (
  <View><Text>👤 Profile Screen</Text></View>
);

const SettingsScreen = () => (
  <View><Text>⚙️ Settings Screen</Text></View>
);

// 🧭 Drawer Navigator for Profile Tab
function ProfileDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

// 🧭 Tab Navigator inside App Stack
function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="ProfileTab" component={ProfileDrawer} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  );
}

// 🔐 Auth Stack
function AuthStack({ setLogin }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login">
        {props => <LoginScreen {...props} setLogin={setLogin} />}
      </Stack.Screen>
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

// 🏠 App Stack after login
function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainTabs" component={HomeTabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

// 🔁 Switch Navigation (manual using conditional rendering)
export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack setLogin={setLoggedIn} />}
    </NavigationContainer>
  );
} -->

✅ What’s Included:
✅ Stack Navigation (for auth and app screens)
✅ Tab Navigation (main sections: Home, Dashboard, Profile)
✅ Drawer Navigation (inside Profile Tab)
✅ Manual Switch Navigation (auth flow using condition)
✅ Reusable Components

