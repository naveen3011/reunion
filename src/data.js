const data = [
  {
    id: 1,
    price: "₹12000",
    type: "Home 1-BHK",
    location: "Goregaon",
    image:
      "https://i.pinimg.com/originals/cd/08/c0/cd08c00e95a66d201627cd62e0123df0.jpg",
    availableFrom: new Date("2023-11-01")
  },
  {
    id: 2,
    price: "₹13500",
    type: "Home 1-BHK",
    location: "Goregaon",
    image: "https://toletboard.net/wp-content/uploads/2020/01/1-1-1170x738.jpg",
    availableFrom: new Date("2023-01-02")
  },
  {
    id: 3,
    price: "₹14000",
    type: "Home 1-BHK",
    location: "Goregaon",
    image:
      "https://lscdn.blob.core.windows.net/add-post/subcategoryid/10850243-add-15999150322352706.jpeg",
    availableFrom: new Date("2023-01-20")
  },
  {
    id: 4,
    price: "₹18500",
    type: "Home 1-BHK",
    location: "Goregaon",
    image:
      "https://i.pinimg.com/originals/e3/8e/06/e38e06c3f28d1952e7cf94736ed88dfc.jpg",
    availableFrom: new Date("2022-12-03")
  },
  {
    id: 5,
    price: "₹22000",
    type: "Home 2-BHK",
    location: "Goregaon",
    image:
      "https://findhousekenya.co.ke/wp-content/uploads/2019/03/maxresdefault.jpg",
    availableFrom: new Date("2023-01-01")
  },
  {
    id: 6,
    price: "₹22500",
    type: "Home 2-BHK",
    location: "Goregaon",
    image: "https://i.ytimg.com/vi/efHRNi2bcTk/maxresdefault.jpg",
    availableFrom: new Date("2023-01-02")
  },
  {
    id: 7,
    price: "₹24000",
    type: "Home 2-BHK",
    location: "Goregaon",
    image:
      "https://thearchitectsdiary.com/wp-content/uploads/2018/03/2-bhk-interior-design-10.jpg",
    availableFrom: new Date("2023-01-20")
  },
  {
    id: 8,
    price: "₹28500",
    type: "Home 2-BHK",
    location: "Goregaon",
    image:
      "https://thearchitectsdiary.com/wp-content/uploads/2018/07/apaartment-design_1.jpg",
    availableFrom: new Date("2022-12-03")
  },
  {
    id: 9,
    price: "₹32000",
    type: "Home 3-BHK",
    location: "Goregaon",
    image:
      "https://media.architecturaldigest.in/wp-content/uploads/2019/04/Mumbai-duplex-apartment-GA-Design-01.jpg",
    availableFrom: new Date("2023-01-01")
  },
  {
    id: 10,
    price: "₹33500",
    type: "Home 3-BHK",
    location: "Goregaon",
    image:
      "https://media.architecturaldigest.in/wp-content/uploads/2019/04/Mumbai-duplex-apartment-GA-Design-866x487.jpg",
    availableFrom: new Date("2023-01-02")
  },
  {
    id: 11,
    price: "₹36500",
    type: "Home 3-BHK",
    location: "Goregaon",
    image:
      "https://media.architecturaldigest.in/wp-content/uploads/2019/04/Mumbai-duplex-apartment-GA-Design-14.jpg",
    availableFrom: new Date("2023-01-20")
  },
  {
    id: 12,
    price: "₹38000",
    type: "Home 3-BHK",
    location: "Goregaon",
    image:
      "https://media.architecturaldigest.in/wp-content/uploads/2019/04/Mumbai-duplex-apartment-GA-Design-06.jpg",
    availableFrom: new Date("2022-12-03")
  },
  {
    id: 13,
    price: "₹12000",
    type: "Home 1-BHK",
    location: "Andheri West",
    image:
      "https://i.pinimg.com/originals/cd/08/c0/cd08c00e95a66d201627cd62e0123df0.jpg",
    availableFrom: new Date("2023-01-01")
  },
  {
    id: 14,
    price: "₹13500",
    type: "Home 1-BHK",
    location: "Andheri West",
    image:
      "https://www.dnkinteriordesigners.in/images/services/service-single/1BHK-interior-designers.jpg",
    availableFrom: new Date("2023-01-02")
  },
  {
    id: 15,
    price: "₹14000",
    type: "Home 1-BHK",
    location: "Andheri West",
    image:
      "https://lh5.googleusercontent.com/proxy/rJXYBI3cEvZufPESwe8MDBWPhcpkABEgRLFSaiSPExbcKJOMLgivkBMwwmrwLWFsSlglDu1VanucU2m4GRwxe0dO0_xY2ZOKFvfi4iyh5oWfJn_ONhR07yRo7a8M=s0-d",
    availableFrom: new Date("2023-01-20")
  },
  {
    id: 16,
    price: "₹18500",
    type: "Home 1-BHK",
    location: "Andheri West",
    image:
      "https://i.pinimg.com/originals/ff/d6/44/ffd644d3c42c4ca20f76ea7d03c3a6db.jpg",
    availableFrom: new Date("2022-12-03")
  },
  {
    id: 17,
    price: "₹22000",
    type: "Home 2-BHK",
    location: "Andheri West",
    image:
      "https://th.bing.com/th/id/R.5c1ef69148fb23a7bdf391bb337746ae?rik=Xisb2FiY99SdEQ&riu=http%3a%2f%2fwww.chifudesign.com%2fwp-content%2fuploads%2f2019%2f08%2f1567187207_maxresdefault.jpg&ehk=DcVt5W1VZxu4KYTFn%2bCWSIc1uMuJwJ%2f2OyY91TPezMo%3d&risl=&pid=ImgRaw&r=0",
    availableFrom: new Date("2023-01-01")
  },
  {
    id: 18,
    price: "₹22500",
    type: "Home 2-BHK",
    location: "Andheri West",
    image:
      "https://thearchitectsdiary.com/wp-content/uploads/2018/03/2-bhk-interior-design-10.jpg",
    availableFrom: new Date("2023-01-02")
  },
  {
    id: 19,
    price: "₹24000",
    type: "Home 2-BHK",
    location: "Andheri West",
    image:
      "https://th.bing.com/th/id/R.789e10c8a463abc66b17baf1319de4e2?rik=hc9Ry%2bVP6TwtKQ&riu=http%3a%2f%2fthearchitectsdiary.com%2fwp-content%2fuploads%2f2018%2f03%2f2-bhk-interior-design-8.jpg&ehk=NXYipGgoCRCE0uiFR8LruYdJam41oiMocT86sJRYjQg%3d&risl=&pid=ImgRaw&r=0",
    availableFrom: new Date("2023-01-20")
  },
  {
    id: 20,
    price: "₹28500",
    type: "Home 2-BHK",
    location: "Andheri West",
    image:
      "https://i.pinimg.com/originals/5a/12/25/5a1225aed0a189cd81da517886af7974.jpg",
    availableFrom: new Date("2022-12-03")
  },
  {
    id: 21,
    price: "₹32000",
    type: "Home 3-BHK",
    location: "Andheri West",
    image:
      "https://thearchitectsdiary.com/wp-content/uploads/2017/12/IMGL2478-copy-Large.jpg",
    availableFrom: new Date("2023-01-01")
  },
  {
    id: 22,
    price: "₹33500",
    type: "Home 3-BHK",
    location: "Andheri West",
    image:
      "https://i.pinimg.com/originals/fe/14/a7/fe14a7c3d485de020cf2577c47f3e20f.jpg",
    availableFrom: new Date("2023-01-02")
  },
  {
    id: 23,
    price: "₹36500",
    type: "Home 3-BHK",
    location: "Andheri West",
    image:
      "https://i.pinimg.com/originals/43/5d/7e/435d7e01cba1726ef3fff337551fb94f.jpg",
    availableFrom: new Date("2023-01-20")
  },
  {
    id: 24,
    price: "₹38000",
    type: "Home 3-BHK",
    location: "Andheri West",
    image:
      "https://i.pinimg.com/736x/d3/f8/70/d3f870fe951e7cc15696fd801a437d5c.jpg",
    availableFrom: new Date("2022-12-03")
  },
  {
    id: 25,
    price: "₹42000",
    type: "Office ",
    location: "Goregaon",
    image:
      "https://assets.entrepreneur.com/content/3x2/2000/20181031205142-shutterstock-1031148421-crop.jpeg",
    availableFrom: new Date("2023-01-01")
  },
  {
    id: 26,
    price: "₹48500",
    type: "Office",
    location: "Goregaon",
    image: "https://www.allbusiness.com/asset/2016/01/Office-space.jpg",
    availableFrom: new Date("2023-01-02")
  },
  {
    id: 27,
    price: "₹55000",
    type: "Office",
    location: "Goregaon",
    image: "https://pbs.twimg.com/media/DUS4YjBX0AA2vuD.jpg:large",
    availableFrom: new Date("2023-01-20")
  },
  {
    id: 28,
    price: "₹59500",
    type: "Office",
    location: "Goregaon",
    image:
      "https://pacificworkplaces.com/wp-content/uploads/2020/06/Coworking-Space-Health-and-Safety-Plexiglass.jpg",
    availableFrom: new Date("2022-12-03")
  },
  {
    id: 29,
    price: "₹56000",
    type: "Office",
    location: "Andheri West",
    image:
      "https://th.bing.com/th/id/OIP.wzO2QzERtW2fuejAPZ1S3AEgDY?pid=ImgDet&rs=1",
    availableFrom: new Date("2023-01-01")
  },
  {
    id: 30,
    price: "₹58000",
    type: "Office",
    location: "Andheri West",
    image:
      "https://citycentral.com/media/workspaces/workspace/preview/preview_20.jpg",
    availableFrom: new Date("2023-01-02")
  },
  {
    id: 31,
    price: "₹64000",
    type: "Office",
    location: "Andheri West",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/d6dda724731681.563391e030c43.jpeg",
    availableFrom: new Date("2023-01-20")
  },
  {
    id: 32,
    price: "₹69500",
    type: "Office",
    location: "Andheri West",
    image:
      "https://www.keeneys.com/wp-content/uploads/2019/09/AIS-Oxygen-2-LB.jpg",
    availableFrom: new Date("2022-12-03")
  },

  {
    id: 33,
    price: "₹18000",
    type: "Home 1-BHK",
    location: "Powai",
    image:
      "https://is1-3.housingcdn.com/01c16c28/9626e0b000dce524385f60754d1ae287/v0/large/1_bhk_apartment-for-rent-andheri_west-Mumbai-hall.jpg",
    availableFrom: new Date("2023-01-01")
  },
  {
    id: 34,
    price: "₹19500",
    type: "Home 1-BHK",
    location: "Powai",
    image:
      "https://www.dnkinteriordesigners.in/images/services/service-single/1BHK-interior-designers.jpg",
    availableFrom: new Date("2023-01-02")
  },
  {
    id: 35,
    price: "₹19500",
    type: "Home 1-BHK",
    location: "Powai",
    image:
      "https://i.pinimg.com/originals/e3/8e/06/e38e06c3f28d1952e7cf94736ed88dfc.jpg",
    availableFrom: new Date("2023-01-20")
  },
  {
    id: 36,
    price: "₹19700",
    type: "Home 1-BHK",
    location: "Powai",
    image: "https://i.ytimg.com/vi/h3jxmmD1SKs/maxresdefault.jpg",
    availableFrom: new Date("2022-12-03")
  },
  {
    id: 37,
    price: "₹28000",
    type: "Home 2-BHK",
    location: "Powai",
    image:
      "https://www.pajasaapartments.com/wp-content/uploads/2019/03/Lake-View-Service-Apartment-in-Powai-hall1-1200x800.jpg",
    availableFrom: new Date("2023-01-01")
  },
  {
    id: 38,
    price: "₹28500",
    type: "Home 2-BHK",
    location: "Powai",
    image:
      "https://www.pajasaapartments.com/wp-content/uploads/2019/03/3-BHK-Serviced-Apartment-in-Powai-hall2-1.jpg",
    availableFrom: new Date("2023-01-02")
  },
  {
    id: 39,
    price: "₹29500",
    type: "Home 2-BHK",
    location: "Powai",
    image: "https://r-cf.bstatic.com/images/hotel/max1024x768/886/88678884.jpg",
    availableFrom: new Date("2023-01-20")
  },
  {
    id: 40,
    price: "₹29750",
    type: "Home 2-BHK",
    location: "Powai",
    image:
      "https://ui.cltpstatic.com/places/hotels/7414/741422/images/10_w.jpg",
    availableFrom: new Date("2022-12-03")
  },
  {
    id: 41,
    price: "₹36500",
    type: "Home 3-BHK",
    location: "Powai",
    image:
      "https://www.pajasaapartments.com/wp-content/uploads/2019/03/3-BHK-Serviced-Apartment-in-Powai-hall2-1.jpg",
    availableFrom: new Date("2023-01-01")
  },
  {
    id: 42,
    price: "₹38500",
    type: "Home 3-BHK",
    location: "Powai",
    image:
      "https://www.bombayproperty.com/assets/thumbnails/eb/eb3e3359b962d78cf8cb0fc8716ff3fa.JPG",
    availableFrom: new Date("2023-01-02")
  },
  {
    id: 43,
    price: "₹39500",
    type: "Home 3-BHK",
    location: "Powai",
    image:
      "https://www.pajasaapartments.com/wp-content/uploads/2019/03/3-BHK-Serviced-Apartment-in-Powai-room-3.jpg",
    availableFrom: new Date("2023-01-20")
  },
  {
    id: 44,
    price: "₹39750",
    type: "Home 3-BHK",
    location: "Powai",
    image:
      "https://is1-2.housingcdn.com/012c1500/e26b8f4a5924b262a51664675401d2cc/v0/medium/3_bhk_apartment-for-rent-powai-Mumbai.jpeg",
    availableFrom: new Date("2022-12-03")
  },
  //2 offices in powai
  {
    id: 45,
    price: "₹ 65000",
    type: "Office",
    location: "Powai",
    image:
      "https://myventurepad.com/wp-content/uploads/2020/07/office-design.jpg",
    availableFrom: new Date("2023-01-20")
  },
  {
    id: 46,
    price: "₹68000",
    type: "Office",
    location: "Powai",
    image:
      "https://www.parmetech.com/wp-content/uploads/2020/12/Office-Design-Trends-2021-scaled.jpeg",
    availableFrom: new Date("2022-12-03")
  },
  //12 homes in Navi Mumbai
  {
    id: 47,
    price: "₹16000",
    type: "Home 1-BHK",
    location: "Navi Mumbai",
    image:
      "https://dyimg2.realestateindia.com/prop_images/1000469/857904_1.jpg",
    availableFrom: new Date("2023-01-01")
  },
  {
    id: 48,
    price: "₹16500",
    type: "Home 1-BHK",
    location: "Powai",
    image:
      "https://th.bing.com/th/id/R.fe3d53d90dec3196175fd42ef9590465?rik=K2MB2S30VdxDmQ&riu=http%3a%2f%2fwww.flatsonrentinindia.in%2fwp-content%2fuploads%2f2013%2f11%2f6-Lak-Under-1-bhk-flat-in-navi-Mumbai.jpg&ehk=ZNhV9bAOyFo%2fyCl4DzVkA2k%2buyiVWQPmKlpNNRXPLvs%3d&risl=&pid=ImgRaw&r=0",
    availableFrom: new Date("2023-01-02")
  },
  {
    id: 49,
    price: "₹17000",
    type: "Home 1-BHK",
    location: "Navi Mumbai",
    image:
      "https://dyimg2.realestateindia.com/prop_images/1605228/873744_1-350x350.jpg",
    availableFrom: new Date("2023-01-20")
  },
  {
    id: 50,
    price: "₹18700",
    type: "Home 1-BHK",
    location: "Navi Mumbai",
    image:
      "https://www.navimumbaihomes.com/wp-content/uploads/2019/03/Vaastu-Vittal-Panvel-Navi-Mumbai1-1-1024x788.jpg",
    availableFrom: new Date("2022-12-03")
  },
  {
    id: 51,
    price: "₹22000",
    type: "Home 2-BHK",
    location: "Navi Mumbai",
    image:
      "https://th.bing.com/th/id/OIP.vFOhn4taXg5LdIIP1utEKQHaE8?pid=ImgDet&w=900&h=600&rs=1",
    availableFrom: new Date("2023-01-01")
  },
  {
    id: 52,
    price: "₹28500",
    type: "Home 2-BHK",
    location: "Navi Mumbai",
    image:
      "https://th.bing.com/th/id/OIP.AMt_Sz1HrWeYGVA50ltUsAHaFj?pid=ImgDet&rs=1",
    availableFrom: new Date("2023-01-02")
  },
  {
    id: 53,
    price: "₹29500",
    type: "Home 2-BHK",
    location: "Navi Mumbai",
    image:
      "https://www.charterworld.com/images/yachts-7/Royal%20Eleganza%20-%20VIP%20cabin%20on%20the%20upper%20deck.jpg",
    availableFrom: new Date("2023-01-20")
  },
  {
    id: 54,
    price: "₹29750",
    type: "Home 2-BHK",
    location: "Navi Mumbai",
    image:
      "https://www.rajasthantourstoindia.com/img/hotel/pushkar/sajjan_bagh_resort/sajjan_bagh_resort3.jpg",
    availableFrom: new Date("2022-12-03")
  },
  {
    id: 55,
    price: "₹36500",
    type: "Home 3-BHK",
    location: "Navi Mumbai",
    image:
      "https://th.bing.com/th/id/OIP.12r7N9Wq2ssM6N2porNKKgHaFj?pid=ImgDet&rs=1",
    availableFrom: new Date("2023-01-01")
  },
  {
    id: 56,
    price: "₹38500",
    type: "Home 3-BHK",
    location: "Navi Mumbai",
    image: "https://rei.wlimg.com/prop_images/12697/730224_1.jpg",
    availableFrom: new Date("2023-01-02")
  },
  {
    id: 57,
    price: "₹39500",
    type: "Home 3-BHK",
    location: "Navi Mumbai",
    image:
      "https://dynamic.realestateindia.com/prop_images/1922360/938411_1-350x350.jpg",
    availableFrom: new Date("2023-01-20")
  },
  {
    id: 58,
    price: "₹39750",
    type: "Home 3-BHK",
    location: "Navi Mumbai",
    image:
      "https://dyimg1.realestateindia.com/prop_images/1252954/779824_1-350x350.jpg",
    availableFrom: new Date("2022-12-03")
  },
  //6 office in Navi Mumbai
  {
    id: 59,
    price: "₹45000",
    type: "Office",
    location: "Navi Mumbai",
    image:
      "https://www.damselsinsuccess.com/wp-content/uploads/2013/04/office.jpg",
    availableFrom: new Date("2023-01-20")
  },
  {
    id: 60,
    price: "₹48000",
    type: "Office",
    location: "Navi Mumbai",
    image:
      "https://www.officelovin.com/wp-content/uploads/2015/05/booking-com-singapore-office-18.jpg",
    availableFrom: new Date("2022-12-03")
  },
  {
    id: 61,
    price: "₹51000",
    type: "Office",
    location: "Navi Mumbai",
    image: "https://ccnintl.com/wp-content/uploads/crystler-office.jpg",
    availableFrom: new Date("2023-01-01")
  },
  {
    id: 62,
    price: "₹52500",
    type: "Office",
    location: "Navi Mumbai",
    image:
      "https://static01.nyt.com/images/2019/06/11/business/11PUBLISHERS-02/11PUBLISHERS-02-videoSixteenByNineJumbo1600.jpg",
    availableFrom: new Date("2023-01-02")
  },
  {
    id: 63,
    price: "₹55000",
    type: "Office",
    location: "Navi Mumbai",
    image:
      "https://designsmith.ae/uploads/worksgallery/21032020125751_02_edited_rev.jpg",
    availableFrom: new Date("2023-01-20")
  },
  {
    id: 64,
    price: "59500",
    type: "Office",
    location: "Navi Mumbai",
    image: "https://prestonconstruction.ca/storage/2020/07/CSC_0951.jpg",
    availableFrom: new Date("2022-12-03")
  }
];
export default data;
