import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col, Divider} from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from './utils';

class Teams3 extends React.PureComponent {
  getBlockChildren = (data) =>
    data.map((item, i) => {
      const { titleWrapper, ...$item } = item;
      return (
        <Col key={i.toString()} {...$item}>
          <a href={titleWrapper.url}>
            {titleWrapper.children.map(getChildrenToRender)}
          </a>
        </Col>
      );
    });

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const listChildren = this.getBlockChildren(dataSource.block.children);
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <Divider key="divider" />
          <OverPack {...dataSource.OverPack}>
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              {...dataSource.block}
              component={Row}
            >
              {listChildren}
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Teams3;
