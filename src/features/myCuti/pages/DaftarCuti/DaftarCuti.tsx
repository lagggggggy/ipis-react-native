import React, {FC} from 'react';
import {ScrollView, View} from 'react-native';
import {Chip, Icon, IconButton, List, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

export interface PermohonanCutiModel {
  id: number;
  kategoriCuti: string;
  jenisCuti: string;
  jenisPermohonan: string;
  bakiHari: number;
  aktif: boolean;
}

export interface PermohonanCutiItemProps {
  item: PermohonanCutiModel;
}

const PermohonanCutiItem: FC<PermohonanCutiItemProps> = ({item}) => {
  const handleClick = () => {};
  const handleClickDots = () => {};

  return (
    <List.Item
      titleNumberOfLines={5}
      title={item.jenisCuti}
      onPress={handleClick}
      description={
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 8,
            }}>
            <Chip>{item.jenisCuti}</Chip>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View>
              <Text>Baki Hari</Text>
              <Text
                style={{
                  fontSize: 16,
                }}>
                {item.bakiHari}
              </Text>
            </View>
          </View>
        </View>
      }
      style={{
        marginBottom: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        backgroundColor: 'white',
      }}
      descriptionStyle={{
        marginTop: 16,
      }}
    />
  );
};

const PermohonanCuti: FC = () => {
  return (
    <SafeAreaView
      edges={['bottom']}
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 16,
          }}>
          {permohonanCutiGroups.map((group, idx) => (
            <List.Section
              key={idx}
              style={{
                marginBottom: idx < group.items.length - 1 ? 16 : 0,
              }}>
              <List.Subheader
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                {group.kategoriCuti}
              </List.Subheader>
              {group.items.map((item, idy) => (
                <PermohonanCutiItem key={idy} item={item} />
              ))}
            </List.Section>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PermohonanCuti;

const permohonanCutiGroups = [
  {
    kategoriCuti: 'Cuti Kerana Perkhidmatan',
    items: [
      {
        id: 1,
        kategoriCuti: 'Cuti Kerana Perkhidmatan',
        jenisCuti: 'Cuti Rehat',
        jenisPermohonan: 'Tahunan',
        bakiHari: 30,
        aktif: true,
      },
    ],
  },
  {
    kategoriCuti: 'Cuti Atas Sebab Perubatan',
    items: [
      {
        id: 1,
        kategoriCuti: 'Cuti Atas Sebab Perubatan',
        jenisCuti: 'Cuti Sakit Pertama',
        jenisPermohonan: 'Tahunan',
        bakiHari: 30,
        aktif: true,
      },
    ],
  },
];
