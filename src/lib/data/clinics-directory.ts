export type ClinicEntry = {
	name: string;
	city: string;
	addressLines: string[];
	phones?: string[];
	email?: string;
	website?: string;
	contact?: string;
	fax?: string;
	country?: string;
};

export type ClinicRegion = {
	region: string;
	slug: string;
	clinics: ClinicEntry[];
};

export const clinicsDirectory = {
	regions: [
		{
			region: 'Florida',
			slug: 'florida',
			clinics: [
				{
					name: 'KidiSplints',
					city: 'Boca Raton',
					addressLines: ['7601 Sierra Drive W', 'Boca Raton, FL 33433'],
					contact: 'Rochelle Silberman'
				},
				{
					name: 'Prosthetic & Orthotic Designs',
					city: 'Miami',
					addressLines: ['8445 SW 132 Street', 'Miami, FL 33156'],
					contact: 'Adam',
					phones: ['305.233.0478']
				}
			]
		},
		{
			region: 'Minnesota',
			slug: 'minnesota',
			clinics: [
				{
					name: 'Advanced O&P',
					city: 'Alexandria',
					addressLines: ['510 22nd Ave East, Suite 801', 'Alexandria, MN 56308'],
					contact: 'David Ellis',
					phones: ['320.762.2210']
				}
			]
		},
		{
			region: 'Mississippi',
			slug: 'mississippi',
			clinics: [
				{
					name: 'Bickerts / Hanger Clinic',
					city: 'Corinth',
					addressLines: ['2106 South Tate St.', 'Corinth, MS 38834'],
					contact: 'Phil Bickerts',
					phones: ['662.795.4555']
				},
				{
					name: 'Bickerts / Hanger Clinic',
					city: 'Oxford',
					addressLines: ['2211 S. Lamar Blvd.', 'Oxford, MS 38655'],
					contact: 'Chad Oyler',
					phones: ['662.594.2328']
				}
			]
		},
		{
			region: 'New York',
			slug: 'new-york',
			clinics: [
				{
					name: 'Eschen P&O',
					city: 'New York',
					addressLines: ['510 East 73rd Street, Suite 201-A', 'New York, NY 10021'],
					contact: 'Haris Kadedzic'
				},
				{
					name: 'KidiSplints',
					city: 'Oceanside',
					addressLines: ['3115 Long Beach Rd., Suite 200', 'Oceanside, NY 11572'],
					contact: 'Rochelle Silberman',
					phones: ['917.494.1111'],
					email: 'ortho4kids@yahoo.com'
				}
			]
		},
		{
			region: 'North Carolina',
			slug: 'north-carolina',
			clinics: [
				{
					name: 'EastPoint',
					city: 'Kinston',
					addressLines: ['310 Airport Rd', 'Lenoir Crossing', 'Kinston, NC 28504']
				},
				{
					name: 'EastPoint',
					city: 'Raleigh',
					addressLines: ['8300 Health Park, Suite 131', 'Raleigh, NC 27615']
				},
				{
					name: 'EastPoint',
					city: 'Raleigh',
					addressLines: ['11030 Raven Ridge Rd, Suite 109', 'Raleigh, NC 27614']
				}
			]
		},
		{
			region: 'North Dakota',
			slug: 'north-dakota',
			clinics: [
				{
					name: 'Sanford Healthcare',
					city: 'Bismarck',
					addressLines: ['2700 State Street, Suite C', 'Bismarck, ND 58503'],
					contact: 'Nathan McKenzie & Jacob Becker',
					phones: ['701.323.8470']
				}
			]
		},
		{
			region: 'Ohio',
			slug: 'ohio',
			clinics: [
				{
					name: 'Yanke Bionics',
					city: 'Akron',
					addressLines: ['303 West Exchange Street', 'Akron, OH 44302'],
					phones: ['330.762.6411']
				},
				{
					name: 'Yanke Bionics',
					city: 'Parma',
					addressLines: ['2119 Brook Park Road', 'Parma, OH 44134'],
					phones: ['216.741.4112']
				},
				{
					name: 'Yanke Bionics',
					city: 'Mansfield',
					addressLines: ['265 Sterkel Blvd., Suite 101', 'Mansfield, OH 44907'],
					phones: ['419.529.2300']
				}
			]
		},
		{
			region: 'Puerto Rico',
			slug: 'puerto-rico',
			clinics: [
				{
					name: 'Diabetic Solutions',
					city: 'Manati',
					addressLines: ['Urb. Flamboyan', 'D 12 Calle 3', 'Manati, PR 00674'],
					contact: 'Hector Pantoja',
					phones: ['787.884.3382'],
					country: 'Puerto Rico'
				}
			]
		},
		{
			region: 'Wisconsin',
			slug: 'wisconsin',
			clinics: [
				{
					name: 'Great Lakes',
					city: 'Appleton',
					addressLines: ['3950 Evergreen Court, Suite A', 'Appleton, WI 54913'],
					contact: 'Perry Alger',
					phones: ['920.968.2240']
				}
			]
		}
	]
};