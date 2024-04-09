const sampleCollegeData = [
    {
      basicInfo: {
        institution:
          "Sandip Foundation's, Sandip Institute of Technology & Research Centre",
        principal: "Prof. (Dr.) Milind M Patil",
        CollageCode: "5109",
        address: "A/p: Mahiravani Trimbak Road Tal & Dist: Nashik ",
        contact: {
          email: "principal@sitrc.com",
          phoneno: "02594 – 222551/552/553/554",
        },
        accreditation: {
          NBA: true,
          NAAC: true,
        },
        autonomous:false
      },
      facility: {
        Hostel: {
          boys: true,
          girls: true,
        },
        others: [
          "Classroom/Tutorial Room facilities ",
          "Laboratory details",
          "Computer Centre Facilities",
          "Library Facilities",
          "Auditorium/Seminar Halls/Amphi",
          "Cafeteria",
          "Indoor Sports facilities",
          "Outdoor Sports facilities",
          "Gymnasium facilities",
          "Medical Facilites",
        ],
      },
      courses: [
        {
          branchname: "Civil Engineering",
          seats: 60,
          duration: 4,
          cutOffMarks: [
            {
              year: "2023",
              CategoryCutoff: {
                GOPENH: 116652,
                LOPENH: 115899,
              },
            },
          ],
          placement: {
            placementFacilities: true,
            PlacementStats: {
              year: new Date("2023-01-01"),
              studentsPlaced: 60,
              maxSalary: 1200000,
              minSalary: 200000,
              avgSalary: 450000,
            },
          },
        },
        {
          branchname: "Computer Engineering",
          seats: 120,
          duration: 4,
          cutOffMarks: [
            {
              year: "2023",
              CategoryCutoff: {
                GOPENO: 81.9995261,
                GSCO: 72.4718017,
                GSTO: 80.1068911,
                GVJO: 80.5501725,
                GNT1O: 75.8471965,
                GNT2O: 80.6275908,
                GNT3O: 77.9458986,
                GOBCO: 81.6296507,
                LOPENO: 80.5501725,
                LSCO: 78.1473584,
                LOBCO: 79.5912465,
              },
            },
          ],
          placement: {
            placementFacilities: true,
            PlacementStats: {
              year: new Date("2023-01-01"),
              studentsPlaced: 60,
              maxSalary: 1200000,
              minSalary: 200000,
              avgSalary: 450000,
            },
          },
        },
        {
          branchname: "Electrical Engineering",
          seats: 60,
          duration: 4,
          cutOffMarks: [
            {
              year: "2023",
              CategoryCutoff: {
                GOPENO: 35.8351101,
                GSCO: 31.773458,
                GSTO: 17.5316365,
                GOBCO: 30.561988,
                LOPENO: 28.4814025,
              },
            },
          ],
          placement: {
            placementFacilities: true,
            PlacementStats: {
              year: new Date("2023-01-01"),
              studentsPlaced: 60,
              maxSalary: 1200000,
              minSalary: 200000,
              avgSalary: 450000,
            },
          },
        },
        {
          branchname: "E&TC Engineering ",
          seats: 60,
          duration: 4,
          cutOffMarks: [
            {
              year: "2023",
              CategoryCutoff: {
                GOPENO: 69.0394836,
                GSCO: 51.6740911,
                GNT1O: 63.5478045,
                GOBCO: 67.9791157,
                LOPENO: 65.2657662,
                LSCO: 14.9316558,
                LOBCO: 63.088298,
              },
            },
          ],
          placement: {
            placementFacilities: true,
            PlacementStats: {
              year: new Date("2023-01-01"),
              studentsPlaced: 60,
              maxSalary: 1200000,
              minSalary: 200000,
              avgSalary: 450000,
            },
          },
        },
        {
          branchname: "Information Technology",
          seats: 60,
          duration: 4,
          cutOffMarks: [
            {
              year: "2023",
              CategoryCutoff: {
                GOPENH: 78.6657067,
                GSCH: 65.7244332,
                GSTH: 59.5292331,
                GVJH: 65.7244332,
                GNT1H: 75.182198,
                GNT2H: 75.7886771,
                GOBCH: 78.3496848,
                LOPENH: 84.8614274,
                LSCH: 71.6451268,
                LSTH: 81.6350139,
                LOBCH: 65.7244332,
              },
            },
          ],
          placement: {
            placementFacilities: true,
            PlacementStats: {
              year: new Date("2023-01-01"),
              studentsPlaced: 60,
              maxSalary: 1200000,
              minSalary: 200000,
              avgSalary: 450000,
            },
          },
        },
        {
          branchname: "Mechanical Engineering",
          seats: 60,
          duration: 4,
          cutOffMarks: [
            {
              year: "2023",
              CategoryCutoff: {
                GOPENH: 32.4992712,
                GVJH: 17.8380677,
                GNT3H: 26.9007793,
                GOBCH: 23.121138,
                LOPENH: 15.1013848,
                LOBCH: 4.743083,
              },
            },
          ],
          placement: {
            placementFacilities: true,
            PlacementStats: {
              year: new Date("2023-01-01"),
              studentsPlaced: 60,
              maxSalary: 1200000,
              minSalary: 200000,
              avgSalary: 450000,
            },
          },
        },
        {
          branchname: "Automation Robotics",
          seats: 60,
          duration: 4,
          cutOffMarks: [
            {
              year: "2023",
              CategoryCutoff: {
                GOPENH: 39.5925136,
                GNT2H: 19.1072714,
                GNT3H: 35.8351101,
                GOBCH: 32.2127079,
                LOPENH: 25.7906003,
                LOBCH: 26.9007793,
              },
            },
          ],
          placement: {
            placementFacilities: true,
            PlacementStats: {
              year: new Date("2023-01-01"),
              studentsPlaced: 60,
              maxSalary: 1200000,
              minSalary: 200000,
              avgSalary: 450000,
            },
          },
        },
        {
          branchname: "Artificial Intelligence and Data Science",
          seats: 60,
          duration: 4,
          cutOffMarks: [
            {
              year: "2023",
              CategoryCutoff: {
                GOPENH: 72.8974176,
                GSCH: 54.912555,
                GVJH: 48.2601391,
                GNT1H: 56.7650587,
                GNT2H: 71.2367422,
                GNT3H: 69.5290454,
                GOBCH: 70.7220669,
                LOPENH: 69.7082914,
                LSCH: 63.7783399,
                LSTH: 10.7718485,
                LOBCH: 69.0394836,
              },
            },
          ],
          placement: {
            placementFacilities: true,
            PlacementStats: {
              year: new Date("2023-01-01"),
              studentsPlaced: 60,
              maxSalary: 1200000,
              minSalary: 200000,
              avgSalary: 450000,
            },
          },
        },
      ],
  
      fees: {
        TuitionFee: 70000,
        DevelopmentFee: 50000,
        TotalFee: 120000,
      },
    },
    {
      basicInfo: {
        institution: "Vidya Niketan College of Engineering",
        principal: "Dr. P Murugesan",
        CollageCode: "5408",
        address:
          "Vidyanagari, Pune Nashik Highway NH 50 At Post - Bota, Near Alephata,( PUNE) (Tal. Sangamner,   Dist.  Ahmednagar)",
        contact: {
          email: "vidyaniketan.7@gmail.com",
          phoneno: "9172453737",
        },
        accreditation: {
          NBA: true,
          NAAC: true,
        },
        autonomous:false
      },
      facility: {
        Hostel: {
          boys: true,
          girls: true,
        },
        others: [
          "Classroom/Tutorial Room facilities ",
          "Laboratory details",
          "Computer Centre Facilities",
          "Library Facilities",
          "Auditorium/Seminar Halls/Amphi",
          "Cafeteria",
          "Transport Facility",
          "Indoor Sports facilities",
          "Outdoor Sports facilities",
          "Gymnasium facilities",
          "Medical Facilites",
        ],
      },
      courses: [
        {
          branchname: "Computer Engineering",
          seats: 30,
          duration: 4,
          cutOffMarks: [
            {
              year: "2023",
              CategoryCutoff: {
                GOPENH: 65.2400587,
                GSCH: 18.3037194,
                GVJH: 12.6735864,
                GNT1H: 19.8474395,
                GNT2H: 58.8006082,
                GOBCH: 60.0860804,
                LOPENH: 72.6414198,
                LOBCH: 67.9791157,
              },
            },
          ],
          placement: {
            placementFacilities: true,
            PlacementStats: {
              year: new Date("2023-01-01"),
              studentsPlaced: 60,
              maxSalary: 450000,
              minSalary: 200000,
              avgSalary: 120000,
            },
          },
        },
        {
          branchname: "Electrical Engineering",
          seats: 30,
          duration: 4,
          cutOffMarks: [
            {
              year: "2023",
              CategoryCutoff: {
                GOPENH: 3.5639711,
              },
            },
          ],
          placement: {
            placementFacilities: true,
            PlacementStats: {
              year: new Date("2023-01-01"),
              studentsPlaced: 60,
              maxSalary: 450000,
              minSalary: 200000,
              avgSalary: 120000,
            },
          },
        },
        {
          branchname: "E&TC Engineering ",
          seats: 30,
          duration: 4,
          cutOffMarks: [
            {
              year: "2023",
              CategoryCutoff: {
                GOPENH: 29.3331437,
                GNT2H: 16.7412669,
                GNT3H: 14.7866072,
                GOBCH: 11.3082039,
                LOPENH: 38.17388,
                LOBCH: 30.014662,
              },
            },
          ],
          placement: {
            placementFacilities: true,
            PlacementStats: {
              year: new Date("2023-01-01"),
              studentsPlaced: 60,
              maxSalary: 450000,
              minSalary: 200000,
              avgSalary: 120000,
            },
          },
        },
  
        {
          branchname: "Mechanical Engineering",
          seats: 60,
          duration: 4,
          cutOffMarks: [
            {
              year: "2023",
              CategoryCutoff: {
                GOPENH: 10.4564832,
              },
            },
          ],
          placement: {
            placementFacilities: true,
            PlacementStats: {
              year: new Date("2023-01-01"),
              studentsPlaced: 60,
              maxSalary: 450000,
              minSalary: 200000,
              avgSalary: 120000,
            },
          },
        },
      ],
  
      fees: {
        TuitionFee: 10000,
        DevelopmentFee: 50000,
        TotalFee: 60000,
      },
    },
  
    {
      basicInfo: {
        institution:
          "All India Shri Shivaji Memorial Society‟s Institute of Information Technology",
        principal: "Dr. Pradeep B. Mane",
        CollageCode: "6282",
        address: "1, Kennedy Road, Near R.T.O.,Pune – 411 001",
        contact: {
          email: "principal@aissmsioit.org",
          phoneno: "91-020- 26058877",
        },
        accreditation: {
          NBA: true,
          NAAC: true,
        },
        autonomous: true,
      },
      facility: {
        Hostel: {
          boys: false,
          girls: true,
        },
        others: [
          "Classroom/Tutorial Room facilities ",
          "Laboratory details",
          "Computer Centre Facilities",
          "Library Facilities",
          "Auditorium/Seminar Halls/Amphi",
          "Cafeteria",
  
          "Indoor Sports facilities",
          "Outdoor Sports facilities",
          "Gymnasium facilities",
          "Medical Facilites",
        ],
      },
      courses: [
        {
          branchname: "Computer Engineering",
          seats: 120,
          duration: 4,
          cutOffMarks: [
            {
              year: "2023",
              CategoryCutoff: {
                GOPENH: 95.9521261,
                GSCH: 89.082417,
                GSTH: 66.4465439,
                GVJH: 91.586273,
                GNT1H: 95.7384206,
                GNT2H: 94.6495249,
                GNT3H: 94.6506656,
                GOBCH: 95.1149971,
                LOPENH: 95.456053,
                LSCH: 88.3304859,
                LSTH: 44.6471616,
                LNT2H: 95.299692,
                LOBCH: 94.4417452,
              },
            },
          ],
          placement: {
            placementFacilities: true,
            PlacementStats: {
              year: new Date("2023-01-01"),
              studentsPlaced: 93,
              maxSalary: 1580000,
              minSalary: 336000,
              avgSalary: 494000,
            },
          },
        },
        {
          branchname: "Electrical Engineering",
          seats: 60,
          duration: 4,
          cutOffMarks: [
            {
              year: "2023",
              CategoryCutoff: {
                GOPENH: 69.7082914,
                GSCH: 46.4456321,
                GSTH: 41.4815869,
                GNT2H: 60.6284658,
                GNT3H: 57.0638559,
                GOBCH: 55.2181517,
                LOPENH: 69.6045087,
                LSCH: 17.4354552,
                LOBCH: 42.7946749,
              },
            },
          ],
          placement: {
            placementFacilities: true,
            PlacementStats: {
              year: new Date("2023-01-01"),
              studentsPlaced: 31,
              maxSalary: 760000,
              minSalary: 180000,
              avgSalary: 470000,
            },
          },
        },
        {
          branchname: "Instrumentation Engineering ",
          seats: 60,
          duration: 4,
          cutOffMarks: [
            {
              year: "2023",
              CategoryCutoff: {
                GOPENS: 54.1664697,
                GSCS: 35.8351101,
                GVJS: 20.1763116,
                GNT2S: 37.5478565,
                GNT3S: 48.2193247,
                GOBCS: 36.7166438,
                LOPENS: 56.3628587,
                LNT2S: 57.6946774,
                LOBCS: 21.5067519,
                EWS: 64.0075195,
              },
            },
          ],
          placement: {
            placementFacilities: true,
            PlacementStats: {
              year: new Date("2023-01-01"),
              studentsPlaced: 65,
              maxSalary: 600000,
              minSalary: 150000,
              avgSalary: 327000,
            },
          },
        },
  
        {
          branchname: "Electronics & Tele-communication ",
          seats: 120,
          duration: 4,
          cutOffMarks: [
            {
              year: "2023",
              CategoryCutoff: {
                GOPENH: 91.3297266,
                GSCH: 79.2815054,
                GVJH: 71.9798416,
                GNT1H: 82.3877908,
                GNT2H: 81.5143923,
                GNT3H: 87.2542051,
                GOBCH: 89.3887863,
                LOPENH: 90.8511759,
                LSCH: 74.5211181,
                LOBCH: 90.0256605,
              },
            },
          ],
          placement: {
            placementFacilities: true,
            PlacementStats: {
              year: new Date("2023-01-01"),
              studentsPlaced: 133,
              maxSalary: 700000,
              minSalary: 120000,
              avgSalary: 400000,
            },
          },
        },
  
        {
          branchname: "Information Technology ",
          seats: 60,
          duration: 4,
          cutOffMarks: [
            {
              year: "2023",
              CategoryCutoff: {
                GOPENS: 94.9538024,
                GSCS: 90.8966299,
                GSTS: 48.1419882,
                GVJS: 90.8078665,
                GNT1S: 91.8979281,
                GNT2S: 94.3362575,
                GOBCS: 94.6532277,
                LOPENS: 95.0419966,
                LSCS: 87.4840478,
                LSTS: 35.978039,
                LVJS: 85.2528023,
                LNT2S: 90.5879529,
                LOBCS: 93.9682991,
                DEFOPENS: 91.4761117,
                TFWS: 96.3841754,
                DEFROBCS: 89.5284491,
                EWS: 94.8196814,
              },
            },
          ],
          placement: {
            placementFacilities: true,
            PlacementStats: {
              year: new Date("2023-01-01"),
              studentsPlaced: 133,
              maxSalary: 1700000,
              minSalary: 270000,
              avgSalary: 480000,
            },
          },
        },
        {
          branchname: "Artificial Intelligence and Data Science ",
          seats: 120,
          duration: 4,
          cutOffMarks: [
            {
              year: "2023",
              CategoryCutoff: {
                GOPENS: 94.9538024,
                GSCS: 90.8966299,
                GSTS: 48.1419882,
                GVJS: 90.8078665,
                GNT1S: 91.8979281,
                GNT2S: 94.3362575,
                GOBCS: 94.6532277,
                LOPENS: 95.0419966,
                LSCS: 87.4840478,
                LSTS: 35.978039,
                LVJS: 85.2528023,
                LNT2S: 90.5879529,
                LOBCS: 93.9682991,
                DEFOPENS: 91.4761117,
                TFWS: 96.3841754,
                DEFROBCS: 89.5284491,
                EWS: 94.8196814,
              },
            },
          ],
          placement: {
            placementFacilities: true,
            PlacementStats: {
              year: new Date("2023-01-01"),
              studentsPlaced: -1,
              maxSalary: -1,
              minSalary: -1,
              avgSalary: -1,
            },
          },
        },
      ],
  
      fees: {
        TuitionFee: 97343,
        DevelopmentFee: 12657,
        TotalFee: 110000,
      },
    },
  
    {
      basicInfo: {
        institution:
          "Vidya Pratishthan’s Kamalnayan Bajaj Institute of Engineering & Technology, Baramati",
        principal: "Dr. Rajankumar Sadashivrao Bichkar",
        CollageCode: "6284",
        address: "Vidyanagari, M.I.D.C. (Resi. Zone), Baramati, Dist. Pune",
        contact: {
          email: "principal.vpkbiet@vidyapratishthan.com",
          phoneno: "02112-239503 / 239504",
        },
        accreditation: {
          NBA: true,
          NAAC: true,
        },
        autonomous: false,
      },
      facility: {
        Hostel: {
          boys: true,
          girls: true,
        },
        others: [
          "Classroom/Tutorial Room facilities ",
          "Laboratory details",
          "Computer Centre Facilities",
          "Library Facilities",
          "Auditorium/Seminar Halls/Amphi",
          "Cafeteria",
          "Indoor Sports facilities",
          "Outdoor Sports facilities",
          "Gymnasium facilities",
          "Medical Facilites",
        ],
      },
      courses: [
        {
          branchname: "Computer Engineering",
          seats: 60,
          duration: 4,
          cutOffMarks: [
            {
              year: "2023",
              CategoryCutoff: {
                GOPENH: 91.4761117,
                GSCH: 80.5336015,
                GVJH: 88.4857211,
                GNT1H: 87.5451435,
                GNT2H: 90.5561883,
                GNT3H: 88.2550174,
                GOBCH: 89.8892235,
                LOPENH: 92.9054213,
                LSCH: 84.1495823,
                LOBCH: 90.5879529,
              },
            },
          ],
          placement: {
            placementFacilities: true,
            PlacementStats: {
              year: new Date("2023-01-01"),
              studentsPlaced: 36,
              maxSalary: 700000,
              minSalary: 336000,
              avgSalary: 470000,
            },
          },
        },
        {
          branchname: "Information Technology",
          seats: 60,
          duration: 4,
          cutOffMarks: [
            {
              year: "2023",
              CategoryCutoff: {
                GOPENH: 89.2369593,
                GSCH: 71.7637042,
                GVJH: 61.4673542,
                GNT1H: 75.4846987,
                GNT2H: 87.7973797,
                GOBCH: 87.5451435,
                LOPENH: 89.0594645,
                LSCH: 83.2493822,
                LOBCH: 88.9608831,
              },
            },
          ],
          placement: {
            placementFacilities: true,
            PlacementStats: {
              year: new Date("2023-01-01"),
              studentsPlaced: 24,
              maxSalary: 600000,
              minSalary: 240000,
              avgSalary: 380000,
            },
          },
        },
        {
          branchname: "Electronics & Telecomm. Engineering",
          seats: 60,
          duration: 4,
          cutOffMarks: [
            {
              year: "2023",
              CategoryCutoff: {
                GOPENH: 77.6308856,
                GSCH: 30.014662,
                GNT1H: 44.402277,
                GNT2H: 76.6964455,
                GNT3H: 75.5619344,
                GOBCH: 72.7060426,
                LOPENH: 78.0555027,
                LSCH: 58.8006082,
                LOBCH: 75.7886771,
              },
            },
          ],
          placement: {
            placementFacilities: true,
            PlacementStats: {
              year: new Date("2023-01-01"),
              studentsPlaced: 25,
              maxSalary: 600000,
              minSalary: 300000,
              avgSalary: 410000,
            },
          },
        },
  
        {
          branchname: "Mechanical Engineering",
          seats: 60,
          duration: 4,
          cutOffMarks: [
            {
              year: "2023",
              CategoryCutoff: {
                GOPENH: 57.7165019,
                GSCH: 28.9481366,
                GVJH: 20.8205322,
                GNT2H: 51.6740911,
                GNT3H: 33.5099087,
                GOBCH: 28.1605922,
                LOPENH: 4.376802,
                LOBCH: 2.0005702,
              },
            },
          ],
          placement: {
            placementFacilities: true,
            PlacementStats: {
              year: new Date("2023-01-01"),
              studentsPlaced: 9,
              maxSalary: 410000,
              minSalary: 240000,
              avgSalary: 383000,
            },
          },
        },
  
        {
          branchname: "Civil Engineering:",
          seats: 60,
          duration: 4,
          cutOffMarks: [
            {
              year: "2023",
              CategoryCutoff: {
                GOPENH: 36.1623265,
                GSCH: 19.8474395,
                GNT2H: 30.5619889,
                GNT3H: 25.4603297,
                LOPENH: 8.3872203,
              },
            },
          ],
          placement: {
            placementFacilities: true,
            PlacementStats: {
              year: new Date("2023-01-01"),
              studentsPlaced: 6,
              maxSalary: 410000,
              minSalary: 410000,
              avgSalary: 410000,
            },
          },
        },
        {
          branchname: "Electrical Engineering",
          seats: 60,
          duration: 4,
          cutOffMarks: [
            {
              year: "2023",
              CategoryCutoff: {
                GOPENH: 54.5241174,
                GSCH: 12.7995462,
                GNT2H: 52.2301039,
                GNT3H: 37.5478565,
                GOBCH: 9.9445363,
                LOPENH: 63.088298,
                LSCH: 12.099832,
                LOBCH: 49.0525702,
              },
            },
          ],
          placement: {
            placementFacilities: true,
            PlacementStats: {
              year: new Date("2023-01-01"),
              studentsPlaced: 17,
              maxSalary: 575000,
              minSalary: 240000,
              avgSalary: 380000,
            },
          },
        },
  
        {
          branchname: "Artificial intelligence and Data Science",
          seats: 60,
          duration: 4,
          cutOffMarks: [
            {
              year: "2023",
              CategoryCutoff: {
                GOPENH: 87.2542051,
                GSCH: 67.1125395,
                GVJH: 26.9007793,
                GNT1H: 47.8470482,
                GNT2H: 84.6390824,
                GNT3H: 81.984042,
                GOBCH: 85.7967175,
                LOPENH: 87.8843875,
                LSCH: 70.8665527,
                LOBCH: 85.606492,
              },
            },
          ],
          placement: {
            placementFacilities: true,
            PlacementStats: {
              year: new Date("2023-01-01"),
              studentsPlaced: -1,
              maxSalary: -1,
              minSalary: -1,
              avgSalary: -1,
            },
          },
        },
      ],
  
      fees: {
        TuitionFee: 87500,
        DevelopmentFee: 12165,
        TotalFee: 99165,
      },
    },
  ];
  