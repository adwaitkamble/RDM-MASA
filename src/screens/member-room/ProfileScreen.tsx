import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Alert } from 'react-native';
import { 
  IconArrowLeft, 
  IconUser, 
  IconSettings, 
  IconBell, 
  IconLock, 
  IconWallet, 
  IconCertificate, 
  IconMoon, 
  IconLanguage, 
  IconTrash, 
  IconLogout,
  IconChevronRight 
} from 'tabler-icons-react-native';
import { COLORS } from '../../theme/colors';

export default function ProfileScreen({ navigation }: { navigation: any }) {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const handleLogout = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out of your MASA session?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Log Out", onPress: () => alert('Logged out!'), style: "destructive" }
      ]
    );
  };

  const handleClearCache = () => {
    Alert.alert("Clear Cache", "Cache cleared successfully!");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Top Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {/* User Profile Card */}
      <View style={styles.profileCard}>
        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>AM</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Arjun Mehta</Text>
            <Text style={styles.userEmail}>arjun@masa.org</Text>
            <View style={styles.roleRow}>
              <View style={[styles.rolePill, styles.roleAdmin]}>
                <Text style={styles.roleTextAdmin}>Committee</Text>
              </View>
              <View style={[styles.rolePill, styles.roleVerified]}>
                <Text style={styles.roleTextVerified}>Verified</Text>
              </View>
            </View>
          </View>
        </View>

        {/* XRDM Balance Section */}
        <View style={styles.balanceContainer}>
          <View style={styles.balanceInfo}>
            <Text style={styles.balanceLabel}>XRDM Balance</Text>
            <Text style={styles.balanceValue}>120 XRDM</Text>
          </View>
          <View style={[styles.avatar, styles.walletAvatar]}>
            <IconWallet color="#EF9F27" size={20} />
          </View>
        </View>
      </View>

      {/* Section: MASA Network Info */}
      <Text style={styles.sectionLabel}>MASA Network Info</Text>
      <View style={styles.settingsGroup}>
        <View style={styles.settingItem}>
          <View style={styles.settingItemLeft}>
            <IconCertificate color="#7F77DD" size={20} style={{ marginRight: 10 }} />
            <Text style={styles.settingText}>Member ID</Text>
          </View>
          <Text style={styles.settingValue}>M-2024-8742</Text>
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingItemLeft}>
            <IconWallet color="#7F77DD" size={20} style={{ marginRight: 10 }} />
            <Text style={styles.settingText}>Wallet Address</Text>
          </View>
          <Text style={styles.settingValue}>0x7f83...c2e9</Text>
        </View>
      </View>

      {/* Section: Account Settings */}
      <Text style={styles.sectionLabel}>Account Settings</Text>
      <View style={styles.settingsGroup}>
        <TouchableOpacity style={styles.settingItem} onPress={() => alert('Edit Profile clicked')}>
          <View style={styles.settingItemLeft}>
            <IconUser color="#7F77DD" size={20} style={{ marginRight: 10 }} />
            <Text style={styles.settingText}>Edit Profile</Text>
          </View>
          <IconChevronRight color="#444" size={20} />
        </TouchableOpacity>

        <View style={styles.settingItem}>
          <View style={styles.settingItemLeft}>
            <IconBell color="#7F77DD" size={20} style={{ marginRight: 10 }} />
            <Text style={styles.settingText}>Push Notifications</Text>
          </View>
          <Switch 
            value={pushNotifications}
            onValueChange={setPushNotifications}
            trackColor={{ false: '#333', true: '#534AB7' }}
            thumbColor={pushNotifications ? '#7F77DD' : '#888'}
          />
        </View>

        <TouchableOpacity style={styles.settingItem} onPress={() => alert('Change Password clicked')}>
          <View style={styles.settingItemLeft}>
            <IconLock color="#7F77DD" size={20} style={{ marginRight: 10 }} />
            <Text style={styles.settingText}>Security & Password</Text>
          </View>
          <IconChevronRight color="#444" size={20} />
        </TouchableOpacity>
      </View>

      {/* Section: Preferences */}
      <Text style={styles.sectionLabel}>Preferences</Text>
      <View style={styles.settingsGroup}>
        <View style={styles.settingItem}>
          <View style={styles.settingItemLeft}>
            <IconMoon color="#7F77DD" size={20} style={{ marginRight: 10 }} />
            <Text style={styles.settingText}>Dark Mode</Text>
          </View>
          <Switch 
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#333', true: '#534AB7' }}
            thumbColor={darkMode ? '#7F77DD' : '#888'}
          />
        </View>

        <TouchableOpacity style={styles.settingItem} onPress={() => alert('Language Selection clicked')}>
          <View style={styles.settingItemLeft}>
            <IconLanguage color="#7F77DD" size={20} style={{ marginRight: 10 }} />
            <Text style={styles.settingText}>Language</Text>
          </View>
          <View style={styles.settingItemRight}>
            <Text style={styles.settingValueText}>English</Text>
            <IconChevronRight color="#444" size={20} style={{ marginLeft: 4 }} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={handleClearCache}>
          <View style={styles.settingItemLeft}>
            <IconTrash color={COLORS.coral} size={20} style={{ marginRight: 10 }} />
            <Text style={[styles.settingText, { color: COLORS.coral }]}>Clear Cache</Text>
          </View>
          <IconChevronRight color="#444" size={20} />
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <IconLogout color="#fff" size={20} style={{ marginRight: 8 }} />
        <Text style={styles.logoutBtnText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  header: {
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#1e1e1e',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  profileCard: {
    backgroundColor: '#1a1a1a',
    borderWidth: 0.5,
    borderColor: '#222',
    borderRadius: 14,
    padding: 14,
    marginBottom: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#222',
    paddingBottom: 14,
    marginBottom: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1e1428',
    borderWidth: 1,
    borderColor: '#534AB7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#AFA9EC',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  userEmail: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
    marginBottom: 6,
  },
  roleRow: {
    flexDirection: 'row',
    gap: 6,
  },
  rolePill: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 7,
    borderWidth: 0.5,
  },
  roleAdmin: {
    backgroundColor: '#1e1428',
    borderColor: '#534AB7',
  },
  roleTextAdmin: {
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#AFA9EC',
  },
  roleVerified: {
    backgroundColor: '#0d2019',
    borderColor: '#1D9E75',
  },
  roleTextVerified: {
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#5DCAA5',
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#111',
    borderWidth: 0.5,
    borderColor: '#222',
    borderRadius: 11,
    padding: 10,
  },
  balanceInfo: {
    flex: 1,
  },
  balanceLabel: {
    fontSize: 11,
    color: '#555',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  balanceValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#EF9F27',
    marginTop: 2,
  },
  walletAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#1e1200',
    borderColor: '#854F0B',
    borderWidth: 0.5,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#444',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginTop: 12,
    marginBottom: 8,
  },
  settingsGroup: {
    backgroundColor: '#1a1a1a',
    borderWidth: 0.5,
    borderColor: '#222',
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: '#222',
  },
  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#bbb',
  },
  settingValueText: {
    fontSize: 14,
    color: '#666',
  },
  settingValue: {
    fontSize: 13,
    color: '#666',
    fontWeight: '500',
  },
  settingItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.coral,
    borderRadius: 11,
    paddingVertical: 12,
    marginTop: 8,
  },
  logoutBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
});
