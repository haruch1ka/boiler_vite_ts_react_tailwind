# Vite + React + TypeScript + Tailwind CSS プロジェクト

このプロジェクトは、Vite、React、TypeScript、Tailwind CSSを使用したモダンなウェブアプリケーション開発のためのボイラープレートです。

## 機能

- ⚡️ [Vite](https://vitejs.dev/) - 高速な開発サーバーと最適化されたビルド
- ⚛️ [React](https://reactjs.org/) - UIライブラリ
- 📝 [TypeScript](https://www.typescriptlang.org/) - 型安全な開発
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファーストのCSSフレームワーク
- 🔍 [ESLint](https://eslint.org/) - コード品質の維持
- 💅 [Prettier](https://prettier.io/) - コードフォーマッター

## 開始方法

### 前提条件

- [Node.js](https://nodejs.org/) (v16以上)
- [pnpm](https://pnpm.io/) (推奨パッケージマネージャー)

### インストール

```bash
# リポジトリのクローン
git clone <repository-url>

# プロジェクトディレクトリに移動
cd <project-directory>

# 依存関係のインストール
pnpm install
```

### 開発サーバーの起動

```bash
pnpm dev
```

ブラウザで [http://localhost:5173](http://localhost:5173) を開いてアプリケーションを確認できます。

### ビルド

```bash
pnpm build
```

ビルドされたファイルは `dist` ディレクトリに出力されます。

### リント

```bash
pnpm lint
```

## プロジェクト構造

```
.
├── src/                # ソースコード
│   ├── components/     # Reactコンポーネント
│   ├── pages/          # ページコンポーネント
│   ├── styles/         # スタイルシート
│   ├── App.tsx         # メインアプリケーションコンポーネント
│   └── main.tsx        # エントリーポイント
├── public/             # 静的ファイル
├── dist/               # ビルド出力
├── vite.config.ts      # Vite設定
├── tsconfig.json       # TypeScript設定
├── tailwind.config.js  # Tailwind CSS設定
├── eslint.config.ts    # ESLint設定
└── package.json        # プロジェクト設定
```

## ライセンス

MIT
