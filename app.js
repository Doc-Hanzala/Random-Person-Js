const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.kcrw.com/news/shows/press-play-with-madeleine-brand/tech-job-cuts-scientology-trials-ev-random-novel/@@images/rectangular_image/page-header?v=1668558373.12",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://img.freepik.com/free-photo/young-man-with-beard-round-glasses_273609-6994.jpg?w=2000",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://pbs.twimg.com/media/DZotU1hW0AEDN5F.jpg:large",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAAMTBRXzcOdE9MBOgy492pCj1fA_E19DqJA&usqp=CAU",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

//   selecting elements

let img = document.querySelector("#person-img");
let title = document.querySelector(".name");
let job = document.querySelector(".job");
let info = document.querySelector(".info");
let nextPerson = document.querySelector(".nextPerson");
let prevPerson = document.querySelector(".prevPerson");
let randBtn = document.querySelector(".surprise");

// setting the functionality

let currentIndex = 0;

window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentIndex);
});

function showPerson(person) {
  let num = reviews[person];
  img.src = num.img;
  title.textContent = num.name;
  job.textContent = num.job;
  info.textContent = num.text;
}

// next person

nextPerson.addEventListener("click",()=>{
    currentIndex++
    if(currentIndex > reviews.length - 1){
       currentIndex = 0
    }
    showPerson(currentIndex)
    
})

// Previous Person

prevPerson.addEventListener("click",()=>{
    currentIndex--
    if(currentIndex < 0){
        currentIndex = reviews.length -1
    }
    showPerson(currentIndex)
    
})

// Random Person

randBtn.addEventListener("click",()=>{
    let randNum = Math.floor(Math.random() * reviews.length)
    showPerson(randNum)
})


