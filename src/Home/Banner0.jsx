import React from 'react';
import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { isImg } from './utils';

class Banner extends React.PureComponent {
  render() {
    const { ...currentProps } = this.props;
    const { dataSource } = currentProps;
    delete currentProps.dataSource;
    delete currentProps.isMobile;
    return (
      <div {...currentProps} {...dataSource.wrapper}>
        <QueueAnim
          key="QueueAnim"
          type={['bottom', 'top']}
          delay={200}
          {...dataSource.textWrapper}
        >
          <div key="title" {...dataSource.title}>
            {typeof dataSource.title.children === 'string' &&
            dataSource.title.children.match(isImg) ? (
              <img src={dataSource.title.children} width="100%" alt="img" />
            ) : (
              <div {...dataSource.neonWrapper}>
                <div {...dataSource.neonText}> 
                  {dataSource.title.children}
                </div>
              </div>
            )}
          </div>
          <div key="content" {...dataSource.content}>
            <div {...dataSource.smallNeonText}> 
              {dataSource.content.children}
            </div>
          </div>
          <Button ghost key="apply_button" {...dataSource.button1}>
            {dataSource.button1.children}
          </Button>
          
          <Button ghost key="sponsor_button" {...dataSource.button2}>
            {dataSource.button2.children}
          </Button>
        </QueueAnim>
        <TweenOne
          animation={{
            y: '-=20',
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className="banner0-icon"
          key="icon"
        >
          <DownOutlined />
        </TweenOne>
      </div>
    );
  }
}
export default Banner;


/*
    .1vw 0vw .25vw #e1e1e1, .2vw 0vw .25vw #e1e1e1, .4vw 0vw .25vw #e1e1e1, 

    .1vw 0vw   0vw #979797, .2vw 0vw   0vw #979797, .4vw 0vw   0vw #979797,
    .1vw 0vw  .1vw #979797, .2vw 0vw  .1vw #979797, .4vw 0vw  .1vw #979797,
    .1vw 0vw   2vw #979797, .2vw 0vw   2vw #979797, .4vw 0vw   2vw #979797, 

    .1vw 0vw   1vw #0b0b0b, .2vw 0vw   1vw #0b0b0b, .4vw 0vw   5vw #0b0b0b, 
    .1vw 0vw   5vw #0b0b0b, .2vw 0vw  20vw #0b0b0b, .4vw 0vw  10vw #0b0b0b,
    .1vw 0vw  10vw #0b0b0b, .2vw 0vw  30vw #0b0b0b, .4vw 0vw  10vw #0b0b0b;


    .05vw 0vw .125vw #e1e1e1, .1vw 0vw .125vw #e1e1e1, .2vw 0vw .0625vw #e1e1e1, 

    .05vw 0vw   0vw #979797, .1vw 0vw   0vw #979797, .2vw 0vw   0vw #979797,
    .05vw 0vw  .05vw #979797, .1vw 0vw  0.05vw #979797, .2vw 0vw  .05vw #979797,
    .05vw 0vw   1vw #979797, .1vw 0vw   1vw #979797, .2vw 0vw   1vw #979797, 

    .05vw 0vw   0.5vw #0b0b0b, .1vw 0vw   0.5vw #0b0b0b, .2vw 0vw   2.5vw #0b0b0b, 
    .05vw 0vw   2.5vw #0b0b0b, .1vw 0vw  10vw #0b0b0b, .2vw 0vw  5vw #0b0b0b,
    .05vw 0vw  5vw #0b0b0b, .1vw 0vw  15vw #0b0b0b, .2vw 0vw  5vw #0b0b0b;  
    */