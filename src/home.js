function home() {
  function create(tag) {
    return document.createElement(tag);
  }

  const page = create('div');
  page.classList.add('page');

  const welcomeDiv = create('div');
  welcomeDiv.id = 'welcome';
  const welcomeTextWrapper = create('div');
  welcomeTextWrapper.id = 'welcome-text-wrapper';
  const welcomeText = create('p');
  welcomeText.id = 'welcome-text';
  const welcomeTextSpan = create('span');
  welcomeTextSpan.textContent = 'The Vegan Chef \r\n';
  welcomeText.append(
    welcomeTextSpan,
    'We are a four star vegan only Restaurant in Kenya. Come and visit us. You will not be disappointed!',
  );
  welcomeTextWrapper.append(welcomeText);
  welcomeDiv.append(welcomeTextWrapper);

  const descriptionDiv = create('div');
  descriptionDiv.id = 'description';
  const descriptionHeader = create('h2');
  descriptionHeader.textContent = 'Our Story';
  descriptionHeader.id = 'description-header';
  const descriptionText = create('p');
  descriptionText.id = 'description-text';
  descriptionText.textContent = (
    'Our restaurant was founded in the early 2000s by a group of friends who wanted to create a new kind of restaurant. The main reason for the establishment\'s success is that their menu is fresh and delicious but also serves all the foods they choose to put in their menu. We have numerous specialties and many others which are just plain good food. Many have a great value to the food and our local friends have always been there to make that special food even better. The menu is also very different to how any restaurant usually is. As for the food, we all eat a special diet so any time we go to a restaurant and enjoy a unique experience, we will always have something we can make special because we aren\'t trying to take the food away from the place which has great value to the area. ~ some AI generated text.'
  );
  descriptionDiv.append(descriptionHeader, descriptionText);

  const galleryDiv = create('div');
  galleryDiv.id = 'gallery';
  const homeTwo = create('div');
  homeTwo.id = 'home-2';
  const homeThree = create('div');
  homeThree.id = 'home-3';
  const homeFour = create('div');
  homeFour.id = 'home-4';
  const homeFive = create('div');
  homeFive.id = 'home-5';
  galleryDiv.append(homeTwo, homeThree, homeFour, homeFive);

  const faq = create('div');
  faq.id = 'faq';
  const faqHeader = create('h2');
  faqHeader.textContent = 'FAQ';
  faqHeader.id = 'faq-header';
  const leftFaq = create('div');
  leftFaq.id = 'left-faq';
  const leftQuestionOneHeader = create('h3');
  leftQuestionOneHeader.textContent = 'What is Vegan?';
  const leftQuestionOneText = create('p');
  leftQuestionOneText.textContent = (
    'Veganism is the practice of abstaining from the use of animal products, particularly in diet, and an associated philosophy that rejects the commodity status of animals. Vegetables are not required to have animal welfare, and so, most famously, veganism excludes animal products from agriculture. However, organic food is commonly considered a healthy option because the production of natural ingredients requires that you also eat vegan.'
  );
  leftFaq.append(leftQuestionOneHeader, leftQuestionOneText);
  const rightFaq = create('div');
  rightFaq.id = 'right-faq';
  const rightQuestionOneHeader = create('h3');
  rightQuestionOneHeader.textContent = 'Can I reserve a table?';
  const rightQuestionOneText = create('p');
  rightQuestionOneText.textContent = (
    'Yes, you can reserve a table at our restaurant. You can reserve a table by calling us or by sending us an email. We will contact you as soon as possible.'
  );
  rightFaq.append(rightQuestionOneHeader, rightQuestionOneText);
  faq.append(faqHeader, leftFaq, rightFaq);

  const footer = create('div');
  footer.id = 'footer';
  const footerText = create('p');
  footerText.textContent = '© 2022 The Vegan Chef';
  const githubText = create('p');
  const githubLink = create('a');
  githubLink.href = 'https://github.com/TomSoerr/odin-restaurant-page';
  githubLink.textContent = 'GitHub';
  githubText.append(githubLink);
  footer.append(footerText, githubText);

  page.append(welcomeDiv, descriptionDiv, galleryDiv, faq, footer);
  return page;
}

export default home;
