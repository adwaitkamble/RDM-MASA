import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { 
  IconArrowLeft, 
  IconCoin, 
  IconChevronDown, 
  IconInfoCircle,
  IconBell, 
  IconMenu2 
} from 'tabler-icons-react-native';
import { COLORS } from '../../theme/colors';

export default function RewardMemberScreen({ navigation }: { navigation: any }) {
  const [amount, setAmount] = useState('25');
  const [citation, setCitation] = useState('Helped organise the annual reunion end-to-end with zero budget overrun.');

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

      {/* Card 1: Reward Form */}
      <View style={styles.sc}>
        <View style={styles.scHdr}>
          <View>
            <Text style={styles.scEy}>Member action</Text>
            <Text style={styles.scTitle}>Reward a member</Text>
          </View>
          <View style={[styles.badge, styles.badgeTeal]}>
            <Text style={styles.badgeTextTeal}>Needs approval</Text>
          </View>
        </View>

        <Text style={styles.introText}>
          Nominate a fellow member to receive XRDM. Admin / committee will review before XRDM is credited.
        </Text>

        <Text style={styles.flbl}>Recipient</Text>
        <TouchableOpacity style={styles.recipientRow}>
          <View style={[styles.av, styles.avG]}>
            <Text style={styles.avTextG}>RK</Text>
          </View>
          <View style={styles.memInfo}>
            <Text style={styles.memName}>Riya Kapoor</Text>
            <Text style={styles.memSub}>riya@masa.org</Text>
          </View>
          <IconChevronDown color={COLORS.teal} size={18} />
        </TouchableOpacity>

        <Text style={styles.flbl}>XRDM amount</Text>
        <TextInput 
          style={styles.finput}
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          placeholder="0"
          placeholderTextColor="#333"
        />

        <View style={styles.labelRow}>
          <Text style={styles.flbl}>Citation</Text>
          <Text style={styles.labelSub}> (max 100 chars)</Text>
        </View>
        <TextInput 
          style={styles.ftextarea}
          value={citation}
          onChangeText={setCitation}
          maxLength={100}
          multiline
          placeholder="Helped organise..."
          placeholderTextColor="#333"
        />
        <Text style={styles.charHint}>{citation.length} / 100</Text>

        <TouchableOpacity 
          style={styles.actBtn}
          onPress={() => {
            alert('Nomination submitted!');
            navigation.navigate('AdminQueue');
          }}
        >
          <IconCoin color="#5DCAA5" size={18} style={{ marginRight: 6 }} />
          <Text style={styles.actBtnText}>Submit for approval</Text>
        </TouchableOpacity>
      </View>

      {/* Card 2: Info Box */}
      <View style={[styles.sc, { borderColor: '#854F0B' }]}>
        <View style={styles.infoRow}>
          <IconInfoCircle color={COLORS.amber} size={20} style={{ marginRight: 8, marginTop: 1 }} />
          <Text style={styles.infoText}>
            XRDM is only credited after admin or committee approves the reward nomination.
          </Text>
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
  badgeTeal: {
    backgroundColor: '#0d2019',
    borderColor: '#1D9E75',
  },
  badgeTextTeal: {
    fontSize: 11,
    fontWeight: '500',
    color: '#5DCAA5',
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
  recipientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#111',
    borderWidth: 0.5,
    borderColor: '#1D9E75',
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
    backgroundColor: '#0d2019',
    borderWidth: 0.5,
    borderColor: '#1D9E75',
  },
  actBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5DCAA5',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  infoText: {
    flex: 1,
    fontSize: 12,
    color: '#666',
    lineHeight: 18,
  },
});
