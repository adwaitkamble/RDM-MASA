import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { 
  IconArrowLeft, 
  IconChevronDown, 
  IconSend, 
  IconBell, 
  IconMenu2 
} from 'tabler-icons-react-native';
import { COLORS } from '../../theme/colors';

export default function TeamSubmitClaimScreen({ navigation }: { navigation: any }) {
  const [deed, setDeed] = useState('Set up the full CI/CD pipeline for the team repo. Automated tests, staging deploy and prod rollback — reduced manual deploy time by 70%.');
  const [amount, setAmount] = useState('35');

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

      {/* Claim Card */}
      <View style={[styles.sc, { borderColor: '#534AB7' }]}>
        <View style={styles.scHdr}>
          <View>
            <Text style={styles.scEy}>Team member action</Text>
            <Text style={styles.scTitle}>Submit XRDM claim</Text>
          </View>
          <View style={[styles.badge, styles.badgePurple]}>
            <Text style={styles.badgeTextPurple}>Team admin approves</Text>
          </View>
        </View>

        <Text style={styles.flbl}>What you did <Text style={{ color: '#333', textTransform: 'none', fontWeight: '400' }}>(200 chars)</Text></Text>
        <TextInput 
          style={styles.ftextarea}
          value={deed}
          onChangeText={setDeed}
          maxLength={200}
          multiline
          placeholder="Describe your contribution..."
          placeholderTextColor="#333"
        />
        <Text style={styles.charHint}>{deed.length} / 200</Text>

        <Text style={styles.flbl}>Who benefited (beneficiary)</Text>
        <TouchableOpacity style={styles.recipientRow}>
          <View style={[styles.av, styles.avG]}>
            <Text style={styles.avTextG}>RK</Text>
          </View>
          <View style={styles.memInfo}>
            <Text style={styles.memName}>Riya Kapoor</Text>
            <Text style={styles.memSub}>riya@masa.org</Text>
          </View>
          <IconChevronDown color="#7F77DD" size={18} />
        </TouchableOpacity>

        <Text style={styles.flbl}>XRDM claimed</Text>
        <TextInput 
          style={styles.finput}
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          placeholder="0"
          placeholderTextColor="#333"
        />

        <TouchableOpacity 
          style={styles.actBtn}
          onPress={() => {
            alert('Claim submitted for endorsement!');
            navigation.navigate('RoomsTab', { screen: 'BeneficiaryEndorsement' });
          }}
        >
          <IconSend color="#AFA9EC" size={18} style={{ marginRight: 6 }} />
          <Text style={styles.actBtnText}>Submit — await beneficiary endorsement</Text>
        </TouchableOpacity>
      </View>

      {/* Card 2: Status Box */}
      <View style={[styles.sc, { borderColor: '#534AB7' }]}>
        <Text style={styles.sectionLabel}>Endorsement pending</Text>
        <Text style={styles.statusText}>
          Riya Kapoor will receive a notification to add a citation (100 chars) endorsing your claim. Once endorsed, your team admin reviews and approves.
        </Text>
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
    borderRadius: 7,
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
  recipientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#111',
    borderWidth: 0.5,
    borderColor: '#7F77DD',
    borderRadius: 11,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
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
  avTextG: {
    fontSize: 13,
    fontWeight: '600',
    color: '#5DCAA5',
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
  sectionLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#444',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 8,
  },
  statusText: {
    fontSize: 12,
    color: '#666',
    lineHeight: 18,
  },
});
