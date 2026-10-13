import { NextIntlClientProvider } from "next-intl";

export default function ChineseLayout({ children }: { children: React.ReactNode }) {
  return <NextIntlClientProvider locale="zh"><div lang="zh-CN">{children}</div></NextIntlClientProvider>;
}
