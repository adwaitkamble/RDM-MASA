import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { 
  IconArrowLeft, 
  IconFileCheck, 
  IconChevronDown,
  IconBell, 
  IconMenu2 
} from 'tabler-icons-react-native';
import { COLORS } from '../../theme/colors';

export default function ClaimXrdmScreen({ navigation }: { navigation: any }) {
  const [deed, setDeed] = useState('Mentored three junior members through their first open-source contribution, reviewing pull requests and unblocking issues over two weeks.');
  const [amount, setAmount] = useState('30');

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

      {/* Card 1: Claim Form */}
      <View style={styles.sc}>
        <View style={styles.scHdr}>
          <View>
            <Text style={styles.scEy}>Member action</Text>
            <Text style={styles.scTitle}>Claim XRDM</Text>
          </View>
          <View style={[styles.badge, styles.badgeAmber]}>
            <Text style={styles.badgeTextAmber}>2-step approval</Text>
          </View>
        </View>

        <Text style={styles.introText}>
          Describe a good deed or help given. The beneficiary must endorse it, then admin approves.
        </Text>

        <View style={styles.labelRow}>
          <Text style={styles.flbl}>Description of good deed</Text>
          <Text style={styles.labelSub}> (max 200 chars)</Text>
        </View>
        <TextInput 
          style={styles.ftextarea}
          value={deed}
          onChangeText={setDeed}
          maxLength={200}
          multiline
          placeholder="I helped..."
          placeholderTextColor="#333"
        />
        <Text style={styles.charHint}>{deed.length} / 200</Text>

        <Text style={styles.flbl}>Beneficiary (who was helped)</Text>
        <TouchableOpacity style={styles.recipientRow}>
          <View style={[styles.av, styles.avP]}>
            <Text style={styles.avTextP}>AM</Text>
          </View>
          <View style={styles.memInfo}>
            <Text style={styles.memName}>Arjun Mehta</Text>
            <Text style={styles.memSub}>arjun@masa.org</Text>
          </View>
          <IconChevronDown color={COLORS.purple} size={18} />
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
            alert('Claim submitted!');
            navigation.navigate('HomeTab', { screen: 'AdminQueue' });
          }}
        >
          <IconFileCheck color="#EF9F27" size={18} style={{ marginRight: 6 }} />
          <Text style={styles.actBtnText}>Submit claim</Text>
        </TouchableOpacity>
      </View>

      {/* Card 2: Approval Flow */}
      <View style={styles.sc}>
        <Text style={styles.sectionTitle}>Approval flow</Text>
        
        {/* Step 1 */}
        <View style={styles.flowItem}>
          <View style={[styles.flowDot, { backgroundColor: COLORS.teal }]} />
          <View style={styles.flowContent}>
            <Text style={styles.flowText}>Step 1 — you submit claim</Text>
          </View>
        </View>

        {/* Step 2 */}
        <View style={styles.flowItem}>
          <View style={[styles.flowDot, { backgroundColor: COLORS.purple }]} />
          <View style={styles.flowContent}>
            <Text style={styles.flowText}>Step 2 — beneficiary endorses with citation (100 chars)</Text>
          </View>
        </View>

        {/* Step 3 */}
        <View style={[styles.flowItem, { borderBottomWidth: 0, paddingBottom: 0 }]}>
          <View style={[styles.flowDot, { backgroundColor: COLORS.amber }]} />
          <View style={styles.flowContent}>
            <Text style={styles.flowText}>Step 3 — admin / committee approves → XRDM credited</Text>
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
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 7,
    borderWidth: 0.5,
  },
  badgeAmber: {
    backgroundColor: '#1e1200',
    borderColor: '#854F0B',
  },
  badgeTextAmber: {
    fontSize: 11,
    fontWeight: '500',
    color: '#EF9F27',
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
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 6,
  },
  labelSub: {
    fontSize: 11,
    color: '#444',
  },
  recipientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#111',
    borderWidth: 0.5,
    borderColor: '#534AB7',
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
  avP: {
    backgroundColor: '#1e1428',
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
    marginTop: 2,
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
  },
  charHint: {
    fontSize: 11,
    color: '#444',
    textAlign: 'right',
    marginTop: 3,
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
  sectionTitle: {
    fontSize: 11,
    fontWeight: '600',
    color: '#444',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 10,
  },
  flowItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#1a1a1a',
    paddingVertical: 10,
  },
  flowDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginTop: 4,
  },
  flowContent: {
    flex: 1,
  },
  flowText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#c0c0c0',
    lineHeight: 18,
  },
});
