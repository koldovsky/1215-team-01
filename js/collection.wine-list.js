async function loadExchangeRates() {
    try {
        let response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        let data = await response.json();
        exchangeRates = data.rates;
        changeCurrency();
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
    }
}

function updatePrices(rate = 1, currencySymbol = '$') {
    document.querySelectorAll('.collection__item').forEach(item => {
        let priceElement = item.querySelector('.collection__price');
        let priceInUSD = parseFloat(priceElement.textContent.replace(/[^0-9.-]+/g, ""));
        let convertedPrice = (priceInUSD * rate).toFixed(2);
        priceElement.textContent = `${currencySymbol}${convertedPrice}`;
    });
}

async function loadProducts() {
    try {
        const response = await fetch('api/wine-list.json');
        const products = await response.json();
        renderProducts(products);
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

function renderProducts(products) {
    products.collections.forEach((collection, index) => {
        let collectionElement = document.querySelectorAll('.collection')[index];
        let collectionListElement = collectionElement.querySelector('.collection__list');
        collectionListElement.innerHTML = '';
        collection.items.forEach(item => {
            collectionListElement.innerHTML += `
                <div class="collection__item">
                    <h4 class="collection__item-title">
                        ${item.title}<span class="collection__price">${item.price}</span>
                    </h4>
                    <p class="collection__item-description">${item.description}</p>
                </div>`;
        });
    });
}

const productsCurrency = document.getElementById('wine-list__currency');
productsCurrency.addEventListener('change', changeCurrency);

async function changeCurrency() {
    if (!Object.keys(exchangeRates).length) {
        await loadExchangeRates();
    }
    const convertTo = productsCurrency.value;
    const rate = exchangeRates[convertTo];
    let currencySymbol;
    switch (convertTo) {
        case 'EUR':
            currencySymbol = '€';
            break;
        case 'UAH':
            currencySymbol = '₴';
            break;
        default:
            currencySymbol = '$';
    }
    updatePrices(rate, currencySymbol);
}

loadProducts();
loadExchangeRates();
