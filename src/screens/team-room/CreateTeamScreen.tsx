import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { 
  IconArrowLeft, 
  IconKey, 
  IconCopy, 
  IconCheck, 
  IconPlus, 
  IconUsers,
  IconBell, 
  IconMenu2 
} from 'tabler-icons-react-native';
import { COLORS } from '../../theme/colors';

export default function CreateTeamScreen({ navigation }: { navigation: any }) {
  const [roomName, setRoomName] = useState('Dev Squad – Backend');
  const [description, setDescription] = useState('Coordination room for all backend developers in the MASA tech working group.');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Top Navbar */}
      <View style={styles.topNav}>
        <View style={styles.logo}>
          <View style={styles.logoM}>
            <Text style={styles.logoMText}>M</Text>
          </View>
        </View>
        <View style={styles.topNavRight}>
          <TouchableOpacity style={styles.navButton}>
            <IconBell color="#777" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <IconMenu2 color="#777" size={20} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Back Button */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <IconArrowLeft color="#aaa" size={16} />
        <Text style={styles.backBtnText}>MASA Alumni 2024</Text>
      </TouchableOpacity>

      {/* Form Card */}
      <View style={[styles.sc, { borderColor: '#534AB7' }]}>
        <View style={styles.scHdr}>
          <View>
            <Text style={styles.scEy}>Pre-approved member action</Text>
            <Text style={styles.scTitle}>Create a Team Room</Text>
          </View>
          <View style={[styles.badge, styles.badgePurple]}>
            <Text style={styles.badgeTextPurple}>You become admin</Text>
          </View>
        </View>

        <Text style={styles.introText}>
          Team Rooms live inside a Member Room. You must be pre-approved by the Member Room admin to create one.
        </Text>

        <Text style={styles.flbl}>Team room name</Text>
        <TextInput 
          style={styles.finput}
          value={roomName}
          onChangeText={setRoomName}
          placeholder="Enter room name..."
          placeholderTextColor="#333"
        />

        <Text style={styles.flbl}>Purpose / description</Text>
        <TextInput 
          style={styles.ftextarea}
          value={description}
          onChangeText={setDescription}
          multiline
          placeholder="Enter purpose..."
          placeholderTextColor="#333"
        />

        <Text style={styles.flbl}>Invite code (auto-generated)</Text>
        <View style={styles.inviteRow}>
          <View style={styles.inviteCodeCol}>
            <IconKey color="#AFA9EC" size={18} style={{ marginRight: 6 }} />
            <Text style={styles.inviteCode}>TR-DEV-X72</Text>
          </View>
          <TouchableOpacity style={styles.shareBtn} onPress={() => alert('Code copied to clipboard!')}>
            <IconCopy color="#AFA9EC" size={14} style={{ marginRight: 4 }} />
            <Text style={styles.shareBtnText}>Copy</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.flbl}>Invite members from MASA Alumni 2024</Text>

        {/* Member Row 1 (Invited) */}
        <View style={styles.memRow}>
          <View style={[styles.av, styles.avG]}>
            <Text style={styles.avTextG}>RK</Text>
          </View>
          <View style={styles.memInfo}>
            <Text style={styles.memName}>Riya Kapoor</Text>
            <Text style={styles.memSub}>riya@masa.org</Text>
          </View>
          <IconCheck color={COLORS.teal} size={20} />
        </View>

        {/* Member Row 2 (Not Invited yet) */}
        <View style={styles.memRow}>
          <View style={[styles.av, styles.avP]}>
            <Text style={styles.avTextP}>AM</Text>
          </View>
          <View style={styles.memInfo}>
            <Text style={styles.memName}>Arjun Mehta</Text>
            <Text style={styles.memSub}>arjun@masa.org</Text>
          </View>
          <TouchableOpacity onPress={() => alert('Invited Arjun Mehta!')}>
            <IconPlus color="#444" size={20} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.actBtn}
          onPress={() => {
            alert('Team Room created!');
            navigation.navigate('RoomsTab', { screen: 'TeamHome' });
          }}
        >
          <IconUsers color="#AFA9EC" size={18} style={{ marginRight: 6 }} />
          <Text style={styles.actBtnText}>Create Team Room</Text>
        </TouchableOpacity>
      </View>
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
  topNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#1e1e1e',
    marginBottom: 16,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoM: {
    borderWidth: 2,
    borderColor: COLORS.purple,
    borderRadius: 7,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoMText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.purple,
  },
  topNavRight: {
    flexDirection: 'row',
    gap: 8,
  },
  navButton: {
    width: 36,
    height: 36,
    backgroundColor: '#1a1a1a',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#222',
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#1a1a1a',
    borderWidth: 0.5,
    borderColor: '#222',
    borderRadius: 9,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  backBtnText: {
    fontSize: 13,
    color: '#aaa',
  },
  sc: {
    backgroundColor: '#1a1a1a',
    borderWidth: 0.5,
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
  },
  scHdr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  scEy: {
    fontSize: 11,
    color: '#555',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: 3,
  },
  scTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#d0d0d0',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 7,
    borderWidth: 0.5,
  },
  badgePurple: {
    backgroundColor: '#1e1428',
    borderColor: '#534AB7',
  },
  badgeTextPurple: {
    fontSize: 11,
    fontWeight: '500',
    color: '#AFA9EC',
  },
  introText: {
    fontSize: 12,
    color: '#666',
    lineHeight: 18,
    marginBottom: 10,
  },
  flbl: {
    fontSize: 12,
    fontWeight: '600',
    color: '#555',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: 6,
    marginTop: 12,
  },
  finput: {
    width: '100%',
    backgroundColor: '#111',
    borderWidth: 0.5,
    borderColor: '#222',
    borderRadius: 9,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#bbb',
    marginTop: 6,
  },
  ftextarea: {
    width: '100%',
    backgroundColor: '#111',
    borderWidth: 0.5,
    borderColor: '#222',
    borderRadius: 9,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#bbb',
    height: 70,
    textAlignVertical: 'top',
    marginTop: 6,
  },
  inviteRow: {
    backgroundColor: '#111',
    borderWidth: 0.5,
    borderColor: '#534AB7',
    borderRadius: 9,
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 6,
  },
  inviteCodeCol: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inviteCode: {
    fontSize: 16,
    fontWeight: '600',
    color: '#AFA9EC',
  },
  shareBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1428',
    borderWidth: 0.5,
    borderColor: '#534AB7',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  shareBtnText: {
    fontSize: 12,
    color: '#AFA9EC',
    fontWeight: '500',
  },
  memRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#111',
    borderWidth: 0.5,
    borderColor: '#1e1e1e',
    borderRadius: 11,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 6,
    marginTop: 6,
  },
  av: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avG: {
    backgroundColor: '#0d2019',
  },
  avP: {
    backgroundColor: '#1e1428',
  },
  avTextG: {
    fontSize: 13,
    fontWeight: '600',
    color: '#5DCAA5',
  },
  avTextP: {
    fontSize: 13,
    fontWeight: '600',
    color: '#AFA9EC',
  },
  memInfo: {
    flex: 1,
  },
  memName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#d0d0d0',
  },
  memSub: {
    fontSize: 12,
    color: '#555',
  },
  actBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 11,
    paddingVertical: 12,
    marginTop: 12,
    backgroundColor: '#1e1428',
    borderWidth: 0.5,
    borderColor: '#534AB7',
  },
  actBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#AFA9EC',
  },
});