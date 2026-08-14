import { useEffect } from "react";
import { isAdSenseEnabled, monetizationConfig } from "@/config/monetization";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdSlotProps = {
  slot: keyof typeof monetizationConfig.adSlots;
  label?: string;
};

const AD_SCRIPT_ID = "adsense-script";

function loadAdSenseScript(client: string) {
  const existingScript = document.querySelector<HTMLScriptElement>(
    `script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}"]`
  );
  if (document.getElementById(AD_SCRIPT_ID) || existingScript) return;

  const script = document.createElement("script");
  script.id = AD_SCRIPT_ID;
  script.async = true;
  script.crossOrigin = "anonymous";
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(client)}`;
  document.head.appendChild(script);
}

/**
 * AdSense の広告枠。
 * consentReady が false、または広告ID・スロットIDが未設定の場合は何も表示しません。
 * これにより、手動広告枠は同意管理の準備前には広告リクエストを送信しません。
 */
export default function AdSlot({ slot, label = "広告" }: AdSlotProps) {
  const client = monetizationConfig.adsenseClient;
  const slotId = monetizationConfig.adSlots[slot];
  const shouldRender = isAdSenseEnabled && Boolean(slotId);

  useEffect(() => {
    if (!shouldRender) return;

    loadAdSenseScript(client);
    const timer = window.setTimeout(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        // 広告ブロッカー等で広告スクリプトが読み込めない場合も本文表示を妨げない。
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, [client, shouldRender, slotId]);

  if (!shouldRender) return null;

  return (
    <aside className="ad-slot" aria-label={label}>
      <p className="ad-slot__label">{label}</p>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
