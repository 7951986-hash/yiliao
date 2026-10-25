import { Header } from "./header";
import { Footer, InternationalCostComparison, PaymentMethods, TransparentPricing } from "./home-page";
import { content, type Locale } from "@/lib/site-content";

export function PricingPage({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  return <>
    <Header copy={content[locale]}/>
    <main>
      <TransparentPricing zh={zh} asPageTitle/>
      <InternationalCostComparison zh={zh}/>
      <PaymentMethods zh={zh}/>
    </main>
    <Footer locale={locale}/>
  </>;
}
