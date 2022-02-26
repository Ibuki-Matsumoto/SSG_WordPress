## 使い方
[dockerをインストール](https://www.docker.com/)

諸々設定が終わったら、当リポジトリをcloneし
[docker-compose.yml](./docker-compose.yml)の`ports`部分以下コメントを読み、適時編集してください。

clone先のrootディレクトリで
`docker-compose up -d --build` と入力
以降、作業が終わるまで常にコンテナは起動しっぱなしです。

コンテナの起動が完了したら
`docker-compose exec nextjs sh` と入力することで起動したコンテナに入ることが出来ます。

コンテナに入ったらまずはユーザーを変更
`su node`

サーバーを起動します。
`yarn dev`

起動後、ターミナルにてURLが表示されますがポート部分を上記で変更した値に書き換えてください。

コンテナに入った時点でのディレクトリは `/local/src` のはずなので、後は通常通り `Front` ディレクトリ内で編集が出来ます。