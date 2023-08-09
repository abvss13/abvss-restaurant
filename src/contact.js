function contact() {
  function create(tag) {
    return document.createElement(tag);
  }

  const page = create('div');
  page.classList.add('page');

  const personOne = create('div');
  personOne.id = 'person-one';
  const personOneImg = create('div');
  personOneImg.classList.add('person-img');
  const personOneName = create('h2');
  personOneName.textContent = 'Cao Đức Vỹ';
  const personOneDescription = create('p');
  personOneDescription.textContent = (
    'I eat sushi and sushi and I usually get pretty good. But when it comes to sushi I love making great sushi! I got a lot of great sushi that I have not eaten in years. The great ones are my personal favourite and I have been making and selling some for over 30 years now. These amazing sushi items were made on my own and I make them myself. I really loved them! So I make them again and again. My mom makes them every day in the kitchen making so many of them. I find that sometimes it takes days before I get a good sushi.'
  );
  personOne.append(personOneImg, personOneName, personOneDescription);

  const personTwo = create('div');
  personTwo.id = 'person-two';
  const personTwoImg = create('div');
  personTwoImg.classList.add('person-img');
  const personTwoName = create('h2');
  personTwoName.textContent = 'Nguyễn Thị Hải';
  const personTwoDescription = create('p');
  personTwoDescription.textContent = (
    'I\'m an incredibly passionate vegan and I love making healthy, delicious, healthy things - like tofu, raw veggies, tofu-garlic, etc. I am also a huge proponent of the \'garnish\' industry. I am also a big proponent of giving everyone a healthy vegan diet, which has turned me towards the vegan lifestyle and made ME happy.\' - Vegan Chef! We get very well attended Vegan Chef courses and there\'s some very exciting and beautiful cooking at our restaurants and places as well'
  );
  personTwo.append(personTwoImg, personTwoName, personTwoDescription);

  // maps
  const mapDiv = create('div');
  mapDiv.id = 'map';
  const map = create('iframe');
  map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170129.53088866785!2d16.239977744739488!3d48.22059981881961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079e5136ca9f%3A0xfdc2e58a51a25b46!2sWien%2C%20%C3%96sterreich!5e0!3m2!1sde!2sde!4v1652988554904!5m2!1sde!2sde';
  map.style.border = 0;
  map.style.width = '100%';
  map.style.height = '100%';
  mapDiv.append(map);

  const addressDiv = create('div');
  addressDiv.id = 'address';
  const addressHeader = create('h3');
  addressHeader.textContent = 'Address';
  const address = create('p');
  address.textContent = (
    'Vegan Chef, 123 Fake Street, Fake City, Fake State, 12345'
  );
  const phoneHeader = create('h3');
  phoneHeader.textContent = 'Phone';
  const phone = create('p');
  phone.textContent = '+254798491946';
  const infoHeader = create('h3');
  infoHeader.textContent = 'Info';
  const info = create('p');
  info.textContent = 'THIS IS NOT A REAL RESTAURANT. THIS IS A EXAMPLE TEMPLATE ONLY.';
  addressDiv.append(addressHeader, address, phoneHeader, phone, infoHeader, info);

  const footer = create('div');
  footer.id = 'footer';
  const footerText = create('p');
  footerText.textContent = '© 2022 Abvss Restaurant';
  const githubText = create('p');
  const githubLink = create('a');
  githubLink.href = 'https://github.com/abvss13/';
  githubLink.textContent = 'GitHub';
  githubText.append(githubLink);
  footer.append(footerText, githubText);

  page.append(personOne, personTwo, mapDiv, addressDiv, footer);
  return page;
}

export default contact;
