## 必須コマンド

`docker-compoe up -d` -> コンテナをバックグラウンド上で起動する為のコマンド。詳しくは書かないが基本的に新しく作成する際はこちらのコマンドを利用する。

`docker-compose exec nextjs sh` -> 起動したnextjsコンテナに入る為のコマンド。起動は`ash`で行う、bashは入ってないので起動できない

`yarn`
- yarn dev
    - 開発サーバー起動用コマンド。コンテナ内のssg_mediaディレクトリにて行うことでlocalhost上にサーバーを起動できる。php artisan serveのようなもの。
- yarn add ライブラリ名
    - composer installのようなもの。