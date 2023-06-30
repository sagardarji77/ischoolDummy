import { Injectable } from '@angular/core';
import { of } from 'rxjs';

const dummyData = {
  message: 'Successfully fetched the search results.',
  data: {
    results: [
      {
        id: '5f044f14a55e24365a723b29',
        slug: 'writtle-university-college',
        name: 'Writtle University College',
        campus_name: null,
        is_main_campus: true,
        logo: 'https://cdn.ischoolconnect.com/logo/2665.png',
        address: {
          city: 'Writtle',
          state: 'Essex',
          country: 'United Kingdom',
          country_code: 'GBR',
        },
        is_partner: false,
        account_info: {
          partnership_type: [],
        },
        rank: {
          isc_regional: {
            min: 0,
            max: 0,
          },
          isc_global: {
            min: 0,
            max: 0,
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
            school_id: '5f044f8757ca2a36c1df6751',
            course_id: '5f045de7c90af744b54cd3c7',
            school_name: 'Main',
            school_slug: 'writtle-university-college-main',
            name: 'Thoroughbred Stud Operations',
            degree: ['Bachelors'],
            tuition: {
              currency: 'GBP',
              value: 0,
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
        id: '5f044f11a55e24365a723548',
        slug: 'de-montfort-university',
        name: 'De Montfort University',
        campus_name: null,
        is_main_campus: true,
        logo: 'https://cdn.ischoolconnect.com/logo/1107.png',
        address: {
          city: 'Leicester',
          state: 'Leicestershire',
          country: 'United Kingdom',
          country_code: 'GBR',
        },
        is_partner: true,
        account_info: {
          partnership_type: ['PARTNER'],
        },
        rank: {
          isc_regional: {
            min: 0,
            max: 0,
          },
          isc_global: {
            min: 0,
            max: 0,
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
            school_id: '5f044f8457ca2a36c1df613f',
            course_id: '6193bc54abac4bcbce9f5922',
            school_name: 'Main',
            school_slug: 'de-montfort-university-main',
            name: 'Graphic Design and e-Media',
            degree: ['Bachelors'],
            tuition: {
              currency: 'GBP',
              value: 0,
            },
            sacm_approved: false,
            duration: 730,
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
        id: '60c2dd665052ba65124beac5',
        slug: 'grenoble-ecole-de-management',
        name: 'Grenoble Ecole de Management',
        campus_name: null,
        is_main_campus: true,
        logo: 'https://cdn.ischoolconnect.com/logo/5873.png',
        address: {
          city: 'Grenoble',
          state: 'Isere',
          country: 'France',
          country_code: 'FRA',
        },
        is_partner: false,
        account_info: {
          partnership_type: [],
        },
        rank: {
          isc_regional: {
            min: 0,
            max: 0,
          },
          isc_global: {
            min: 0,
            max: 0,
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
            school_id: '60c2dd895052ba65124beb05',
            course_id: '60c2e19f5052ba65124c950c',
            school_name: 'Main',
            school_slug: 'grenoble-ecole-de-management-main',
            name: 'International Human Resource Management in the Digital Age',
            degree: ['Masters'],
            tuition: {
              currency: 'EUR',
              value: 19950,
            },
            sacm_approved: false,
            duration: 730,
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
        id: '62bea3e5ae6d11373ecd4d89',
        slug: 'ie-university-segovia',
        name: 'IE University',
        campus_name: 'Segovia',
        is_main_campus: true,
        logo: 'https://cdn.ischoolconnect.com/logo/10597.png',
        address: {
          city: 'Segovia',
          state: 'Castile and León',
          country: 'Spain',
          country_code: 'ESP',
        },
        is_partner: false,
        account_info: {
          partnership_type: [],
        },
        rank: {
          isc_regional: {
            min: 0,
            max: 0,
          },
          isc_global: {
            min: 0,
            max: 0,
          },
        },
        stats: {
          acceptance_rate: null,
          grad_kaplan_english_level: 0,
          undergrad_kaplan_english_level: 0,
        },
        courses_count: 36,
        courses: [
          {
            school_id: '62beb203ae6d11373edc4b41',
            course_id: '62beb391ae6d11373edd4190',
            school_name: 'School of Architecture & Design',
            school_slug:
              'ie-university-segovia-school-of-architecture-and-design',
            name: 'Design',
            degree: ['Bachelors'],
            tuition: {
              currency: 'EUR',
              value: 22800,
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
            school_id: '62beb203ae6d11373edc4b41',
            course_id: '62beb391ae6d11373edd418d',
            school_name: 'School of Architecture & Design',
            school_slug:
              'ie-university-segovia-school-of-architecture-and-design',
            name: 'Architectural Studies',
            degree: ['Bachelors'],
            tuition: {
              currency: 'EUR',
              value: 22800,
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
        id: '62bea3e5ae6d11373ecd4d8c',
        slug: 'ie-university-madrid',
        name: 'IE University',
        campus_name: 'Madrid',
        is_main_campus: false,
        logo: 'https://cdn.ischoolconnect.com/logo/10603.png',
        address: {
          city: 'Madrid',
          state: 'Castile and León',
          country: 'Spain',
          country_code: 'ESP',
        },
        is_partner: false,
        account_info: {
          partnership_type: [],
        },
        rank: {
          isc_regional: {
            min: 0,
            max: 0,
          },
          isc_global: {
            min: 0,
            max: 0,
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
            school_id: '62beb203ae6d11373edc4b52',
            course_id: '62beb392ae6d11373edd420e',
            school_name: 'School of Global & Public Affairs',
            school_slug:
              'ie-university-madrid-school-of-global-and-public-affairs',
            name: 'Economics, International Relations',
            degree: ['Bachelors'],
            tuition: {
              currency: 'EUR',
              value: 25900,
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
            school_id: '62beb203ae6d11373edc4b4e',
            course_id: '62beb391ae6d11373edd4193',
            school_name: 'School of Architecture & Design',
            school_slug:
              'ie-university-madrid-school-of-architecture-and-design',
            name: 'Design',
            degree: ['Bachelors'],
            tuition: {
              currency: 'EUR',
              value: 22800,
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
        id: '5f044f11a55e24365a72360e',
        slug: 'hec-montreal',
        name: 'HEC Montreal',
        campus_name: null,
        is_main_campus: true,
        logo: 'https://cdn.ischoolconnect.com/logo/1321.png',
        address: {
          city: 'Montréal',
          state: 'Quebec',
          country: 'Canada',
          country_code: 'CAN',
        },
        is_partner: false,
        account_info: {
          partnership_type: [],
        },
        rank: {
          isc_regional: {
            min: 0,
            max: 0,
          },
          isc_global: {
            min: 0,
            max: 0,
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
            school_id: '5f044f8457ca2a36c1df6215',
            course_id: '5f045dfdc90af744b54cdb50',
            school_name: 'Main',
            school_slug: 'hec-montreal-main',
            name: 'Applied Financial Economics',
            degree: ['Masters'],
            tuition: {
              currency: 'CAD',
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
            school_id: '5f044f8457ca2a36c1df6215',
            course_id: '5f045dfdc90af744b54cdb54',
            school_name: 'Main',
            school_slug: 'hec-montreal-main',
            name: 'Finance',
            degree: ['Masters'],
            tuition: {
              currency: 'CAD',
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
        id: '6089483e6568e059e389ba10',
        slug: 'hec-paris',
        name: 'HEC Paris',
        campus_name: null,
        is_main_campus: true,
        logo: 'https://cdn.ischoolconnect.com/logo/5708.png',
        address: {
          city: 'Jouy-en-Josas',
          state: 'Yvelines',
          country: 'France',
          country_code: 'FRA',
        },
        is_partner: false,
        account_info: {
          partnership_type: [],
        },
        rank: {
          isc_regional: {
            min: 0,
            max: 0,
          },
          isc_global: {
            min: 0,
            max: 0,
          },
        },
        stats: {
          acceptance_rate: null,
          grad_kaplan_english_level: 0,
          undergrad_kaplan_english_level: 0,
        },
        courses_count: 24,
        courses: [
          {
            school_id: '6089485c6568e059e389ba35',
            course_id: '60894a096568e059e38a0ebe',
            school_name: 'Main',
            school_slug: 'hec-paris-main',
            name: 'Business Administration',
            degree: ['Masters'],
            tuition: {
              currency: 'EUR',
              value: 78000,
            },
            sacm_approved: false,
            duration: 487,
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
            school_id: '6089485c6568e059e389ba35',
            course_id: '60c2e19e5052ba65124c945e',
            school_name: 'Main',
            school_slug: 'hec-paris-main',
            name: 'Management',
            degree: ['Masters'],
            tuition: {
              currency: 'EUR',
              value: 22100,
            },
            sacm_approved: true,
            duration: 730,
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
        id: '5fec9380b4651e443c847c4e',
        slug: 'ecole-normale-superieure-de-lyon',
        name: 'École Normale Supérieure de Lyon',
        campus_name: null,
        is_main_campus: true,
        logo: 'https://cdn.ischoolconnect.com/logo/4799.png',
        address: {
          city: 'Lyon',
          state: 'Rhône',
          country: 'France',
          country_code: 'FRA',
        },
        is_partner: false,
        account_info: {
          partnership_type: [],
        },
        rank: {
          isc_regional: {
            min: 0,
            max: 0,
          },
          isc_global: {
            min: 0,
            max: 0,
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
            school_id: '5fec9395b4651e443c847c6d',
            course_id: '5feca083b4651e443c8c3dd0',
            school_name: 'Main',
            school_slug: 'ecole-normale-superieure-de-lyon-main',
            name: 'From the Renaissance to the Revolutions',
            degree: ['Masters'],
            tuition: {
              currency: 'EUR',
              value: 333,
            },
            sacm_approved: false,
            duration: 1095,
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
            school_id: '5fec9395b4651e443c847c6d',
            course_id: '5feca083b4651e443c8c3dd8',
            school_name: 'Main',
            school_slug: 'ecole-normale-superieure-de-lyon-main',
            name: 'History - Archaeology - Literature of the Medieval Christian and Muslim Worlds',
            degree: ['Masters'],
            tuition: {
              currency: 'EUR',
              value: 333,
            },
            sacm_approved: false,
            duration: 1095,
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
        id: '5ed3400baf2d4d5f70f1a2a0',
        slug: 'de-anza-college',
        name: 'De Anza College',
        campus_name: null,
        is_main_campus: true,
        logo: 'https://cdn.ischoolconnect.com/logo/308.png',
        address: {
          city: 'Cupertino',
          state: 'California',
          country: 'United States of America',
          country_code: 'USA',
        },
        is_partner: true,
        account_info: {
          partnership_type: ['PARTNER'],
        },
        rank: {
          isc_regional: {
            min: 0,
            max: 0,
          },
          isc_global: {
            min: 0,
            max: 0,
          },
        },
        stats: {
          acceptance_rate: null,
          grad_kaplan_english_level: 0,
          undergrad_kaplan_english_level: 5,
        },
        courses_count: 70,
        courses: [
          {
            school_id: '5ed34017af2d4d5f70f1a435',
            course_id: '5ed340809b1cbf5fe20f6ade',
            school_name: 'Main',
            school_slug: 'de-anza-college-main',
            name: 'Journalism',
            degree: ['Associate'],
            tuition: {
              currency: 'USD',
              value: 8496,
            },
            sacm_approved: false,
            duration: 1095,
            application_deadlines: [
              {
                year: 2023,
                months: [9],
              },
              {
                year: 2024,
                months: [9, 1, 4],
              },
              {
                year: 2025,
                months: [9, 1, 4],
              },
              {
                year: 2026,
                months: [9, 1, 4],
              },
            ],
            has_applied: false,
            is_application_deletable: false,
            is_shortlisted: false,
          },
          {
            school_id: '5ed34017af2d4d5f70f1a435',
            course_id: '5ed340809b1cbf5fe20f6adf',
            school_name: 'Main',
            school_slug: 'de-anza-college-main',
            name: 'Liberal Arts',
            degree: ['Associate'],
            tuition: {
              currency: 'USD',
              value: 8496,
            },
            sacm_approved: false,
            duration: 1095,
            application_deadlines: [
              {
                year: 2023,
                months: [9],
              },
              {
                year: 2024,
                months: [9, 1, 4],
              },
              {
                year: 2025,
                months: [9, 1, 4],
              },
              {
                year: 2026,
                months: [9, 1, 4],
              },
            ],
            has_applied: false,
            is_application_deletable: false,
            is_shortlisted: false,
          },
        ],
      },
      {
        id: '5f044f11a55e24365a723693',
        slug: 'le-moyne-college',
        name: 'Le Moyne College',
        campus_name: null,
        is_main_campus: true,
        logo: 'https://cdn.ischoolconnect.com/logo/1455.png',
        address: {
          city: 'Syracuse',
          state: 'New York',
          country: 'United States of America',
          country_code: 'USA',
        },
        is_partner: false,
        account_info: {
          partnership_type: [],
        },
        rank: {
          isc_regional: {
            min: 0,
            max: 0,
          },
          isc_global: {
            min: 0,
            max: 0,
          },
        },
        stats: {
          acceptance_rate: 75,
          grad_kaplan_english_level: 0,
          undergrad_kaplan_english_level: 0,
        },
        courses_count: 106,
        courses: [
          {
            school_id: '62bea3e5ae6d11373ecd4d6e',
            course_id: '5f04599423831b3f8273d321',
            school_name: 'College of Arts and Sciences',
            school_slug: 'le-moyne-college-college-of-arts-and-sciences',
            name: 'Environmental Science Systems',
            degree: ['Bachelors'],
            tuition: {
              currency: 'USD',
              value: 36320,
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
            school_id: '62bea3e5ae6d11373ecd4d6e',
            course_id: '5f04599423831b3f8273d322',
            school_name: 'College of Arts and Sciences',
            school_slug: 'le-moyne-college-college-of-arts-and-sciences',
            name: 'Peace and Global Studies',
            degree: ['Bachelors'],
            tuition: {
              currency: 'USD',
              value: 36320,
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
    ],
    total_courses_count: 130071,
    total: 2867,
  },
  status_code: 200,
};

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor() {}

  getSchools() {
    return of(dummyData);
  }
}
