import Dropdown from '../../../../../../components/Dropdown';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC} from 'react';
import {ScrollView, View} from 'react-native';
import {Button, Icon, IconButton, List, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

export interface ProsesCutiModel {
  id: number;
  kategoriCuti: string;
  jenisCuti: string;
  peringkatCuti: string;
  nama: string;
  aktif: boolean;
  kedudukan: number;
}

export interface ProsesCutiItemProps {
  item: ProsesCutiModel;
}

const ProsesCutiItem: FC<ProsesCutiItemProps> = ({item}) => {
  const handleClick = () => {};
  const handleClickDots = () => {};

  return (
    <List.Item
      title={item.nama}
      onPress={handleClick}
      description={
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {item.aktif ? (
              <Icon source="check" size={20} color="green" />
            ) : (
              <Icon source="close" size={20} color="red" />
            )}
            <Text
              style={{
                marginLeft: 8,
              }}>
              {item.aktif ? 'Aktif' : 'Tidak Aktif'}
            </Text>
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

const ProsesCuti: FC = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const [kategoriCuti, setKategoriCuti] = React.useState<string | null>(null);
  const [jenisCuti, setJenisCuti] = React.useState<string | null>(null);
  const [peringkatCuti, setPeringkatCuti] = React.useState<string | null>(null);

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
          <Dropdown
            label="Kategori Cuti"
            placeholder="Pilih Kategori Cuti"
            options={[
              'Cuti Kerana Perkhidmatan',
              'Cuti Atas Sebab Perubatan',
              'Cuti Tanpa Rekod',
            ]}
            value={kategoriCuti}
            onChange={setKategoriCuti}
            containerStyle={{
              marginBottom: 16,
            }}
          />
          <Dropdown
            label="Jenis Cuti"
            placeholder="Pilih Jenis Cuti"
            options={['Cuti Rehat']}
            value={jenisCuti}
            onChange={setJenisCuti}
            containerStyle={{
              marginBottom: 16,
            }}
          />
          <Dropdown
            label="Peringkat Cuti"
            placeholder="Pilih Peringkat Cuti"
            options={['Permohonan', 'Ganjaran Cuti Rehat', 'Pembatalan']}
            value={peringkatCuti}
            onChange={setPeringkatCuti}
            containerStyle={{
              marginBottom: 16,
            }}
          />
          <Button
            mode="contained"
            buttonColor="#37ABFF"
            uppercase={false}
            icon="plus"
            onPress={() => navigation.navigate('DaftarCuti')}
            style={{
              marginTop: 8,
              borderRadius: 8,
            }}
            contentStyle={{
              height: 48,
            }}>
            Daftar
          </Button>
          <List.Section
            style={{
              marginTop: 16,
            }}>
            <List.Subheader
              style={{
                fontWeight: 'bold',
              }}>
              PERMOHONAN
            </List.Subheader>
            {prosesCutiItems.map((item, idx) => (
              <ProsesCutiItem key={idx} item={item} />
            ))}
          </List.Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProsesCuti;

const prosesCutiItems: ProsesCutiModel[] = [
  {
    id: 1,
    kategoriCuti: 'Cuti Kerana Perkhidmatan',
    jenisCuti: 'Cuti Rehat',
    peringkatCuti: 'Permohonan',
    nama: 'Permohonan',
    aktif: true,
    kedudukan: 1,
  },
  {
    id: 1,
    kategoriCuti: 'Cuti Kerana Perkhidmatan',
    jenisCuti: 'Cuti Rehat',
    peringkatCuti: 'Permohonan',
    nama: 'Pengganti',
    aktif: true,
    kedudukan: 1,
  },
  {
    id: 1,
    kategoriCuti: 'Cuti Kerana Perkhidmatan',
    jenisCuti: 'Cuti Rehat',
    peringkatCuti: 'Permohonan',
    nama: 'Penyokong',
    aktif: false,
    kedudukan: 1,
  },
];
