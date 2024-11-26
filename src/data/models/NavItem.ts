import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';

export type NavItem = {
  key: string;
  title: string;
  icon?: IconSource;
  route?: string;
  disabled?: boolean;
  backgroundColor?: string;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};
