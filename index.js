window.addEventListener("load", () => {
    console.log("Page loaded");


    let counter = 0;
    const imageDisplay = document.querySelector(".body-img-container");
    const sliderBtn = document.querySelectorAll(".slider-btn");
    const mainImage = document.querySelector(".main-image");
    let imageIndex = document.querySelector(".number");


    let images = [
        {
            id: 1,
            image: "./assets/images/ali-karimi-lDkJD1i9IXQ-unsplash.jpg"
        },
        {
            id: 2,
            image: "./assets/images/camila-quintero-franco-XyqNkO_TlyY-unsplash.jpg"
        },
        {
            id: 3,
            image: "./assets/images/chris-yang-1-uoGDdi65U-unsplash.jpg"
        },
        {
            id: 4,
            image: "./assets/images/eduardo-gorghetto-db6TDtUg2Dw-unsplash.jpg"
        },
        {
            id: 5,
            image: "./assets/images/houcine-ncib-E6PWA9GvIBU-unsplash.jpg"
        },
        {
            id: 6,
            image: "./assets/images/joshua-rawson-harris-UgzTooxvIKM-unsplash.jpg"
        },
        {
            id: 7,
            image: "./assets/images/joshua-rondeau-ohWlGF9wokg-unsplash.jpg"
        },
        {
            id: 8,
            image: "./assets/images/laura-chouette-u1wLJYrZYvY-unsplash.jpg"
        },
        {
            id: 9,
            image: "./assets/images/marco-testi-m1Pr3ExvkqY-unsplash.jpg"
        },
        {
            id: 10,
            image: "./assets/images/michele-seghieri-PjUMZlVt98M-unsplash.jpg"
        },
        {
            id: 11,
            image: "./assets/images/muhammad-fajarruzaman-3zOaSXRtQ4s-unsplash.jpg"
        },
        {
            id: 12,
            image: "./assets/images/very-petty-girl-WRotPmZiXZQ-unsplash.jpg"
        }
    ];


    const setImage = () => {
        mainImage.src = images[counter].image;
        imageIndex.textContent = `
        ${counter <= 9 ? "0" : "" }${images[counter].id}`
    }

    

    // const callRight = () => {
    //     counter++;

    //     console.log("contains forward");

    //     if (counter > images.length - 1) {
    //         counter = 0;
    //     }

    //     mainImage.src = images[counter].image;
    //     imageIndex.textContent = `
    //         ${counter <= 9 ? "0" : "" }${images[counter].id}
    //     `
    // }

    // setInterval(() => {
    //     callRight()
    // }, 2000);


    sliderBtn.forEach(slideBtn => {
        slideBtn.addEventListener("click", (e) => {
            console.log("clicked");

            if (slideBtn.classList.contains("back-btn")) {
                counter--;
                console.log("contains back");
                if (counter < 0) {
                    counter = images.length - 1;
                }

                mainImage.src = images[counter].image;
                imageIndex.textContent = `
                    ${counter <= 9 ? "0" : "" }${images[counter].id}
                `

            }

            
            if (slideBtn.classList.contains("forward-btn")) {

                counter++;

                console.log("contains forward");

                if (counter > images.length - 1) {
                    counter = 0;
                }

                mainImage.src = images[counter].image;
                imageIndex.textContent = `
                    ${counter <= 9 ? "0" : "" }${images[counter].id}
                `
            }
        });
    });

    setImage();

})