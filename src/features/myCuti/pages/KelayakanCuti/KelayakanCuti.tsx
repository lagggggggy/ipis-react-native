import React, {FC} from 'react';
import {ScrollView, View} from 'react-native';
import {Chip, Icon, IconButton, List, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

export interface KelayakanCutiModel {
  id: number;
  kategoriCuti: string;
  jenisCuti: string;
  jenisKelayakan: string;
  nama: string;
  bilanganHari: number;
  aktif: boolean;
}

export interface KelayakanCutiItemProps {
  item: KelayakanCutiModel;
}

const KelayakanCutiItem: FC<KelayakanCutiItemProps> = ({item}) => {
  const handleClick = () => {};
  const handleClickDots = () => {};

  return (
    <List.Item
      titleNumberOfLines={5}
      title={item.nama}
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
              <Text>Jenis Kelayakan</Text>
              <Text
                style={{
                  fontSize: 16,
                }}>
                {item.jenisKelayakan}
              </Text>
            </View>
            <View>
              <Text>Bilangan Hari</Text>
              <Text
                style={{
                  fontSize: 16,
                }}>
                {item.bilanganHari}
              </Text>
            </View>
          </View>
        </View>
      }
      right={props => (
        <IconButton {...props} icon="dots-vertical" onPress={handleClickDots} />
      )}
      style={{
        backgroundColor: '#FCFDFF',
        borderRadius: 8,
        marginBottom: 16,
      }}
      descriptionStyle={{
        marginTop: 16,
      }}
    />
  );
};

const KelayakanCuti: FC = () => {
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
          <List.Section
            style={{
              marginTop: 16,
            }}>
            {kelayakanCutiItems.map((item, idx) => (
              <KelayakanCutiItem key={idx} item={item} />
            ))}
          </List.Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default KelayakanCuti;

const kelayakanCutiItems: KelayakanCutiModel[] = [
  {
    id: 1,
    kategoriCuti: 'Cuti Kerana Perkhidmatan',
    jenisCuti: 'Cuti Rehat',
    jenisKelayakan: 'Tahunan',
    nama: 'LANTIKAN SEBELUM 1 SEPTEMBER 2005 DENGAN TEMPOH PERKHIDMATAN SAMA DENGAN ATAU LEBIH DARI 10 TAHUN',
    bilanganHari: 30,
    aktif: true,
  },
  {
    id: 2,
    kategoriCuti: 'Cuti Kerana Perkhidmatan',
    jenisCuti: 'Cuti Rehat',
    jenisKelayakan: 'Tahunan',
    nama: 'LANTIKAN SEBELUM 1 SEPTEMBER 2005 DENGAN TEMPOH PERKHIDMATAN SAMA DENGAN ATAU LEBIH DARI 10 TAHUN',
    bilanganHari: 30,
    aktif: true,
  },
];
