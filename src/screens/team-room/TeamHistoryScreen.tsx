import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { 
  IconArrowLeft, 
  IconBell, 
  IconMenu2 
} from 'tabler-icons-react-native';
import { COLORS } from '../../theme/colors';

export default function TeamHistoryScreen({ navigation }: { navigation: any }) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const historyItems = [
    {
      id: 1,
      type: 'Rewards',
      title: '+20 XRDM rewarded to Riya Kapoor',
      meta: 'Citation: "Fixed prod DB migration on a weekend…" · by Arjun Mehta · team admin approved',
      time: 'Jun 25',
      dotColor: COLORS.teal,
    },
    {
      id: 2,
      type: 'Claims',
      title: 'Claim pending: +35 XRDM by Vivek Joshi',
      meta: 'Beneficiary endorsed · awaiting team admin approval',
      time: 'Jun 25',
      dotColor: COLORS.purple,
    },
    {
      id: 3,
      type: 'Challenges',
      title: 'Challenge posted: Deploy a staging env',
      meta: '+60 XRDM · team admin posted · open',
      time: 'Jun 24',
      dotColor: COLORS.amber,
    },
    {
      id: 4,
      type: 'Rewards',
      title: '+15 XRDM rewarded to Nisha Rao',
      meta: 'Citation: "Wrote the entire test suite for auth module." · approved',
      time: 'Jun 22',
      dotColor: COLORS.teal,
    },
    {
      id: 5,
      type: 'Claims',
      title: 'Claim rejected: API docs claim',
      meta: 'Reason: Beneficiary declined endorsement',
      time: 'Jun 20',
      dotColor: COLORS.coral,
    }
  ];

  const filteredItems = selectedFilter === 'All' 
    ? historyItems 
    : historyItems.filter(item => item.type === selectedFilter);

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
        <Text style={styles.backBtnText}>Dev Squad – Backend</Text>
      </TouchableOpacity>

      {/* History Card */}
      <View style={[styles.sc, { borderColor: '#534AB7' }]}>
        <View style={styles.scHdr}>
          <View>
            <Text style={styles.scEy}>Team room history</Text>
            <Text style={styles.scTitle}>All activity</Text>
          </View>
          <View style={[styles.badge, styles.badgePurple]}>
            <Text style={styles.badgeTextPurple}>11 records</Text>
          </View>
        </View>

        {/* Filters Row */}
        <View style={styles.filtersRow}>
          <TouchableOpacity 
            style={[styles.filterPill, selectedFilter === 'All' && styles.filterPillActive]}
            onPress={() => setSelectedFilter('All')}
          >
            <Text style={[styles.filterText, selectedFilter === 'All' && styles.filterTextActive]}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.filterPill, selectedFilter === 'Rewards' && styles.pillRewards]}
            onPress={() => setSelectedFilter('Rewards')}
          >
            <Text style={[styles.filterText, selectedFilter === 'Rewards' && styles.filterTextRewards]}>Rewards</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.filterPill, selectedFilter === 'Claims' && styles.pillClaims]}
            onPress={() => setSelectedFilter('Claims')}
          >
            <Text style={[styles.filterText, selectedFilter === 'Claims' && styles.filterTextClaims]}>Claims</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.filterPill, selectedFilter === 'Challenges' && styles.pillChallenges]}
            onPress={() => setSelectedFilter('Challenges')}
          >
            <Text style={[styles.filterText, selectedFilter === 'Challenges' && styles.filterTextChallenges]}>Challenges</Text>
          </TouchableOpacity>
        </View>

        {/* Timeline list */}
        <View style={styles.timelineList}>
          {filteredItems.map((item, index) => (
            <View key={item.id} style={[styles.histItem, index === filteredItems.length - 1 && styles.histItemLast]}>
              <View style={[styles.histDot, { backgroundColor: item.dotColor }]} />
              <View style={styles.histBody}>
                <Text style={styles.histTitle}>{item.title}</Text>
                <Text style={styles.histMeta}>{item.meta}</Text>
              </View>
              <Text style={styles.histTime}>{item.time}</Text>
            </View>
          ))}
        </View>
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
  filtersRow: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 12,
    flexWrap: 'wrap',
  },
  filterPill: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: '#333',
    backgroundColor: '#111',
  },
  filterText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#555',
  },
  filterPillActive: {
    borderColor: '#aaa',
    backgroundColor: '#333',
  },
  filterTextActive: {
    color: '#fff',
  },
  pillRewards: {
    backgroundColor: '#0d2019',
    borderColor: '#1D9E75',
  },
  filterTextRewards: {
    color: '#5DCAA5',
  },
  pillClaims: {
    backgroundColor: '#1e1428',
    borderColor: '#534AB7',
  },
  filterTextClaims: {
    color: '#AFA9EC',
  },
  pillChallenges: {
    backgroundColor: '#1e1200',
    borderColor: '#854F0B',
  },
  filterTextChallenges: {
    color: '#EF9F27',
  },
  timelineList: {
    marginTop: 10,
  },
  histItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#1a1a1a',
  },
  histItemLast: {
    borderBottomWidth: 0,
  },
  histDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginTop: 4,
  },
  histBody: {
    flex: 1,
  },
  histTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#c0c0c0',
    lineHeight: 18,
  },
  histMeta: {
    fontSize: 12,
    color: '#555',
    marginTop: 3,
    lineHeight: 16,
  },
  histTime: {
    fontSize: 12,
    color: '#333',
    marginTop: 4,
  },
});
