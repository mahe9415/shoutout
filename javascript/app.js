function onLoad() {
  $('.campaign-grid').masonry({
    // options...
    itemSelector: '.campaign-grid-item',
    columnWidth: 250,
    columnHeight: 250,
    percentPosition: true
  });
}

// function getData()
// {
// CreateCampign creatcampign = new CreateCampign();
//   for (var i = 0; i < = 5; i++) {
//     creatcampign.campignName = "name "+i;
//     creatcampign.campaigDetails= "details"+i;
//     creatcampign.camaigDescription ="description"+i;
//     }
// }
