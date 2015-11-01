(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','http://www.google-analytics.com/analytics.js','ga');

//Send Page View
ga('create', 'UA-60680005-1', 'auto');
ga('send', 'pageview', location.pathname);

//jQuery Events
//Desktop Nav Links
$('#story_nav_link').click(function() {
  ga('send', 'event', 'nav-links', 'click', 'story', 1);
});
$('#work_nav_link').click(function() {
  ga('send', 'event', 'nav-links', 'click', 'work', 1);
});
$('#skills_nav_link').click(function() {
  ga('send', 'event', 'nav-links', 'click', 'skills', 1);
});
$('#resume_nav_link').click(function() {
  ga('send', 'event', 'nav-links', 'click', 'resume', 1);
});

//Mobile Nav Links
$('#story_nav_link_mobile').click(function() {
  ga('send', 'event', 'mobile-nav-links', 'click', 'story', 1);
});
$('#work_nav_link_mobile').click(function() {
  ga('send', 'event', 'mobile-nav-links', 'click', 'work', 1);
});
$('#skills_nav_link_mobile').click(function() {
  ga('send', 'event', 'mobile-nav-links', 'click', 'skills', 1);
});
$('#resume_nav_link_mobile').click(function() {
  ga('send', 'event', 'mobile-nav-links', 'click', 'resume', 1);
});