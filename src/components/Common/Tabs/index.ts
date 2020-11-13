import Container from './Container';
import { TabsContainerProps } from './Container/Container';
import Content from './Content';
import { TabsContentProps } from './Content/Content';

interface Tabs {
  readonly Container: React.FC<TabsContainerProps>;
  readonly Content: React.FC<TabsContentProps>;
}

const Tabs: Tabs = {
  Container,
  Content,
};

export default Tabs;
