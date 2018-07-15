## Node.js 爬虫 - mmxyz

---

额...闲着无聊写，没有任何侵犯版权的意思。

```bash
npm install
npm run start
```

## 首页接口


| 地址 | 请求方式 | 参数 |
| :------| ------: | :------: |
| /api/v1.0/index/页数 | GET | 页数(string) |

- 示例：

[http://127.0.0.1:8080/api/v1.0/index/1](http://127.0.0.1:8080/api/v1.0/index/1)

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
| /api/v1.0/info/图册id | GET | 图册id(string) |

- 示例：

[http://127.0.0.1:8080/api/v1.0/info/2221](http://127.0.0.1:8080/api/v1.0/info/2221)

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