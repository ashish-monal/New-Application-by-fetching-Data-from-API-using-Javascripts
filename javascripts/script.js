// let loadMoreBtn = document.querySelector('#load-more');
// let currentItem = 3;
// loadMoreBtn.onclick = () => {
//     let boxes = [...document.querySelectorAll('.container .box-container .box')];
//     for (var i = currentItem; i < currentItem + 3; i++) {
//         boxes[i].style.display = 'inline-block';
//     }
//     currentItem += 3;
//     if (currentItem >= boxes.length) {
//         loadMoreBtn.style.display = 'none'
//     }
// }


const FINAL = 'https://saurav.tech/NewsAPI/everything/cnn.json';
const Array1 = console.log(FINAL);
const main = document.getElementById('main');

getNews(FINAL);

function getNews(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.articles.length);
        showNews(data.articles)
    })
}

let pageSize = 10;
let currentPage = 2;

function showNews(data) {
    data.filter((row, index) => {
        let start = (currentPage - 1) * pageSize;
        let end = currentPage * pageSize;

        if (index >= start && index < end) return true;
        main.innerHTML = ''
    }).forEach(
        box => {
            const { title, urlToImage, author, description, publishedAt, url
            } = box;

            const date2 = new Date(publishedAt);
            const publishDay = `${date2.getDate()}/${date2.getMonth()}/${date2.getFullYear()}`

            const newsElement1 = document.createElement('div');
            newsElement1.classList.add('box');
            for (count = 0; count < 10; count++) {
                newsElement1.innerHTML = `
    
        <div class="box-container">
        <div class="box">
        <div class="image">
            <img src="${urlToImage}" alt="${title}" />
          </div>
          <div class="content">
            <h3>${title}</h3>
            <p>
             ${description}
            </p>
            <a href="${url}" class="btn" target="_blank">Read More</a>
            <div class="icon">
              <span> <i class="fa-solid fa-calendar"></i>${publishDay}</span>
              <span> <i class="fa-solid fa-user"></i>${author}</span>
            </div>
            </div>
            </div>
            </div>
        `
            }
            main.appendChild(newsElement1);
        })

    // main.innerHTML = '';
    // data.forEach(box => {
    //     const { title, urlToImage, author, description, publishedAt, url
    //     } = box;


    //     const date2 = new Date(publishedAt);
    //     const publishDay = `${date2.getDate()}/${date2.getMonth()}/${date2.getFullYear()}`
    //     // console.log(date2);


    //     const newsElement1 = document.createElement('div');
    //     newsElement1.classList.add('box');
    //     for (count = 0; count < 10; count++) {
    //         newsElement1.innerHTML = `

    //     <div class="box-container">
    //     <div class="box">
    //     <div class="image">
    //         <img src="${urlToImage}" alt="${title}" />
    //       </div>
    //       <div class="content">
    //         <h3>${title}</h3>
    //         <p>
    //          ${description}
    //         </p>
    //         <a href="${url}" class="btn" target="_blank">Read More</a>
    //         <div class="icon">
    //           <span> <i class="fa-solid fa-calendar"></i>${publishDay}</span>
    //           <span> <i class="fa-solid fa-user"></i>${author}</span>
    //         </div>
    //         </div>
    //         </div>
    //         </div>
    //     `

    //     }
    //     main.appendChild(newsElement1);
    // })

}

//  Categrory Search
function General() {
    const FINAL = 'https://saurav.tech/NewsAPI/everything/cnn.json';
    getNews(FINAL);
}

function business() {
    const FINAL = 'https://saurav.tech/NewsAPI/top-headlines/category/business/in.json';
    getNews(FINAL);
}

function entertainment() {
    const FINAL = 'https://saurav.tech/NewsAPI/top-headlines/category/entertainment/in.json';
    getNews(FINAL);
}

function health() {
    const FINAL = 'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json';
    getNews(FINAL);
}

function science() {
    const FINAL = 'https://saurav.tech/NewsAPI/top-headlines/category/science/in.json';
    getNews(FINAL);
}

function sports() {
    const FINAL = 'https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json';
    getNews(FINAL);
}

function technology() {
    const FINAL = 'https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json';
    getNews(FINAL);
}

// Adding Function for pagination 
function previousPage() {
    console.log("Ashish")
    if (currentPage >= 0) {
        console.log(currentPage)
        currentPage--
        showNews(data);
    }
}

function nextPage() {
    if (currentPage >= Array1.length - 1) {
        return false;
    }
    currentPage++;

}
