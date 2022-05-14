const URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');
const getCats = async () => {
    try {
        const data = await fetch(URL)
            .then(res=> res.json())
            .catch(e => console.log(e.message))
        return data.webpurl;
    } catch (error) {
        console.log(error.message)
    }
}
const loadImg = async () => {
    catImg.src = await getCats();
}
catBtn.addEventListener('click',loadImg);
loadImg();
