import { createFileRoute } from "@tanstack/react-router";
import { Shield, Zap, Globe, Lock, Smartphone, Settings, Send, Bot, Star } from "lucide-react";
import heroShield from "@/assets/hero-shield.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const TG_URL = "https://t.me/";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--gradient-hero)" }}
        />
        <nav className="relative max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg">
              Убежище<span className="text-primary">VPN</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <span>Приватность</span>
            <span className="w-1 h-1 rounded-full bg-primary" />
            <span>Скорость</span>
            <span className="w-1 h-1 rounded-full bg-primary" />
            <span>Свобода</span>
          </div>
        </nav>

        <section className="relative max-w-6xl mx-auto px-6 pt-10 pb-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Убежище<span className="text-primary">VPN</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-semibold">
              Приватный интернет без ограничений
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
              Быстрое подключение через Telegram.<br />
              Без регистрации и лишних действий.
            </p>

            <a
              href={TG_URL}
              className="mt-8 inline-flex flex-col items-center px-8 py-4 rounded-xl text-primary-foreground font-semibold transition-transform hover:scale-[1.02]"
              style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-glow)" }}
            >
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" /> Запустить в Telegram
              </span>
              <span className="text-xs font-normal opacity-80 mt-1">
                Подключение занимает меньше минуты
              </span>
            </a>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-primary" /> Без логов</span>
              <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-primary" /> Стабильное соединение</span>
              <span className="flex items-center gap-2"><Globe className="w-4 h-4 text-primary" /> Доступ к зарубежным сервисам</span>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroShield}
              alt="Защищённый VPN — иллюстрация щита"
              width={1024}
              height={1024}
              className="w-full max-w-md mx-auto rounded-2xl"
              style={{ filter: "drop-shadow(var(--shadow-glow))" }}
            />
          </div>
        </section>
      </header>

      {/* SERVERS */}
      <Section title="Серверы">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { flag: "🇫🇮", name: "Финляндия", desc: "Подходит для стабильного соединения и низкого пинга." },
            { flag: "🇩🇪", name: "Германия", desc: "Оптимальный баланс скорости и надежности." },
            { flag: "🇳🇱", name: "Нидерланды", desc: "Максимальная свобода доступа и обход ограничений." },
          ].map((s) => (
            <div key={s.name} className="p-6 rounded-2xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{s.flag}</span>
                <h3 className="font-semibold text-lg">{s.name}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section title="Как это работает" bare>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {[
            { icon: Send, num: 1, text: "Открываете Telegram" },
            { icon: Bot, num: 2, text: "Запускаете бота" },
            { icon: Lock, num: 3, text: "Получаете доступ к VPN" },
          ].map(({ icon: Icon, num, text }) => (
            <div key={num} className="flex flex-col items-center text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center border border-border"
                style={{ background: "var(--surface-elevated)", boxShadow: "var(--shadow-glow)" }}
              >
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <div className="mt-4 text-2xl font-bold text-primary">{num}</div>
              <p className="mt-1 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-10">
          Без сложной настройки и технических знаний.
        </p>
      </Section>

      {/* PRICING */}
      <Section title="Тарифы">
        <div className="grid md:grid-cols-3 gap-5">
          <PriceCard name="Пробный" desc1="3 дня доступа" desc2="с ограничением по трафику" price="0 ₽" />
          <PriceCard name="Стандарт" desc1="30 дней" desc2="доступ ко всем серверам" price="199 ₽" popular />
          <PriceCard name="Премиум" desc1="90 дней" desc2="приоритетная скорость" price="499 ₽" />
        </div>
      </Section>

      {/* FEATURES */}
      <Section title="Преимущества" bare>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {[
            { icon: Lock, text: "Отсутствие логов" },
            { icon: Zap, text: "Высокая скорость" },
            { icon: Globe, text: "Европейские серверы" },
            { icon: Smartphone, text: "Работа на всех устройствах" },
            { icon: Shield, text: "Обход блокировок" },
            { icon: Settings, text: "Простая настройка" },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="p-5 rounded-xl bg-card border border-border flex flex-col items-center text-center gap-3 transition-transform hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <Icon className="w-7 h-7 text-primary" />
              <span className="text-sm font-medium leading-snug">{text}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* TRUST */}
      <Section bare>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold">Нам доверяют</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Сервисом уже пользуются сотни клиентов.<br />
              Стабильная работа и регулярные обновления.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold ml-2">4.9 / 5</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">по отзывам пользователей</p>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div
          className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-elevated)" }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground text-center md:text-left">
            Готовы получить доступ<br />к свободному интернету?
          </h3>
          <a
            href={TG_URL}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#229ED9] text-white font-semibold hover:brightness-110 transition"
          >
            <Send className="w-5 h-5" /> Открыть Telegram-бота
          </a>
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} УбежищеVPN
        </p>
      </section>
    </div>
  );
}

function Section({ title, children, bare }: { title?: string; children: React.ReactNode; bare?: boolean }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-14">
      {bare ? (
        <>
          {title && <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>}
          {children}
        </>
      ) : (
        <div
          className="rounded-3xl p-8 md:p-10 border border-border"
          style={{ background: "var(--surface)", boxShadow: "var(--shadow-card)" }}
        >
          {title && <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>}
          {children}
        </div>
      )}
    </section>
  );
}

function PriceCard({ name, desc1, desc2, price, popular }: {
  name: string; desc1: string; desc2: string; price: string; popular?: boolean;
}) {
  return (
    <div
      className="relative rounded-2xl border p-6 flex flex-col items-center text-center"
      style={{
        background: popular ? "var(--surface-elevated)" : "var(--surface)",
        borderColor: popular ? "oklch(0.62 0.22 280 / 0.6)" : undefined,
        boxShadow: popular ? "var(--shadow-elevated)" : "var(--shadow-card)",
      }}
    >
      {popular && (
        <div
          className="absolute -top-3 px-4 py-1 rounded-full text-xs font-semibold text-primary-foreground tracking-wider"
          style={{ background: "var(--gradient-primary)" }}
        >
          ПОПУЛЯРНЫЙ
        </div>
      )}
      <h3 className="font-semibold text-lg mt-2">{name}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{desc1}</p>
      <p className="text-sm text-muted-foreground">{desc2}</p>
      <div className="my-5 text-3xl font-bold">{price}</div>
      <a
        href={TG_URL}
        className="w-full px-4 py-3 rounded-xl text-sm font-semibold transition"
        style={
          popular
            ? { background: "var(--gradient-cta)", color: "var(--primary-foreground)" }
            : { background: "var(--surface-elevated)", color: "var(--foreground)", border: "1px solid var(--border)" }
        }
      >
        Подключить через Telegram
      </a>
    </div>
  );
}
