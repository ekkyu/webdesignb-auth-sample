# webdesignb-auth-sample

WebデザインB（第8回）の練習用アプリ「ふしぎ菓子店」です。
第7回の完成形（いいね・お客さまの声・商品を Firestore に置き、キーを環境変数に移したもの）から始めて、Firebase Authentication でログインできるようにします。

## 開き方

1. このページの右上の「☆ Star」を押す
2. 緑の「Use this template」→「Open in a codespace」を押す（前回の codespace は使わず、新しく作る）
3. いちばん外側に `.env.local` を作る（中身のひな形は `env.local.example`。値は自分の Firebase プロジェクトのもの）
4. 下のターミナルで `npm install` → `npm start`。右下の「ブラウザーで開く」か、ポートタブの地球儀からアプリを開く
5. GitHub に保存するときは、ソース管理でコミット →「ブランチを発行」→「Publish to GitHub private repository」

使い終わったら github.com/codespaces で「…」→「Stop codespace」。

## ファイルの場所

```
.gitignore             Git に入れないファイルの一覧（.env.local も入っている）
env.local.example      .env.local のひな形（このファイルにはキーを書かない）
public/img/            商品の画像
src/App.jsx            画面全体
src/firebase.js        Firebase の設定（値は .env.local から読む）
src/components/        コンポーネント（LikeButton・Reviews・ProductList・ProductCard）
src/data/products.json 商品のデータ（第7回で Firestore に入れたもの）
answer/                各ステップの答え
```

## 遅れたときは

`answer` フォルダの中に、ステップごとの完成したファイルがあります。
同じ名前のファイルの中身をコピーして、`src/components`（App.jsx と firebase.js は `src`）に貼り付けてください。
`firestore.rules` は、Firebase のコンソールの「Firestore」→「ルール」に貼り付けて「公開」します。

| フォルダ | 内容 |
|---|---|
| answer/0_week7 | 第7回を休んだ人向け：商品を Firestore に入れるボタンと、第7回のルール |
| answer/1_auth | firebase.js にログインの機能（auth）を足す |
| answer/2_login | Login.jsx（Google でログイン）と App.jsx |
| answer/3_reviews | ログインした人だけが「お客さまの声」を投稿できる Reviews.jsx |
| answer/4_rules | ログインした人だけが投稿できるルール |
| answer/hatten1_delete | 発展：自分の投稿だけ消せる |
| answer/hatten2_favorite | 発展：自分だけが見られるお気に入り |

## 第7回を休んだ人は

1. 第7回のスライドの「準備」で、Firebase プロジェクト・Firestore・ウェブアプリの登録をする（Firestore はテストモードで作る）
2. `answer/0_week7/UploadProducts.jsx` を `src/components` に置き、App.jsx に `<UploadProducts />` を足して1回押す（終わったら外す）
3. `answer/0_week7/firestore.rules` をルールに貼って公開する
4. ここから第8回のスライドに戻る
