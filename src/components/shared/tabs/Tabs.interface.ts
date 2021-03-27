export interface TabsProps<T> {
  list: { value: T; label: string }[];
  onSelect: (value: T) => void;
  selectedTab: T;
}
