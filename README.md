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

1. 任意のブランチにpush（CIが実行される）
2. `main` 向けのPull Requestを作成（CIが実行される）
3. `main` にマージ（CDでPagesへデプロイされる）
4. Actionsタブで `CI CD Sample` の結果を確認
5. Repositoryの「Settings > Pages」で公開URLを確認

手動確認したい場合は、Actionsタブから `workflow_dispatch` で実行できます。
