FINAL = 'https://saurav.tech/NewsAPI/everything/cnn.json';
var newsData = [];

let pageSize = 10;
let currentPage = 1;
async function renderNews(page = 1) {
    await getData()

    if (page == 1) {
        prevButton.style.visibility = "hidden"
    } else {
        prevButton.style.visibility = "visible"
    }

    if (page == numberOfPages()) {
        nextButton.style.visibility = "hidden"
    } else {
        nextButton.style.visibility = "visible"
    }



    // Create HTML Container Card
    var generalNews = ""
    console.log(newsData);

    newsData.filter((row, index) => {
        let start = (currentPage - 1) * pageSize
        let end = currentPage * pageSize

        if (index >= start && index < end) return true;
    }).forEach(new1 => {
        const { title, urlToImage, author, description, publishedAt, url
        } = new1;

        const date2 = new Date(publishedAt);
        const publishDay = `${date2.getDate()}/${date2.getMonth()}/${date2.getFullYear()}`

        generalNews += "<div>"
        generalNews += `
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
    })
    document.getElementById("main").innerHTML = generalNews
}
renderNews(FINAL)




function previousPage() {
    if (currentPage > 1)
        currentPage--;
    renderNews(currentPage)

}

function nextPage() {
    if ((currentPage * pageSize) < newsData.length) {
        currentPage++;
        renderNews(currentPage)
    }
}

function numberOfPages() {
    return Math.ceil(newsData.length / pageSize)
}

document.querySelector('#prevButton').addEventListener('click', previousPage, false);
document.querySelector('#nextButton').addEventListener('click', nextPage, false);

async function getData() {
    const response = await fetch(FINAL);
    const News = await response.json()
    newsData = News.articles

}
getData();


function General() {
    FINAL = 'https://saurav.tech/NewsAPI/everything/cnn.json';
    renderNews()
}

function business() {
    FINAL = 'https://saurav.tech/NewsAPI/top-headlines/category/business/in.json';
    renderNews()
}

function entertainment() {
    FINAL = 'https://saurav.tech/NewsAPI/top-headlines/category/entertainment/in.json';
    renderNews()
}

function health() {
    FINAL = 'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json';
    renderNews()
}

function science() {
    FINAL = 'https://saurav.tech/NewsAPI/top-headlines/category/science/in.json';
    renderNews()
}

function sports() {
    FINAL = 'https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json';
    renderNews()
}

function technology() {
    FINAL = 'https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json';
    renderNews()
}
