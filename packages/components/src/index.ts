import ThemeProvider from './components/themeprovider';
import Icon from './components/icon';
import IconProvider from './components/iconprovider';
import Avatar from './components/avatar';
import Badge from './components/badge';
import Presence from './components/presence';
import Text from './components/text';
import Button from './components/button';
import Bullet from './components/bullet';
import Marker from './components/marker';
import Divider from './components/divider';
import AvatarButton from './components/avatarbutton';
import Input from './components/input';
import Link from './components/link';
import Toggle from './components/toggle';
import Checkbox from './components/checkbox';
import Radio from './components/radio';
import VirtualizedList from './components/virtualizedlist';
import Tab from './components/tab';
import FormfieldGroup from './components/formfieldgroup';
import { inMemoryCache, webAPIIconsCache } from './utils/icon-cache';

import type { TextType } from './components/text/text.types';

export {
  ThemeProvider,
  Icon,
  IconProvider,
  Avatar,
  Badge,
  Presence,
  Text,
  Button,
  Bullet,
  Marker,
  Divider,
  AvatarButton,
  Input,
  Link,
  Toggle,
  Checkbox,
  Radio,
  VirtualizedList,
  Tab,
  FormfieldGroup,
};

export type {
  TextType,
};

export { inMemoryCache, webAPIIconsCache };
