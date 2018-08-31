## Node.js 爬虫 - mmxyz

---

爬第三方网站超高质量ROSI美女图片，并实现自动下载图片到本地！接口大概有14万张左右的美女图片，好东西哦...

看截图：

![mm.png](mm.png)




---

**使用**

```bash
git clone https://github.com/helpcode/mmxyz.git
npm install
npm run dev
```
注意：开发测试阶段接口运行在

> [http://127.0.0.1:9999/api/v1.0/](http://127.0.0.1:9999/api/v1.0/)

线上接口统一运行在，开发你自己应用的时候用这个：

> [http://103.95.207.27:9999/api/v1.0](http://103.95.207.27:9999/api/v1.0)

## 首页接口


| 地址 | 请求方式 | 参数 |
| :------| ------: | :------: |
| /index | GET | page 页数(string) 注意：page最大81，大于81页就没有数据了！ |

- 示例：

[http://103.95.207.27:9999/api/v1.0/index?page=1](http://103.95.207.27:9999/api/v1.0/index?page=1)

- 返回数据：

```json

{
  status: 200,
  length: 34,
  copyright: "bmy Sun Jul 15 2018 21:07:07 GMT+0800 (CST)",
  data: [
      {
        title: "ROSI写真-No.2221",
        imgurl: "http://www.mmxyz.net/wp-content/themes/rosi/timthumb.php?src=http://img1.mmxyz.net/2018/01/d5-300x199.jpg&w=265&zc=1",
        href: "http://www.mmxyz.net/rosi-2221/",
        view: "41,088",
        comments: "3"
      },
      {
        title: "ROSI写真-No.2220",
        imgurl: "http://www.mmxyz.net/wp-content/themes/rosi/timthumb.php?src=http://img1.mmxyz.net/2018/01/d4-300x199.jpg&w=265&zc=1",
        href: "http://www.mmxyz.net/rosi-2220/",
        view: "20,807",
        comments: "2"
      }
  ]
}
```

## 详情接口

---

这边传入首页接口中的`title: "ROSI写真-No.2221"`，将`2221`作为图册id，进进入详情并自动下载该图册所有的图片。


| 地址 | 请求方式 | 参数 |
| :------| ------: | :------: |
| /info | GET | id 图册id(string) |

- 示例：

[http://103.95.207.27:9999/api/v1.0/info?id=2221](http://103.95.207.27:9999/api/v1.0/info?id=2221)

- 返回数据：

```json

{
  status: 200,
  length: 52,
  copyright: "bmy Sun Jul 15 2018 21:10:55 GMT+0800 (CST)",
  weeklynumber: "rosi写真第2221期套图",
  data: [
      {
        name: "rosi-2221-051",
        bigimg: "http://img1.mmxyz.net/2018/01/rosi-2221-051.jpg",
        smallimg: "http://img1.mmxyz.net/2018/01/rosi-2221-051-150x150.jpg"
      },
      {
        name: "rosi-2221-050",
        bigimg: "http://img1.mmxyz.net/2018/01/rosi-2221-050.jpg",
        smallimg: "http://img1.mmxyz.net/2018/01/rosi-2221-050-150x150.jpg"
      },
      {
        name: "rosi-2221-049",
        bigimg: "http://img1.mmxyz.net/2018/01/rosi-2221-049.jpg",
        smallimg: "http://img1.mmxyz.net/2018/01/rosi-2221-049-150x150.jpg"
      }
  ]
}
```