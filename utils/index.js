/**
 * 全局的公共函数
 */

const request = require("superagent");
const fs = require("fs");
const config = require("./../config");
require("superagent-charset")(request);

module.exports = {
  /**
   * 发送http请求获取网页的源码
   * @param {*string} url 需要访问的URL地址
   * @param {*object} callback 回调函数
   */
  HttpRequest(url, callback) {
    request
      .get(url)
      .charset("utf8")
      .end((err, body) => {
        callback(body.text);
      });
  },
  /**
   * 本地下载保存图片
   * @param {*string} url 大图的url地址
   * @param {*string} name 图片的文件名称
   */
  DownJpg(url, name) {
    config.isDownJpg
      ? request
          .get(url)
          .pipe(fs.createWriteStream(`down/${name}-${Math.random(1000)}.jpg`))
      : console.log("不下载，只输出json");
  }
};
