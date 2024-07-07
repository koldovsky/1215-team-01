const worksItem = [
  {
    id: "1",
    title: "Shipping",
    description:
      "The shipping is $1.00 for a Vintage Club member and $10.00 per package for a Luxury Club member. We ship our products via the Fed Ex, GSO, and UPS ground network. The client must be a person of over 21 years of age. If you want to pick up your order, you will not incur this fee. If the order comes back to us, you will pay $8 for reshipping.",
    text: "We will charge $10 for shipping if we send a club order that is flagged for a receipt. We require a written correction of all addresses, cancellation of membership, and credit card 30 days before the next dispatch.",
    subtitle: "",
  },
  {
    id: "2",
    title: "Billing",
    description:
      "You don't have to pay any membership fees for Pinot Noir's wine club. You have to pay only for the club orders. Your credit card on file will be billed 2 weeks in advance of every wine club delivery.",
    subtitle: "Cancellation",
    text: "After the year of membership, you can cancel at any time you want for free. If you want to cancel before receiving your club shipments for one year, you will pay a $75 cancellation fee.",
  },
];

function renderWorksItem(worksItems) {
  let worksItemHtml = "";
  for (const item of worksItems) {
    worksItemHtml += `
        <div class="how-works__item">
          <span class="how-works__body__item-title">${item.title}</span>
          <span class="how-works__body__item-text">${item.description}</span>
          ${item.subtitle ? `<h3 class="how-works__body__item-title">${item.subtitle}</h3>` : ""}
          <span class="how-works__body__item-text">${item.text}</span>
        </div>`;
  }
  const worksItemContainer = document.querySelector(".how-works__body");
  worksItemContainer.innerHTML = worksItemHtml;
}

renderWorksItem(worksItem);

const gallery = [
  {
    id: "1",
    title: "Signature Club",
    subtitle: "March & October.",
    subtitleSpecialSymbol: "Shipments",
    description:
      "Priority access to limited winery only artisan wines. Limited production wines only available to Luxury and Vintage Club members.",
    image: "../img/wine-club/wine-club_gallery-1.jpg",
    alt: "Group of people tasting wine in a vineyard",
  },
  {
    id: "2",
    title: "Tasting Club",
    subtitle: " February, April, June, August.",
    subtitleSpecialSymbol: "Shipments",
    description:
      "Six complimentary wine tastings per year for our guests and their friends. Preferred pricing on all winery events and any experiences.",
    image: "../img/wine-club/wine-club_gallery-2.jpg",
    alt: "Red wine being poured into a glass with wine barrels in the background",
  },
  {
    id: "3",
    title: "Vintage Club",
    subtitle: " March & October.",
    subtitleSpecialSymbol: "Shipments",
    description:
      "Two complimentary wine & food pairings annually. Two complimentary vineyard tours annually (offered seasonally).",
    image: "../img/wine-club/wine-club_gallery-3.jpg",
    alt: "Two men tasting wine in a wine cellar",
  },
];

function renderGallery(gallery) {
  let galleryHtml = "";
  for (const item of gallery) {
    galleryHtml += `<div class="how-works__gallery-item">
            <img
              src="${item.image}"
              alt="${item.alt}"
              class="how-works__gallery__item-icon"
            />
            <p class="how-works__gallery__item-title">${item.title}</p>
            <p class="how-works__gallery__item-subtitle">
              <span class="how-works__gallery__item__subtitle-special">${item.subtitleSpecialSymbol}:</span>
              ${item.subtitle}
            </p>
            <span class="how-works__gallery__item-text">${item.description}</span>
            <a href="contacts.html">
              <button type="button" class="btn btn-primary">Join Club</button>
            </a>
          </div>`;
  }
  const galleryContainer = document.querySelector(".how-works__gallery");
  galleryContainer.innerHTML = galleryHtml;
}

renderGallery(gallery);

const benefitList = [
  {
    id: "1",
    img: "../img/wine-club/wine-club-member_benefits__icon.png",
    alt: "Orange circle with a white check mark inside",
    text: "20% - 25% off on all wine purchases, including new releases;",
  },
  {
    id: "2",
    img: "../img/wine-club/wine-club-member_benefits__icon.png",
    alt: "Orange circle with a white check mark inside",
    text: "Access to limited production wines;",
  },
  {
    id: "3",
    img: "../img/wine-club/wine-club-member_benefits__icon.png",
    alt: "Orange circle with a white check mark inside",
    text: "Free Pinot Noir winery events participation;",
  },
  {
    id: "4",
    img: "../img/wine-club/wine-club-member_benefits__icon.png",
    alt: "Orange circle with a white check mark inside",
    text: "Six complimentary individual wine tastings per year;",
  },
  {
    id: "5",
    img: "../img/wine-club/wine-club-member_benefits__icon.png",
    alt: "Orange circle with a white check mark inside",
    text: "Up to 50% off anniversary discount.",
  },
];

function renderBenefitList(benefitList) {
  let benefitListHtml = "";
  for (const item of benefitList) {
    benefitListHtml += `<li class="membership-benefits__item__list-item">
            <img
              class="membership-benefits__item__list__item-icon"
              src="${item.img}"
              alt="${item.alt}"
            />
            <span class="membership-benefits__item__list__item-text">
            ${item.text}
            </span>
          </li>`;
  }
  const benefitListContainer = document.querySelector(
    ".membership-benefits__item__list-container"
  );
  benefitListContainer.innerHTML = benefitListHtml;
}

renderBenefitList(benefitList);
