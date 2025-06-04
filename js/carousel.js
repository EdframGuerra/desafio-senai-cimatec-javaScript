const carouselArr = [];

class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
        carouselArr.push(this);
    }

    static Start(arr = carouselArr) {
        if (!arr?.length) {
            throw new Error("O método Start requer um array não vazio.");
        }
        Carousel._sequence = 0;
        Carousel._size = arr.length;
        Carousel._interval && clearInterval(Carousel._interval);
        Carousel.Next();
        Carousel._interval = setInterval(() => Carousel.Next(), 2000);
    }

    static Next() {
        if (Carousel._sequence === undefined) Carousel._sequence = 0;
        if (Carousel._size === undefined) Carousel._size = carouselArr.length;

        const item = carouselArr[Carousel._sequence];
        if (!item) return;

        const img = document.getElementById('carousel');
        const title = document.getElementById('carousel-title');
        const link = document.getElementById('carousel-link');
        if (img) img.src = item.image;
        if (title) title.textContent = item.title;
        if (link) link.href = item.url;

        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    }
}

carouselArr.push(new Carousel("img/imagem_1.jpg", "Esta é a nova Ford Ranger 2022. Confira as novidades.", "lancamento.html"));
carouselArr.push(new Carousel("img/imagem_2.jpg", "Ford: nossa história", "lancamento.html"));
carouselArr.push(new Carousel("img/imagem_3.jpg", "Novo Ford Bronco Sport 2022", "lancamento.html"));

Carousel.Start(carouselArr);
