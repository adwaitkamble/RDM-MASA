import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { 
  IconArrowLeft, 
  IconCheck, 
  IconX, 
  IconQuote,
  IconBell, 
  IconMenu2 
} from 'tabler-icons-react-native';
import { COLORS } from '../../theme/colors';

export default function TeamAdminQueueScreen({ navigation }: { navigation: any }) {
  const [items, setItems] = useState([
    {
      id: 1,
      type: 'reward',
      name: 'Riya Kapoor',
      avatar: 'RK',
      avatarBg: '#0d2019',
      avatarColor: '#5DCAA5',
      subtitle: 'Reward nomination · team member',
      amount: '+20 XRDM',
      badgeBg: '#1e1428',
      badgeBorder: '#534AB7',
      badgeColor: '#AFA9EC',
      quote: 'Fixed the production DB migration issue on a weekend — saved the sprint.',
      meta: 'Nominated by: Arjun Mehta · Jun 25',
    },
    {
      id: 2,
      type: 'claim',
      name: 'Vivek Joshi',
      avatar: 'VJ',
      avatarBg: '#1e1200',
      avatarColor: '#EF9F27',
      subtitle: 'Claim · endorsed by Riya K',
      amount: '+35 XRDM',
      badgeBg: '#1e1200',
      badgeBorder: '#854F0B',
      badgeColor: '#EF9F27',
      quote: 'Set up CI/CD pipeline for the team repo, reducing deploy time by 70%.',
      endorsement: 'Vivek did all the heavy lifting. The whole team benefits every deploy day now. Fully endorse.',
      meta: 'Endorsed Jun 25 · claim by Vivek Joshi',
    }
  ]);

  const handleAction = (id: number, action: string) => {
    alert(`Item ${action}d!`);
    setItems(items.filter(item => item.id !== id));
    navigation.navigate('TeamHistory');
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

      {/* Queue Card */}
      <View style={[styles.sc, { borderColor: '#534AB7' }]}>
        <View style={styles.scHdr}>
          <View>
            <Text style={styles.scEy}>Team admin action</Text>
            <Text style={styles.scTitle}>Approval queue</Text>
          </View>
          <View style={[styles.badge, styles.badgeAmber]}>
            <Text style={styles.badgeTextAmber}>{items.length} pending</Text>
          </View>
        </View>

        {items.length === 0 ? (
          <Text style={styles.emptyText}>No pending team items in queue.</Text>
        ) : (
          items.map(item => (
            <View 
              key={item.id} 
              style={[
                styles.itemCard, 
                item.type === 'reward' ? styles.itemCardReward : styles.itemCardClaim
              ]}
            >
              {/* Card Header */}
              <View style={styles.itemHeader}>
                <View style={styles.profileRow}>
                  <View style={[styles.av, { backgroundColor: item.avatarBg }]}>
                    <Text style={[styles.avText, { color: item.avatarColor }]}>{item.avatar}</Text>
                  </View>
                  <View>
                    <Text style={styles.memName}>{item.name}</Text>
                    <Text style={styles.memSub}>{item.subtitle}</Text>
                  </View>
                </View>
                <View style={[styles.amountBadge, { backgroundColor: item.badgeBg, borderColor: item.badgeBorder }]}>
                  <Text style={[styles.amountText, { color: item.badgeColor }]}>{item.amount}</Text>
                </View>
              </View>

              {/* Description Quote */}
              <Text style={styles.quoteText}>"{item.quote}"</Text>

              {/* Endorsement Section */}
              {item.endorsement && (
                <View style={styles.endorsementBox}>
                  <IconQuote color="#AFA9EC" size={14} style={{ marginRight: 4, marginTop: 2 }} />
                  <Text style={styles.endorsementText}>
                    "{item.endorsement}"
                  </Text>
                </View>
              )}

              {/* Meta information */}
              <Text style={styles.metaText}>{item.meta}</Text>

              {/* Action Buttons */}
              <View style={styles.actRow}>
                <TouchableOpacity 
                  style={[styles.actBtn, styles.abPrimary]}
                  onPress={() => handleAction(item.id, 'approve')}
                >
                  <IconCheck color="#5DCAA5" size={16} style={{ marginRight: 6 }} />
                  <Text style={[styles.actBtnText, { color: '#5DCAA5' }]}>Approve</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={[styles.actBtn, styles.abCoral]}
                  onPress={() => handleAction(item.id, 'reject')}
                >
                  <IconX color="#F0997B" size={16} style={{ marginRight: 6 }} />
                  <Text style={[styles.actBtnText, { color: '#F0997B' }]}>Reject</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
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
  badgeAmber: {
    backgroundColor: '#1e1200',
    borderColor: '#854F0B',
  },
  badgeTextAmber: {
    fontSize: 11,
    fontWeight: '500',
    color: '#EF9F27',
  },
  emptyText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginVertical: 20,
  },
  itemCard: {
    borderRadius: 11,
    borderWidth: 0.5,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  itemCardReward: {
    backgroundColor: '#1e1428',
    borderColor: '#534AB7',
  },
  itemCardClaim: {
    backgroundColor: '#1e1200',
    borderColor: '#854F0B',
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  av: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avText: {
    fontSize: 13,
    fontWeight: '600',
  },
  memName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#d0d0d0',
  },
  memSub: {
    fontSize: 12,
    color: '#666',
  },
  amountBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 7,
    borderWidth: 0.5,
  },
  amountText: {
    fontSize: 11,
    fontWeight: '600',
  },
  quoteText: {
    fontSize: 13,
    color: '#888',
    marginBottom: 8,
    lineHeight: 18,
    fontStyle: 'italic',
  },
  endorsementBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
    backgroundColor: '#111',
    borderWidth: 0.5,
    borderColor: '#222',
    borderRadius: 8,
    padding: 8,
  },
  endorsementText: {
    flex: 1,
    fontSize: 12,
    color: '#AFA9EC',
    lineHeight: 16,
  },
  metaText: {
    fontSize: 11,
    color: '#555',
    marginBottom: 8,
    marginTop: 3,
  },
  actRow: {
    flexDirection: 'row',
    gap: 8,
  },
  actBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 11,
    paddingVertical: 9,
    borderWidth: 0.5,
  },
  abPrimary: {
    backgroundColor: '#0d2019',
    borderColor: '#1D9E75',
  },
  abCoral: {
    backgroundColor: '#1a0e0a',
    borderColor: '#993C1D',
  },
  actBtnText: {
    fontSize: 12,
    fontWeight: '600',
  },
});
