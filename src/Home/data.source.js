import React from 'react';
import nu from './images/partners/nublockchain.png';
import usc from './images/partners/usc_cssa.png';

import logo from './images/mega_logo.png';

import jackxu from './images/speakers/jackxu_icon.jpg';
import mattytaylor from './images/speakers/mattytaylor_icon.jpg';
import zackrosen from './images/speakers/zackrosen_icon.jpg';
import camerondennis from './images/speakers/camerondennis_icon.jpg';
import vivienho from './images/speakers/vivienho_icon.jpg'
import ajit from './images/speakers/ajit_icon.jpg'
import spenser from './images/speakers/spenser_icon.jpg'

// import solana from './images/sponsors/solana.svg';
import solana from './images/sponsors/Solana.png';
import serum from './images/sponsors/serum.svg';
import terra from './images/sponsors/terra.svg';

import edudao from './images/partners/edudao.svg';
import bitdao from './images/partners/bitdao.png';

import tsinghua from './images/partners/Tsinghua.png';
import uchicago from './images/partners/uchicago.jpg';
import usc_bc from './images/partners/usc_blockchain.svg';
import imperial_bc from './images/partners/imperial.jpg';
import hku_bc from './images/partners/hku.jpg';
import illini_bc from './images/partners/illini.jpg';


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
                  <p>Prizes</p>
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
                      <p>Sponsors</p>
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
          href: '#Teams1_0',
          children: [
            {
              children: (
                <span>
                  <p>Partners</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item4',
        className: 'header0-item',
        children: {
          href: '#Content3_0',
          children: [
            {
              children: (
                <span>
                  <p>FAQ</p>
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
    // children: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
    children: 'MEGA HACKATHON',
  },
  neonWrapper: {
    className: 'banner0-neon-wrapper',
  },
  neonText: {
    className: 'banner0-neon-text',
  },
  smallNeonText: {
    className: 'banner0-small-neon-text',
  },
  content: {
    className: 'banner0-content',
    children: 'JUNE 15 - JULY 8, 2022',
  },
  button1: { 
    className: 'banner0-button', 
    href: 'https://forms.gle/cGZr2xYr5mMoGkab7',
    children: 'Apply to Hack' 
  },
  button2: { 
    className: 'banner0-button', 
    href: 'mailto:wagmi.megahack@gmail.com',
    children: 'Sponsor Event' 
  },
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
              children: 'DeFi',
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
              children: 'NFT',
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
              children: 'Web3',
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
              children: 'Mini-Games, GameFi, Game interoperability, etc',
            },
          ],
        },
      },
    ],
  },
};

// Sponsors Section
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
  // Sponsors listing
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
          url: "https://solana.com/",
          img: {
            children: solana,
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
          url: "https://www.projectserum.com/",
          img: {
            children: serum,
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
              terra
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
          url: "https://www.linkedin.com/in/cameron-dennis-b93b25104/",
          children: camerondennis,
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
              children: 'Judge',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'Grant Leader @ NEAR Protocol',
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
          url: "https://twitter.com/mattytay",
          children: mattytaylor,
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
          children: zackrosen,
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
              children: 'Judge',
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
          url: "https://twitter.com/headcpx",
          children: jackxu,
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
              children: 'Speaker',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'Co-founder @ EthSign'
            },
          ],
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          url: "https://www.linkedin.com/in/vivienlho/",
          children: vivienho,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { 
              name: 'title', 
              className: 'teams2-title', 
              children: 'Vivien Ho' },
            {
              name: 'content',
              className: 'teams2-job',
              children: 'Judge',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'Principal @ Pear VC',
            },
          ],
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          url: "https://twitter.com/chainyoda",
          children: ajit,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { 
              name: 'title', 
              className: 'teams2-title', 
              children: 'Ajit Tripathi' },
            {
              name: 'content',
              className: 'teams2-job',
              children: 'Judge',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'Web3 Angel Investor',
            },
          ],
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          url: "https://twitter.com/huangspenser",
          children: spenser,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { 
              name: 'title', 
              className: 'teams2-title', 
              children: 'Spenser Huang' },
            {
              name: 'content',
              className: 'teams2-job',
              children: 'Speaker',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'Managing Director @CoinList',
            },
          ],
        },
      },
    ],
  },
};

// Organizer section

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
            <p>Organizers and Partners</p>
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
        md: 12,
        xs: 24,
        titleWrapper: {
          url: "https://www.nublockchaingroup.com/",
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children: nu, 
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                'Northwestern University Blockchain Group',
            },
            {
              name: 'content',
              className: 'teams1-job',
              children: 'Co-Organizer',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 12,
        xs: 24,
        titleWrapper: {
          url: 'https://www.instagram.com/usc.cssa.official/?hl=en',
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children: usc,
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                'USC Chinese Students and Scholars Association',
            },
            {
              name: 'content',
              className: 'teams1-job',
              children: 'Co-Organizer',
            },
          ],
        },
      },
    ],
  },
};

//special partners section
export const Teams30DataSource = {
  wrapper: { className: 'home-page-wrapper teams3-wrapper' },
  page: { className: 'home-page teams3' },
  OverPack: { playScale: 0.3, className: '' },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 12,
        xs: 24,
        titleWrapper: {
          url: "https://www.edudao.io/",
          children: [
            {
              name: 'image',
              className: 'teams3-image',
              children: edudao, 
            },
            // { 
            //   name: 'title', 
            //   className: 'teams3-title', 
            //   children: 'EduDAO' },
            {
              name: 'content',
              className: 'teams3-job',
              children: 'Special Partner',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 12,
        xs: 24,
        titleWrapper: {
          url: "https://www.bitdao.io/",
          children: [
            {
              name: 'image',
              className: 'teams3-image',
              children: bitdao,
            },
            // { 
            //   name: 'title', 
            //   className: 'teams3-title', 
            //   children: 'BitDAO' },
            {
              name: 'content',
              className: 'teams3-job',
              children: 'Special Partner',
            },
          ],
        },
      },
    ],
  },
}

