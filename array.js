async function dataLao() {
    try {
        let response = await fetch('https://cakestoreapi.com/products/')

        let data = await response.json()

        data.forEach(function (elem) {
            console.log(elem.title);
        })
    } catch (error) {
        console.error('URL galat hai bhai');
    }
}


dataLao()