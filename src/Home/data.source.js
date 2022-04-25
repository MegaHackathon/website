import React from 'react';
import nu from './images/nublockchain.png';
import usc from './images/usc_cssa.jpg';
import logo from './images/mega_logo.PNG';

// Nav bar
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: logo,
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '#Feature1_0',
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <p>About</p>
                    </span>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: '#Feature6_0',
          children: [
            {
              children: (
                <span>
                  <p>Tracks & Prizes</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item2',
        className: 'header0-item',
        children: {
          href: '#Content12_0',
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <p>Sponsors & Speakers</p>
                    </span>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item3',
        className: 'header0-item',
        children: {
          href: '#Content3_0',
          children: [
            {
              children: (
                <span>
                  <p>FAQ & Contact</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};

// Landing page header
export const Banner01DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
  },
  content: {
    className: 'banner0-content',
    children: 'June 15th - July 8th, 2022',
  },
  button: { className: 'banner0-button', children: 'Learn More' },
};

// About Section
export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: 'https://i.imgur.com/I7IYd4K_d.webp?maxwidth=760&fidelity=grand',
  },
  text1Wrapper: { className: 'content1-text', md: 10, xs: 24 },
  text2Wrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <p>About</p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <p>
          We’re the first student-held Blockchain Hackathon consisting of U.S
          top-tier universities from Northwestern, USC, UChicago, and more. The
          Hackathon (100% remote) is open for EVERYONE to attend, and our goal
          is to connect talented builders with different ecosystems, protocols,
          and investors.{' '}
        </p>
      </span>
    ),
  },
};

// Bounties Section
export const Feature60DataSource = {
  wrapper: { className: 'home-page-wrapper feature6-wrapper' },
  OverPack: { className: 'home-page feature6', playScale: 0.3 },
  Carousel: {
    className: 'feature6-content',
    dots: false,
    wrapper: { className: 'feature6-content-wrapper' },
    titleWrapper: {
      className: 'feature6-title-wrapper',
      barWrapper: {
        className: 'feature6-title-bar-wrapper',
        children: { className: 'feature6-title-bar' },
      },
      title: { className: 'feature6-title' },
    },
    children: [
      {
        title: {
          className: 'feature6-title-text',
          children: (
            <span>
              <p>Bounties</p>
              <p>
                <br />
              </p>
            </span>
          ),
        },
        className: 'feature6-item',
        name: 'block0',
        children: [
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child2',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: 'K' },
              toText: true,
              children: '80',
            },
            children: { className: 'feature6-text', children: 'in total prize pool' },
          },
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child0',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '' },
              toText: true,
              children: '4',
            },
            children: { className: 'feature6-text', children: 'unique tracks' },
          },
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child1',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: 'K' },
              toText: true,
              children: '20',
            },
            children: { className: 'feature6-text', children: 'bounty for each track' },
          },
        ],
      },
    ],
  },
};

// Track Section
export const Feature70DataSource = {
  wrapper: { className: 'home-page-wrapper feature7-wrapper' },
  page: { className: 'home-page feature7' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'feature7-title-wrapper',
    children: [
      {
        name: 'title',
        className: 'feature7-title-h1',
        children: (
          <span>
            <p>Tracks</p>
          </span>
        ),
      },
      {
        name: 'content',
        className: 'feature7-title-content',
        children: 'Blockchain-centric hackathon tracks',
      },
    ],
  },
  // track 1
  blockWrapper: {
    className: 'feature7-block-wrapper',
    gutter: 24,
    children: [
      {
        md: 6,
        xs: 24,
        name: 'block0',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                'https://img.icons8.com/nolan/344/00C6FF/0072FF/bonds.png',
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: 'Defi Track',
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: 'Asset Management Tool, DEX, Derivatives, Stablecoins, etc.',
            },
          ],
        },
      },
      // track 2
      {
        md: 6,
        xs: 24,
        name: 'block1',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                'https://img.icons8.com/nolan/344/00C6FF/0072FF/image.png',
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: 'NFT Track',
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: 'Auction Mechanics, Fractionalization, etc.',
            },
          ],
        },
      },
      // track 3
      {
        md: 6,
        xs: 24,
        name: 'block2',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                'https://img.icons8.com/nolan/344/00C6FF/0072FF/internet.png',
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: 'Web3 Track',
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: 'Communication layers, creative Social Fis, etc.',
            },
          ],
        },
      },
      // track 4
      {
        md: 6,
        xs: 24,
        name: 'block3',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                'https://img.icons8.com/nolan/344/00C6FF/0072FF/controller.png',
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: 'Gaming',
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: 'Mini-Games, Features allowing interoperability, etc',
            },
          ],
        },
      },
    ],
  },
};

