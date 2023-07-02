import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const dummyData = {
  message: 'Successfully fetched the search results.',
  data: {
    results: [
      {
        id: '5f044f11a55e24365a7236f7',
        slug: 'massachusetts-institute-of-technology',
        name: 'Massachusetts Institute of Technology',
        campus_name: null,
        is_main_campus: true,
        logo: 'https://cdn.ischoolconnect.com/logo/1555.png',
        address: {
          city: 'Cambridge',
          state: 'Massachusetts',
          country: 'United States of America',
          country_code: 'USA',
        },
        is_partner: false,
        account_info: {
          partnership_type: [],
        },
        rank: {
          isc_regional: {
            min: 3,
            max: 3,
          },
          isc_global: {
            min: 3,
            max: 3,
          },
        },
        stats: {
          acceptance_rate: 4,
          grad_kaplan_english_level: 0,
          undergrad_kaplan_english_level: 0,
        },
        courses_count: 18,
        courses: [
          {
            school_id: '5f4fe399a0d2ed982b41880f',
            course_id: '5f04597523831b3f8273af2a',
            school_name: 'School of Architecture and Planning',
            school_slug:
              'massachusetts-institute-of-technology-school-of-architecture-and-planning',
            name: 'Architecture',
            degree: ['Masters'],
            tuition: {
              currency: 'USD',
              value: 28795,
            },
            sacm_approved: true,
            application_deadlines: [
              {
                year: 2023,
                months: [],
              },
              {
                year: 2024,
                months: [9],
              },
              {
                year: 2025,
                months: [9],
              },
              {
                year: 2026,
                months: [9],
              },
            ],
            has_applied: false,
            is_application_deletable: false,
            is_shortlisted: false,
          },
          {
            school_id: '5f4fe399a0d2ed982b41880f',
            course_id: '5f04597523831b3f8273af2b',
            school_name: 'School of Architecture and Planning',
            school_slug:
              'massachusetts-institute-of-technology-school-of-architecture-and-planning',
            name: 'Real Estate Development',
            degree: ['Masters'],
            tuition: {
              currency: 'USD',
              value: 28795,
            },
            sacm_approved: true,
            application_deadlines: [
              {
                year: 2023,
                months: [],
              },
              {
                year: 2024,
                months: [9],
              },
              {
                year: 2025,
                months: [9],
              },
              {
                year: 2026,
                months: [9],
              },
            ],
            has_applied: false,
            is_application_deletable: false,
            is_shortlisted: false,
          },
        ],
      },
      {
        id: '5f044f11a55e24365a723657',
        slug: 'johns-hopkins-university',
        name: 'Johns Hopkins University',
        campus_name: null,
        is_main_campus: true,
        logo: 'https://cdn.ischoolconnect.com/logo/1395.png',
        address: {
          city: 'Baltimore',
          state: 'Maryland',
          country: 'United States of America',
          country_code: 'USA',
        },
        is_partner: true,
        account_info: {
          partnership_type: ['PARTNER'],
        },
        rank: {
          isc_regional: {
            min: 12,
            max: 12,
          },
          isc_global: {
            min: 14,
            max: 14,
          },
        },
        stats: {
          acceptance_rate: 13,
          grad_kaplan_english_level: 0,
          undergrad_kaplan_english_level: 0,
        },
        courses_count: 1,
        courses: [
          {
            school_id: '5f4fe399a0d2ed982b418867',
            course_id: '5f04597323831b3f8273a925',
            school_name: 'Carey Business School',
            school_slug: 'johns-hopkins-university-carey-business-school',
            name: 'Real Estate and Infrastructure',
            degree: ['Masters'],
            tuition: {
              currency: 'USD',
              value: 76500,
            },
            sacm_approved: false,
            duration: 365,
            application_deadlines: [
              {
                year: 2023,
                months: [],
              },
              {
                year: 2024,
                months: [8],
              },
              {
                year: 2025,
                months: [8],
              },
              {
                year: 2026,
                months: [8],
              },
            ],
            has_applied: false,
            is_application_deletable: false,
            is_shortlisted: false,
          },
        ],
      },
      {
        id: '5f044f14a55e24365a723aa4',
        slug: 'university-of-wisconsin-madison',
        name: 'University of Wisconsin',
        campus_name: 'Madison',
        is_main_campus: true,
        logo: 'https://cdn.ischoolconnect.com/logo/2530.png',
        address: {
          city: 'Madison',
          state: 'Wisconsin',
          country: 'United States of America',
          country_code: 'USA',
        },
        is_partner: false,
        account_info: {
          partnership_type: [],
        },
        rank: {
          isc_regional: {
            min: 23,
            max: 23,
          },
          isc_global: {
            min: 32,
            max: 32,
          },
        },
        stats: {
          acceptance_rate: 52,
          grad_kaplan_english_level: 0,
          undergrad_kaplan_english_level: 0,
        },
        courses_count: 1,
        courses: [
          {
            school_id: '5f9152777d63df84c2c60b38',
            course_id: '63188e14d90f4fa215b378b1',
            school_name: 'Graduate School',
            school_slug: 'university-of-wisconsin-madison-graduate-school',
            name: 'Landscape Architecture',
            degree: ['Masters'],
            tuition: {
              currency: 'USD',
              value: 25504,
            },
            sacm_approved: true,
            application_deadlines: [
              {
                year: 2023,
                months: [],
              },
              {
                year: 2024,
                months: [9, 1],
              },
              {
                year: 2025,
                months: [9, 1],
              },
              {
                year: 2026,
                months: [9, 1],
              },
            ],
            has_applied: false,
            is_application_deletable: false,
            is_shortlisted: false,
          },
        ],
      },
      {
        id: '5f044f14a55e24365a72399c',
        slug: 'university-of-edinburgh',
        name: 'University of Edinburgh',
        campus_name: null,
        is_main_campus: true,
        logo: 'https://cdn.ischoolconnect.com/logo/2247.png',
        address: {
          city: 'Edinburgh',
          state: 'Edinburgh',
          country: 'United Kingdom',
          country_code: 'GBR',
        },
        is_partner: true,
        account_info: {
          partnership_type: ['PARTNER'],
        },
        rank: {
          isc_regional: {
            min: 6,
            max: 6,
          },
          isc_global: {
            min: 42,
            max: 42,
          },
        },
        stats: {
          acceptance_rate: null,
          grad_kaplan_english_level: 0,
          undergrad_kaplan_english_level: 0,
        },
        courses_count: 20,
        courses: [
          {
            school_id: '5fb4d86d5f100d108f587435',
            course_id: '63c7ba6ecda2f87725022add',
            school_name: 'College of Arts, Humanities and Social Sciences',
            school_slug:
              'university-of-edinburgh-college-of-arts-humanities-and-social-sciences',
            name: 'Architecture',
            degree: ['Masters'],
            tuition: {
              currency: 'GBP',
              value: 0,
            },
            sacm_approved: false,
            application_deadlines: [
              {
                year: 2023,
                months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
              },
              {
                year: 2024,
                months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
              },
              {
                year: 2025,
                months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
              },
              {
                year: 2026,
                months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
              },
            ],
            has_applied: false,
            is_application_deletable: false,
            is_shortlisted: false,
          },
          {
            school_id: '5fb4d86d5f100d108f587435',
            course_id: '63c7ba6ecda2f87725022ae7',
            school_name: 'College of Arts, Humanities and Social Sciences',
            school_slug:
              'university-of-edinburgh-college-of-arts-humanities-and-social-sciences',
            name: 'Landscape Architecture',
            degree: ['Masters'],
            tuition: {
              currency: 'GBP',
              value: 0,
            },
            sacm_approved: false,
            application_deadlines: [
              {
                year: 2023,
                months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
              },
              {
                year: 2024,
                months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
              },
              {
                year: 2025,
                months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
              },
              {
                year: 2026,
                months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
              },
            ],
            has_applied: false,
            is_application_deletable: false,
            is_shortlisted: false,
          },
        ],
      },
      {
        id: '5f044f14a55e24365a7239b5',
        slug: 'university-of-illinois-at-urbana-champaign',
        name: 'University of Illinois at Urbana',
        campus_name: 'Champaign',
        is_main_campus: true,
        logo: 'https://cdn.ischoolconnect.com/logo/2273.png',
        address: {
          city: 'Champaign',
          state: 'Illinois',
          country: 'United States of America',
          country_code: 'USA',
        },
        is_partner: false,
        account_info: {
          partnership_type: [],
        },
        rank: {
          isc_regional: {
            min: 28,
            max: 28,
          },
          isc_global: {
            min: 45,
            max: 454,
          },
        },
        stats: {
          acceptance_rate: 62,
          grad_kaplan_english_level: 0,
          undergrad_kaplan_english_level: 0,
        },
        courses_count: 1,
        courses: [
          {
            school_id: '6188e7512f8fef6041cd5637',
            course_id: '634f91f6f0297b52fb3c89b5',
            school_name: 'Main',
            school_slug: 'university-of-illinois-at-urbana-champaign-main',
            name: 'Construction Management',
            degree: ['Bachelors'],
            tuition: {
              currency: 'USD',
              value: 45774,
            },
            sacm_approved: true,
            application_deadlines: [
              {
                year: 2023,
                months: [],
              },
              {
                year: 2024,
                months: [9],
              },
              {
                year: 2025,
                months: [9],
              },
              {
                year: 2026,
                months: [9],
              },
            ],
            has_applied: false,
            is_application_deletable: false,
            is_shortlisted: false,
          },
        ],
      },
      {
        id: '613b61d7343db2bd5d292b5c',
        slug: 'utrecht-university',
        name: 'Utrecht University',
        campus_name: null,
        is_main_campus: true,
        logo: 'https://cdn.ischoolconnect.com/logo/6124.png',
        address: {
          city: 'Utrecht',
          state: 'Utrecht',
          country: 'Netherlands',
          country_code: 'NLD',
        },
        is_partner: false,
        account_info: {
          partnership_type: [],
        },
        rank: {
          isc_regional: {
            min: 1,
            max: 1,
          },
          isc_global: {
            min: 54,
            max: 54,
          },
        },
        stats: {
          acceptance_rate: null,
          grad_kaplan_english_level: 0,
          undergrad_kaplan_english_level: 0,
        },
        courses_count: 3,
        courses: [
          {
            school_id: '613b61d8343db2bd5d292b71',
            course_id: '61bb4563f053ff6570d6109e',
            school_name: 'Main',
            school_slug: 'utrecht-university-main',
            name: 'Intellectual Property - Innovation and Technology',
            degree: ['Masters'],
            tuition: {
              currency: 'EUR',
              value: 17500,
            },
            sacm_approved: true,
            duration: 365,
            application_deadlines: [
              {
                year: 2023,
                months: [],
              },
              {
                year: 2024,
                months: [9],
              },
              {
                year: 2025,
                months: [9],
              },
              {
                year: 2026,
                months: [9],
              },
            ],
            has_applied: false,
            is_application_deletable: false,
            is_shortlisted: false,
          },
          {
            school_id: '613b61d8343db2bd5d292b71',
            course_id: '61bb4566f053ff6570d6114c',
            school_name: 'Main',
            school_slug: 'utrecht-university-main',
            name: 'Intellectual Property - Innovation and Technology',
            degree: ['Masters'],
            tuition: {
              currency: 'EUR',
              value: 17500,
            },
            sacm_approved: true,
            duration: 365,
            application_deadlines: [
              {
                year: 2023,
                months: [],
              },
              {
                year: 2024,
                months: [9],
              },
              {
                year: 2025,
                months: [9],
              },
              {
                year: 2026,
                months: [9],
              },
            ],
            has_applied: false,
            is_application_deletable: false,
            is_shortlisted: false,
          },
        ],
      },
      {
        id: '5fec93a9b4651e443c847c9c',
        slug: 'technical-university-of-munich-main',
        name: 'Technical University of Munich',
        campus_name: 'Main',
        is_main_campus: true,
        logo: 'https://cdn.ischoolconnect.com/logo/4877.png',
        address: {
          city: 'Munich',
          state: 'Bavaria',
          country: 'Germany',
          country_code: 'DEU',
        },
        is_partner: false,
        account_info: {
          partnership_type: [],
        },
        rank: {
          isc_regional: {
            min: 1,
            max: 1,
          },
          isc_global: {
            min: 56,
            max: 56,
          },
        },
        stats: {
          acceptance_rate: null,
          grad_kaplan_english_level: 0,
          undergrad_kaplan_english_level: 0,
        },
        courses_count: 5,
        courses: [
          {
            school_id: '5fec93beb4651e443c847cb5',
            course_id: '5feca08cb4651e443c8c5368',
            school_name: 'Main',
            school_slug: 'technical-university-of-munich-main-main',
            name: 'Architecture',
            degree: ['Bachelors'],
            tuition: {
              currency: 'EUR',
              value: 0,
            },
            sacm_approved: true,
            application_deadlines: [
              {
                year: 2023,
                months: [10],
              },
              {
                year: 2024,
                months: [10],
              },
              {
                year: 2025,
                months: [10],
              },
              {
                year: 2026,
                months: [10],
              },
            ],
            has_applied: false,
            is_application_deletable: false,
            is_shortlisted: false,
          },
          {
            school_id: '5fec93beb4651e443c847cb5',
            course_id: '5feca08cb4651e443c8c5370',
            school_name: 'Main',
            school_slug: 'technical-university-of-munich-main-main',
            name: 'Landscape Architecture and Landscape Planning',
            degree: ['Bachelors'],
            tuition: {
              currency: 'EUR',
              value: 0,
            },
            sacm_approved: true,
            application_deadlines: [
              {
                year: 2023,
                months: [10],
              },
              {
                year: 2024,
                months: [10],
              },
              {
                year: 2025,
                months: [10],
              },
              {
                year: 2026,
                months: [10],
              },
            ],
            has_applied: false,
            is_application_deletable: false,
            is_shortlisted: false,
          },
        ],
      },
      {
        id: '613b61d8343db2bd5d292b60',
        slug: 'university-of-groningen',
        name: 'University of Groningen',
        campus_name: null,
        is_main_campus: true,
        logo: 'https://cdn.ischoolconnect.com/logo/6126.png',
        address: {
          city: 'Groningen',
          state: 'North Brabant',
          country: 'Netherlands',
          country_code: 'NLD',
        },
        is_partner: false,
        account_info: {
          partnership_type: [],
        },
        rank: {
          isc_regional: {
            min: 2,
            max: 2,
          },
          isc_global: {
            min: 66,
            max: 66,
          },
        },
        stats: {
          acceptance_rate: null,
          grad_kaplan_english_level: 0,
          undergrad_kaplan_english_level: 0,
        },
        courses_count: 1,
        courses: [
          {
            school_id: '613b61d8343db2bd5d292b77',
            course_id: '61bb4591f053ff6570d621a8',
            school_name: 'Main',
            school_slug: 'university-of-groningen-main',
            name: 'Real Estate Studies',
            degree: ['Masters'],
            tuition: {
              currency: 'EUR',
              value: 14816,
            },
            sacm_approved: true,
            duration: 365,
            application_deadlines: [
              {
                year: 2023,
                months: [],
              },
              {
                year: 2024,
                months: [9],
              },
              {
                year: 2025,
                months: [9],
              },
              {
                year: 2026,
                months: [9],
              },
            ],
            has_applied: false,
            is_application_deletable: false,
            is_shortlisted: false,
          },
        ],
      },
      {
        id: '62960846529d9c84383262b4',
        slug: 'university-of-minnesota-crookston-campus',
        name: 'University of Minnesota',
        campus_name: 'Crookston Campus',
        is_main_campus: false,
        logo: 'https://cdn.ischoolconnect.com/logo/9258.png',
        address: {
          city: 'Crookston',
          state: 'Minnesota',
          country: 'United States of America',
          country_code: 'USA',
        },
        is_partner: false,
        account_info: {
          partnership_type: [],
        },
        rank: {
          isc_regional: {
            min: 25,
            max: 26,
          },
          isc_global: {
            min: 44,
            max: 44,
          },
        },
        stats: {
          acceptance_rate: null,
          grad_kaplan_english_level: 0,
          undergrad_kaplan_english_level: 0,
        },
        courses_count: 1,
        courses: [
          {
            school_id: '62960849529d9c843832635c',
            course_id: '6296096b529d9c843832c981',
            school_name: 'Main',
            school_slug: 'university-of-minnesota-crookston-campus-main',
            name: 'Golf and Turf Management',
            degree: ['Bachelors'],
            tuition: {
              currency: 'USD',
              value: 10822,
            },
            sacm_approved: false,
            application_deadlines: [
              {
                year: 2023,
                months: [],
              },
              {
                year: 2024,
                months: [9],
              },
              {
                year: 2025,
                months: [9],
              },
              {
                year: 2026,
                months: [9],
              },
            ],
            has_applied: false,
            is_application_deletable: false,
            is_shortlisted: false,
          },
        ],
      },
      {
        id: '61bb4480f053ff6570d60c67',
        slug: 'erasmus-university-rotterdam',
        name: 'Erasmus University Rotterdam',
        campus_name: null,
        is_main_campus: true,
        logo: 'https://cdn.ischoolconnect.com/logo/6654.png',
        address: {
          city: 'Rotterdam',
          state: 'South Holland',
          country: 'Netherlands',
          country_code: 'NLD',
        },
        is_partner: false,
        account_info: {
          partnership_type: [],
        },
        rank: {
          isc_regional: {
            min: 3,
            max: 3,
          },
          isc_global: {
            min: 87,
            max: 87,
          },
        },
        stats: {
          acceptance_rate: null,
          grad_kaplan_english_level: 0,
          undergrad_kaplan_english_level: 0,
        },
        courses_count: 2,
        courses: [
          {
            school_id: '61bb4484f053ff6570d60d06',
            course_id: '61bb457df053ff6570d618d5',
            school_name: 'Main',
            school_slug: 'erasmus-university-rotterdam-main',
            name: 'Strategic Urban Planning and Policies',
            degree: ['Masters'],
            tuition: {
              currency: 'EUR',
              value: 1490,
            },
            sacm_approved: true,
            duration: 365,
            application_deadlines: [
              {
                year: 2023,
                months: [],
              },
              {
                year: 2024,
                months: [9],
              },
              {
                year: 2025,
                months: [9],
              },
              {
                year: 2026,
                months: [9],
              },
            ],
            has_applied: false,
            is_application_deletable: false,
            is_shortlisted: false,
          },
          {
            school_id: '61bb4484f053ff6570d60d06',
            course_id: '61bb457df053ff6570d618c3',
            school_name: 'Main',
            school_slug: 'erasmus-university-rotterdam-main',
            name: 'Urban Governance',
            degree: ['Masters'],
            tuition: {
              currency: 'EUR',
              value: 15700,
            },
            sacm_approved: true,
            duration: 365,
            application_deadlines: [
              {
                year: 2023,
                months: [],
              },
              {
                year: 2024,
                months: [9],
              },
              {
                year: 2025,
                months: [9],
              },
              {
                year: 2026,
                months: [9],
              },
            ],
            has_applied: false,
            is_application_deletable: false,
            is_shortlisted: false,
          },
        ],
      },
    ],
    total_courses_count: 4655,
    total: 1246,
  },
  status_code: 200,
};
const dummyFilterCountry = {
  title: 'country',
  list: [
    { parent: 'Australia', child: ['state1', 'state2', 'state3'] },
    { parent: 'India', child: ['state1', 'state2', 'state3'] },
    { parent: 'USA', child: ['state1', 'state2'] },
    { parent: 'Canada', child: ['state1', 'state2', 'state3'] },
    { parent: 'China', child: ['state1', 'state2', 'state3'] },
    { parent: 'Japan', child: ['state1', 'state2'] },
  ],
};

const dummyFilterDegree = {
  title: 'Degrees',
  list: [
    { parent: 'Agriculture' },
    { parent: 'Anthropology and Archaeology' },
    { parent: 'Architecture' },
    { parent: 'Arts' },
    { parent: 'Biology' },
    { parent: 'Design' },
  ],
};

const dummyFilterData = [dummyFilterCountry, dummyFilterDegree];

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor() {}

  getSchools(): Observable<any> {
    return of(dummyData);
  }
  getFilters(): Observable<any> {
    return of(dummyFilterData);
  }
}
