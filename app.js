const data = [
  {
    id: 0,
    name: "Felix",
    image: "./image/Felix_Passport_size_Pics.jpg",
    postion: "Developer",
    para: "Liviing someone else life Dont z be Trapped by dogma  Which is living with the resukts of other peoples thinking",
  },
  {
    id: 1,
    name: "Vikas",
    image: "./image/felix_2.jpg",
    postion: "Designer",
    para: "Liviing someone else life Dont z be Trapped by dogma  Which is living with the resukts of other peoples thinking",
  },
];

let index = 0;
const image = document.querySelector("#image");
const h3Name = document.querySelector("#name");
const h4Designer = document.querySelector("#designer");
const pParagraph = document.querySelector("#paragraph");
const previous_btn = document.querySelector("#pre_btn");
const next_btn = document.querySelector("#next_btn");

next_btn.addEventListener("click", () => {
  if (index < data.length-1) {
    index++;
  } else {
    index = 0;
  }
  loadData();
});
previous_btn.addEventListener("click", () => {
  if (index > 0) {
    index--;
  } else {
    index = data.length-1;
  }
  loadData();
});
loadData();
function loadData() {
  const item = data[index];
  image.setAttribute("src", item.image);
  h3Name.innerHTML = item.name;
  h4Designer.innerHTML = item.postion;
  pParagraph.innerHTML = item.para;
}