// Sponsor Section
export const Content120DataSource = {
  wrapper: { className: 'home-page-wrapper content12-wrapper' },
  page: { className: 'home-page content12' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      // {
      //   name: 'image',
      //   children:
      //     'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
      //   className: 'title-image',
      // },
      {
        name: 'title',
        children: (
          <span>
            <p>Sponsors</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  // Sponsor listing
  block: {
    className: 'img-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          url: "https://polygon.technology/",
          img: {
            children:
              'https://chainstack.com/wp-content/uploads/2021/12/Group-877-11.png',
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          url: "https://polygon.technology/",
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/hkLGkrlCEkGZeMQlnEkD.svg',
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          url: "https://www.terra.money/",
          img: {
            children:
              'https://www.cryptocoinzone.com/wp-content/uploads/2021/10/Terra-LUNA-logo.png',
          },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          url: "https://polygon.technology/",
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/UcsyszzOabdCYDkoPPnM.svg',
          },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          url: "https://polygon.technology/",
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/kRBeaICGexAmVjqBEqgw.svg',
          },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          url: "https://solana.com/",
          img: {
            children:
              'https://www.logosvgpng.com/wp-content/uploads/2021/12/solana-logo-vector.png',
          },
        },
      },
    ],
  },
};

// judges section
export const Teams21DataSource = {
  wrapper: { className: 'home-page-wrapper teams2-wrapper' },
  page: { className: 'home-page teams2' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Judges and Speakers</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'block-wrapper',
    gutter: 72,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          url: "https://www.linkedin.com/in/boyuan-xu/",
          children:
            'https://media-exp1.licdn.com/dms/image/C5603AQH8AC2K_H0RHA/profile-displayphoto-shrink_800_800/0/1649179774475?e=1656547200&v=beta&t=rdpLvyTJYzQNVt1NVpTltyp_hexyLKg1YOvJ5vxal8A',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { 
              name: 'title', 
              className: 'teams2-title', 
              children: 'Jack Xu' },
            {
              name: 'content',
              className: 'teams2-job',
              children: 'Judge and Speaker',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'Co-founder @ EthSign; Blockchain lecturer @ USC',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          url: "https://www.linkedin.com/in/mattytay/",
          children:
            'https://media-exp1.licdn.com/dms/image/C5603AQH-81kfZyuG3Q/profile-displayphoto-shrink_800_800/0/1642727271855?e=1656547200&v=beta&t=eghXwlhRv6wqUPxLaWHKtnyNRyoA8ghT0PmfLcEhMjs',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { 
              name: 'title', 
              className: 'teams2-title', 
              children: 'Matty Taylor' },
            {
              name: 'content',
              className: 'teams2-job',
              children: 'Judge and Speaker',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'Head of Growth @Solana',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          url: "https://www.linkedin.com/in/zrosen/",
          children:
            'https://media-exp1.licdn.com/dms/image/C4D03AQEULXzQD6-69A/profile-displayphoto-shrink_800_800/0/1602826440728?e=1656547200&v=beta&t=gtBxPVWv7UqCCnn6sVwz9GmlRQSKM5DwywZmtXe6aLo',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { 
              name: 'title', 
              className: 'teams2-title', 
              children: 'Zack Rosen' },
            {
              name: 'content',
              className: 'teams2-job',
              children: 'Judge and Speaker',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'Investor @ Ribbit Capital',
            },
          ],
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          url: "https://www.linkedin.com/in/cameron-dennis-b93b25104/",
          children:
            'https://media-exp1.licdn.com/dms/image/C5603AQEJx75_wNFGsQ/profile-displayphoto-shrink_800_800/0/1620738348612?e=1656547200&v=beta&t=C9HJ5J9Ni8yspFCtTzdU6tQ2RILEyh5dRAWdcsOB3ms',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { 
              name: 'title', 
              className: 'teams2-title', 
              children: 'Cameron Dennis' },
            {
              name: 'content',
              className: 'teams2-job',
              children: 'Judge and Speaker',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'President and Founder of Blockchain Acceleration Founder',
            },
          ],
        },
      },
    ],
  },
};

// partners section
export const Teams10DataSource = {
  wrapper: { className: 'home-page-wrapper teams1-wrapper' },
  page: { className: 'home-page teams1' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Partners</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              url: "https://www.nublockchaingroup.com/",
              children: nu,
            },
            { 
              name: 'title', 
              className: 'teams1-title', 
              children: 'Northwestern Blockchain Group' },
            {
              name: 'content',
              className: 'teams1-job',
              children: 'Co-Organizer',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                'Northwestern University\'s Primier Blockchain Organization',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              url: 'https://www.instagram.com/usc.cssa/?hl=en',
              children: usc,
            },
            { 
              name: 'title', 
              className: 'teams1-title', 
              children: 'USC CSSA' },
            {
              name: 'content',
              className: 'teams1-job',
              children: 'Co-Organizer',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                'USC Chinese Students and Scholars Association',
            },
          ],
        },
      },
    ],
  },
};

