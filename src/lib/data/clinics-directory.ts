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
			region: 'Alaska',
			slug: 'alaska',
			clinics: [
				{
					name: 'Alchemy Orthotic & Prosthetic',
					city: 'Anchorage',
					addressLines: ['12201 Industry Way, Ste D1', 'Anchorage, AK 99515'],
					phones: ['907.562.0560'],
					website: 'https://www.alchemyak.com'
				},
				{
					name: 'Alchemy Orthotic & Prosthetic',
					city: 'Fairbanks',
					addressLines: ['1275 Sadler Way, Ste 103', 'Fairbanks, AK 99701'],
					phones: ['907.479.1200'],
					website: 'https://www.alchemyak.com'
				}
			]
		},
		{
			region: 'California',
			slug: 'california',
			clinics: [
				{
					name: 'Lerman & Son',
					city: 'Beverly Hills',
					addressLines: ['8710 Wilshire Blvd', 'Beverly Hills, CA 90211'],
					phones: ['310.659.2290'],
					email: 'lermanandson@gmail.com',
					website: 'https://www.helmetbaby.com'
				}
			]
		},
		{
			region: 'Delaware',
			slug: 'delaware',
			clinics: [
				{
					name: 'Independence P&O',
					city: 'Newark',
					addressLines: ['31 Meadowood Dr', 'Newark, DE 19711-7202'],
					phones: ['302.369.9476'],
					email: 'jhorne@independencepo.com',
					website: 'https://www.independencepo.com'
				},
				{
					name: 'Independence P&O',
					city: 'Dover',
					addressLines: ['200 Banning St, Ste 220', 'Dover, DE 19904'],
					phones: ['302.369.9476'],
					email: 'jhorne@independencepo.com',
					website: 'https://www.independencepo.com'
				}
			]
		},
		{
			region: 'Florida',
			slug: 'florida',
			clinics: [
				{
					name: 'Island Coast Orthotic & Prosthetic',
					city: 'Cape Coral',
					addressLines: ['923 Del Prado Blvd S', 'Suite 204', 'Cape Coral, FL 33990'],
					phones: ['239.573.9003'],
					email: 'progressiveprosthetics99@gmail.com'
				},
				{
					name: 'Gainesville Prosthetics',
					city: 'Gainesville',
					addressLines: ['3870 NW 83rd St', 'Gainesville, FL 32606'],
					phones: ['352.331.4221'],
					email: 'info@gainesvilleprosthetics.com',
					website: 'https://www.gainesvilleprosthetics.com'
				},
				{
					name: 'Advanced Motion Control, Inc / Arthur Finnieston Prosthetics + Orthotics',
					city: 'Miami',
					addressLines: ['4705 SW 72 Ave', 'Miami, FL 33155'],
					phones: ['305.661.4667'],
					email: 'info@finnieston.com',
					website: 'https://www.finnieston.com/kinderband'
				},
				{
					name: 'Prosthetic Orthotic Designs, Inc.',
					city: 'Miami',
					addressLines: ['8445 SW 132 St', 'Miami, FL 33156'],
					phones: ['305.233.0478'],
					website: 'https://www.prostheticorthoticdesigns.com'
				}
			]
		},
		{
			region: 'Illinois',
			slug: 'illinois',
			clinics: [
				{
					name: 'Rachel Laufenberg / Hanger Clinic',
					city: 'Normal',
					addressLines: ['211 Landmark Dr, Ste A5', 'Normal, IL 61761'],
					phones: ['309.585.2349']
				},
				{
					name: 'Stellar Orthotics and Prosthetics Group',
					city: 'Skokie',
					addressLines: ['9933 Lawler Ave, Ste 409', 'Skokie, IL 60077'],
					phones: ['847.410.2751'],
					email: 'stellaropllc@comcast.net',
					website: 'https://www.stellaroandp.com'
				}
			]
		},
		{
			region: 'Indiana',
			slug: 'indiana',
			clinics: [
				{
					name: 'Prevail Prosthetics & Orthotics',
					city: 'Anderson',
					addressLines: ['3320 Main St, Suite F', 'Anderson, IN 46013'],
					phones: ['765.374.0496', '800.745.3295'],
					website: 'https://www.prevailpando.com'
				},
				{
					name: 'Prevail Prosthetics & Orthotics',
					city: 'Fort Wayne',
					addressLines: ['7735 W Jefferson Blvd', 'Fort Wayne, IN 46804'],
					phones: ['260.483.5219 ext 351', '800.745.3295'],
					website: 'https://www.prevailpando.com'
				},
				{
					name: 'Prevail Prosthetics & Orthotics',
					city: 'Indianapolis',
					addressLines: ['8345 Clearvista Place', 'Indianapolis, IN 46256'],
					phones: ['317.577.2273', '800.745.3295'],
					website: 'https://www.prevailpando.com'
				},
				{
					name: 'WeeSpeak Therapy & Learning Center',
					city: 'Lafayette',
					addressLines: ['35 Executive Dr, Ste 5', 'Lafayette, IN 47905'],
					phones: ['765.446.8300'],
					website: 'https://www.weespeaktlc.com'
				},
				{
					name: 'Prevail Prosthetics & Orthotics',
					city: 'Marion',
					addressLines: ['1001 NW Ave, Ste F', 'Marion, IN 46952'],
					phones: ['765.668.0890', '800.745.3295'],
					website: 'https://www.prevailpando.com'
				},
				{
					name: 'Prevail Prosthetics & Orthotics',
					city: 'Muncie',
					addressLines: ['3521 W Purdue Ave', 'Muncie, IN 47304'],
					phones: ['765.668.0890', '800.745.3295'],
					website: 'https://www.prevailpando.com'
				}
			]
		},
		{
			region: 'Massachusetts',
			slug: 'massachusetts',
			clinics: [
				{
					name: 'New England Orthotic & Prosthetic Systems',
					city: 'Boston',
					addressLines: ['260 Tremont St, Biewend Bldg Lvl B', 'Boston, MA 02116'],
					phones: ['617.830.2547'],
					website: 'https://www.neops.com'
				}
			]
		},
		{
			region: 'Minnesota',
			slug: 'minnesota',
			clinics: [
				{
					name: 'Advance Orthotics and Prosthetics',
					city: 'Alexandria',
					addressLines: ['510 22nd Ave E, Ste 801', 'Alexandria, MN 56308'],
					phones: ['320.762.2210'],
					email: 'advanceop@embarqmail.com',
					website: 'https://www.advanceoandpmn.com'
				}
			]
		},
		{
			region: 'Mississippi',
			slug: 'mississippi',
			clinics: [
				{
					name: 'Bickert’s Orthotics & Prosthetics',
					city: 'Corinth',
					addressLines: ['2106 S Tate St', 'Corinth, MS 38834'],
					phones: ['662.795.4555'],
					email: 'info@bickerts.com',
					website: 'https://www.bickertsoandp.com'
				},
				{
					name: 'Bickert’s Orthotics & Prosthetic',
					city: 'Oxford',
					addressLines: ['2211 S Lamar', 'Oxford, MS 38655'],
					phones: ['662.795.4555'],
					email: 'info@bickerts.com',
					website: 'https://www.bickertsoandp.com'
				}
			]
		},
		{
			region: 'Nebraska',
			slug: 'nebraska',
			clinics: [
				{
					name: 'OrthoMedics Omaha',
					city: 'Omaha',
					addressLines: ['13217 F St', 'Omaha, NE 68137'],
					phones: ['402.614.7321'],
					email: 'kphillips@orthomedics.us',
					website: 'https://www.orthomedics.us'
				}
			]
		},
		{
			region: 'New York',
			slug: 'new-york',
			clinics: [
				{
					name: 'KidiSplints',
					city: 'Brooklyn',
					addressLines: ['1401 President St', 'Brooklyn, NY 11213'],
					phones: ['917.494.1111'],
					email: 'ortho4kids@yahoo.com'
				},
				{
					name: 'KidiSplints',
					city: 'Brooklyn',
					addressLines: ['3856 Flatlands Ave', 'Brooklyn, NY 11234'],
					contact: 'Rochelle Silberman',
					phones: ['516.256.9306'],
					email: 'ortho4kids@yahoo.com'
				},
				{
					name: 'KidiSplints',
					city: 'Long Island',
					addressLines: ['3159 Oceanside Road', 'Oceanside, NY 11572'],
					contact: 'Rochelle Silberman',
					phones: ['917.494.1111'],
					email: 'ortho4kids@yahoo.com'
				},
				{
					name: 'Eschen Prosthetic & Orthotic Laboratories',
					city: 'Manhattan',
					addressLines: ['510 E 73rd St, Ste 201A', 'New York, NY 10021'],
					phones: ['212.606.1262'],
					website: 'https://www.eschenpo.com'
				}
			]
		},
		{
			region: 'North Carolina',
			slug: 'north-carolina',
			clinics: [
				{
					name: 'Orthotic & Prosthetic East',
					city: 'Greenville',
					addressLines: ['1025 Wh Smith Blvd, Ste 108', 'Greenville, NC 27834'],
					contact: 'Shane Coltrain, CPO',
					phones: ['252.215.2215'],
					email: 'scoltrain@oandpeast.com',
					website: 'https://www.oandpeast.com'
				},
				{
					name: 'East Point Prosthetics & Orthotics',
					city: 'Kinston',
					addressLines: ['213 Airport Rd', 'Kinston, NC 28504'],
					phones: ['252.522.3278', '855.706.3278'],
					email: 'bwright@eastpointpo.com',
					website: 'https://www.eastpointpo.com'
				},
				{
					name: 'East Point Prosthetics & Orthotics',
					city: 'Raleigh',
					addressLines: ['8300 Health Park, Ste 225', 'Raleigh, NC 27615'],
					phones: ['855.706.3278'],
					email: 'bwright@eastpointpo.com',
					website: 'https://www.eastpointpo.com'
				}
			]
		},
		{
			region: 'North Dakota',
			slug: 'north-dakota',
			clinics: [
				{
					name: 'Sanford Healthcare Accessories',
					city: 'Bismarck',
					addressLines: ['626 N 6th St', 'Bismarck, ND 58503'],
					phones: ['701.323.8470'],
					email: 'nathan.mckenzie@sanfordhealth.org',
					website: 'https://www.healthcareaccessories.com/orthotics.htm'
				}
			]
		},
		{
			region: 'Ohio',
			slug: 'ohio',
			clinics: [
				{
					name: 'Yanke Bionics, Inc.',
					city: 'Akron',
					addressLines: ['303 W Exchange St', 'Akron, OH 44302-1708'],
					phones: ['330.762.6411', '800.862.6019'],
					email: 'info@yankebionics.com',
					website: 'https://www.yankebionics.com'
				},
				{
					name: 'Yanke Bionics, Inc.',
					city: 'Akron',
					addressLines: ['3975 Embassy Pkwy', 'Akron, OH 44333'],
					phones: ['330.668.4070'],
					email: 'info@yankebionics.com',
					website: 'https://www.yankebionics.com'
				},
				{
					name: 'Yanke Bionics, Inc.',
					city: 'Cambridge',
					addressLines: ['10187 Cadiz Rd', 'Cambridge, OH 43725'],
					phones: ['740.439.2233'],
					email: 'info@yankebionics.com',
					website: 'https://www.yankebionics.com'
				},
				{
					name: 'Yanke Bionics, Inc.',
					city: 'Canton',
					addressLines: ['4604 W Tuscarawas St', 'Canton, OH 44708'],
					phones: ['330.479.9662'],
					email: 'info@yankebionics.com',
					website: 'https://www.yankebionics.com'
				},
				{
					name: 'American Orthopedics',
					city: 'Columbus',
					addressLines: ['1151 W 5th Ave', 'Columbus, OH 43212'],
					phones: ['614.291.6454'],
					email: 'amerortho@midohio.twcbc.com',
					website: 'https://www.amerortho.com'
				},
				{
					name: 'Yanke Bionics, Inc.',
					city: 'Kent',
					addressLines: ['1444 E Main St, Ste C', 'Kent, OH 44240'],
					phones: ['330.673.1904'],
					email: 'info@yankebionics.com',
					website: 'https://www.yankebionics.com'
				},
				{
					name: 'Yanke Bionics, Inc.',
					city: 'Mansfield',
					addressLines: ['265 Sterkel Blvd, Ste 101', 'Mansfield, OH 44907'],
					phones: ['419.529.2300'],
					email: 'info@yankebionics.com',
					website: 'https://www.yankebionics.com'
				},
				{
					name: 'Yanke Bionics, Inc.',
					city: 'New Philadelphia',
					addressLines: ['2300 E High St', 'New Philadelphia, OH 44663'],
					phones: ['330.339.7900'],
					email: 'info@yankebionics.com',
					website: 'https://www.yankebionics.com'
				},
				{
					name: 'Yanke Bionics, Inc.',
					city: 'Lorain',
					addressLines: ['6100 S Broadway, Ste 104', 'Lorain, OH 44053'],
					phones: ['440.233.4314'],
					email: 'info@yankebionics.com',
					website: 'https://www.yankebionics.com'
				},
				{
					name: 'Yanke Bionics, Inc.',
					city: 'Parma',
					addressLines: ['2119 Brookpark Rd', 'Parma, OH 44134'],
					phones: ['216.741.4112'],
					email: 'info@yankebionics.com',
					website: 'https://www.yankebionics.com'
				},
				{
					name: 'Yanke Bionics, Inc.',
					city: 'Brook Park',
					addressLines: ['15900 Snow Rd, Ste 400', 'Brook Park, OH 44142'],
					phones: ['877.236.5501'],
					email: 'info@yankebionics.com',
					website: 'https://www.yankebionics.com'
				},
				{
					name: 'Yanke Bionics, Inc.',
					city: 'Northfield',
					addressLines: ['61 West Aurora Rd', 'Northfield, OH 44067'],
					phones: ['330.467.0001'],
					email: 'info@yankebionics.com',
					website: 'https://www.yankebionics.com'
				},
				{
					name: 'Yanke Bionics, Inc.',
					city: 'Wooster',
					addressLines: ['2922 Cleveland Rd', 'Wooster, OH 44691'],
					phones: ['330.345.6657'],
					email: 'info@yankebionics.com',
					website: 'https://www.yankebionics.com'
				}
			]
		},
		{
			region: 'Oregon',
			slug: 'oregon',
			clinics: [
				{
					name: 'Summit O&P',
					city: 'Bend',
					addressLines: ['2200 NE Neff Rd, Ste 307', 'Bend, OR 97701'],
					email: 'aaron@summitondp.com',
					website: 'https://www.summitonp.com'
				}
			]
		},
		{
			region: 'Pennsylvania',
			slug: 'pennsylvania',
			clinics: [
				{
					name: 'Independence P&O',
					city: 'Brookhaven',
					addressLines: ['2711 Edgmont Ave', 'Brookhaven, PA 19015'],
					phones: ['610.876.4935'],
					email: 'jhorne@independencepo.com',
					website: 'https://www.independencepo.com'
				},
				{
					name: 'Independence P&O',
					city: 'Philadelphia',
					addressLines: ['1500 S Columbus Blvd, 2nd Flr', 'Philadelphia, PA 19147'],
					phones: ['215.271.9476'],
					email: 'jhorne@independencepo.com',
					website: 'https://www.independencepo.com'
				}
			]
		},
		{
			region: 'Rhode Island',
			slug: 'rhode-island',
			clinics: [
				{
					name: 'Nunnery Orthotic & Prosthetic Technology',
					city: 'North Kingstown',
					addressLines: ['7408 Post Rd', 'North Kingstown, RI 02852'],
					phones: ['401.294.4210'],
					email: 'mike@nunneryoandp.com',
					website: 'https://www.nunneryoandp.com'
				}
			]
		},
		{
			region: 'Virginia',
			slug: 'virginia',
			clinics: [
				{
					name: 'Bio Lab',
					city: 'Ashburn',
					addressLines: ['21785 Filligree Ct, Ste 210', 'Ashburn, VA 20147'],
					phones: ['703.726.4092']
				},
				{
					name: 'University of Virginia Prosthetics & Orthotics / Prosthetic & Orthotic Division',
					city: 'Charlottesville',
					addressLines: ['2216 Ivy Rd, Ste 204', 'Charlottesville, VA 22903'],
					phones: ['434.243.4670'],
					email: 'kmk2q@virginia.edu',
					website: 'https://uvahealth.com/directions-locations/clinics/prosthetics-and-orthotics'
				},
				{
					name: 'Powell Orthotics & Prosthetics',
					city: 'Richmond',
					addressLines: ['2034 Dabney Rd, Ste C', 'Richmond, VA 23230'],
					phones: ['804.649.9043'],
					website: 'https://www.powelloandp.com'
				}
			]
		},
		{
			region: 'Wisconsin',
			slug: 'wisconsin',
			clinics: [
				{
					name: 'Great Lakes O&P',
					city: 'Appleton',
					addressLines: ['2105 E Enterprise Ave, Ste 114', 'Appleton, WI 54913'],
					phones: ['920.968.2240'],
					email: 'p.alger@greatlakesoandp.com'
				}
			]
		},
		{
			region: 'Greater China',
			slug: 'greater-china',
			clinics: [
				{
					name: 'Dr. Astro Inc. 宇博医疗',
					city: 'Shaanxi',
					addressLines: [
						'Room 609, 6th Floor, Guomao Building, 119 East Street, Brilin District, Xi An',
						'Shaanxi Province, China 710048'
					],
					phones: ['1.389.289.8966'],
					fax: '400.160.8680',
					website: 'https://www.yuhangboshi.cn/',
					country: 'China'
				}
			]
		},
		{
			region: 'Guatemala',
			slug: 'guatemala',
			clinics: [
				{
					name: 'Centro Bionico',
					city: 'Ciudad de Guatemala',
					addressLines: [
						'6 Avenida “A” 9-84 Zona 9',
						'Ciudad de Guatemala 01009, Guatemala'
					],
					phones: ['+502.2334.5962', '+502.5966.2195'],
					email: 'centrobionico@gmail.com',
					website: 'https://www.centrobionico.com',
					country: 'Guatemala'
				}
			]
		},
		{
			region: 'Portugal',
			slug: 'portugal',
			clinics: [
				{
					name: 'Hospital dos Lusiadas, Lisboa, SA',
					city: 'Lisboa',
					addressLines: ['Rua Abilio Mendes, 12', '1500-458 Lisboa, Portugal'],
					contact: 'Paula Rodeia, MD',
					phones: ['+351 21 770 4040'],
					website: 'https://www.lusiadas.pt/',
					country: 'Portugal'
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
					addressLines: ['Urb Flamboyan D12 Calle 3', 'Manati, PR 00674-5418', 'USA'],
					phones: ['1.787.884.3382', '1.787.317.7525', '1.787.548.4050'],
					email: 'eleopoldo@dsorthopr.com',
					website: 'https://www.dsorthopr.com',
					country: 'Puerto Rico'
				}
			]
		}
	]
};