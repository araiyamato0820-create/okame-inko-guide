/**
 * DESIGN REMINDER — HINATA NO KANSATSUCHO
 * A warm Japanese natural-editorial guide: ivory paper, moss ink, and Toki Apricot.
 * Use asymmetric observation-notebook composition, fine branch lines, gentle micro-motion.
 */
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Feather,
  HeartPulse,
  House,
  Leaf,
  Menu,
  NotebookPen,
  Sparkles,
  X,
} from "lucide-react";
import AdSlot from "@/components/AdSlot";
import {
  hasPublicContact,
  monetizationConfig,
  siteLinks,
} from "@/config/monetization";

const pageAsset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`;
const assets = {
  hero: pageAsset("okame-hero.webp"),
  dailyCare: pageAsset("okame-daily-care.webp"),
  homeSetup: pageAsset("okame-home-setup.webp"),
  logo: pageAsset("okame-logo.webp"),
};

const guideItems = [
  {
    number: "01",
    icon: House,
    title: "暮らす場所を、先に整える",
    text: "ケージの置き場所や毎日の動線を、鳥を迎える前に一度見渡します。",
    tag: "お迎え準備",
    href: siteLinks.welcomePreparation,
  },
  {
    number: "02",
    icon: HeartPulse,
    title: "いつもの様子を、知っておく",
    text: "食べ方、声、姿勢。小さな変化に気づけるように、ふだんの姿を観察します。",
    tag: "毎日の記録",
    href: siteLinks.dailyObservation,
  },
  {
    number: "03",
    icon: NotebookPen,
    title: "選ぶ理由を、言葉にする",
    text: "用品は見た目だけでなく、使い方と暮らしに合うかを確かめて選びます。",
    tag: "用品の考え方",
    href: siteLinks.suppliesSelection,
  },
];

const checklist = [
  "家の中で落ち着ける場所を見つける",
  "毎日使う道具を、無理なく手に取れる位置に置く",
  "困ったときに相談できる先を事前に調べておく",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a
          className="brand"
          href="#top"
          aria-label="オカメインコ暮らしガイドのトップへ"
        >
          <img src={assets.logo} alt="冠羽のあるオカメインコを表すロゴ" />
          <span>
            <strong>オカメインコ</strong>
            <small>暮らしガイド</small>
          </span>
        </a>

        <nav
          className={`main-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="メインナビゲーション"
        >
          <a href="#begin" onClick={closeMenu}>
            はじめる
          </a>
          <a href="#prepare" onClick={closeMenu}>
            お迎え準備
          </a>
          <a href="#choose" onClick={closeMenu}>
            用品を選ぶ
          </a>
          <a href="#about" onClick={closeMenu}>
            この案内所について
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(current => !current)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy reveal-up">
            <p className="eyebrow">
              <Feather size={15} /> COCKATIEL FIELD NOTES
            </p>
            <h1>
              きょうの機嫌を、
              <br />
              <em>明日の安心へ。</em>
            </h1>
            <p className="hero-lead">
              オカメインコと暮らす時間は、毎日少しずつ表情を変えます。
              <br className="desktop-only" />
              この案内所は、見守るための基本と、整えるためのヒントを集めた観察帖です。
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={siteLinks.dailyObservation}
              >
                飼育の基本を読む <ArrowRight size={18} />
              </a>
              <a className="text-link" href={siteLinks.welcomePreparation}>
                お迎え前の準備 <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="hero-footnote">
              <span className="sun-dot" />
              <p>はじめての一羽にも、ふだんの見直しにも。</p>
            </div>
          </div>

          <div className="hero-visual reveal-up delay-1">
            <div className="hero-arch">
              <img
                src={assets.hero}
                alt="やわらかな日差しの中、止まり木にとまるオカメインコ"
              />
            </div>
            <aside className="observation-note">
              <p className="note-label">OBSERVATION NOTE</p>
              <p>
                冠羽、鳴き声、目線。
                <br />
                「いつも」を知ることから。
              </p>
              <span>01 — ひだまり</span>
            </aside>
            <div className="hero-orbit orbit-one" aria-hidden="true" />
            <div className="hero-orbit orbit-two" aria-hidden="true" />
          </div>
        </section>

        <section className="intro-strip" aria-label="このサイトの使い方">
          <div className="strip-leaf">
            <Leaf size={24} />
          </div>
          <p>
            飼い方に唯一の正解はありません。
            <strong>その子の「ふだん」を観察すること</strong>
            が、暮らしを整える第一歩です。
          </p>
          <a href="#about">
            案内所の考え方 <ArrowRight size={16} />
          </a>
        </section>

        <section id="begin" className="guide-section section-with-spine">
          <div className="section-heading reveal-up">
            <p className="eyebrow">FIRST THREE PAGES</p>
            <h2>
              暮らしの基本を、
              <br />
              <em>3つの頁から。</em>
            </h2>
            <p>
              はじめから完璧にしなくて大丈夫です。住まい、観察、選び方を順番に読み進められるようにしました。
            </p>
          </div>

          <div className="guide-list">
            {guideItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  className={`guide-item reveal-up delay-${index + 1}`}
                  key={item.number}
                >
                  <div className="guide-number">{item.number}</div>
                  <div className="guide-icon">
                    <Icon size={23} />
                  </div>
                  <div className="guide-content">
                    <p className="guide-tag">{item.tag}</p>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                  <a
                    href={item.href}
                    className="round-link"
                    aria-label={`${item.title}を読む`}
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <AdSlot slot="guideMidpoint" label="広告" />

        <section id="prepare" className="prepare-section">
          <div className="prepare-image reveal-up">
            <img
              src={assets.homeSetup}
              alt="日差しの入る室内に整えられた、オカメインコのためのケージ周り"
            />
            <div className="image-caption">
              <span>PREPARE</span>
              <span>02 / 03</span>
            </div>
          </div>
          <div className="prepare-copy reveal-up delay-1">
            <p className="eyebrow">
              <Sparkles size={15} /> BEFORE WELCOME HOME
            </p>
            <h2>
              お迎え前に、
              <br />
              <em>暮らしの場所を整える。</em>
            </h2>
            <p className="section-lead">
              鳥を迎えたあとに慌てないよう、毎日触れる場所と道具を、まずは静かに見直します。
            </p>
            <div className="checklist">
              {checklist.map(item => (
                <p key={item}>
                  <Check size={17} />
                  {item}
                </p>
              ))}
            </div>
            <a
              className="button button-outline"
              href={siteLinks.welcomePreparation}
            >
              準備の考え方を見る <ArrowRight size={18} />
            </a>
            <p className="tiny-note">
              体調や診療に関する判断が必要なときは、鳥を診られる動物病院へご相談ください。
            </p>
          </div>
        </section>

        <section id="choose" className="choose-section section-with-spine">
          <div className="choose-top reveal-up">
            <div>
              <p className="eyebrow">CHOOSE WITH CARE</p>
              <h2>
                用品は、<em>暮らしの続きを選ぶ。</em>
              </h2>
            </div>
            <p>
              道具を増やすことよりも、毎日を無理なく続けられることを大切に。掲載するときは、選定基準と案内の性質を明記します。
            </p>
          </div>

          <div className="choose-layout">
            <article className="policy-card reveal-up delay-1">
              <div className="policy-number">A</div>
              <p className="guide-tag">OUR SELECTION POLICY</p>
              <h3>
                「なぜ選ぶか」を
                <br />
                先に伝えます。
              </h3>
              <p>
                このサイトで用品を案内する際は、用途・使い方・広告または紹介リンクであることを分けて表示します。
              </p>
              <a
                className="text-link button-link"
                href={siteLinks.editorialPolicy}
              >
                掲載ポリシーを確認 <ArrowUpRight size={16} />
              </a>
            </article>
            <article className="daily-card reveal-up delay-2">
              <img
                src={assets.dailyCare}
                alt="木の止まり木で落ち着いて過ごすオカメインコ"
              />
              <div className="daily-overlay">
                <span>DAILY CARE</span>
                <p>
                  毎日に合う道具は、
                  <br />
                  毎日の観察から。
                </p>
              </div>
            </article>
            <aside className="coming-note reveal-up delay-3">
              <p className="note-label">NEXT NOTE</p>
              <h3>
                選び方の
                <br />
                ガイドを準備中です。
              </h3>
              <p>
                ケージ、止まり木、お手入れ用品を、暮らし方別に整理していきます。
              </p>
              <ChevronDown size={20} />
            </aside>
          </div>
        </section>

        <AdSlot slot="guideFooter" label="広告" />

        <section id="about" className="about-section">
          <div className="about-mark">
            <img src={assets.logo} alt="" />
          </div>
          <p className="eyebrow">ABOUT THIS LITTLE GUIDE</p>
          <h2>
            知識を急がず、
            <br />
            <em>一緒に暮らす時間を増やす。</em>
          </h2>
          <p>
            オカメインコ暮らしガイドは、飼育の基本と用品選びの考え方を、暮らしの目線でまとめる個人向けの案内所です。特定の製品を紹介する場合は、その関係性をわかりやすく表示します。
          </p>
          {hasPublicContact ? (
            <a
              className="button button-dark"
              href={`mailto:${monetizationConfig.contact.email}`}
            >
              お問い合わせ <ArrowUpRight size={18} />
            </a>
          ) : (
            <p className="contact-pending">
              お問い合わせ窓口は、広告配信の申請前に公開します。
            </p>
          )}
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand brand-footer" href="#top">
          <img src={assets.logo} alt="" />
          <span>
            <strong>オカメインコ</strong>
            <small>暮らしガイド</small>
          </span>
        </a>
        <nav className="footer-links" aria-label="サイト情報">
          <a href={siteLinks.privacy}>プライバシーポリシー</a>
          <a href={siteLinks.editorialPolicy}>編集・広告掲載ポリシー</a>
        </nav>
        <small>© 2026 オカメインコ暮らしガイド</small>
      </footer>
    </div>
  );
}
