$(document).ready(function() {




  // Load projects data
  loadProjects();

});

var loadProjects = function() {

  var container = $('.projects-container');
  $.ajax('js/projects.json').success(function(result) {

    for (var i = 0, l = result.length; i < l; i++) {
      var projectEl = $('<div class="project-item"><div class="project-info"><h3 class="project-title">' +
          result[i].title + '</h3><div class="project-details"><p class="project-tech">' + result[i].details +
          '</p><a class="project-link" href="//' + result[i].url + '" target="_blank">Visit site</a></div></div></div>');

      var imgUrl = 'img/work/' + result[i].image;

      projectEl.css({
        'background-image': 'url("' + imgUrl + '")'
      });

      container.append(projectEl);
    }


  });



};