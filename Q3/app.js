const URL = 'https://jsonplaceholder.typicode.com/photos'

const outDiv = document.querySelector('.out')

const fetchData = async () => {
    const response = await fetch(URL);
    const dataa = await response.json()
    const data = dataa.slice(0, 30)
    console.log(data[0]);
    if (response) {
        hideLoader();
    }
    showData(data);
}

fetchData()

const hideLoader = () => {
    document.querySelector('.loader').style.display = 'none'
}

const showData = (data) => {
    for (let i of data) {
        let div = document.createElement('div');
        div.setAttribute('class', 'cards')
        let img = document.createElement('img');
        img.setAttribute('height', '300px')
        img.setAttribute('width', '450px')
        img.style.borderRadius = '10px'
        let p = document.createElement('p');
        p.style.overflowWrap = 'break-word'
        p.style.marginTop = '20px'
        img.src = i.url;
        p.innerText = i.title;
        div.appendChild(img)
        div.appendChild(p)
        outDiv.appendChild(div)
        // console.log(i);
    }

}