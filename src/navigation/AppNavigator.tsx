import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { COLORS } from '../theme/colors';

// Import Icons
import { IconHome, IconDoor, IconWallet, IconUser } from 'tabler-icons-react-native';

// Import Screen Components
import MemberHomeScreen from '../screens/member-room/HomeScreen';
import InviteScreen from '../screens/member-room/InviteScreen';
import RewardMemberScreen from '../screens/member-room/RewardMemberScreen';
import ClaimXrdmScreen from '../screens/member-room/ClaimXrdmScreen';
import AdminQueueScreen from '../screens/member-room/AdminQueueScreen';
import ChallengeScreen from '../screens/member-room/ChallengeScreen';
import VotingScreen from '../screens/member-room/VotingScreen';
import HistoryScreen from '../screens/member-room/HistoryScreen';
import ProfileScreen from '../screens/member-room/ProfileScreen';

import TeamHomeScreen from '../screens/team-room/TeamHomeScreen';
import CreateTeamScreen from '../screens/team-room/CreateTeamScreen';
import TeamAdminQueueScreen from '../screens/team-room/TeamAdminQueueScreen';
import TeamSubmitClaimScreen from '../screens/team-room/TeamSubmitClaimScreen';
import BeneficiaryEndorsementScreen from '../screens/team-room/BeneficiaryEndorsementScreen';
import TeamHistoryScreen from '../screens/team-room/TeamHistoryScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MemberRoomStack() {
  return (
    <Stack.Navigator screenOptions={{ 
      headerStyle: { backgroundColor: COLORS.background },
      headerTintColor: COLORS.textPrimary,
      headerShadowVisible: false
    }}>
      <Stack.Screen name="MemberHome" component={MemberHomeScreen} options={{ title: 'MASA' }} />
      <Stack.Screen name="InviteCode" component={InviteScreen} options={{ title: 'Invite Link' }} />
      <Stack.Screen name="RewardMember" component={RewardMemberScreen} options={{ title: 'Reward Member' }} />
      <Stack.Screen name="ClaimXrdm" component={ClaimXrdmScreen} options={{ title: 'Claim XRDM' }} />
      <Stack.Screen name="AdminQueue" component={AdminQueueScreen} options={{ title: 'Approval Queue' }} />
      <Stack.Screen name="ChallengeDetail" component={ChallengeScreen} options={{ title: 'Challenges' }} />
      <Stack.Screen name="Voting" component={VotingScreen} options={{ title: 'Voting' }} />
      <Stack.Screen name="History" component={HistoryScreen} options={{ title: 'History' }} />
    </Stack.Navigator>
  );
}

function TeamRoomStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: COLORS.purpleDark },
      headerTintColor: COLORS.textPrimary,
      headerShadowVisible: false
    }}>
      <Stack.Screen name="TeamHome" component={TeamHomeScreen} options={{ title: 'Team Space' }} />
      <Stack.Screen name="CreateTeamRoom" component={CreateTeamScreen} options={{ title: 'New Room' }} />
      <Stack.Screen name="TeamAdminQueue" component={TeamAdminQueueScreen} options={{ title: 'Team Approval Queue' }} />
      <Stack.Screen name="TeamSubmitClaim" component={TeamSubmitClaimScreen} options={{ title: 'Submit Claim' }} />
      <Stack.Screen name="BeneficiaryEndorsement" component={BeneficiaryEndorsementScreen} options={{ title: 'Endorse Claim' }} />
      <Stack.Screen name="TeamHistory" component={TeamHistoryScreen} options={{ title: 'Team History' }} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.purple,
          tabBarInactiveTintColor: COLORS.textMuted,
          tabBarStyle: {
            backgroundColor: '#0f0f0f',
            borderTopWidth: 0.5,
            borderTopColor: COLORS.border,
            paddingBottom: 6,
            height: 60,
          },
        }}
      >
        <Tab.Screen 
          name="HomeTab" 
          component={MemberRoomStack} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => <IconHome color={color} size={size} />,
          }}
        />
        <Tab.Screen 
          name="RoomsTab" 
          component={TeamRoomStack} 
          options={{
            tabBarLabel: 'Rooms',
            tabBarIcon: ({ color, size }) => <IconDoor color={color} size={size} />,
          }}
        />
        <Tab.Screen 
          name="WalletTab" 
          component={MemberHomeScreen} 
          options={{ tabBarLabel: 'Wallet', tabBarIcon: ({ color, size }) => <IconWallet color={color} size={size} /> }}
        />
        <Tab.Screen 
          name="ProfileTab" 
          component={ProfileScreen} 
          options={{ tabBarLabel: 'Profile', tabBarIcon: ({ color, size }) => <IconUser color={color} size={size} /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}