import { TResumeProfile } from "@src/types/resume";

export const DEFAULT_PROFILE: TResumeProfile = {
  name: 'Kien Ngo',
  contact: {
    address: '123 Avenue Road, ABC XYZ, Toronto, Ontario',
    phone: '(416) 868-6868',
    email: 'kientngo@proton.me',
  },
  extraLinks: [
    {
      displayText: 'Github',
      link: 'https://github.com/kienngo98',
    },
    {
      displayText: 'LinkedIn',
      link: 'https://linkedin.com/in/kienngo98',
    },
  ],
  intro:
    "Put some info about yourself here. It's okay to brag. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam deserunt doloremque, corporis praesentium maxime tenetur ab voluptate eius aut ad eos reiciendis molestias, voluptas perspiciatis labore! Sint dolores minus voluptates.",
  sections: [
    {
      displayText: 'Professional Experience',
      items: [
        {
          link: 'https://company3.com',
          name: 'Company No. 3',
          duration: 'May 2022 - Current',
          location: '',
          title: 'Front End Developer (Contractor)',
          highlights: [
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam deserunt doloremque, corporis praesentium maxime tenetur ab voluptate eius aut ad eos reiciendis molestias, voluptas perspiciatis labore! Sint dolores minus voluptates. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam deserunt doloremque, corporis praesentium maxime tenetur ab voluptate eius aut ad eos reicore! Sint dolores minus voluptates.',
          ],
        },
        {
          link: 'https://company2.com',
          name: 'Company No. 2',
          duration: '2019 - 2022 (3 years)',
          location: 'Toronto, ON',
          title: 'Front End Developer (Full Time)',
          highlights: [
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam deserunt doloremque, corporis praesentium maxime tenetur ab voluptate eius aut ad eos reiciendis molestias, voluptas perspiciatis labore! Sint dolores minus voluptates. consectetur adipisicing elit',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam deserunt doloremque, corporis praesentium maxime tenetur ab voluptate eius aut ad eos reiciendis molestias, voluptas perspiciatis labore! Sint dolores minus voluptates.',
          ],
        },
        {
          link: 'https://company1.com',
          name: 'Company No. 1',
          duration: 'Jan 2018 - May 2018 (5 months)',
          location: 'Toronto, ON',
          title: 'Front End Developer (CO-OP)',
          highlights: [
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam deserunt doloremque, corporis praesentium maxime tenetur ab voluptate eius aut ad eos reiciendis molestias, voluptas perspiciatis labore! Sint dolores minus voluptates. consectetur adipisicing elit',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam deserunt doloremque, corporis praesentium maxime tenetur ab voluptate eius aut ad eos reiciendis molestias, voluptas perspiciatis labore! Sint dolores minus voluptates.',
          ],
        },
      ],
    },
    {
      displayText: 'Projects',
      items: [
        {
          link: 'https://project1.com',
          name: 'Project No. 1',
          duration: '',
          location: 'Toronto, ON',
          title: 'Name of the project',
          highlights: [
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam deserunt doloremque, corporis praesentium maxime tenetur ab voluptate eius aut ad eos reiciendis molestias, voluptas perspiciatis labore! Sint dolores minus voluptates.',
          ],
        },
        {
          link: 'https://project2.com',
          name: 'Project No. 2',
          duration: '',
          location: 'Toronto, ON',
          title: 'Name of the project',
          highlights: [
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam deserunt doloremque, corporis praesentium maxime tenetur ab voluptate eius aut ad eos reiciendis molestias, voluptas perspiciatis labore! Sint dolores minus voluptates.',
          ],
        },
      ],
    },
    {
      displayText: 'Education',
      items: [
        {
          link: null,
          name: 'SOME OVERRATED COLLEGE',
          duration: '2017 - 2019 (3 years)',
          location: 'Toronto, ON',
          title: 'Name of program you took at the college',
          highlights: [
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam deserunt doloremque, corporis praesentium maxime tenetur ab voluptate eius aut ad eos reiciendis molestias, voluptas perspiciatis labore! Sint dolores minus voluptates.',
          ],
        },
        {
          link: null,
          name: 'Some good highschool',
          duration: '2013 - 2016 (3 years)',
          location: 'Vung Tau, Viet Nam',
          title: 'Name of program you took at the highschool',
          highlights: [
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam deserunt doloremque, corporis praesentium maxime tenetur ab voluptate eius aut ad eos reiciendis molestias, voluptas perspiciatis labore! Sint dolores minus voluptates. consectetur adipisicing elit',
          ],
        },
      ],
    },
  ],
};