// partners section
export const Teams90DataSource = {
  wrapper: { className: 'home-page-wrapper teams9-wrapper' },
  page: { className: 'home-page teams9' },
  OverPack: { playScale: 0.3, className: '' },
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
          className: 'teams9-image',
          url: "https://www.tsinghua.edu.cn/en/",
          children: tsinghua,
        },
        titleWrapper: {
          className: 'teams9-textWrapper',
          children: [
            { 
              name: 'title', 
              className: 'teams9-title', 
              children: 'Tsinghua University Blockchain Association' },
            {
              name: 'content',
              className: 'teams9-job',
              children: 'Partner',
            },
            // {
            //   name: 'content1',
            //   className: 'teams9-content',
            //   children: 'Top University in China',
            // },
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
          className: 'teams9-image',
          url: "https://blockchainchicago.finance/",
          children: uchicago,
        },
        titleWrapper: {
          className: 'teams9-textWrapper',
          children: [
            { 
              name: 'title', 
              className: 'teams9-title', 
              children: 'UChicago Blockchain Club' },
            {
              name: 'content',
              className: 'teams9-job',
              children: 'Partner',
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
          className: 'teams9-image',
          url: "https://www.blockchainusc.com/",
          children: usc_bc,
        },
        titleWrapper: {
          className: 'teams9-textWrapper',
          children: [
            { 
              name: 'title', 
              className: 'teams9-title', 
              children: 'USC Blockchain Club' },
            {
              name: 'content',
              className: 'teams9-job',
              children: 'Partner',
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
          className: 'teams9-image',
          url: "https://twitter.com/blockchain_ic",
          children: imperial_bc,
        },
        titleWrapper: {
          className: 'teams9-textWrapper',
          children: [
            { 
              name: 'title', 
              className: 'teams9-title', 
              children: 'Imperial Blockchain Group' },
            {
              name: 'content',
              className: 'teams9-job',
              children: 'Partner',
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
          className: 'teams9-image',
          url: "https://linktr.ee/hkublockchain",
          children: hku_bc,
        },
        titleWrapper: {
          className: 'teams9-textWrapper',
          children: [
            { 
              name: 'title', 
              className: 'teams9-title', 
              children: 'Hong Kong University Blockchain Club' },
            {
              name: 'content',
              className: 'teams9-job',
              children: 'Partner',
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
          className: 'teams9-image',
          url: "https://illiniblockchain.notion.site/illiniblockchain/Illini-Blockchain-Public-ac1f93f3ad984e3fa00ce6a42c69b335",
          children: illini_bc,
        },
        titleWrapper: {
          className: 'teams9-textWrapper',
          children: [
            { 
              name: 'title', 
              className: 'teams9-title', 
              children: 'Illini Blockchain' },
            {
              name: 'content',
              className: 'teams9-job',
              children: 'Partner',
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
            'https://img.icons8.com/nolan/344/00C6FF/0072FF/event-accepted-tentatively.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { 
            className: 'content3-title', 
            children: 
            'What is the timeline?' 
          },
          content: {
            className: 'content3-content',
            children:
              'The hackathon will last for 4 weeks, from June 15th to July 8th.',
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
              'https://img.icons8.com/nolan/344/00C6FF/0072FF/hardworking--v1.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { 
            className: 'content3-title', 
            children: 
              'Who can attend?' 
            },
          content: {
            className: 'content3-content',
            children:
            "Mega Hackathon is open to  EVERYONE. There is no experience required. As long as you get access to the Internet," +
            " you can attend",
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
              'https://img.icons8.com/nolan/344/00C6FF/0072FF/address-book.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { 
            className: 'content3-title', 
            children: 'How do I register?' 
          },
          content: {
            className: 'content3-content',
            children:
              'All you need is to fill our form on Dorahacks and join Discord (links below), we will guide you through everything there',
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
              'https://img.icons8.com/nolan/344/00C6FF/0072FF/ask-question.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { 
            className: 'content3-title', 
            children: 'I have more questions...' 
          },
          content: {
            className: 'content3-content',
            children:
              'Join the Discord (link below) and Reach us directly at wagmi.megahack@gmail.com. We would happy to help you.',
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
            'https://img.icons8.com/nolan/344/00C6FF/0072FF/group-of-projects.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { 
            className: 'content3-title', 
            children: 'What kind of project can we submit?' 
          },
          content: {
            className: 'content3-content',
            children:
            "As long as your project fits into one of the 4 tracks, you're good to go. " +
            "We also put some ideas under each track for you to brainstorm. ",
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
              'https://img.icons8.com/nolan/344/00C6FF/0072FF/clothes.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { 
            className: 'content3-title', 
            children: "Will there be merch?" 
          },
          content: {
            className: 'content3-content',
            children:
            "Yes! Our merch is in the form of NFTs and it is limited edition." +
            " You can either purchase one or stay tuned to our merch promotion events.",
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
        name: 'discord',
        href: 'https://discord.gg/JptHtVxJUk',
        className: 'links-discord',
        children:
          'https://img.icons8.com/nolan/344/E6E6E6/808080/discord.png'
      },
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
        href: 'mailto:wagmi.megahack@gmail.com',
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
