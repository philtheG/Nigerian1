import { MenuEntry } from 'jetswap-uikit2'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchangejetswap.netlify.app/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchangejetswap.netlify.app/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: '/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: '/profile',
  //     },
  //   ],
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://jetswapinfo.netlify.app/home',
      },
      {
        label: 'Tokens',
        href: 'https://jetswapinfo.netlify.app/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://jetswapinfo.netlify.app/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://jetswapinfo.netlify.app/accounts',
      },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: '#',
      // },
      {
        label: 'Github',
        href: 'https://github.com/jetfuelfinance',
      },
      {
        label: 'Docs',
        href: 'https://jetfuel-finance-1.gitbook.io/jetfuel-finance/in-development/jets-swap-amm',
      },
      {
        label: 'Blog',
        href: 'https://jetfuelfinance.medium.com/',
      },
    ],
  },
]

export default config
