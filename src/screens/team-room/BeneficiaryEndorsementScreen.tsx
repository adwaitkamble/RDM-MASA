import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { 
  IconArrowLeft, 
  IconCheck, 
  IconX, 
  IconBell, 
  IconMenu2 
} from 'tabler-icons-react-native';
import { COLORS } from '../../theme/colors';

export default function BeneficiaryEndorsementScreen({ navigation }: { navigation: any }) {
  const [citation, setCitation] = useState('Vivek did all the heavy lifting. The whole team benefits every deploy day now. Fully endorse.');

  const handleEndorse = () => {
    alert('Claim endorsed successfully!');
    navigation.navigate('RoomsTab', { screen: 'TeamAdminQueue' });
  };

  const handleDecline = () => {
    alert('Claim endorsement declined.');
    navigation.navigate('RoomsTab', { screen: 'TeamHistory' });
  };

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

      {/* Action Card */}
      <View style={[styles.sc, { borderColor: '#1D9E75' }]}>
        <View style={styles.scHdr}>
          <View>
            <Text style={styles.scEy}>Your action needed</Text>
            <Text style={styles.scTitle}>Endorse a claim</Text>
          </View>
          <View style={[styles.badge, styles.badgeTeal]}>
            <Text style={styles.badgeTextTeal}>Step 2 of 3</Text>
          </View>
        </View>

        {/* Claim Review Sub-card */}
        <View style={styles.subCard}>
          <View style={styles.subCardHeader}>
            <View style={styles.profileRow}>
              <View style={[styles.av, styles.avA]}>
                <Text style={styles.avTextA}>VJ</Text>
              </View>
              <View>
                <Text style={styles.memName}>Vivek Joshi claims</Text>
                <Text style={styles.memSub}>+35 XRDM</Text>
              </View>
            </View>
          </View>
          <Text style={styles.claimDesc}>
            "Set up full CI/CD pipeline for the team repo. Automated tests, staging deploy and prod rollback — reduced manual deploy time by 70%."
          </Text>
        </View>

        <Text style={styles.instructionText}>
          You are listed as the beneficiary. Add a citation to endorse this claim so the team admin can approve it.
        </Text>

        <Text style={styles.flbl}>Your endorsement citation <Text style={{ color: '#333', textTransform: 'none', fontWeight: '400' }}>(max 100 chars)</Text></Text>
        <TextInput 
          style={styles.ftextarea}
          value={citation}
          onChangeText={setCitation}
          maxLength={100}
          multiline
          placeholder="I endorse this because..."
          placeholderTextColor="#333"
        />
        <Text style={styles.charHint}>{citation.length} / 100</Text>

        <View style={styles.actRow}>
          <TouchableOpacity 
            style={[styles.actBtn, styles.abPrimary]}
            onPress={handleEndorse}
          >
            <IconCheck color="#5DCAA5" size={16} style={{ marginRight: 6 }} />
            <Text style={[styles.actBtnText, { color: '#5DCAA5' }]}>Endorse</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.actBtn, styles.abNeutral]}
            onPress={handleDecline}
          >
            <IconX color="#aaa" size={16} style={{ marginRight: 6 }} />
            <Text style={[styles.actBtnText, { color: '#aaa' }]}>Decline</Text>
          </TouchableOpacity>
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
  badgeTeal: {
    backgroundColor: '#0d2019',
    borderColor: '#1D9E75',
  },
  badgeTextTeal: {
    fontSize: 11,
    fontWeight: '500',
    color: '#5DCAA5',
  },
  subCard: {
    backgroundColor: '#111',
    borderWidth: 0.5,
    borderColor: '#1e1e1e',
    borderRadius: 9,
    padding: 12,
    marginBottom: 12,
  },
  subCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  av: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avA: {
    backgroundColor: '#1e1200',
  },
  avTextA: {
    fontSize: 12,
    fontWeight: '600',
    color: '#EF9F27',
  },
  memName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#d0d0d0',
  },
  memSub: {
    fontSize: 12,
    color: '#EF9F27',
    fontWeight: '600',
  },
  claimDesc: {
    fontSize: 13,
    color: '#777',
    lineHeight: 18,
  },
  instructionText: {
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
  charHint: {
    fontSize: 11,
    color: '#444',
    textAlign: 'right',
    marginTop: 3,
  },
  actRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  actBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 11,
    paddingVertical: 12,
    borderWidth: 0.5,
  },
  abPrimary: {
    backgroundColor: '#0d2019',
    borderColor: '#1D9E75',
  },
  abNeutral: {
    backgroundColor: '#1a1a1a',
    borderColor: '#333',
  },
  actBtnText: {
    fontSize: 13,
    fontWeight: '600',
  },
});
