var news_data;

const onDocReady = function (){
  news_data = JSON.parse(news_json);
  loadNews("");
}

if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
  onDocReady();
} else {
  document.addEventListener("DOMContentLoaded", onDocReady);
}

function setActiveMenuItem(requestedCategory){
  let itemIds = ["allnewsmenuitem", "foodmenuitem", "sportmenuitem", "travelmenuitem", "itmenuitem"];
  let requestedItemId = "allnewsmenuitem";
  switch (requestedCategory){
    case "food": requestedItemId = "foodmenuitem"; break;
    case "sport": requestedItemId = "sportmenuitem"; break;
    case "travel": requestedItemId = "travelmenuitem"; break;
    case "it": requestedItemId = "itmenuitem"; break;
    default: requestedItemId = "allnewsmenuitem"; break;
  }

  itemIds.forEach(itemId => {
    if (itemId == requestedItemId) {
      document.getElementById(itemId).classList.add("active");
    }
    else {
      document.getElementById(itemId).classList.remove("active");
    }
  })
}

function loadNews(requestedCategory){
  
  setActiveMenuItem(requestedCategory);

  const datadiv = document.getElementById("datadiv");
  let result = "";
  
  news_data.forEach(category => {
    // if (!(category == requestedCategory || requestedCategory == "")) {
    //   console.log(category == requestedCategory);
    // }

    result += "<h2 class=\"text-center\" style=\"padding: 20px;\>gg" + category.category + "</h2>"+
              "<div class=\"container\" style=\"padding-bottom: 50px;\">"+
                "<div class=\"row row-cols-1 row-cols-md-2 g-4\">";

    category.news.forEach(item => {
      result += "<div class=\"col\">"+
                  "<div class=\"card\">"+
                    "<img src=\"" + item.image + "\" class=\"card-img-top\" alt=\"Image for " + item.title + "\">"+
                    "<div class=\"card-body\">"+
                      "<h5 class=\"card-title\">" + item.title + "<span>" + item.id + "</span></h5>"+
                      "<p class=\"card-text\">" + item.text + "</p>"+
                    "</div>"+
                    "<div class=\"card-footer\">"+
                      "<small class=\"text-muted\">" + item.author + "<span>" + item.date + "</span></small>"+
                    "</div>"+
                  "</div>"+
                "</div>";
    });

    result +=   "</div>"+
              "</div>";
  }); 
  
  datadiv.innerHTML = result;
}