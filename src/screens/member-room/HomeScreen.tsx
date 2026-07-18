import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { 
  IconBell, 
  IconMenu2, 
  IconCoin, 
  IconFileCheck, 
  IconBolt, 
  IconChecks, 
  IconClock, 
  IconUsers, 
  IconChevronRight, 
  IconHome 
} from 'tabler-icons-react-native';
import { COLORS } from '../../theme/colors';

export default function MemberHomeScreen({ navigation }: { navigation: any }) {
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

      {/* Room Header */}
      <View style={styles.roomHdr}>
        <View style={styles.rhTop}>
          <View style={styles.rhTopLeft}>
            <Text style={styles.rhEyebrow}>Member Room</Text>
            <Text style={styles.rhTitle}>MASA Alumni 2024</Text>
            <Text style={styles.rhSub}>Open to all verified MASA members via invite.</Text>
          </View>
          <View style={[styles.rolePill, styles.roleAdmin]}>
            <Text style={styles.roleTextAdmin}>Admin</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <TouchableOpacity 
            style={styles.statBox}
            onPress={() => navigation.navigate('HomeTab', { screen: 'InviteCode' })}
          >
            <Text style={styles.statNum}>48</Text>
            <Text style={styles.statLabel}>Members</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.statBox} 
            onPress={() => navigation.navigate('HomeTab', { screen: 'AdminQueue' })}
          >
            <Text style={styles.statNum}>12</Text>
            <Text style={styles.statLabel}>Pending</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.statBox} 
            onPress={() => navigation.navigate('HomeTab', { screen: 'ChallengeDetail' })}
          >
            <Text style={[styles.statNum, { color: COLORS.amber }]}>3</Text>
            <Text style={styles.statLabel}>Challenges</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Section: Quick Actions */}
      <Text style={styles.sectionLabel}>Quick actions</Text>
      <View style={styles.grid}>
        <View style={styles.gridRow}>
          <TouchableOpacity 
            style={styles.gridItem} 
            onPress={() => navigation.navigate('HomeTab', { screen: 'RewardMember' })}
          >
            <View style={styles.gridIconBg}>
              <IconCoin color="#bbb" size={22} />
            </View>
            <Text style={styles.gridLabel}>Reward member</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.gridItem} 
            onPress={() => navigation.navigate('HomeTab', { screen: 'ClaimXrdm' })}
          >
            <View style={styles.gridIconBg}>
              <IconFileCheck color="#bbb" size={22} />
            </View>
            <Text style={styles.gridLabel}>Claim XRDM</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.gridRow}>
          <TouchableOpacity 
            style={styles.gridItem} 
            onPress={() => navigation.navigate('HomeTab', { screen: 'ChallengeDetail' })}
          >
            <View style={styles.gridIconBg}>
              <IconBolt color="#bbb" size={22} />
            </View>
            <Text style={styles.gridLabel}>Challenges</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.gridItem} 
            onPress={() => navigation.navigate('HomeTab', { screen: 'Voting' })}
          >
            <View style={styles.gridIconBg}>
              <IconChecks color="#bbb" size={22} />
            </View>
            <Text style={styles.gridLabel}>Voting</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.gridRow}>
          <TouchableOpacity 
            style={styles.gridItem} 
            onPress={() => navigation.navigate('HomeTab', { screen: 'History' })}
          >
            <View style={styles.gridIconBg}>
              <IconClock color="#bbb" size={22} />
            </View>
            <Text style={styles.gridLabel}>History</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.gridItem} 
            onPress={() => navigation.navigate('RoomsTab', { screen: 'TeamHome' })}
          >
            <View style={styles.gridIconBg}>
              <IconUsers color="#bbb" size={22} />
            </View>
            <Text style={styles.gridLabel}>Team Rooms</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Section: My Rooms */}
      <Text style={styles.sectionLabel}>My rooms</Text>
      
      {/* Dev Squad Room */}
      <TouchableOpacity 
        style={[styles.roomRow, styles.roomRowFeatured]}
        onPress={() => navigation.navigate('RoomsTab', { screen: 'TeamHome' })}
      >
        <View style={[styles.roomIconBg, { borderColor: '#534AB7' }]}>
          <IconUsers color="#AFA9EC" size={20} />
        </View>
        <View style={styles.roomInfo}>
          <Text style={styles.roomNameFeatured}>Dev Squad – Backend</Text>
          <Text style={styles.roomSubFeatured}>Team Room · you are admin</Text>
        </View>
        <IconChevronRight color="#444" size={20} />
      </TouchableOpacity>

      {/* MASA Alumni Room */}
      <View style={styles.roomRow}>
        <View style={[styles.roomIconBg, { borderColor: '#222' }]}>
          <IconHome color="#777" size={20} />
        </View>
        <View style={styles.roomInfo}>
          <Text style={styles.roomName}>MASA Alumni 2024</Text>
          <Text style={styles.roomSub}>Member Room · 48 members</Text>
        </View>
        <IconChevronRight color="#444" size={20} />
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
  roomHdr: {
    backgroundColor: '#1a1a1a',
    borderWidth: 0.5,
    borderColor: '#252525',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
  },
  rhTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  rhTopLeft: {
    flex: 1,
    paddingRight: 10,
  },
  rhEyebrow: {
    fontSize: 11,
    fontWeight: '600',
    color: '#555',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 3,
  },
  rhTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 3,
  },
  rhSub: {
    fontSize: 13,
    color: '#777',
    lineHeight: 18,
  },
  rolePill: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 9,
    borderWidth: 0.5,
  },
  roleAdmin: {
    backgroundColor: '#1e1428',
    borderColor: '#534AB7',
  },
  roleTextAdmin: {
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    color: '#AFA9EC',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#111',
    borderWidth: 0.5,
    borderColor: '#1e1e1e',
    borderRadius: 9,
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  statNum: {
    fontSize: 18,
    fontWeight: '600',
    color: '#d0d0d0',
  },
  statLabel: {
    fontSize: 11,
    color: '#555',
    marginTop: 2,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#444',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginTop: 16,
    marginBottom: 10,
  },
  grid: {
    gap: 8,
    marginBottom: 12,
  },
  gridRow: {
    flexDirection: 'row',
    gap: 8,
  },
  gridItem: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    borderWidth: 0.5,
    borderColor: '#222',
    borderRadius: 11,
    paddingVertical: 16,
    paddingHorizontal: 10,
    alignItems: 'center',
    gap: 8,
  },
  gridIconBg: {
    width: 42,
    height: 42,
    backgroundColor: '#111',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#1e1e1e',
  },
  gridLabel: {
    fontSize: 12,
    color: '#aaa',
    fontWeight: '500',
    textAlign: 'center',
  },
  roomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#111',
    borderWidth: 0.5,
    borderColor: '#1e1e1e',
    borderRadius: 11,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  roomRowFeatured: {
    backgroundColor: '#1e1428',
    borderColor: '#534AB7',
  },
  roomIconBg: {
    width: 36,
    height: 36,
    backgroundColor: '#111',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
  },
  roomInfo: {
    flex: 1,
  },
  roomName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#d0d0d0',
  },
  roomSub: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
  },
  roomNameFeatured: {
    fontSize: 14,
    fontWeight: '500',
    color: '#d0d0d0',
  },
  roomSubFeatured: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
});