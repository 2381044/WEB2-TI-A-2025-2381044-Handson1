interface Biodata {
  name: string;
  age: number;
  location: string;
  motor: string;
}

const objectBio2: Biodata = {
  name: "Karla Shanessa Tauran",
  age: 19,
  location: "Jakarta",
  motor: "Yamaha",
};

function showBiodata2(Biodata: Biodata) {
  console.log(Biodata.location);
}

showBiodata2(objectBiodata);
