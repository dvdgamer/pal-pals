import Collapsible from 'react-native-collapsible';

export default function Collapsible(): React.JSX.Element{
  const isCollapsed = true;

  return(
  <Collapsible collapsed={isCollapsed}>
    <SomeCollapsedView />
  </Collapsible>
  )
}
;
