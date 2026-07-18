import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { 
  IconArrowLeft, 
  IconCoin, 
  IconBolt, 
  IconBell, 
  IconMenu2 
} from 'tabler-icons-react-native';
import { COLORS } from '../../theme/colors';

export default function ChallengeScreen({ navigation }: { navigation: any }) {
  const [proofLink, setProofLink] = useState('https://drive.google.com/...');
  const [description, setDescription] = useState('Completed the newsletter draft with all three event highlights and photos from the gala dinner.');

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

      {/* Featured Challenge Card */}
      <View style={styles.challCard}>
        <View style={styles.ccTop}>
          <View style={styles.ccTopLeft}>
            <Text style={styles.ccTitle}>Write the monthly newsletter</Text>
            <Text style={styles.ccDesc}>
              Draft and submit the September MASA newsletter by end of month. Include highlights from 3 recent events.
            </Text>
          </View>
          <View style={styles.xrdmBadge}>
            <IconCoin color="#EF9F27" size={16} style={{ marginRight: 4 }} />
            <Text style={styles.xrdmBadgeText}>50</Text>
          </View>
        </View>
        <View style={styles.ccBottom}>
          <Text style={styles.ccMeta}>Due: Sep 30, 2026 · Posted by Admin</Text>
          <View style={[styles.badge, styles.badgeAmberOpen]}>
            <Text style={styles.badgeTextAmberOpen}>Open</Text>
          </View>
        </View>
      </View>

      {/* Card 1: Submit Proof */}
      <View style={styles.sc}>
        <View style={styles.scHdr}>
          <View>
            <Text style={styles.scEy}>Submit proof</Text>
            <Text style={styles.scTitle}>Upload your work</Text>
          </View>
          <View style={[styles.badge, styles.badgeTealProof]}>
            <Text style={styles.badgeTextTealProof}>+50 XRDM</Text>
          </View>
        </View>

        <Text style={styles.flbl}>Proof link (Google Drive, GitHub, URL)</Text>
        <TextInput 
          style={styles.finput}
          value={proofLink}
          onChangeText={setProofLink}
          placeholder="https://..."
          placeholderTextColor="#333"
        />

        <Text style={styles.flbl}>Description</Text>
        <TextInput 
          style={styles.ftextarea}
          value={description}
          onChangeText={setDescription}
          multiline
          placeholder="I have completed..."
          placeholderTextColor="#333"
        />

        <TouchableOpacity 
          style={styles.actBtn}
          onPress={() => {
            alert('Proof submitted!');
            navigation.navigate('HomeTab', { screen: 'AdminQueue' });
          }}
        >
          <IconBolt color="#EF9F27" size={18} style={{ marginRight: 6 }} />
          <Text style={styles.actBtnText}>Submit challenge proof</Text>
        </TouchableOpacity>
      </View>

      {/* Card 2: Active Challenges List */}
      <View style={styles.sc}>
        <Text style={styles.sectionLabel}>Active challenges</Text>
        
        {/* Challenge Item 1 */}
        <View style={styles.activeChallItem}>
          <View>
            <Text style={styles.itemTitle}>Conduct a skills workshop</Text>
            <Text style={styles.itemMeta}>Due Oct 15 · +80 XRDM</Text>
          </View>
          <View style={[styles.badge, styles.badgeAmberOpen]}>
            <Text style={styles.badgeTextAmberOpen}>Open</Text>
          </View>
        </View>

        {/* Challenge Item 2 */}
        <View style={styles.activeChallItem}>
          <View>
            <Text style={styles.itemTitle}>Refer 2 new members</Text>
            <Text style={styles.itemMeta}>Rolling · +40 XRDM each</Text>
          </View>
          <View style={[styles.badge, styles.badgeTealClaimed]}>
            <Text style={styles.badgeTextTealClaimed}>Your claim</Text>
          </View>
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
  challCard: {
    backgroundColor: '#1e1200',
    borderWidth: 0.5,
    borderColor: '#854F0B',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
  },
  ccTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  ccTopLeft: {
    flex: 1,
  },
  ccTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#d0d0d0',
  },
  ccDesc: {
    fontSize: 13,
    color: '#777',
    lineHeight: 18,
    marginTop: 4,
    marginBottom: 10,
  },
  xrdmBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 8,
  },
  xrdmBadgeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#EF9F27',
  },
  ccBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ccMeta: {
    fontSize: 12,
    color: '#555',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 7,
    borderWidth: 0.5,
  },
  badgeAmberOpen: {
    backgroundColor: '#1e1200',
    borderColor: '#854F0B',
  },
  badgeTextAmberOpen: {
    fontSize: 11,
    fontWeight: '500',
    color: '#EF9F27',
  },
  sc: {
    backgroundColor: '#1a1a1a',
    borderWidth: 0.5,
    borderColor: '#222',
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
  badgeTealProof: {
    backgroundColor: '#0d2019',
    borderColor: '#1D9E75',
  },
  badgeTextTealProof: {
    fontSize: 11,
    fontWeight: '500',
    color: '#5DCAA5',
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
  actBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 11,
    paddingVertical: 12,
    marginTop: 12,
    backgroundColor: '#1e1200',
    borderWidth: 0.5,
    borderColor: '#854F0B',
  },
  actBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#EF9F27',
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#444',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 10,
  },
  activeChallItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#111',
    borderWidth: 0.5,
    borderColor: '#222',
    borderRadius: 9,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 6,
  },
  itemTitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#c0c0c0',
  },
  itemMeta: {
    fontSize: 11,
    color: '#555',
  },
  badgeTealClaimed: {
    backgroundColor: '#0d2019',
    borderColor: '#1D9E75',
  },
  badgeTextTealClaimed: {
    fontSize: 11,
    fontWeight: '500',
    color: '#5DCAA5',
  },
});
