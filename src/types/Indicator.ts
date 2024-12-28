export interface Indicators {
  onTitlePress: (id: string) => void;
  onIconPress: (id: string) => void;
  id: string;
  title: string;
  subtitle: string;
}
