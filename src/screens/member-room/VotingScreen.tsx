import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { 
  IconArrowLeft, 
  IconChecks, 
  IconPlus, 
  IconBell, 
  IconMenu2 
} from 'tabler-icons-react-native';
import { COLORS } from '../../theme/colors';

export default function VotingScreen({ navigation }: { navigation: any }) {
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

      {/* Card 1: Active Vote (Person) */}
      <View style={[styles.sc, { borderColor: '#534AB7' }]}>
        <View style={styles.scHdr}>
          <View style={{ flex: 1, paddingRight: 4 }}>
            <Text style={styles.scEy}>Active vote</Text>
            <Text style={styles.scTitle}>Member of the month — Sep 2026</Text>
          </View>
          <View style={[styles.badge, styles.badgePurple]}>
            <Text style={styles.badgeTextPurple}>Vote for person</Text>
          </View>
        </View>

        <Text style={styles.subText}>32 of 48 members have voted · closes Sep 25</Text>

        {/* Nominee 1 */}
        <View style={styles.voteOption}>
          <View style={[styles.av, styles.avG]}>
            <Text style={styles.avTextG}>RK</Text>
          </View>
          <Text style={styles.voteLbl}>Riya Kapoor</Text>
          <View style={styles.voteTrack}>
            <View style={[styles.voteFill, { width: '53%', backgroundColor: COLORS.teal }]} />
          </View>
          <Text style={styles.votePct}>53%</Text>
        </View>

        {/* Nominee 2 */}
        <View style={styles.voteOption}>
          <View style={[styles.av, styles.avP]}>
            <Text style={styles.avTextP}>AM</Text>
          </View>
          <Text style={styles.voteLbl}>Arjun Mehta</Text>
          <View style={styles.voteTrack}>
            <View style={[styles.voteFill, { width: '31%', backgroundColor: COLORS.purple }]} />
          </View>
          <Text style={styles.votePct}>31%</Text>
        </View>

        {/* Nominee 3 */}
        <View style={styles.voteOption}>
          <View style={[styles.av, styles.avA]}>
            <Text style={styles.avTextA}>NR</Text>
          </View>
          <Text style={styles.voteLbl}>Nisha Rao</Text>
          <View style={styles.voteTrack}>
            <View style={[styles.voteFill, { width: '16%', backgroundColor: COLORS.amber }]} />
          </View>
          <Text style={styles.votePct}>16%</Text>
        </View>

        <Text style={styles.statusHintText}>You have not voted yet</Text>

        <TouchableOpacity 
          style={styles.voteBtn}
          onPress={() => alert('Vote cast successfully!')}
        >
          <IconChecks color="#5DCAA5" size={16} style={{ marginRight: 6 }} />
          <Text style={styles.voteBtnText}>Cast your vote</Text>
        </TouchableOpacity>
      </View>

      {/* Card 2: Cause Vote */}
      <View style={styles.sc}>
        <View style={styles.scHdr}>
          <View style={{ flex: 1, paddingRight: 4 }}>
            <Text style={styles.scEy}>Cause vote</Text>
            <Text style={styles.scTitle}>Budget allocation — Q4 2026</Text>
          </View>
          <View style={[styles.badge, styles.badgeBlue]}>
            <Text style={styles.badgeTextBlue}>Vote for cause</Text>
          </View>
        </View>

        <Text style={styles.subText}>48 of 48 members voted · closed</Text>

        {/* Option 1 */}
        <View style={styles.voteOption}>
          <Text style={styles.voteLblText}>Events</Text>
          <View style={styles.voteTrack}>
            <View style={[styles.voteFill, { width: '58%', backgroundColor: COLORS.teal }]} />
          </View>
          <Text style={styles.votePct}>58%</Text>
        </View>

        {/* Option 2 */}
        <View style={styles.voteOption}>
          <Text style={styles.voteLblText}>Training</Text>
          <View style={styles.voteTrack}>
            <View style={[styles.voteFill, { width: '27%', backgroundColor: COLORS.purple }]} />
          </View>
          <Text style={styles.votePct}>27%</Text>
        </View>

        {/* Option 3 */}
        <View style={styles.voteOption}>
          <Text style={styles.voteLblText}>Social</Text>
          <View style={styles.voteTrack}>
            <View style={[styles.voteFill, { width: '15%', backgroundColor: COLORS.amber }]} />
          </View>
          <Text style={styles.votePct}>15%</Text>
        </View>

        <Text style={styles.statusHintText}>Result: Events wins · approved by admin</Text>
      </View>

      {/* Admin Button */}
      <TouchableOpacity 
        style={styles.adminActionBtn}
        onPress={() => alert('New vote creation modal opens.')}
      >
        <IconPlus color="#AFA9EC" size={16} style={{ marginRight: 6 }} />
        <Text style={styles.adminActionBtnText}>Create new vote (admin)</Text>
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
  badgePurple: {
    backgroundColor: '#1e1428',
    borderColor: '#534AB7',
  },
  badgeTextPurple: {
    fontSize: 11,
    fontWeight: '500',
    color: '#AFA9EC',
  },
  badgeBlue: {
    backgroundColor: '#0a1828',
    borderColor: '#185FA5',
  },
  badgeTextBlue: {
    fontSize: 11,
    fontWeight: '500',
    color: '#85B7EB',
  },
  subText: {
    fontSize: 12,
    color: '#555',
    marginBottom: 12,
  },
  voteOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  av: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avG: {
    backgroundColor: '#0d2019',
  },
  avTextG: {
    fontSize: 12,
    fontWeight: '600',
    color: '#5DCAA5',
  },
  avP: {
    backgroundColor: '#1e1428',
  },
  avTextP: {
    fontSize: 12,
    fontWeight: '600',
    color: '#AFA9EC',
  },
  avA: {
    backgroundColor: '#1e1200',
  },
  avTextA: {
    fontSize: 12,
    fontWeight: '600',
    color: '#EF9F27',
  },
  voteLbl: {
    fontSize: 13,
    color: '#aaa',
    width: 80,
  },
  voteLblText: {
    fontSize: 13,
    color: '#aaa',
    width: 70,
  },
  voteTrack: {
    flex: 1,
    height: 8,
    backgroundColor: '#1a1a1a',
    borderRadius: 4,
    overflow: 'hidden',
  },
  voteFill: {
    height: '100%',
    borderRadius: 4,
  },
  votePct: {
    fontSize: 12,
    color: '#555',
    width: 36,
    textAlign: 'right',
  },
  statusHintText: {
    fontSize: 12,
    color: '#666',
    marginVertical: 8,
  },
  voteBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#1D9E75',
    backgroundColor: '#0d2019',
    borderRadius: 9,
    paddingVertical: 10,
    marginTop: 6,
  },
  voteBtnText: {
    fontSize: 13,
    color: '#5DCAA5',
    fontWeight: '600',
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
  },
  adminActionBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#AFA9EC',
  },
});
