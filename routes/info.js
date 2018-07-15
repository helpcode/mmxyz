const head = require("./../imports");

head.router.get("/info/:id", function(req, res, next) {
  var id = req.params.id;
  var URL = `${head.config.hostUrl}rosi-${id}`;
  head.config.HtmlJson = []
  head.utils.HttpRequest(URL, result => {
    var $ = head.cheerio.load(result);
    $(".gallery-icon").each(function(i) {
      head.config.HtmlJson.push({
        name: $(this).find("a img").attr("alt"),
        bigimg: $(this).find("a").attr("href"),
        smallimg: $(this).find("a img").attr("data-lazy-src")
      });

      // superagent 插件中文文档：
      // https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
      head.utils.DownJpg($(this).find("a").attr("href"),$(this).find("a img").attr("alt"))
    });

    res.json({
      status: 200,
      length: head.config.HtmlJson.length,
      copyright: `bmy ${new Date()}`,
      weeklynumber: `rosi写真第${id}期套图`,
      data: head.config.HtmlJson
    });

  });

});

module.exports = head.router;
