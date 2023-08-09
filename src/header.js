import logo from './img/logo.png';

function header(tabs) {
  const headerDiv = document.createElement('div');
  headerDiv.id = 'header';

  const logoImg = document.createElement('img');
  logoImg.src = logo;
  headerDiv.appendChild(logoImg);

  tabs.forEach(tab => {
    headerDiv.appendChild(tab);
  });

  return headerDiv;
}

export default header;
