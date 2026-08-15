<template>
    <div>
        <p>いつも汐猫みおのEndpointにアクセスいただき、ありがとうございます。</p>
        <p>この度、3Dモデルの更新を行いました！</p>
        <p>髪型と服装を大幅に変更して、より大人っぽさ感じられる雰囲気になりました。</p>
        <p>今後もよろしくお願いします。</p>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "news-detail", // ★重要：これで上のデフォルト枠（枠組みや戻るボタン）を自動で引っ張ってきます！
    title:
        "【3Dモデル更新】3Dモデル更新のお知らせ！",
    year: "2026",
    date: "07.24",
    sortKey: "20260724",
    category: "Update", // バッジに表示したいテキストをここに書くだけ！
});

useSeoMeta({
    title: "3Dモデル更新のお知らせ / 2026-07-24 | 汐猫みお Official",
});
</script>
