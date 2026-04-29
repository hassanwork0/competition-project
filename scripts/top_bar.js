function loadTopBar(current) {
  const topbar = document.getElementById("topbar");

  const home = current == "Home" ? "current" : "";

  const news = current == "News" ? "current" : "";

  const blog = current == "Blog" ? "current" : "";

  const about = current == "About" ? "current" : "";

  const image = document.createElement("img");
  const ancher = document.createElement("a");
  ancher.href = "/";
  image.src = "../assets/logo.webp";
  image.alt = "logo";
  image.className = "ancher top_bar_item";
  ancher.appendChild(image);
  topbar.appendChild(ancher);

  const nav = document.createElement("nav");
  nav.className = "navigation";

  const ul = document.createElement("ul");
  ul.className = "navigation_list";

  const li1 = document.createElement("li");
  li1.className = "top_bar_item " + home;
  const a1 = document.createElement('a');
  a1.href = "home.html";
  a1.innerText = "Home";
  li1.appendChild(a1);
  ul.appendChild(li1);

  const li2 = document.createElement("li");
  li2.className = "top_bar_item " + news;
  const a2 = document.createElement('a');
  a2.href = "news.html";
  a2.innerText = "News & Events";
  li2.appendChild(a2);
  ul.appendChild(li2);

  const li3 = document.createElement("li");
  li3.className = "top_bar_item " + blog;
  const a3 = document.createElement('a');
  a3.href = "blog.html";
  a3.innerText = "Blogs";
  li3.appendChild(a3);
  ul.appendChild(li3);

  const li4 = document.createElement("li");
  li4.className = "top_bar_item " + about;
  const a4 = document.createElement('a');
  a4.href = "about.html";
  a4.innerText = "About US";
  li4.appendChild(a4);
  ul.appendChild(li4);

  nav.appendChild(ul)
  topbar.appendChild(nav);

  const search = document.createElement('div');
  search.className = "top_bar_item search";
  const searchTitle = document.createElement('h3');
  searchTitle.innerText = "Search";
  search.appendChild(searchTitle);
  topbar.appendChild(search);

}
