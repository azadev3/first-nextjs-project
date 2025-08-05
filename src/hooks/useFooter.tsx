export interface FooterLinks {
  id: number;
  title: string;
  href: string;
}

export interface FooterInterface {
  id: number;
  mainTitle: string;
  links: FooterLinks[];
}

export const useFooter = () => {
  const FooterLinkData: FooterInterface[] = [
    {
      id: 1,
      mainTitle: 'With General',
      links: [
        {
          id: 1,
          title: 'Regeranazation',
          href: '',
        },
        {
          id: 2,
          title: 'Implement',
          href: '',
        },
        {
          id: 3,
          title: 'Lorem Feature',
          href: '',
        },
        {
          id: 4,
          title: 'Ebdul Khal',
          href: '',
        },
        {
          id: 5,
          title: 'Ramon Endui',
          href: '',
        },
        {
          id: 6,
          title: 'Hydration Boom',
          href: '',
        },
      ],
    },
    {
      id: 2,
      mainTitle: 'Main Collabrators',
      links: [
        {
          id: 11,
          title: 'Regeranazation',
          href: '',
        },
        {
          id: 22,
          title: 'Implement',
          href: '',
        },
        {
          id: 33,
          title: 'Lorem Feature',
          href: '',
        },
        {
          id: 44,
          title: 'Ebdul Khal',
          href: '',
        },
        {
          id: 55,
          title: 'Ramon Endui',
          href: '',
        },
        {
          id: 66,
          title: 'Hydration Boom',
          href: '',
        },
      ],
    },
    {
      id: 3,
      mainTitle: 'Transformations',
      links: [
        {
          id: 11,
          title: 'Regeranazation',
          href: '',
        },
        {
          id: 22,
          title: 'Implement',
          href: '',
        },
        {
          id: 33,
          title: 'Lorem Feature',
          href: '',
        },
        {
          id: 44,
          title: 'Ebdul Khal',
          href: '',
        },
        {
          id: 55,
          title: 'Ramon Endui',
          href: '',
        },
        {
          id: 66,
          title: 'Hydration Boom',
          href: '',
        },
      ],
    },
    {
      id: 4,
      mainTitle: 'Home Links',
      links: [
        {
          id: 11,
          title: 'Regeranazation',
          href: '',
        },
        {
          id: 22,
          title: 'Implement',
          href: '',
        },
        {
          id: 33,
          title: 'Lorem Feature',
          href: '',
        },
        {
          id: 44,
          title: 'Ebdul Khal',
          href: '',
        },
        {
          id: 55,
          title: 'Ramon Endui',
          href: '',
        },
        {
          id: 66,
          title: 'Hydration Boom',
          href: '',
        },
      ],
    },
    {
      id: 5,
      mainTitle: 'Prod.Bys',
      links: [
        {
          id: 11,
          title: 'Regeranazation',
          href: '',
        },
        {
          id: 22,
          title: 'Implement',
          href: '',
        },
        {
          id: 33,
          title: 'Lorem Feature',
          href: '',
        },
        {
          id: 44,
          title: 'Ebdul Khal',
          href: '',
        },
        {
          id: 55,
          title: 'Ramon Endui',
          href: '',
        },
        {
          id: 66,
          title: 'Hydration Boom',
          href: '',
        },
      ],
    },
  ];

  return { FooterLinkData };
};
