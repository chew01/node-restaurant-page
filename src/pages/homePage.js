import storeImage from "./../assets/shake.jpg";

const home = (() => {
  const page = document.createElement("div");
  page.classList.add("home");

  const headline = document.createElement("h1");
  headline.textContent = "Shag Smack Burgers";
  const image = new Image();
  image.src = storeImage;
  const tagline = document.createElement("h2");
  tagline.textContent = "Shag Smack Burgers has arrived in the city!";
  const description = document.createElement("p");
  description.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et nulla auctor, ultrices enim quis, volutpat leo. Aliquam pharetra erat vel libero fringilla aliquet. Cras at facilisis neque, id ultrices mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla varius cursus lorem eu vestibulum. Curabitur vitae purus nec justo dapibus faucibus. Quisque ac odio posuere, volutpat tellus ac, ullamcorper eros. Suspendisse semper nisi id magna varius, nec cursus ex iaculis. Vestibulum quam nulla, iaculis quis viverra sit amet, dignissim vitae lectus. Quisque ac luctus erat. Phasellus suscipit vestibulum diam non iaculis. Nullam cursus metus in posuere aliquet. Vestibulum viverra velit at mollis porta. Etiam sed justo a erat mattis porta. Nunc vel tempor lorem. Pellentesque ullamcorper lobortis libero, ac ornare massa pretium ac. Sed accumsan nec risus quis malesuada. Sed enim purus, efficitur ut ex non, consectetur ultricies dolor. Praesent fermentum nisi ipsum, at elementum augue suscipit a. Sed bibendum massa at enim tristique, eget iaculis est feugiat. Nunc eget vulputate dolor. Donec id sodales urna. Vivamus vitae ipsum sed ex tristique tempus et quis ipsum. Maecenas enim odio, varius sit amet mollis sit amet, sollicitudin eget lectus. Ut vulputate risus quis neque aliquam tempus. Integer id turpis vel sem faucibus scelerisque at quis orci. Nunc mattis lectus in ante varius, et molestie sapien fermentum. Nullam ornare purus eget sem mattis pharetra nec ac enim. Nam commodo, ligula vel fringilla vestibulum, leo libero facilisis dui, a sagittis risus erat eu nunc. Nullam rhoncus dictum odio, a maximus velit tempor eget. Vivamus commodo convallis aliquet. Duis in porttitor sem, at pellentesque ipsum. Vivamus at erat laoreet lacus posuere convallis. Duis ac efficitur dui. Mauris pretium, mauris et hendrerit faucibus, mi elit mollis orci, non congue lectus risus et massa. Phasellus tincidunt lacinia blandit. Praesent luctus blandit turpis, eget laoreet quam dapibus ac.";
  page.appendChild(headline);
  page.appendChild(image);
  page.appendChild(tagline);
  page.appendChild(description);

  return { page };
})();

export default home;
