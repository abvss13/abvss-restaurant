function menu() {
  function create(tag) {
    return document.createElement(tag);
  }

  const page = create('div');
  page.classList.add('page');

  const menuOneImg = create('div');
  menuOneImg.id = 'menu-1';
  const menuOneTextWrapper = create('div');
  menuOneTextWrapper.id = 'menu-1-text';
  const menuOneHeading = create('h2');
  menuOneHeading.textContent = 'Vegan Bowl';
  const menuOneDescription = create('p');
  menuOneDescription.textContent = (
    'The Vegan Bowl is a vegan salad with tofu; cheese, kale, avocado, tomatoes, onion, etc. \r\n Tamarind\'s Veggie Bowl is a bowl of vegetables that can be had in only two sizes! \r\n One size up, like vegan or gluten free. Try our Vegan Cheese Bowl with all the vegan cheese you want. Our tofu bowl has 1/4 cup vegan butter, 1/4 cup vegan soy cheese, 1/2 cup brown sugar. We use soy and coconut butter and try to use 100% in bulk (1 Tbsp to the amount you need for this bowl). As always, there is a limit on how much you can add, but if you\'re making them with almond milk or other dairy and butter substitutes, add 2 small bags.'
  );
  menuOneTextWrapper.append(menuOneHeading, menuOneDescription);

  const menuTwoImg = create('div');
  menuTwoImg.id = 'menu-2';
  const menuTwoTextWrapper = create('div');
  menuTwoTextWrapper.id = 'menu-2-text';
  const menuTwoHeading = create('h2');
  menuTwoHeading.textContent = 'Vegan Pasta';
  const menuTwoDescription = create('p');
  menuTwoDescription.textContent = (
    'This vegan and gluten free past ist very delicious. It is one of our special dish on the menu since we use only wheat protein. Vegan Pasta is prepared in a traditional way - a thin slice of potato is cut into thick slices of butter. These vegetables are used for many foods and have a flavour as well and we believe they provide a delicious vegetarian friendly addition to your meal. We use whole cashews that our staff has cooked up for us since the days of the \'Cheese Bowl\' and have used it on this vegan pasta since we began manufacturing. Vegetarians and vegans alike are encouraged to try this vegan pasta and it will help you feel better about your diet. It makes us feel full and gives you the natural energy to eat more and more.'
  );
  menuTwoTextWrapper.append(menuTwoHeading, menuTwoDescription);

  const menuThreeImg = create('div');
  menuThreeImg.id = 'menu-3';
  const menuThreeTextWrapper = create('div');
  menuThreeTextWrapper.id = 'menu-3-text';
  const menuThreeHeading = create('h2');
  menuThreeHeading.textContent = 'Vegan Salad';
  const menuThreeDescription = create('p');
  menuThreeDescription.textContent = (
    'his tossed salad is all about contrasts in color, flavor, and texture. It features a mix of romaine lettuce and red baby butter lettuce, shredded carrots, red onion slivers, tangy pepperoncini, and cool cucumber. A savory dessert that might not be all the way through a meal if not made on a pre-dinner night, this will likely please you, but it does bring the experience back at least a little to the evening. One of the most unique flavors in the sandwich is the bacon, and this is the perfect example of how this is often overlooked. This is a simple but delicious bacon sandwich, with a few twists and a dash of bacon sprinkled in the crust. The whole thing is served with a light touch of tomato, chia, or black pepper and served over a generous bowl of shredded carrots topped with extra lettuce and bacon. This is perfect with your favorite holiday dessert or any other year round breakfast.'
  );
  menuThreeTextWrapper.append(menuThreeHeading, menuThreeDescription);

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

  page.append(
    menuOneImg,
    menuOneTextWrapper,
    menuTwoTextWrapper,
    menuTwoImg,
    menuThreeImg,
    menuThreeTextWrapper,
    footer,
  );
  return page;
}

export default menu;
