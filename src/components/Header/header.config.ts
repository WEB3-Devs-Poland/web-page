import { useTranslation } from 'react-i18next';
import { IconType } from 'react-icons';
import { SiDiscord, SiGithub, SiTwitter, SiYoutube } from 'react-icons/si';

type NavigationLinksModel = {
  isBlank: boolean;
  title: string;
  link: string;
};

export const NavigationLinks = (): NavigationLinksModel[] => {
  const { t } = useTranslation();

  return [
    {
      isBlank: false,
      title: t('header.community'),
      link: '/community',
    },
    {
      isBlank: true,
      title: t('header.jobs'),
      link: 'https://techtree.dev/users/dev1812/bounties',
    },
  ];
};

type SocialLinksModel = {
  name: string;
  Icon: IconType;
  link: string;
};

export const SocialLinks: SocialLinksModel[] = [
  {
    name: 'Discord',
    Icon: SiDiscord,
    link: 'https://discord.gg/aPCQdz5cQA',
  },
  {
    name: 'GitHub',
    Icon: SiGithub,
    link: 'https://github.com/WEB3-Devs-Poland',
  },
  {
    name: 'Twitter',
    Icon: SiTwitter,
    link: 'https://twitter.com/web3DevsPoland',
  },
  {
    name: 'YouTube',
    Icon: SiYoutube,
    link: 'https://www.youtube.com/channel/UCvV6USxk59dGeCQgxBp61bQ',
  },
];
