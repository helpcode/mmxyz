const head = require("./../imports");

head.router.get("/index", function(req, res, next) {
  var page = req.query.page || 1;
  head.config.HtmlJson = []
  head.utils.HttpRequest(`${head.config.index}${page}`, result => {
    var $ = head.cheerio.load(result);
    $(".post-home").each(function(i) {
      head.config.HtmlJson.push({
        title: $(this).find(".post-thumbnail img").attr("alt"),
        imgurl: $(this).find(".post-thumbnail img").attr("src"),
        href: $(this).find(".post-thumbnail a").attr("href"),
        view: $(this).find(".post-info .views span").text(),
        comments: $(this).find(".post-info .comments a").text()
      });
    });

    res.json({
      status: 200,
      length: head.config.HtmlJson.length,
      copyright: `bmy ${new Date()}`,
      data: head.config.HtmlJson
    });

  });

});

module.exports = head.router;
