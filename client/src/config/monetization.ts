/**
 * 広告収益化の公開設定
 *
 * このサイトには既存のAdSenseサイト全体スクリプトとads.txtがすでにあります。
 * 手動広告枠を有効にするのは、以下すべてを完了した後にしてください。
 *
 * 1. consentReady: EEA・英国・スイス向けの同意取得を、Google Funding Choices または
 *    Google 認定 CMP で有効にした後に true
 * 2. 各 adSlots: AdSense 管理画面で作成した広告ユニットのスロット ID
 * 3. contact.email: 運営者が実際に受信できる公開用メールアドレス
 *
 * パブリッシャー IDは既存のads.txtと一致させています。別アカウントを使う場合は、
 * HTMLのサイト全体スクリプトおよびads.txtも同じIDへ揃えてください。
 */
export const monetizationConfig = {
  adsenseClient: "ca-pub-4169328955899263",
  consentReady: false,
  adSlots: {
    guideMidpoint: "",
    guideFooter: "",
  },
  contact: {
    /** 運営者が受信できる公開用メールアドレス。例: contact@example.com */
    email: "",
  },
} as const;

export const isAdSenseEnabled =
  monetizationConfig.adsenseClient.startsWith("ca-pub-") &&
  monetizationConfig.consentReady;

export const hasPublicContact = Boolean(monetizationConfig.contact.email);

export const siteBasePath = import.meta.env.BASE_URL;

export const siteUrl =
  "https://araiyamato0820-create.github.io/okame-inko-guide/";

export const siteLinks = {
  home: siteBasePath,
  privacy: `${siteBasePath}privacy.html`,
  editorialPolicy: `${siteBasePath}editorial-policy.html`,
  adsTxt: `${siteBasePath}ads.txt`,
  welcomePreparation: `${siteBasePath}guides/welcome-preparation.html`,
  dailyObservation: `${siteBasePath}guides/daily-observation.html`,
  suppliesSelection: `${siteBasePath}guides/supplies-selection.html`,
} as const;
