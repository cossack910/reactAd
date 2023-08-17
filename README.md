# reactAd

### 開発サーバー立ち上げ
```
docker exec -it reactad npm run dev
```
### tips
| No                                                       | title                                          |
| -------------------------------------------------------- | ---------------------------------------------- |
| [#1](https://github.com/cossack910/reactAd/issues/1) | 再レンダリング |
| [#2](https://github.com/cossack910/reactAd/issues/2) | CSS |
| [#3](https://github.com/cossack910/reactAd/issues/4) | React Router6 |

＃環境構築

cloneしたときと新規立ち上げ時
```
docker exec -it reactad npm install
docker exec -it reactad npm run build
docker exec -it reactad npm run dev
```

新規プロジェクト立ち上げ
```
docker-compose run --rm reactad npm create vite@latest .
```
