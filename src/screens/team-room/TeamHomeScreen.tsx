import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { 
  IconArrowLeft, 
  IconCoin, 
  IconFileCheck, 
  IconBolt, 
  IconChecks, 
  IconUsers, 
  IconClock,
  IconShieldCheck,
  IconPlus,
  IconBell, 
  IconMenu2 
} from 'tabler-icons-react-native';
import { COLORS } from '../../theme/colors';

export default function TeamHomeScreen({ navigation }: { navigation: any }) {
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
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate('HomeTab', { screen: 'MemberHome' })}>
        <IconArrowLeft color="#aaa" size={16} />
        <Text style={styles.backBtnText}>MASA Alumni 2024</Text>
      </TouchableOpacity>

      {/* Team Header */}
      <View style={styles.teamHdr}>
        <View style={styles.rhTop}>
          <View style={{ flex: 1, paddingRight: 8 }}>
            <Text style={[styles.rhEyebrow, { color: '#534AB7' }]}>Team Room · inside member room</Text>
            <Text style={[styles.rhTitle, { color: '#CECBF6' }]}>Dev Squad – Backend</Text>
            <Text style={styles.rhSub}>Pre-approved sub-room. Team admin has approval authority for all claims and rewards.</Text>
          </View>
          <View style={[styles.rolePill, styles.roleAdmin]}>
            <Text style={styles.roleTextAdmin}>Team Admin</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={[styles.statNum, { color: '#AFA9EC' }]}>8</Text>
            <Text style={styles.statLabel}>Members</Text>
          </View>
          <TouchableOpacity 
            style={styles.statBox} 
            onPress={() => navigation.navigate('RoomsTab', { screen: 'TeamAdminQueue' })}
          >
            <Text style={[styles.statNum, { color: COLORS.amber }]}>2</Text>
            <Text style={styles.statLabel}>Pending</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.statBox} 
            onPress={() => navigation.navigate('HomeTab', { screen: 'ChallengeDetail' })}
          >
            <Text style={[styles.statNum, { color: COLORS.teal }]}>1</Text>
            <Text style={styles.statLabel}>Challenge</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Section: Quick Actions */}
      <Text style={styles.sectionLabel}>Quick actions</Text>
      <View style={styles.grid}>
        <View style={styles.gridRow}>
          <TouchableOpacity 
            style={[styles.gridItem, { borderColor: '#534AB7' }]} 
            onPress={() => navigation.navigate('HomeTab', { screen: 'RewardMember' })}
          >
            <View style={[styles.gridIconBg, { borderColor: '#534AB7' }]}>
              <IconCoin color="#AFA9EC" size={22} />
            </View>
            <Text style={styles.gridLabel}>Reward member</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.gridItem, { borderColor: '#534AB7' }]} 
            onPress={() => navigation.navigate('RoomsTab', { screen: 'TeamSubmitClaim' })}
          >
            <View style={[styles.gridIconBg, { borderColor: '#534AB7' }]}>
              <IconFileCheck color="#AFA9EC" size={22} />
            </View>
            <Text style={styles.gridLabel}>Claim XRDM</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.gridRow}>
          <TouchableOpacity 
            style={[styles.gridItem, { borderColor: '#534AB7' }]} 
            onPress={() => navigation.navigate('HomeTab', { screen: 'ChallengeDetail' })}
          >
            <View style={[styles.gridIconBg, { borderColor: '#534AB7' }]}>
              <IconBolt color="#AFA9EC" size={22} />
            </View>
            <Text style={styles.gridLabel}>Challenges</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.gridItem, { borderColor: '#534AB7' }]} 
            onPress={() => navigation.navigate('HomeTab', { screen: 'Voting' })}
          >
            <View style={[styles.gridIconBg, { borderColor: '#534AB7' }]}>
              <IconChecks color="#AFA9EC" size={22} />
            </View>
            <Text style={styles.gridLabel}>Voting</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.gridRow}>
          <TouchableOpacity 
            style={[styles.gridItem, { borderColor: '#534AB7' }]} 
            onPress={() => Alert.alert('Team Members', 'Riya Kapoor (Member)\nArjun Mehta (Admin)\nVivek Joshi (Member)\nNisha Rao (Member)\n...')}
          >
            <View style={[styles.gridIconBg, { borderColor: '#534AB7' }]}>
              <IconUsers color="#AFA9EC" size={22} />
            </View>
            <Text style={styles.gridLabel}>Members</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.gridItem, { borderColor: '#534AB7' }]} 
            onPress={() => navigation.navigate('RoomsTab', { screen: 'TeamHistory' })}
          >
            <View style={[styles.gridIconBg, { borderColor: '#534AB7' }]}>
              <IconClock color="#AFA9EC" size={22} />
            </View>
            <Text style={styles.gridLabel}>History</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Info Card */}
      <View style={[styles.sc, { borderColor: '#534AB7', backgroundColor: '#1e1428' }]}>
        <View style={styles.infoRow}>
          <IconShieldCheck color="#7F77DD" size={20} style={{ marginRight: 8, marginTop: 1 }} />
          <Text style={styles.infoText}>
            As team admin, you approve all reward nominations and claims within this room — no escalation to member room admin needed.
          </Text>
        </View>
      </View>

      {/* Action Button: Create Sub-Team Room */}
      <TouchableOpacity 
        style={styles.adminActionBtn}
        onPress={() => navigation.navigate('RoomsTab', { screen: 'CreateTeamRoom' })}
      >
        <IconPlus color="#AFA9EC" size={16} style={{ marginRight: 6 }} />
        <Text style={styles.adminActionBtnText}>Create new Team Room</Text>
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
  teamHdr: {
    backgroundColor: '#1e1428',
    borderWidth: 0.5,
    borderColor: '#534AB7',
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
  rhEyebrow: {
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 3,
  },
  rhTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 3,
  },
  rhSub: {
    fontSize: 13,
    color: '#555',
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
    borderColor: '#7F77DD',
  },
  roleTextAdmin: {
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.3,
    color: '#CECBF6',
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
  },
  gridLabel: {
    fontSize: 12,
    color: '#aaa',
    fontWeight: '500',
    textAlign: 'center',
  },
  sc: {
    borderWidth: 0.5,
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  infoText: {
    flex: 1,
    fontSize: 12,
    color: '#AFA9EC',
    lineHeight: 18,
  },
  adminActionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 11,
    paddingVertical: 12,
    backgroundColor: '#1e1428',
    borderWidth: 0.5,
    borderColor: '#534AB7',
    marginTop: 8,
  },
  adminActionBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#AFA9EC',
  },
});