// faq section
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>FAQ</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: 'Frequently Asked Questions and Contact Information', 
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '企业资源管理' },
          content: {
            className: 'content3-content',
            children:
              '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '云安全' },
          content: {
            className: 'content3-content',
            children:
              '按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。',
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '云监控' },
          content: {
            className: 'content3-content',
            children:
              '分布式云环境集中监控，统一资源及应用状态视图，智能分析及故障定位。',
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '移动' },
          content: {
            className: 'content3-content',
            children:
              '一站式移动金融APP开发及全面监控；丰富可用组件，动态发布和故障热修复。',
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '分布式中间件' },
          content: {
            className: 'content3-content',
            children:
              '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。',
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '大数据' },
          content: {
            className: 'content3-content',
            children:
              '一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。',
          },
        },
      },
    ],
  },
};

// Footer section
export const Footer20DataSource = {
  wrapper: { className: 'home-page-wrapper footer2-wrapper' },
  OverPack: { className: 'home-page footer2', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    href: '#Nav0_0',
    children: [
      {
        name: 'image',
        children: logo,
        className: 'copyright-logo',
      },
      {
        name: 'group',
        children: 'Mega Hackathon 2022',
        className: 'copyright-group',
      },
      // {
      //   name: 'image2',
      //   children:
      //     'https://gw.alipayobjects.com/zos/rmsportal/fgGmQUfiUfSBfvsQpfOj.svg',
      //   className: 'copyright-line',
      // },
      // {
      //   name: 'copyright',
      //   children: 'Copyright © Mega Hackathon 2022',
      //   className: 'copyright-text',
      // },
    ],
  },
  links: {
    className: 'links',
    children: [
      {
        name: 'linkedin',
        href: 'https://www.linkedin.com/company/mega-hackathon-2022/about/',
        className: 'links-linkedin',
        children:
          'https://img.icons8.com/nolan/344/E6E6E6/808080/linkedin.png',
      },
      {
        name: 'instagram',
        href: 'https://twitter.com/MegaHack11',
        className: 'links-instagram',
        children:
          'https://img.icons8.com/nolan/344/E6E6E6/808080/twitter.png',
      },
      {
        name: 'email',
        href: 'maito:wagmi.megahack@gmail.com',
        className: 'links-email',
        children:
          'https://img.icons8.com/nolan/344/E6E6E6/808080/new-post.png'
      },
      {
        name: 'dorahacks',
        href: 'https://dorahacks.io/hackathon/23/',
        className: 'links-dorahacks',
        children:
          'https://img.icons8.com/nolan/344/E6E6E6/808080/internet.png',
      },
    ],
  },
};



export const Teams30DataSource = {
  wrapper: { className: 'home-page-wrapper teams3-wrapper' },
  page: { className: 'home-page teams3' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Partners</p>
          </span>
        ),
      },
    ],
  },
  blockTop: {
    className: 'block-top-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block-top',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams3-top-image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
            },
            {
              name: 'title',
              className: 'teams3-top-title',
              children: 'NU Blockchain Group',
            },
            {
              name: 'content',
              className: 'teams3-top-job',
              children: 'Co-Organizer',
            },
            {
              name: 'content1',
              className: 'teams3-top-content',
              children:
                'Northwestern University Primier Blockchain Group',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block-top',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams3-top-image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
            },
            { 
              name: 'title', 
              className: 'teams3-top-title', 
              children: 'USC CSSA' },
            {
              name: 'content',
              className: 'teams3-top-job',
              children: 'Co-Organizer',
            },
            {
              name: 'content1',
              className: 'teams3-top-content',
              children:
                'USC China Association?',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block-top',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams3-top-image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
            },
            {
              name: 'title',
              className: 'teams3-top-title',
              children: '叶秀英',
            },
            {
              name: 'content',
              className: 'teams3-top-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams3-top-content',
              children:
                'AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
            },
          ],
        },
      },
    ],
  },
  block: {
    className: 'block-wrapper',
    gutter: 72,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            { name: 'title', className: 'teams3-title', children: '叶秀英' },
            {
              name: 'content',
              className: 'teams3-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: 'AntV 是蚂蚁金服全新一代数据可视化解决方案。',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            { name: 'title', className: 'teams3-title', children: '韩勇' },
            {
              name: 'content',
              className: 'teams3-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: '语雀是一款优雅高效的在线文档编辑与协同工具。',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            { name: 'title', className: 'teams3-title', children: '叶秀英' },
            {
              name: 'content',
              className: 'teams3-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: 'AntV 是蚂蚁金服全新一代数据可视化解决方案。',
            },
          ],
        },
      },
    ],
  },
};