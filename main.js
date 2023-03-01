// đóng mỏ form login, register
const showModalRegister = document.querySelector('#js-show-modal-register');
const closeModalRegister = document.querySelector('#js-close-modal-register');
const showModalLogin = document.querySelector('#js-show-modal-login');
const closeModalLogin = document.querySelector('#js-close-modal-login');
showModalRegister.addEventListener('click', function(){
    document.querySelector('.modal-register.modal').style.display = 'flex';
})

closeModalRegister.addEventListener('click', function(){
    document.querySelector('.modal-register.modal').style.display = 'none';
})

showModalLogin.addEventListener('click', function(){
    document.querySelector('.modal-login.modal').style.display = 'flex';
})

closeModalLogin.addEventListener('click', function(){
    document.querySelector('.modal-login.modal').style.display = 'none';
})



document.addEventListener("DOMContentLoaded", () => {
    const BASE_URL = "https://622a9e9914ccb950d220ac3e.mockapi.io"

    fetch(`${BASE_URL}/todo`, {
        method: 'GET',
        headers: {
                'Content-Type': 'application/json',
         },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
        const products = document.querySelector(".products");
        function showData(products, data) {
            products.innerHTML = data.length ? data.map(item => {
                return `
                    <div class="col l-2-4 m-4 c-6">
                        <div class="home-product-item">
                            <a href="./product.html" target="_blank">
                                <div class="home-product-item__img" style="background-image:url(./assets/Img/macbook-air-m1-2020-7-core-gray-600x600.jpg)"></div>
                            </a>
                            <h4 class="home-product-item__name">Laptop Apple MacBook Pro M1 2020 16GB/512GB (Z11C)</h4>
                            <div class="home-product-item__price">
                            <span class="home-product-item__price-old">30.000.000đ</span>
                            <span class="home-product-item__price-current">25.999.999đ</span>
                        </div>
                        <div class="home-product-item__action">
                            <span class="home-product-item__like home-product-item__like--liked">
                                <i class="home-product-item__like-icon-empty fa-regular fa-heart"></i>
                                <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                            </span>
                            <div class="home-product-item__rating">
                                <i class="home-product-item__star--good fas fa-star"></i>
                                <i class="home-product-item__star--good fas fa-star"></i>
                                <i class="home-product-item__star--good fas fa-star"></i>
                                <i class="home-product-item__star--good fas fa-star"></i>
                                <i class="home-product-item__star fas fa-star"></i>
                            </div>
                            <span class="home-product-item__sold">88 đã bán</span>
                        </div>
                        <div class="home-product-item__origin">
                            <div class="home-product-item__brand">Whoo</div>
                            <span class="product-item__origin-name">Mỹ</span>
                        </div>
                        <div class="home-product-item__favourite">
                            <i class="fa-solid fa-check"></i>
                            <span>Yêu thích</span>
                        </div>
                        <div class="home-product-item__sale-off">
                            <span class="home-product-item__sale-off-percent">10%</span>
                            <span class="home-product-item__sale-off-lable">GIẢM</span>
                        </div>
                    </div>                                    
                </div>
                `
                }).join(" ") : "<div>Dữ liệu trống</div>"
            }
        showData(products, data)
        // thực hiện chức năng search
        const input = document.querySelector("input")
        input.addEventListener("keyup", event => {
            const target = event.target;
            const value = target.value;
            const convertToLowerCase = value.toLowerCase();
            const filterData = data.filter(item => item.name.toLowerCase().includes(convertToLowerCase))
            showData(products, filterData)
        })
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    
})