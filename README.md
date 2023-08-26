# reactAd

### 開発サーバー立ち上げ

```
docker exec -it reactad npm run dev
```

### tips

| No                                                    | title                    |
| ----------------------------------------------------- | ------------------------ |
| [#1](https://github.com/cossack910/reactAd/issues/1)  | 再レンダリング           |
| [#2](https://github.com/cossack910/reactAd/issues/2)  | CSS                      |
| [#3](https://github.com/cossack910/reactAd/issues/4)  | React Router6            |
| [#4](https://github.com/cossack910/reactAd/issues/7)  | axios                    |
| [#5](https://github.com/cossack910/reactAd/issues/9)  | 型定義の Pick と Omit    |
| [#6](https://github.com/cossack910/reactAd/issues/10) | オプショナルチェイニング |

＃環境構築

clone したときと新規立ち上げ時

```
docker exec -it reactad npm install
docker exec -it reactad npm run build
docker exec -it reactad npm run dev
```

新規プロジェクト立ち上げ

```
docker-compose run --rm reactad npm create vite@latest .
```
