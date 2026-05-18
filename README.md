# GitHub Actions CI/CD Sample

このリポジトリは、GitHub Actionsで最小のCI/CDを試すためのサンプルです。

## 構成

- `src/math.js`: テスト対象の簡単な関数
- `test/math.test.js`: Node.js組み込みテスト
- `site/`: デプロイ対象の静的サイト
- `scripts/build.mjs`: `site` を `dist` にコピーするビルド
- `.github/workflows/test-actions.yml`: CI/CDワークフロー

## ローカル実行

```bash
npm install
npm test
npm run build
```

## GitHub上での確認

1. `main` にpush
2. Actionsタブでワークフロー実行結果を確認
3. Pages設定でデプロイURLを確認
