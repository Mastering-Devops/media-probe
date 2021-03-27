import { TabsProps } from './Tabs.interface';
import './Tabs.css';

function getClassName<T>(selectedValue: T, toCompareValue: T) {
  const classNames = ['tab-item'];
  if (selectedValue === toCompareValue) classNames.push('tab-item-selected');
  return classNames.join(' ');
}

export default function Tabs<T>({ list, onSelect, selectedTab }: TabsProps<T>) {
  const renderTabs = () => {
    return list.map((x, index) => (
      <button
        key={index}
        onClick={() => onSelect(x.value)}
        className={getClassName(selectedTab, x.value)}
      >
        {x.label}
      </button>
    ));
  };
  return <>{renderTabs()}</>;
}
